import React from 'react';

const TopItems = () => {
    return (
        <div className={"mt-[4rem]"}>
            <div className={"flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat"}>
                <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Sản phẩm tập <span className={"text-[#fdc254]"}> nổi bật</span></h2>
                <p className={"font-[400] text-[#172345]"}>Mang đến nhiều sản phẩm khác biệt, không ngừng cải tiến và cập nhật xu hướng làm đẹp mới</p>
            </div>
            <div className={"flex gap-4 py-[4rem]"}>
                <div className={"bg-[url(/19-web-3000.jpg)] bg-no-repeat bg-cover bg-center w-[50vw] h-[50vh]"}></div>
                <div className={"bg-[url(/19-web-3000.jpg)] bg-no-repeat bg-cover bg-center w-[50vw] h-[50vh]"}></div>
            </div>
        </div>
    );
};

export default TopItems;