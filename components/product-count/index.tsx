import React from 'react';

const ProductCount = () => {
    return (
        <div className={"py-[4rem] bg-[url(/COUNT-LOGO.png)] bg-no-repeat bg-cover "}>
            <div className={"mx-[16rem] flex justify-between"}>
                <div className={"w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-[2rem] font-semibold"}>40,000</p>
                    <p className={"text-[#fdc254] text-[2.2rem] font-semibold uppercase"}>Salon</p>
                    <p className={"text-white text-[1rem] font-bold"}>Trên toàn quốc</p>
                </div>
                <div className={"w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-[2rem] font-semibold"}>2,000,000,000</p>
                    <p className={"text-[#fdc254] text-[2.2rem] font-semibold uppercase"}>Sản Phẩm</p>
                    <p className={"text-white text-[1rem] font-bold"}>Tiêu Thụ Hàng Tháng</p>
                </div>
                <div className={"w-1/3"}>
                    <p className={"pl-3 text-white border-l-4 border-[#fdc254] text-[2rem] font-semibold"}>10</p>
                    <p className={"text-[#fdc254] text-[2.2rem] font-semibold uppercase"}>Quốc Gia</p>
                    <p className={"text-white text-[1rem] font-bold"}>Việt Nam, Campuchia, Myanmar, Lào, Thái Lan, Malaysia, Philippines, Australia, Pakistan, Chile</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCount;