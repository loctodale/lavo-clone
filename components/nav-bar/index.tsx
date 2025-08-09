'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { NavigationItem } from "@/components/nav-bar/nav-item";
import { Search, Menu } from "lucide-react";
import { SearchItem } from "@/components/nav-bar/search-item";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import MobileNav from "@/components/nav-bar/mobile.nav";
import LanguageChanger from "@/components/LanguageChanger";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isSidebarOpen]);

    return (
        <>
            <div className={cn(
                "fixed w-full h-[10vh] border-b border-gray-200 z-20 bg-white transition-transform duration-300",
                showNav ? "translate-y-0" : "-translate-y-full"
            )}>
                <div className="flex px-4 md:px-[1rem] ml-[5vw] md:ml-[8vw] xl:ml-[12vw] justify-between items-center mr-[4vw]">
                    <div onClick={() => router.push("/")} className="md:absolute logo flex flex-col items-center justify-center h-[10vh] overflow-hidden hover:cursor-pointer">
                        <Image src="/assets/logo.png" alt="logo-holder" width={500} height={500} className={"md:max-w-[10vw] max-w-[10rem]"} />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block md:ml-[17vw] ml-80">
                        <NavigationItem />
                    </div>

                    <div className="header-right flex items-center justify-between gap-1">
                        <SearchItem  />
                        <button
                            className="block md:hidden ml-4"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                    <div className={"hidden md:block"}>
                        <LanguageChanger />
                    </div>
                </div>
            </div>

            {/* Mobile responsive navigation */}
            <MobileNav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </>
    );
};

export default NavBar;
