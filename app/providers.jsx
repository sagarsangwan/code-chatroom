"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';


const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export function Providers({ children }) {

    return (
        <GoogleOAuthProvider clientId="753404212718-rtspocr012j03g33jgg314gmfo4s3lrr.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    )
}


