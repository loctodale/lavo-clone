import React from 'react';

const TopItems = () => {
    return (
        <div className="mt-[4rem]">
            <div className="flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat text-center px-4">
                <h2 className="text-[#172345] font-bold text-[32px] md:text-[40px] uppercase mb-[1rem]">
                    Sản phẩm tập <span className="text-[#fdc254]">nổi bật</span>
                </h2>
                <p className="font-[400] text-[#172345] max-w-2xl">
                    Mang đến nhiều sản phẩm khác biệt, không ngừng cải tiến và cập nhật xu hướng làm đẹp mới
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 py-[4rem]">
                <div className="bg-[url(/assets/best-seller/best-seller-1.png)] bg-no-repeat bg-cover  w-full md:w-1/2 h-[25vh] md:h-[50vh]"></div>
                <div className="bg-[url(/assets/best-seller/best-seller-2.png)] bg-no-repeat bg-cover  w-full md:w-1/2 h-[25vh] md:h-[50vh]"></div>
            </div>
        </div>

    );
};

export default TopItems;