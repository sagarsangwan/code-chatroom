"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from '@/context/user-context';
export function Providers({ children }) {
    return (
        // add google provider with clientId from .env.local file 
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <UserProvider>
                    {children}
                </UserProvider>
            </ThemeProvider>

        </GoogleOAuthProvider>


    )
}


