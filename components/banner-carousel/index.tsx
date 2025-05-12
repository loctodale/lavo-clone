import * as React from "react"

import { CustomCard, CardContent } from "@/components/ui/custom-card"
import {
    Carousel,
    CarouselContent, CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel"

export function BannerCarousel() {
    return (
        <Carousel className="w-full h-screen">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <CustomCard>
                                <CardContent className=" flex items-center justify-center p-6 h-[90vh]">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
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
