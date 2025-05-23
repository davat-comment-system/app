import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import * as rootConfig from "@/config/root.config";
import {Providers} from "@/app/providers";
import GradientBackground from "@/components/GradientBackground";
import {UserSwitch} from "@/components/UserSwitch";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: rootConfig.title,
};


type RootLayoutPropsType = Readonly<{
    children: React.ReactNode;
}>

export default function RootLayout({children}: RootLayoutPropsType) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen selection:bg-secondary selection:text-white`}
            >
                <Providers>
                    <GradientBackground />
                    <main className="h-full">
                        {children}
                    </main>
                    <UserSwitch/>
                </Providers>
            </body>
        </html>
    );
}
