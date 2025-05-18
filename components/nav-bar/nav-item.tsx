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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]
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


const mockImageTrigger : NavImgTrigger[] = [
    {
        img: "/assets/branding/2.png",
        url: "ZDNB",
        description: "Chất lượng chuẩn Nhật, chăm sóc tóc toàn diện và an toàn."
    },
    {
        img: "/assets/branding/3.png",
        url: "KARSILK",
        description: "Dòng mỹ phẩm tóc cao cấp, mang đến trải nghiệm đẳng cấp cho salon."
    },
    {
        img: "/assets/branding/4.png",
        url: "aurane",
        description: "Sự tinh tế trong từng sản phẩm, phù hợp cho những salon chuyên nghiệp."
    },
    {
        img: "/assets/branding/5.png",
        url: "SLIDER",
        description: "Công nghệ chăm sóc tóc tiên tiến từ châu Âu, mang đến hiệu quả vượt trội."
    },
    {
        img: "/image-holder.png",
        url: "COLORTOUR",
        description: "Thương hiệu màu nhuộm chuyên nghiệp, sắc nét và bền lâu."
    }
]
export function NavigationItem() {
    const router = useRouter();
    return (
        <NavigationMenu className="w-full">
            <NavigationMenuList className="relative flex flex-col md:flex-row md:justify-center gap-2 md:gap-0">
                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase block py-1.5"} href={"/"}>Trang chủ</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase block py-1.5"} href={"/about"}>Giới thiệu</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"py-1.5 md:py-10 hover:bg-transparent focus:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto"}>Thương hiệu</NavigationMenuTrigger>
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

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"py-1.5 md:py-10 hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto"}>Sản phẩm</NavigationMenuTrigger>
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

                {/*<NavigationMenuItem>*/}
                {/*    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase block py-1.5"} href={"/"}>Gentleman</NavigationMenuLink>*/}
                {/*</NavigationMenuItem>*/}

                {/*<NavigationMenuItem>*/}
                {/*    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase block py-1.5"} href={"/"}>Dịch vụ ODM</NavigationMenuLink>*/}
                {/*</NavigationMenuItem>*/}

                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase block py-1.5"} href={"/"}>Kỹ thuật</NavigationMenuLink>
                </NavigationMenuItem>

                {/*<NavigationMenuItem>*/}
                {/*    <NavigationMenuTrigger className={"py-1.5 md:py-10 hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto"}>Tin tức</NavigationMenuTrigger>*/}
                {/*    <NavigationMenuContent>*/}
                {/*        <ul className="grid w-[37.5rem] gap-2 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem]">*/}
                {/*            {components.map((component) => (*/}
                {/*                <ListItem*/}
                {/*                    key={component.title}*/}
                {/*                    title={component.title}*/}
                {/*                    href={component.href}*/}
                {/*                >*/}
                {/*                    {component.description}*/}
                {/*                </ListItem>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    </NavigationMenuContent>*/}
                {/*</NavigationMenuItem>*/}

                {/*<NavigationMenuItem>*/}
                {/*    <NavigationMenuTrigger className={"py-1.5 md:py-10 hover:bg-transparent text-[0.9rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase w-full md:w-auto"}>Kỹ thuật</NavigationMenuTrigger>*/}
                {/*    <NavigationMenuContent>*/}
                {/*        <ul className="grid w-[37.5rem] gap-2 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem]">*/}
                {/*            {components.map((component) => (*/}
                {/*                <ListItem*/}
                {/*                    key={component.title}*/}
                {/*                    title={component.title}*/}
                {/*                    href={component.href}*/}
                {/*                >*/}
                {/*                    {component.description}*/}
                {/*                </ListItem>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    </NavigationMenuContent>*/}
                {/*</NavigationMenuItem>*/}
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