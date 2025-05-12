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
import NewVideo from "@/components/new-video";
import ProductCount from "@/components/product-count";
import Branding from "@/components/branding";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-[5.5rem]">
        <BannerCarousel />
        <TopItems />
        <TopCategory />
        <AboutUs />
        <HotNews />
        <NewVideo />
        <ProductCount />
        <Branding />
    </main>
  );
}
