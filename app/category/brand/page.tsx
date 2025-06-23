'use client'
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {mockCategory} from "@/service/mock.category";
import {useSearchParams} from "next/navigation";
import {mockProducts} from "@/service/mock.product";
import {Product} from "@/types/product";
import ProductCard from "@/components/ui/product-card";
function BreadCrumbBrand({categoryName, brandName}:{categoryName: string, brandName: string}) {
    return (
        <Breadcrumb className={"w-full p-2 text-[1rem] bg-[#f3f3f4] z-10"}>
            <BreadcrumbList className={"px-4 sm:px-6 lg:px-20 max-w-screen-xl mx-auto text-[#172345]"}>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-[400]"} href={`/category?category_name=${categoryName}`}>{mockCategory.filter(x => x.englishName == categoryName)[0].name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={"font-bold "}>{brandName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
const Page = () => {
    const [products, setProduct] = React.useState<Product[]>([])

    const searchParams = useSearchParams()
    let categoryName = searchParams.get("category_name");
    let brandName = searchParams.get("brand");
    if (!categoryName || !brandName)
        return null;

    React.useEffect(() => {
        const productList = mockProducts.filter(x => encodeURIComponent(x.brand) == brandName && encodeURIComponent(x.category) == categoryName);
        setProduct(productList);
    }, [categoryName]);
    return (
        <section className={"pt-[10vh]"}>
            <div>
                <BreadCrumbBrand brandName={brandName} categoryName={categoryName} />
            </div>
            <div className={"py-8"}>
                <div className="flex flex-col items-center justify-center pb-10 bg-[url(/line.png)] bg-contain bg-bottom bg-no-repeat text-center mb-16 md:mx-[30vw]">
                    <h2 className="text-[#172345] font-bold text-[24px] sm:text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                        {mockCategory.filter(x => x.englishName == categoryName)[0].name} - <span className={"text-[#fdc254]"}>{brandName}</span>
                    </h2>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 items-center justify-center flex">
                    <div className="grid justify-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard from="/brand/category" key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;