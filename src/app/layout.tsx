import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/component/header/page";
import Footer from "@/app/component/footer/Footer";
import IGraduate from "@/icon/IGraduate";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sano Media Việt Nam",
    description: "Generated by create next app",
    icons: "/image/logo1.png",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <div className="main-children">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
