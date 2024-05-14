"use client";
import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';

export default function Googlelogin() {

    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const drfClientId = process.env.NEXT_PUBLIC_DRF_CLIENT_ID;
    const drfClientSecret = process.env.NEXT_PUBLIC_DRF_CLIENT_SECRET;
    const baseURL = "http://127.0.0.1:8000";
    async function handleGoogleLogin(credentialResponse) {
        const backend = "google-oauth2";
        const grant_type = "convert_token";
        const dateToSend = {
            token: credentialResponse.access_token,
            backend: backend,
            grant_type: grant_type,
            client_id: drfClientId,
            client_secret: drfClientSecret,
        };
        const newStringData = (JSON.stringify(dateToSend));
        const response = await fetch(`${baseURL}/auth/convert-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: newStringData,
        });
        const dataFromApi = await response.json();
        localStorage.setItem("access_token", dataFromApi.access_token);
        localStorage.setItem("refresh_token", dataFromApi.refresh_token);
        console.log(dataFromApi.access_token)
    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => handleGoogleLogin(tokenResponse),

    });



    return (
        <Button onClick={() => login()}>Sign in with Google 🚀</Button>
    );
}
