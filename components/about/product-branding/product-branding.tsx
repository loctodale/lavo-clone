import React from 'react';
import ProductBrandingSlide from "@/components/about/product-branding/product-branding-slide";

const ProductBranding = () => {
    return (
        <div className="pt-16 bg-cover bg-no-repeat">
            <div>
                <h2 className="uppercase font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-4 text-[#172345]">
                    Hệ thống thương hiệu
                </h2>
                <ProductBrandingSlide />
            </div>
        </div>
    );
};


export default ProductBranding;