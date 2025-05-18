import * as React from "react"

import { CustomCard, CardContent } from "@/components/ui/custom-card"
import {
    Carousel,
    CarouselContent, CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const carouselItem : string[] = ["/assets/carousel/aurane.png", "/assets/carousel/colortour.png", "/assets/carousel/karsilk.jpg", "/assets/carousel/slider.png", "/assets/carousel/zdnb.png"]
export function BannerCarousel() {
    return (
        <Carousel plugins={[
            Autoplay({
                delay: 5000
            })
        ]} className="w-full h-screen">
            <CarouselContent>
                {carouselItem.map((item, i) => (
                    <CarouselItem key={i}>
                        <div className="">
                            <CustomCard className={"p-0"}>
                                <CardContent className=" flex items-center justify-center h-[90vh] p-0">
                                    {/*<div className={`w-full h-full bg-contain bg-no-repeat bg-[url(${item})]`}></div>*/}
                                    {/*<div className={"w-full h-full bg-[url(/assets/carousel/aurane.png)]"}></div>*/}
                                    <img src={item} className="w-full h-full object-contain" />
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
