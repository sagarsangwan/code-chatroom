"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';


const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export function Providers({ children }, googleClientId = { googleClientId }) {

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            {children}
        </GoogleOAuthProvider>
    )
}


