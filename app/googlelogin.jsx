"use client";

import { useGoogleLogin } from '@react-oauth/google';

export default function Googlelogin() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <button onClick={() => login()}>
            Sign in with Google 🚀
        </button>
    );
}