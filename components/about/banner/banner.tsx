import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full bg-[#dde4e4]">
            <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 py-12">
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/assets/thongtin.jpg"
                            alt="about"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pt-6 lg:pt-20">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase leading-snug text-[#172345] mb-4">
                            Về chúng tôi
                        </h3>
                        <p className="text-base md:text-lg font-normal">
                            Công Ty TNHH TM CAO ĐẠT được thành lập vào ngày 05/09/2012, với hơn 10 năm kinh nghiệm, là đơn vị nhập
                            khẩu và phân phối độc quyền các thương hiệu mỹ phẩm tóc chuyên nghiệp từ châu Âu và châu Á tại Việt Nam.
                            Chúng tôi không chỉ đơn thuần cung cấp sản phẩm, mà còn mang đến giải pháp chăm sóc tóc toàn diện, giúp
                            các salon, nhà tạo mẫu tóc và người tiêu dùng có trải nghiệm tốt nhất.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
