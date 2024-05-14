"use client";
import React from 'react'
import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
    }
});

export default instance;