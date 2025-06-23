import * as React from "react"

import {
    Carousel,
    CarouselContent, CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Product} from "@/types/product";
import ProductCard from "@/components/ui/product-card";

export function CarouselRecommend({ products, from }: { products: Product[], from: string }) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent className="w-full">
                {products.map((x, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 items-center"
                    >
                        <div className="p-1 flex flex-col items-center">
                            <ProductCard product={x} from={from} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Navigation arrows (always visible on non-mobile) */}
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />

            {/* Dots only visible on mobile */}
            <CarouselDots className="flex sm:hidden justify-center mt-2 top-[60vh]" />
        </Carousel>
    )
}

