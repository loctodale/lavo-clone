import React, { Dispatch, SetStateAction, useState } from 'react';
import { cn } from "@/lib/utils";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { mockImageTrigger } from "@/service/mock.navigation";
import { mockCoverCategory } from "@/service/mock.cover-category";

const MobileNav = ({
                       isSidebarOpen,
                       setIsSidebarOpen,
                   }: {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(prev => (prev === label ? null : label));
        setOpenSubDropdown(null); // close nested submenus when switching
    };

    const toggleSubDropdown = (key: string) => {
        setOpenSubDropdown(prev => (prev === key ? null : key));
    };

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[70vw] bg-white border-l border-gray-200 z-50 transition-transform duration-300",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full",
                    "md:hidden "
                )}
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>

                {/* Menu items */}
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
                                        className="py-2 text-sm font-medium text-[#172345] hover:text-[#fdc254] uppercase"
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
                                {mockCoverCategory.map((cover, index) => (
                                    <div key={index} className="border-b border-gray-100">
                                        {/* Main category button */}
                                        <button
                                            onClick={() => toggleSubDropdown(cover.englishName)}
                                            className="w-full flex justify-between items-center py-2 text-sm font-semibold text-[#172345] hover:text-[#fdc254]"
                                        >
                                            {cover.name}
                                            {openSubDropdown === cover.englishName ? (
                                                <ChevronUp size={14} />
                                            ) : (
                                                <ChevronDown size={14} />
                                            )}
                                        </button>

                                        {/* Subcategories */}
                                        {openSubDropdown === cover.englishName && (
                                            <div className="flex flex-col pl-4 pb-2">
                                                {cover.category.map((sub, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href={`/category?category_name=${sub.englishName}`}
                                                        className="py-1 text-sm font-medium text-[#172345] hover:text-[#fdc254]"
                                                        onClick={() => setIsSidebarOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
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
