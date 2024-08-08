'use client'
import cl from "@/components/navbar/Navbar.module.css"
import TypeNavLink from "@/types/navLink.types"
import Link from "next/link"
import { usePathname } from "next/navigation"

type TypeProps = {
    navLinks: TypeNavLink[]
}

const Navbar = ({ navLinks }: TypeProps) => {
    const pathname = usePathname()

    return (
        <nav className={cl.nav}>
            <ul className={cl.nav__list}>
                {navLinks.map(({ title, href }) => {
                    const isActive = pathname.includes(href) && href !== "/" || pathname === href
                    
                    return (
                        <li 
                            className={cl.nav__item} 
                            key={title}
                        >
                            <Link 
                                className={cl.nav__link + (isActive ? " " + cl.nav__link_active : "")} 
                                href={href}
                            >
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar