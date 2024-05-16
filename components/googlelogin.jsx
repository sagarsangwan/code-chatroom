"use client";
import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';

export default function Googlelogin() {

    const drfClientId = process.env.NEXT_PUBLIC_DRF_CLIENT_ID;
    const drfClientSecret = process.env.NEXT_PUBLIC_DRF_CLIENT_SECRET;
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
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
        // errror handling
        if (response.status === 200) {
            const accessToken = dataFromApi.access_token;
            const refreshToken = dataFromApi.refresh_token;
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
            window.location.href = "/";
        }
        else {
            console.log("error");
            console.log(dataFromApi);
            // redirect to homepage and add a toast notification using shadcn toast on homepage

        }







    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => handleGoogleLogin(tokenResponse),

    });



    return (
        <Button onClick={() => login()}>Sign in with Google 🚀</Button>
    );
}
