'use client'
import React, { useState } from 'react';
import Image from "next/image";
import {NavigationItem} from "@/components/nav-bar/nav-item";
import {Search, Menu, X} from "lucide-react";
import {SearchItem} from "@/components/nav-bar/search-item";
import { cn } from "@/lib/utils";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
                    <div className={"logo flex flex-col items-center justify-center"}>
                        <Image src="/image-holder.png" alt="logo-holder" width={50} height={50} />
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
                            className="md:hidden ml-4"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={cn(
                    "fixed inset-0 top-[5.5rem] bg-white border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out w-screen overflow-hidden",
                    isSidebarOpen ? "translate-x-0 " : "translate-x-full "
                )}
            >
                <div className="p-4 h-full ">
                    <NavigationItem />
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[5] md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default NavBar;