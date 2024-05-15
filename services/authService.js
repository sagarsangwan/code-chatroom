
import React from 'react'
import axios from "axios";
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
console.log(baseurl, "baseurl from authservice")
const instance = axios.create({
    baseURL: baseurl,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
    }
});

export default instance;