"use client"
import { Button } from "./ui/button";
import instance from "@/services/authService";
export function Logout() {
    const drfClientId = process.env.NEXT_PUBLIC_DRF_CLIENT_ID;
    const dateToSend = {
        token: localStorage.getItem("access_token"),
        client_id: drfClientId,
    };
    try {
        instance.post('auth/invalidate-sessions', dateToSend)
    }
    catch (error) {
        console.log(error)
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    window.location.href = '/'


}