'use client'
import React, { useState } from 'react';
import Image from "next/image";
import {NavigationItem} from "@/components/nav-bar/nav-item";
import {Search, Menu, X} from "lucide-react";
import {SearchItem} from "@/components/nav-bar/search-item";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import MobileNav from "@/components/nav-bar/mobile.nav";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();
    React.useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isSidebarOpen])
    return (
        <>
            <div className={"fixed w-full h-[5.5rem] border-[1px] border-gray-200 z-20 bg-white"}>
                <div className={"flex px-4 md:px-[1rem] mx-auto md:mx-[14rem] justify-between items-center h-full"}>
                    <div onClick={() => {router.push("/")}} className={"logo flex flex-col items-center justify-center hover:cursor-pointer"}>
                        <Image src="/offical/logo.png" alt="logo-holder" className={"max-h-[5.5rem]"} width={100} height={100} />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavigationItem />
                    </div>
                    <div className={"header-right flex items-center justify-between gap-1"}>
                        <SearchItem />
                        <Image width={20} height={20} src={"/flag-viet-nam.png"} alt={"flag-viet-nam"} />
                        <Image width={20} height={20} src={"/flag-uk.png"} alt={"uk"} />
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="block md:hidden ml-4"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile responsive navigation */}
            <MobileNav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </>
    );
};

export default NavBar;