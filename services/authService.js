"use client"
import axios from "axios";
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
let access_token = "";
if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
}
const instance = axios.create({
    baseURL: baseurl,
    headers: {
        Authorization: "Bearer " + access_token
    }
});



export default instance;