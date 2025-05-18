'use client'
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Banner from "@/components/about/banner/banner";
import ProductBranding from "@/components/about/product-branding/product-branding";
import DevelopmentHistory from "@/components/about/development-history";
import CoreValue from "@/components/about/core-value";

function BreadCrumbAbout() {
    return (
        <Breadcrumb className={"w-full p-[0.5rem] text-[1rem] bg-[#f3f3f4]"}>
            <BreadcrumbList className={" px-[1rem] mx-[16rem] text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={"font-bold "}>Giới thiệu</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

const Page = () => {
    return (
        <section className={"min-h-screen pt-[5.5rem]"}>
            <BreadCrumbAbout />
            <Banner />
            <ProductBranding />
            <DevelopmentHistory />
            <CoreValue />
        </section>
    );
};

export default Page;