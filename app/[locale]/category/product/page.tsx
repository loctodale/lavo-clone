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
import {usePathname, useSearchParams} from "next/navigation";
import { Product } from '@/types/product';
import { mockProducts } from '@/service/mock.product';
import ProductDetail from "@/components/product-detail/product-detail";
import {CarouselRecommend} from "@/components/ui/carousel-recommend";
import {mockEnProducts} from "@/service/mock.en.product";
import {useTranslation} from "react-i18next";
function BreadCrumbProduct({categoryName, brandName, productName}:{categoryName: string, brandName: string, productName: string}) {
    return (
        <Breadcrumb className={"w-full p-2 text-[1rem] bg-[#f3f3f4] z-10"}>
            <BreadcrumbList className={"px-4 sm:px-6 lg:px-20 max-w-screen-xl mx-auto text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/public">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href={`/category?category_name=${categoryName}`}>{mockCategory.filter(x => x.englishName == categoryName)[0].name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400] uppercase"} href={`/category?category_name=${categoryName}&brand=${brandName}`}>{brandName}</BreadcrumbLink>
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
    const [products, setProducts] = React.useState<Product[]>([]);
    // brand=SLIDER&category_name=Shampoo&product_slug=dau-goi-ngan-ngua-chong-rung-toc-slider-anti-hair-loss-shampoo
    const searchParams = useSearchParams()
    const categoryName = searchParams.get("category_name");
    const brandName = searchParams.get("brand");
    const productSlug = searchParams.get("product_slug");
    const pathname = usePathname();
    const {t} = useTranslation();
    useEffect(() => {
        // if (!productSlug)
        //     return;
        // const product = mockProducts.find(x => x.slug == productSlug);
        // if (!product)
        //     return;
        // setProduct(product);
        // const recommendProducts = mockProducts.filter(x => x.category == categoryName);
        // setProducts(recommendProducts);

        if (pathname == "/en/category/product") {
            if (!productSlug)
                return;
            const product = mockEnProducts.find(x => x.slug == productSlug);
            if (!product)
                return;
            setProduct(product);
            const recommendProducts = mockEnProducts.filter(x => x.category == categoryName);
            setProducts(recommendProducts);
        } else {
            if (!productSlug)
                return;
            const product = mockProducts.find(x => x.slug == productSlug);
            if (!product)
                return;
            setProduct(product);
            const recommendProducts = mockProducts.filter(x => x.category == categoryName);
            setProducts(recommendProducts);
        }
    }, [productSlug, categoryName, brandName]);
    if (!categoryName || !brandName || !productSlug)
        return null;
    return product && (
        <section className={"pt-[10vh]"}>
            {/*<div>*/}
            {/*    <BreadCrumbProduct categoryName={categoryName} brandName={brandName} productName={product.name} />*/}
            {/*</div>*/}
            <div className={"py-[4rem] mx-[5vw]"}>
                <ProductDetail product={product} />
            </div>
            {/*<div className={"w-full mb-16"}>*/}
            {/*    <CarouselRecommend products={products} from={"/category"} />*/}
            {/*</div>*/}
            <div className={"mx-[3vw]"}>
                <h3 className="text-xl md:text-2xl font-semibold uppercase leading-snug text-[#172345] mb-4 md:ml-8 text-center md:text-left">
                    {t("product.relative")}
                </h3>
                <div className={"w-full mb-16 ml-2"}>
                    <CarouselRecommend products={products} from={"/category"} />
                </div>
            </div>
        </section>
    );
};

export default Page;