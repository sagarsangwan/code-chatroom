"use client";
import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';

export default function Googlelogin() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <Button onClick={() => login()}>Sign in with Google 🚀</Button>
    );
}