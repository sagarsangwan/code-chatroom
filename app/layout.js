import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/ui/navbar";
// const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster"
export const metadata = {
  title: "HOME | Code ChatRoom",
  description: "Code ChatRoom is a chat application for developers to chat and share code snippets.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
