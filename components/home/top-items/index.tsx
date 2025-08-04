import React from 'react';
import Image from "next/image";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const banners = [
    {
        src: "/assets/banner/karsilk.JPG",
        alt: "KARSILK",
        brand: "KARSILK",
    },
    {
        src: "/assets/best-seller/best-seller-1.png",
        alt: "SLIDER",
        brand: "SLIDER",
    },
    {
        src: "/assets/banner/aurane.png",
        alt: "Aurane",
        brand: "AURANE",
    },
    {
        src: "/assets/banner/zdnb.jpg",
        alt: "ZDNB",
        brand: "ZDNB",
    },
    {
        src: "/assets/banner/39.png",
        alt: "Colortour",
        brand: "COLORTOUR",
    },
];

const TopItems = () => {
    return (
        <div className="px-2">
            <div className="block md:hidden space-y-4">
                <div className={"flex w-full"}>
                    <Image
                        onClick={() => (window.location.href = "/brand?brand=KARSILK")}
                        src="/assets/banner/karsilk.JPG"
                        alt="KARSILK"
                        className="w-1/2 h-full object-contain cursor-pointer"
                        width={1000}
                        height={1000}
                    />
                   <div className={"flex flex-col"}>
                       <Image
                           onClick={() => (window.location.href = "/brand?brand=ZDNB")}
                           src="/assets/banner/zdnb.jpg"
                           alt="ZDNB"
                           className="w-full h-full object-contain cursor-pointer"
                           width={1000}
                           height={1000}
                       />
                       <Image
                           onClick={() => (window.location.href = "/brand?brand=Colortour")}
                           src="/assets/banner/39.png"
                           alt="Colortour"
                           className="w-[30vw] h-full object-contain cursor-pointer"
                           width={1000}
                           height={1000}
                       />
                   </div>
                </div>
                <Image
                    onClick={() => (window.location.href = "/brand?brand=SLIDER")}
                    src="/assets/best-seller/best-seller-1.png"
                    alt="SLIDER"
                    className="w-full h-[200px] object-contain cursor-pointer"
                    width={1000}
                    height={1000}
                />
                <Image
                    onClick={() => (window.location.href = "/brand?brand=aurane")}
                    src="/assets/banner/aurane.png"
                    alt="Aurane"
                    className="w-full h-[200px] object-contain cursor-pointer"
                    width={1000}
                    height={1000}
                />

            </div>

            {/* 🖥️ Desktop: Resizable Layout */}
            <div className="hidden md:block">
                <div className="flex flex-col items-center h-full">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="max-w-screen rounded-lg border"
                    >
                        <ResizablePanel defaultSize={30}>
                            <div className="flex h-[80vh] items-center justify-center">
                                <Image
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = "/brand?brand=KARSILK";
                                    }}
                                    src="/assets/banner/karsilk.JPG"
                                    className="w-full h-full object-cover cursor-pointer"
                                    alt="KARSILK"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={50}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center">
                                        <Image
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = "/brand?brand=SLIDER";
                                            }}
                                            src="/assets/best-seller/best-seller-1.png"
                                            className="w-full h-full object-cover cursor-pointer"
                                            alt="SLIDER"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center">
                                        <Image
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = "/brand?brand=aurane";
                                            }}
                                            src="/assets/banner/aurane.png"
                                            className="w-full h-full object-cover cursor-pointer"
                                            alt="Aurane"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={25}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center">
                                        <Image
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = "/brand?brand=ZDNB";
                                            }}
                                            src="/assets/banner/zdnb.jpg"
                                            className="w-full h-full object-cover cursor-pointer"
                                            alt="ZDNB"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-full items-center justify-center">
                                        <Image
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = "/brand?brand=Colortour";
                                            }}
                                            src="/assets/banner/39.png"
                                            className="w-full h-full object-cover cursor-pointer"
                                            alt="Colortour"
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
};

export default TopItems;