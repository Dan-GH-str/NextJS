import Link from "next/link"
import cl from "./Header.module.css"
import TypeNavLink from "@/types/navLink.types"
import Navbar from "../navbar/Navbar"

const navLinks: TypeNavLink[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "About",
        href: "/about"
    }
]

const Header = () => {
    return ( 
        <header className={cl.header}>
            <Navbar navLinks={navLinks} />
        </header>
    )
}

export default Header