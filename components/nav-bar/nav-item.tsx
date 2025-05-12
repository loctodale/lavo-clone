import { cn } from "@/lib/utils"
import {Icons} from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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

export function NavigationItem() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuLink className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase"} href={"/"}>Trang chủ</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase"} href={"/"}>Giới thiệu</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"py-10 hover:bg-transparent focus:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase"}>Thương hiệu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 w-[37.5rem] md:w-[43.5rem] lg:w-[50rem] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Icons.logo className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase"}>Sản phẩm</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[37.5rem] gap-3 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase"} href={"/"}>Gentleman</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] uppercase"} href={"/"}>Dịch vụ ODM</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase"}>Tin tức</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[37.5rem] gap-3 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"hover:bg-transparent text-[1rem] font-semibold hover:cursor-pointer text-[#172345] hover:text-[#fdc254] bg-transparent uppercase"}>Kỹ thuật</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[37.5rem] gap-3 p-4 md:w-[43.5rem] md:grid-cols-2 lg:w-[50rem] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"