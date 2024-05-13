"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';

export function Providers({ children }) {
    const googleclienid = process.env.REACT_APP_GOOGLE_CLIENT_ID
    { console.log(googleclienid) }
    return (
        // add google provider with clientId from .env.local file 
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            {console.log(googleclienid)}
            {children}
        </GoogleOAuthProvider>


    )
}


