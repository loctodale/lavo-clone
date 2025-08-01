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
import {mockCoverCategory} from "@/service/mock.cover-category";
import {useTranslation} from "react-i18next";

function formatKebabToSentence(text: string) {
    if (!text) return "";
    const words = text.split("-");
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        })
        .join(" ");
}

export function NavigationItem() {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <NavigationMenu onValueChange={onNavChange} className="w-full">
            <NavigationMenuList className="relative flex flex-col md:flex-row md:justify-center gap-6! md:gap-0 my-[0.7vh]">
                <NavigationMenuItem className={"hover:bg-black transition-all duration-100 h-[8.5vh] text-center flex flex-col justify-center items-center rounded-md"}>
                    <NavigationMenuLink className={"hover:bg-transparent text-[1.2vw] h-full font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase flex flex-col justify-center py-1.5 text-nowrap text-center md:min-w-[6.5vw] "} href={"/"}>{t("nav.home")}</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className={"h-[8.5vh] hover:bg-black rounded-md"}>
                    <NavigationMenuLink className={"hover:bg-transparent text-[1.2vw] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase flex flex-col justify-center h-full py-1.5 text-nowrap md:min-w-[6.5vw] text-center"} href={"/about"}>{t("nav.about")}</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className={"h-[8.5vh] hover:bg-black rounded-md"}>
                    <NavigationMenuTrigger className={"submenu-trigger py-1.5 md:py-[4.2vh] hover:bg-transparent focus:bg-transparent text-[1.2vw] font-semibold hover:cursor-pointer text-[#172345] text-nowrap hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto md:min-w-[6.5vw]"}>{t("nav.brand")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2">
                        <ul className=" grid gap-2 p-4 w-[70vw]  lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3 flex justify-center">
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
                                                                <CardContent className="flex  items-center justify-center p-6">
                                                                    <Image src={item.img} alt={item.url} width={100} height={100} />
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
                            <div className={"flex items-center w-full h-full "}>
                                <div className={"grid grid-cols-2 gap-4 pt-4 w-full h-full "}>
                                    {
                                        mockImageTrigger.map((item, i) => (
                                            <ListItem key={i} href={`/brand?brand=${item.url}`} className={"uppercase w-full hover:bg-black hover:text-yellow-400 align-middle  pt-4"} title={item.url}>
                                                {/*<span className={"normal-case"}>{item.description}</span>*/}
                                            </ListItem>
                                        ))
                                    }
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="h-[8.5vh] hover:bg-black rounded-md">
                    <NavigationMenuTrigger className="submenu-trigger py-1.5 md:py-[4.2vh] hover:bg-transparent text-[1.2vw] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto text-nowrap md:min-w-[6.5vw]">
                        {t("nav.product")}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="absolute z-50">
                        <ul className="grid w-[68vw] grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white  rounded-lg">
                            {mockCoverCategory.map((cover, i) => (
                                <li key={i} className="flex flex-col">
                                  <span className="text-sm font-bold text-[#172345] uppercase mb-2 text-nowrap">
                                    {/*{cover.name}*/}
                                      {t(`nav.products.items.${cover.englishName}.name`)}
                                  </span>
                                    <ul className="space-y-1">
                                        {cover.category.map((cat, j) => (
                                            <li key={j}>
                                                <a
                                                    href={`/category?category_name=${cat.englishName}`}
                                                    className="text-sm text-gray-600 hover:text-[#fdc254] hover:bg-black text-nowrap p-2 rounded-md"
                                                >
                                                        {formatKebabToSentence(t(`nav.products.items.${cover.englishName}.${j+1}`))}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem className={"h-[8.5vh] hover:bg-black rounded-md"}>
                    <NavigationMenuLink className={"text-center md:min-w-[6.5vw] h-full flex flex-col justify-center hover:bg-transparent text-nowrap text-[1.2vw] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase py-1.5"} href={"/video"}>Video</NavigationMenuLink>
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