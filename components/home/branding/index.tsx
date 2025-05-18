import React from 'react';
import Image from "next/image";
import {Carousel, CarouselContent, CarouselDots, CarouselItem} from '@/components/ui/carousel';

const branding: string[] = ["/assets/branding/2.png","/assets/branding/3.png","/assets/branding/4.png","/assets/branding/5.png",]
const Branding = () => {
    return (
        <div className={"py-[4rem]"}>
            {/* Grid cho desktop, ẩn trên mobile */}
            <div className={"hidden md:grid mx-[16rem] px-[1rem] gap-4 grid-cols-4"}>
                {branding.map((item, index) => (
                    <Image
                        key={index}
                        className={"scale-100 hover:scale-110 ease-in duration-200"}
                        width={320}
                        height={450}
                        src={item}
                        alt={"image-holder"}
                    />
                ))}
            </div>

            {/* Carousel cho mobile, ẩn trên desktop */}
            <div className="md:hidden px-4">
                <Carousel>
                    <CarouselContent>
                        {branding.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="flex items-center justify-center p-2">
                                    <Image
                                        className={"scale-100 hover:scale-110 ease-in duration-200"}
                                        width={320}
                                        height={450}
                                        src={item}
                                        alt={"image-holder"}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselDots />
                </Carousel>
            </div>
        </div>
    );
};

export default Branding;