'use client'
import React, {Suspense, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {Product} from "@/types/product";
import {mockProducts} from "@/service/mock.product";
import ProductCard from "@/components/ui/product-card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {mockCategory} from "@/service/mock.category";
function BreadCrumbCategory({name, brandName}:{name: string, brandName: string}) {
    return (
        <Breadcrumb className={"w-full p-[0.5rem] text-[1rem] bg-[#f3f3f4]"}>
            <BreadcrumbList className={" px-[1rem] mx-[16rem] text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href={`/brand?brand=${brandName}`}>{brandName}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={"font-bold "}>{mockCategory.filter(x => x.englishName == name)[0].name}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
const Page = () => {
    const [products, setProducts] = useState<Product[]>([])

    const searchParams = useSearchParams()
    const categoryName = searchParams.get("category_name");
    const brandName = searchParams.get("brand");
    if (!categoryName || !brandName)
        return null;

    React.useEffect(() => {
        const productList = mockProducts.filter(x => x.category == categoryName && x.brand == brandName);
        setProducts(productList)
    }, [categoryName]);

    return products.length > 0 && (
       <section className={"pt-[5.5rem]"}>
                <div>
                    <BreadCrumbCategory brandName={brandName} name={categoryName} />
                </div>

                <div className={"py-[2rem]"}>
                    <div className="flex flex-col items-center justify-center pb-10 bg-[url(/line.png)] bg-bottom bg-no-repeat text-center mb-16">
                        <h2 className="text-[#172345] font-bold text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                            {mockCategory.filter(x => x.englishName == categoryName)[0].name} - <span className={"text-[#fdc254]"}>{brandName}</span>
                        </h2>
                    </div>
                    <div className={"mx-[16rem] px-[1rem] grid grid-cols-4 gap-8"}>
                        {products.map((product, index) => (
                            <ProductCard from={"/category/brand"} key={index} product={product} />
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Page;