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
import HorizontalFilters, {FilterState} from "@/components/blocks/category-filters/horizontal-filters";
import {mockCoverCategory} from "@/service/mock.cover-category";
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
    const [products, setProduct] = React.useState<Product[]>([])
    const [filters, setFilters] = React.useState<FilterState>({
        categories: [],
        subCategories: [],
        brands: [],
        sortBy: "featured",
    });
    const searchParams = useSearchParams();
    let categoryName = searchParams.get("category_name");
    let brandName = searchParams.get("brand");
    let searchKey = searchParams.get("search");
    let categories = searchParams.get("categories");
    React.useEffect(() => {
        const subCategoryReadableName = mockCategory.find(x => x.englishName == categoryName)?.name
        let categoryReadableName = mockCoverCategory.find(
            x => x.category.some(cat => cat.englishName === categoryName)
        )?.name;
        if (categories) {
            categoryReadableName = mockCoverCategory.find(x => x.englishName == categories)?.name
        }

        setFilters((prev) => ({
            ...prev,
            categories: categoryReadableName ? [categoryReadableName] : prev.categories,
            subCategories: subCategoryReadableName ? [subCategoryReadableName] : prev.subCategories,
            brands: brandName ? [brandName] : prev.brands,
        }));
    }, [searchParams]);
    React.useEffect(() => {
        let productList : Product []= mockProducts
        if (filters.categories.length > 0) {
            const listCategory = mockCoverCategory
                .filter(x => filters.categories.includes(x.name, 0))
                .map(x => x.category.map(x => x.englishName))
                .flat();
            productList = productList.filter(x => listCategory.includes(x.category, 0));
        }
        if (filters.subCategories.length > 0) {
            const listSubCategories = mockCategory.filter(x => filters.subCategories.includes(x.name, 0)).map(x => x.englishName);
            productList = productList.filter(x => listSubCategories.includes(x.category, 0));
        }
        if (filters.brands.length > 0) {
            productList = productList.filter(x => filters.brands.includes(x.brand, 0));
        }
        if (searchKey?.trim()) {
            const normalizedSearch = searchKey.trim().toLowerCase();
            productList = productList.filter(x =>
                x.name.toLowerCase().includes(normalizedSearch)
            );
        }
        setProduct(productList);
    }, [brandName, filters]);

    console.log(products)
    console.log(filters)
    return (
        <section className="pt-[11vh]">
            {/*<BreadCrumbBrand brandName={brandName} />*/}
            <div className="py-4">
                <div className="flex flex-col items-center justify-center pb-6
                {/*bg-[url(/line.png)] */}
                bg-contain bg-bottom bg-no-repeat text-center md:mx-[30vw]">
                    <h2 className="text-[#172345] font-bold text-[24px] sm:text-[28px] md:text-[36px] xl:text-[40px] uppercase">
                        Sản phẩm
                    </h2>

                </div>
                <HorizontalFilters className={"justify-center"} filters={filters} setFilters={setFilters} />

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 items-center justify-center flex">
                    <div className="grid justify-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard from="/category" key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;