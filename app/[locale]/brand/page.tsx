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
import HorizontalFilters, {FilterState} from "@/components/blocks/category-filters/horizontal-filters";
import {mockCoverCategory} from "@/service/mock.cover-category";
import Image from "next/image";
interface bannerProps {
    name: string;
    imageUrl: string;
    color: string;
}

const bannerList : bannerProps[] = [
    {
        imageUrl: "/assets/hero/zdnb.jpg",
        name: "ZDNB",
        color: "bg-[#74a4c8]"
    },
    {
        imageUrl: "/assets/hero/slider.jpg",
        name: "SLIDER",
        color: "bg-[#b49271]"
    },
    {
        imageUrl: "/assets/hero/karsilk.JPG",
        name: "KARSILK",
        color: "bg-[#512110]"
    },
    {
        imageUrl: "/assets/hero/aurane.png",
        name: "AURANE",
        color: "bg-[#97948c]"
    },
    {
        imageUrl: "/assets/hero/colortour.jpg",
        name: "COLORTOUR",
        color: "bg-white border-[1px] border-gray"
    }
]
const Page = () => {
    const [products, setProduct] = React.useState<Product[]>([])
    const [brandBanner, setBrandBanner] = React.useState<bannerProps>()
    const [filters, setFilters] = React.useState<FilterState>({
      categories: [],
      subCategories: [],
      brands: [],
      sortBy: "featured",
    });
    const searchParams = useSearchParams();
    let brandName = searchParams.get("brand");
    if (!brandName) return null;

    React.useEffect(() => {

        setFilters((prev) => ({
            ...prev,
            // brands: brandName ? [brandName] : prev.brands,
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
        productList = productList.filter(x => x.brand == brandName);
        setProduct(productList);
        setBrandBanner(bannerList.find(x => x.name == brandName))

    }, [brandName, filters]);

    return brandBanner && (
        <section className="pt-[11vh]">
            {/*<BreadCrumbBrand brandName={brandName} />*/}
            <div className="py-4">
                <div className="flex flex-col items-center justify-center pb-6
                 text-center md:mx-[30vw]">
                    <h2 className="text-[#172345] font-bold text-[24px] sm:text-[28px] md:text-[36px] xl:text-[40px] uppercase">
                        {brandName}
                    </h2>
                </div>
                <div className={"w-full px-[5vw] md:px-[15vw]"}>
                    {
                            <div className={`w-full flex justify-center ${brandBanner.color}`}>
                                <Image src={brandBanner?.imageUrl ?? "/image-holder.png"} alt={"zdnb"} width={1000} height={1000} className={"w-[100vw] md:w-[30vw]"} />
                            </div>
                    }
                </div>
                <HorizontalFilters className={"justify-center"} filters={filters} setFilters={setFilters} />

                {/*<HorizontalFilters className={"justify-center"} filters={filters} setFilters={setFilters} />*/}

                <div className="max-w-screen mx-[0vw] md:mx-[15vw] items-center justify-center flex mt-4">
                    <div className="grid justify-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard from="/brand" key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;