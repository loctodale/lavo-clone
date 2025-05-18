import React from 'react';
import ProductBrandingSlide from "@/components/about/product-branding/product-branding-slide";

const ProductBranding = () => {
    return (
        // <div className={"py-[4rem] bg-[url(/assets/background/background-about-1.png)] bg-cover bg-no-repeat h-full"}>
            <div className={"pt-[4rem] bg-cover bg-no-repeat h-full"}>
            <div className={"h-full"}>
                <h2 className={"uppercase text-nowrap font-semibold text-[40px] text-center mb-[1rem] text-[#172345]"}>Hệ thống thương hiệu</h2>
                <ProductBrandingSlide />
            </div>
        </div>
    );
};

export default ProductBranding;