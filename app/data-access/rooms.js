// import { useEffect, } from "react"
// "use client"
export async function getrooms() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseURL}/api/coderoom/`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return await res.json();
}
// `${baseurl}/api/coderoom/



// export async function getrooms() {
//     const res = await fetch('http://127.0.0.1:8000/api/coderoom/');
//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return await res.json();
// }
