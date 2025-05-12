'use client'
import React, { useState } from 'react';
import Image from "next/image";
import {NavigationItem} from "@/components/nav-bar/nav-item";
import {Search, Menu, X} from "lucide-react";
import {SearchItem} from "@/components/nav-bar/search-item";
import { cn } from "@/lib/utils";

const mobileNavLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/" },
  { label: "Thương hiệu", href: "/" },
  { label: "Sản phẩm", href: "/" },
  { label: "Gentleman", href: "/" },
  { label: "Dịch vụ ODM", href: "/" },
  { label: "Tin tức", href: "/" },
  { label: "Kỹ thuật", href: "/" },
];

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
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[280px] bg-white border-l border-gray-200 z-50 transition-transform duration-300",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full",
                    "md:hidden"
                )}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>
                <div className="mt-16 flex flex-col gap-4 px-6">
                    {mobileNavLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254] transition-colors"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default NavBar;