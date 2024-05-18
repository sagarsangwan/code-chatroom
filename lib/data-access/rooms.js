// import { useEffect, } from "react"
// "use client"
export async function getrooms() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseURL}/api/coderoom/`, {
        next: {
            revalidate: 0,
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return await res.json();
}
