import React, { Dispatch, SetStateAction, useState } from 'react';
import { cn } from "@/lib/utils";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { mockCategory } from "@/service/mock.category";
import { mockImageTrigger } from "@/service/mock.navigation";

const MobileNav = ({
                       isSidebarOpen,
                       setIsSidebarOpen
                   }: {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(prev => (prev === label ? null : label));
    };

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[200px] bg-white border-l border-gray-200 z-50 transition-transform duration-300",
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
                    <a
                        href="/"
                        className="text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254]"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        Trang chủ
                    </a>

                    <a
                        href="/about"
                        className="text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254]"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        Giới thiệu
                    </a>

                    {/* Dropdown: Thương hiệu */}
                    <div>
                        <button
                            onClick={() => toggleDropdown("thuonghieu")}
                            className="w-full flex justify-between items-center text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254]"
                        >
                            Thương hiệu
                            {openDropdown === "thuonghieu" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {openDropdown === "thuonghieu" && (
                            <div className="flex flex-col pl-4">
                                {mockImageTrigger.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`/brand?brand=${item.url}`}
                                        className="py-2 text-sm  font-medium text-[#172345] hover:text-[#fdc254] uppercase"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        {item.url}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Dropdown: Sản phẩm */}
                    <div>
                        <button
                            onClick={() => toggleDropdown("sanpham")}
                            className="w-full flex justify-between items-center text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254]"
                        >
                            Sản phẩm
                            {openDropdown === "sanpham" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {openDropdown === "sanpham" && (
                            <div className="flex flex-col pl-4">
                                {mockCategory.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`/category?category_name=${item.englishName}`}
                                        className="py-2 text-sm normal-case font-medium text-[#172345] hover:text-[#fdc254]"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a
                        href="/video"
                        className="text-[#172345] font-semibold uppercase py-2 border-b border-gray-100 hover:text-[#fdc254]"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        Video
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-black/10 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default MobileNav;
