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
// export baseurl;
// export async function getrooms() {
//     const res = await instance.get('/api/coderoom/');
//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return await res.data;
// }