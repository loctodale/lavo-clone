"use client"

import {Search} from "lucide-react";
import * as React from "react"
import { NavigationItem} from "@/components/nav-bar/nav-item";
import Image from "next/image";
import {BannerCarousel} from "../../components/home/banner-carousel";
import TopItems from "../../components/home/top-items";
import TopCategory from "../../components/home/top-category";
import AboutUs from "../../components/home/about-us";
import HotNews from "../../components/home/hot-news";
import NewVideo from "../../components/home/new-video";
import ProductCount from "../../components/home/product-count";
import Branding from "../../components/home/branding";
import HomeCategory from "@/components/home/home-category";

export default function Home() {
  return (
    <main className="h-full w-full pt-[10vh]">
        <BannerCarousel />
        <HomeCategory />
        <TopItems />
        {/*<TopCategory />*/}
        {/*<AboutUs />*/}
        {/*<HotNews />*/}
        {/*<NewVideo />*/}
        {/*<ProductCount />*/}
        <Branding />
    </main>
  );
}
