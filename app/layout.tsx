import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Accessiblity best practice: allow zooming
};

export const metadata: Metadata = {
    title: {
        default: "Just Fucking Cancel — Find and cancel forgotten subscriptions",
        template: "%s | Just Fucking Cancel"
    },
    description: "Stop paying for subscriptions you forgot about. Upload your bank statement. AI finds the waste. You save money. Local-first and privacy-focused.",
    keywords: ["subscriptions", "finance", "audit", "money", "cancel", "ai", "claude", "privacy"],
    authors: [{ name: "Rohun Vora" }],
    creator: "Rohun Vora",
    metadataBase: new URL("https://just-fucking-cancel.vercel.app"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://just-fucking-cancel.vercel.app",
        title: "Just Fucking Cancel",
        description: "Stop paying for subscriptions you forgot about. AI finds the waste. You save money.",
        siteName: "Just Fucking Cancel",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Just Fucking Cancel Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Just Fucking Cancel",
        description: "Stop paying for subscriptions you forgot about. AI finds the waste. You save money.",
        images: ["/og-image.png"],
        creator: "@rohunvora",
    },
    icons: {
        icon: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    geistSans.variable,
                    geistMono.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
