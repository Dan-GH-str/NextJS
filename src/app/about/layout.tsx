import Link from "next/link";
import cl from "@/app/about/about.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About"
};

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cl.about}>
            <h1>About Us</h1>

            <ul>
                <li><Link href="/about/team">Team</Link></li>
                <li><Link href="/about/contacts">Contacts</Link></li>
            </ul>
            {children}
        </div>
    );
}