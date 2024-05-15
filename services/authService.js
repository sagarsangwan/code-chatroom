"use client"
import axios from "axios";
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
const instance = axios.create({
    baseURL: baseurl,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
    }
});

export default instance;