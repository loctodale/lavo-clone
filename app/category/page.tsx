'use client'
import React, {useState} from 'react';
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
function BreadCrumbCategory({name}:{name: string}) {
    return (
        <Breadcrumb className={"w-full p-2 text-[1rem] bg-[#f3f3f4] z-10"}>
            <BreadcrumbList className={"px-4 sm:px-6 lg:px-20 max-w-screen-xl mx-auto text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/">Trang chủ</BreadcrumbLink>
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
    let categoryName = searchParams.get("category_name");

    if (!categoryName)
        return null;

    React.useEffect(() => {
        const productList = mockProducts.filter(x => encodeURIComponent(x.category) == categoryName);
        setProducts(productList)
    }, [categoryName]);

    return products.length > 0 && (
        <section className={"pt-[5.5rem]"}>
            <div>
                <BreadCrumbCategory name={categoryName} />
            </div>

            <div className={"py-8"}>
                <div className="flex flex-col items-center justify-center pb-10 bg-[url(/line.png)] bg-bottom bg-no-repeat text-center mb-10">
                    <h2 className="text-[#172345] font-bold text-[24px] sm:text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                        {mockCategory.filter(x => x.englishName == categoryName)[0].name}
                    </h2>
                </div>
                <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
                    {products.map((product, index) => (
                        <ProductCard from={"/category/brand"} key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;