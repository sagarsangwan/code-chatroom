"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import instance from '../services/authService';
import React from 'react';
const drfClientId = process.env.NEXT_PUBLIC_DRF_CLIENT_ID;

const drfClientSecret = process.env.NEXT_PUBLIC_DRF_CLIENT_SECRET;


const baseURL = "http://127.0.0.1:8000";
async function refreshUserToken() {
    const grant_type = "refresh_token";
    const dateToSend = {
        grant_type: grant_type,
        client_id: drfClientId,
        client_secret: drfClientSecret,
        refresh_token: localStorage.getItem("refresh_token")
    };
    console.log(dateToSend)
    const newStringData = (JSON.stringify(dateToSend));
    try {
        const response = await fetch(`${baseURL}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: newStringData,
        });
        const dataFromApi = await response.json();
        console.log(dataFromApi);
        localStorage.setItem("access_token", dataFromApi.access_token);
        localStorage.setItem("refresh_token", dataFromApi.refresh_token);
        window.location.href = "/"

    } catch (error) {
        window.alert("Something went wrong, please try again")
    }

}



const UserContext = createContext();

export function UserProvider({ children }) {
    const emptyData = {
        "id": "",
        "username": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "user_profile": {
            "id": "",
            "picture": "",
            "user": ""
        }
    }
    const [User, setUser] = useState(emptyData);


    useEffect(() => {
        const cAccessToken = (localStorage.getItem('access_token'))
        if (cAccessToken === null || cAccessToken === "undefined") {
            setUser(emptyData);
            return;
        }

        instance.get("api/users/current_user/")
            .then((response) => {
                setUser(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    refreshUserToken();
                }
            })


    }, [])

    return (
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}