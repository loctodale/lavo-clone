import { cn } from "@/lib/utils"
import {Icons} from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import React from "react";


function onNavChange() {
    setTimeout(() => {
        // Select elements with the state "open"
        const triggers = document.querySelectorAll(
            '.submenu-trigger[data-state="open"]'
        );
        const dropdowns = document.querySelectorAll(
            '.nav-viewport[data-state="open"]'
        );

        // Check if both triggers and dropdowns are present
        if (!triggers.length || !dropdowns.length) return;

        // Simplify the calculation by extracting it into a variable
        const { offsetLeft, offsetWidth } = triggers[0] as HTMLElement;
        const menuWidth = dropdowns[0].children[0].clientWidth;
        const menuLeftPosition = offsetLeft + offsetWidth / 2 - menuWidth / 2;

        // Apply the calculated position
        document.documentElement.style.setProperty(
            "--menu-left-position",
            `${menuLeftPosition}px`
        );
    });
}
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {NavImgTrigger} from "@/types/nav-img-trigger";
import {useRouter} from "next/navigation";
import {mockCategory} from "@/service/mock.category";
import {mockImageTrigger} from "@/service/mock.navigation";



export function NavigationItem() {
    const router = useRouter();
    return (
        <NavigationMenu onValueChange={onNavChange} className="w-full">
            <NavigationMenuList className="relative flex flex-col md:flex-row md:justify-center gap-6! md:gap-0">
                <NavigationMenuItem className={"hover:bg-black transition-all duration-100 h-[4.5rem] text-center flex flex-col justify-center items-center"}>
                    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] h-full font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase flex flex-col justify-center py-1.5 text-nowrap text-center md:min-w-32 "} href={"/"}>Trang chủ</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className={"h-[4.5rem] hover:bg-black"}>
                    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase flex flex-col justify-center h-full py-1.5 text-nowrap md:min-w-32 text-center"} href={"/about"}>Giới thiệu</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className={"h-[4.5rem] hover:bg-black"}>
                    <NavigationMenuTrigger className={"mt-1 submenu-trigger py-1.5 md:py-8 hover:bg-transparent focus:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] text-nowrap hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto md:min-w-32"}>Thương hiệu</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2">
                        <ul className=" grid gap-2 p-4 w-[37.5rem] md:w-[43.5rem] lg:w-[50rem] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Carousel plugins={[Autoplay({
                                        delay: 2000
                                    })]} className="w-full max-w-xs">
                                        <CarouselContent>
                                            {
                                                mockImageTrigger.map((item, i) => (
                                                    <CarouselItem className={"hover:cursor-pointer"} onClick={() => {
                                                        router.push(`/brand?brand=${item.url}`)
                                                    }} key={i}>
                                                        <div className="p-1">
                                                            <Card>
                                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                    <Image src={item.img} alt={item.url} width={200} height={200} />
                                                                </CardContent>
                                                            </Card>
                                                        </div>
                                                    </CarouselItem>
                                                ))
                                            }
                                        </CarouselContent>
                                        {/*<CarouselDots />*/}
                                    </Carousel>
                                </NavigationMenuLink>
                            </li>
                            <div className={"flex flex-col gap-4 pt-4"}>
                                {
                                    mockImageTrigger.map((item, i) => (
                                        <ListItem key={i} href={`/brand?brand=${item.url}`} className={"uppercase"} title={item.url}>
                                            <span className={"normal-case"}>{item.description}</span>
                                        </ListItem>
                                    ))
                                }
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className={"h-[4.5rem] hover:bg-black"}>
                    <NavigationMenuTrigger className={"submenu-trigger py-1.5 md:py-9 hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto text-nowrap md:min-w-32"}>Sản phẩm</NavigationMenuTrigger>
                    <NavigationMenuContent className={"absolute"}>
                        <ul className="grid w-[37.5rem] gap-2 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem]">

                            {
                                mockCategory.map((item, i) => (
                                    <ListItem
                                        key={i}
                                        title={item.name}
                                        href={`/category?category_name=${item.englishName}`}
                                    >
                                        {item.englishName}
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem className={"h-[4.5rem] hover:bg-black"}>
                    <NavigationMenuLink className={"text-center md:min-w-32 h-full flex flex-col justify-center hover:bg-transparent text-nowrap text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase py-1.5"} href={"/video"}>Video</NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"