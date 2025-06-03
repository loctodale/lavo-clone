"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollSnaps: number[]
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

function Carousel({
                    orientation = "horizontal",
                    opts,
                    setApi,
                    plugins,
                    className,
                    children,
                    ...props
                  }: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
  )

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    setScrollSnaps(api.scrollSnapList())

    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList())
      onSelect(api)
    })
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
      <CarouselContext.Provider
          value={{
            carouselRef,
            api,
            opts,
            orientation,
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
            selectedIndex,
            scrollSnaps,
          }}
      >
        <div
            className={cn("relative", className)}
            role="region"
            aria-roledescription="carousel"
            data-slot="carousel"
            {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()
  return (
      <div
          ref={carouselRef}
          className="overflow-hidden relative"
          data-slot="carousel-content"
      >
        <div
            className={cn(
                "flex",
                orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                className
            )}
            {...props}
        />
      </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()
  return (
      <div
          role="group"
          aria-roledescription="slide"
          data-slot="carousel-item"
          className={cn(
              "min-w-0 shrink-0 grow-0 basis-full",
              orientation === "horizontal" ? "pl-4" : "pt-4",
              className
          )}
          {...props}
      />
  )
}

function CarouselDots({ className }: { className?: string }) {
  const { scrollSnaps, selectedIndex, api } = useCarousel()

  if (!scrollSnaps.length) return null

  return (
      <div className={cn("flex justify-center gap-2 mt-4 absolute top-[85vh] left-1/2 -translate-x-1/2", className)}>
        {scrollSnaps.map((_, index) => (
            <button
                key={index}
                className={cn(
                    "h-4 w-4 rounded-full transition-colors duration-300",
                    index === selectedIndex ? "bg-[#fdc254]" : "bg-gray-300"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  useCarousel,
}

