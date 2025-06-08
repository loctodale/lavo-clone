import React from 'react';
import Image from "next/image";
import {Carousel, CarouselContent, CarouselDots, CarouselItem} from '@/components/ui/carousel';
interface BrandItem{
    img: string
    url: string
}
const branding : BrandItem[] = [
    {
        img: "/assets/branding/4.png",
        url: `/brand?brand=aurane`
    },
    // {
    //     img: "/assets/carousel/colortour.png",
    //     url: `/brand?brand=COLORTOUR`
    // },
    {
        img: "/assets/branding/3.png",
        url: `/brand?brand=KARSILK`
    },
    {
        img:  "/assets/branding/5.png",
        url: `/brand?brand=SLIDER`
    },
    {
        img: "/assets/branding/2.png",
        url: `/brand?brand=ZDNB`
    }
]
const Branding = () => {
    return (
        <div className={"py-[4rem]"}>
            {/* Grid cho desktop, ẩn trên mobile */}
            <div className={"hidden md:grid mx-[16rem] px-[1rem] gap-4 grid-cols-4"}>
                {branding.map((item, index) => (
                    <Image
                        onClick={() => {
                             window.location.href = item.url
                        }}
                        key={index}
                        className={"scale-100 hover:scale-110 ease-in duration-200 hover:cursor-pointer"}
                        width={320}
                        height={450}
                        src={item.img}
                        alt={"image-holder"}
                    />
                ))}
            </div>

            {/* Carousel cho mobile, ẩn trên desktop */}
            <div className="md:hidden px-4">
                <Carousel>
                    <CarouselContent>
                        {branding.map((item, index) => (
                            <CarouselItem className={"hover:cursor-pointer"} onClick={() => {
                                window.location.href = item.url;
                            }} key={index}>
                                <div className="flex items-center justify-center p-2">
                                    <Image
                                        className={"scale-100 hover:scale-110 ease-in duration-200"}
                                        width={320}
                                        height={450}
                                        src={item.img}
                                        alt={"image-holder"}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselDots className={"top-[60vh] md:top-[85vh]"} />
                </Carousel>
            </div>
        </div>
    );
};

export default Branding;