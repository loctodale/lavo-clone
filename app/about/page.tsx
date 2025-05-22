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
        <Breadcrumb className="w-full p-2 text-base bg-[#f3f3f4]">
            <BreadcrumbList className="mx-auto px-4 md:px-8 lg:px-16 max-w-screen-xl text-[#172345]">
                <BreadcrumbItem>
                    <BreadcrumbLink className="font-normal" href="/">
                        Trang chủ
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold">
                        Giới thiệu
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
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