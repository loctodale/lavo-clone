import React from 'react';

const ProductCount = () => {
    return (
        <div className={"py-[4rem] bg-[url(/COUNT-LOGO.png)] bg-no-repeat bg-cover "}>
            <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between flex-col md:flex-row gap-y-4 md:gap-0"}>
                <div className={"w-full md:w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-xl md:text-2xl font-semibold"}>40,000</p>
                    <p className={"text-[#fdc254] text-xl md:text-2xl font-semibold uppercase"}>Salon</p>
                    <p className={"text-white text-sm md:text-base font-bold"}>Trên toàn quốc</p>
                </div>
                <div className={"w-full md:w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-xl md:text-2xl font-semibold"}>2,000,000,000</p>
                    <p className={"text-[#fdc254] text-xl md:text-2xl font-semibold uppercase"}>Sản Phẩm</p>
                    <p className={"text-white text-sm md:text-base font-bold"}>Tiêu Thụ Hàng Tháng</p>
                </div>
                <div className={"w-full md:w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-xl md:text-2xl font-semibold"}>10</p>
                    <p className={"text-[#fdc254] text-xl md:text-2xl font-semibold uppercase"}>Quốc Gia</p>
                    <p className={"text-white text-sm md:text-base font-bold"}>Việt Nam, Campuchia, Myanmar, Lào, Thái Lan, Malaysia, Philippines, Australia, Pakistan, Chile</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCount;