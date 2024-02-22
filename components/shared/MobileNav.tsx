"use client"
import {

    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <header className="header">
        <Link href="/">
            <Image src="/assets/images/logo-text.svg" width={180} height={28} alt="logo" />
        </Link>

        <nav className="flex gap-4">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                                <Sheet>
                <SheetTrigger>
                <Image src="/assets/icons/menu.svg" width={32} height={32} alt="menu" className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="sheet-content sm:w-64">
                   <>
                   <Image src="/assets/images/logo-text.svg" width={180} height={28} alt="logo" />
                   <ul className='header-nav_elements'>
                        {
                            navLinks.map((link)=>{
                                const isActive = link.route === pathname

                                return(
                                    <li className={`p-18 flex whitespace-nowrap text-dark-700 ${isActive && 'gradient-text'} `} key={link.route}>
                                       <Link className='sidebar-link cursor-pointer' href={link.route}>
                                        <Image src={link.icon} alt="logo" width={10} height={10} className={`${isActive && "brightness-200"}`} />
                                        {link.label}
                                       </Link>
                                    </li>
                                )
                            })
                        }
                        </ul>
                   </>
                </SheetContent>
                </Sheet>

            </SignedIn>
            

        </nav>

    </header>
  )
}

export default MobileNav