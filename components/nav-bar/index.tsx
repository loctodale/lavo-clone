import React from 'react';
import Image from "next/image";
import {NavigationItem} from "@/components/nav-bar/nav-item";
import {Search} from "lucide-react";

const NavBar = () => {
    return (
        <div className={"fixed w-full h-[5.5rem] border-[1px] border-gray-200 z-20 bg-white"}>
            <div className={"flex px-[1rem] mx-[14rem] justify-between"}>
                <div className={"logo flex flex-col items-center justify-center"}>
                    <Image src="/image-holder.png" alt="logo-holder" width={50} height={50} />
                </div>
                <NavigationItem />
                <div className={"header-right flex items-center justify-between gap-1"}>
                    <Search size={18} className={"font-bold"}  />
                    <Image width={20} height={20} src={"/flag-viet-nam.png"} alt={"flag-viet-nam"} />
                    <Image width={20} height={20} src={"/flag-uk.png"} alt={"uk"} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;