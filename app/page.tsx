"use client"

import {Search} from "lucide-react";
import * as React from "react"
import { NavigationItem} from "@/components/nav-bar/nav-item";
import Image from "next/image";
import {BannerCarousel} from "@/components/banner-carousel";
import TopItems from "@/components/top-items";
import TopCategory from "@/components/top-category";
import AboutUs from "@/components/about-us";
import HotNews from "@/components/hot-news";

export default function Home() {
  return (
    <main className="min-h-screen w-full py-[5.5rem]">
        <BannerCarousel />
        <TopItems />
        <TopCategory />
        <AboutUs />
        <HotNews />
    </main>
  );
}
