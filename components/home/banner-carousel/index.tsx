import * as React from "react"

import { CustomCard, CardContent } from "@/components/ui/custom-card"
import {
    Carousel,
    CarouselContent, CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface CarouselItem{
    img: string
    url: string
}


const carouselItem : CarouselItem[] = [{
    img: "/assets/carousel/aurane.png",
    url: `/brand?brand=AURANE`
    },
    {
        img: "/assets/carousel/colortour.png",
        url: `/brand?brand=COLORTOUR`
    },
    {
        img: "/assets/carousel/karsilk.jpg",
        url: `/brand?brand=KARSILK`
    },
    {
        img:  "/assets/carousel/slider.png",
        url: `/brand?brand=SLIDER`
    },
    {
        img: "/assets/carousel/zdnb.png",
        url: `/brand?brand=ZDNB`
    }
    ]
export function BannerCarousel() {
    return (
        <Carousel plugins={[
            Autoplay({
                delay: 5000
            })
        ]} className="w-full h-full">
            <CarouselContent>
                {carouselItem.map((item, i) => (
                    <CarouselItem key={i}>
                        <div onClick={() => {
                            window.location.href = item.url
                        }} className="hover:cursor-pointer">
                            <CustomCard className={"p-0"}>
                                <CardContent className=" flex items-center justify-center h-[95vh] p-0">
                                    {/*<div className={`w-full h-full bg-contain bg-no-repeat bg-[url(${item})]`}></div>*/}
                                    {/*<div className={"w-full h-full bg-[url(/assets/carousel/aurane.png)]"}></div>*/}
                                    <img src={item.img} className="w-full h-full object-contain" />
                                </CardContent>
                            </CustomCard>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDots />
        </Carousel>
    )
}
