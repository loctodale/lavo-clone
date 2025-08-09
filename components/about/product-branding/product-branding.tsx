import React from 'react';
import ProductBrandingSlide from "@/components/about/product-branding/product-branding-slide";
import MobileCarousel from "@/components/about/product-branding/mobile-carousel";

const ProductBranding = () => {
    return (
        <div className="pt-4 bg-cover bg-no-repeat">
            <div>
                <div className={"hidden md:block"}>
                    <ProductBrandingSlide />
                </div>
                <MobileCarousel />
            </div>
        </div>
    );
};


export default ProductBranding;