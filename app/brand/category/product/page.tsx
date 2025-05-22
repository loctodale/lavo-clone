'use client'
import React, {useEffect} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {mockCategory} from "@/service/mock.category";
import {useSearchParams} from "next/navigation";
import { Product } from '@/types/product';
import { mockProducts } from '@/service/mock.product';
import ProductDetail from "@/components/product-detail/product-detail";
function BreadCrumbProduct({categoryName, brandName, productName}:{categoryName: string, brandName: string, productName: string}) {
    return (
        <Breadcrumb className={"w-full p-2 text-[1rem] bg-[#f3f3f4] z-10"}>
            <BreadcrumbList className={"px-4 sm:px-6 lg:px-20 max-w-screen-xl mx-auto text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href={`/brand?brand=${brandName}`}>{brandName}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400] uppercase"} href={`/brand/category?category_name=${categoryName}&brand=${brandName}`}>{mockCategory.filter(x => x.englishName == categoryName)[0].name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage className={"font-bold "}>{productName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
const Page = () => {
    const [product, setProduct] = React.useState<Product | null>(null);
    // brand=SLIDER&category_name=Shampoo&product_slug=dau-goi-ngan-ngua-chong-rung-toc-slider-anti-hair-loss-shampoo
    const searchParams = useSearchParams()
    const categoryName = searchParams.get("category_name");
    const brandName = searchParams.get("brand");
    const productSlug = searchParams.get("product_slug");

    useEffect(() => {
        if (!productSlug)
            return;
        const product = mockProducts.find(x => x.slug == productSlug);
        if (!product)
            return;
        setProduct(product);
    }, [productSlug, categoryName, brandName]);
    if (!categoryName || !brandName || !productSlug)
        return null;
    return product && (
        <section className={"pt-[5.5rem]"}>
            <div>
                <BreadCrumbProduct categoryName={categoryName} brandName={brandName} productName={product.name} />
            </div>
            <div className={"py-[4rem]"}>
                <ProductDetail product={product} />
            </div>
        </section>
    );
};

export default Page;