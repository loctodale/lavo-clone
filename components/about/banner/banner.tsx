import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <div className={"w-full bg-[#dde4e4]"}>
            <div className={"px-[1rem] mx-[16rem]"}>
                <div className={"py-[3rem] flex justify-center gap-32"}>
                    <div className={"h-full"}>
                        <Image src={"/assets/thongtin.jpg"} alt={"about"} width={800} height={500} />
                    </div>
                    <div className={"w-1/3 pt-20"}>
                        <h3 className={"font-semibold uppercase leading-[2.5rem] text-[2.5rem] w-full text-[#172345] text-nowrap mb-[1rem]"}>Về chúng tôi</h3>
                        <p className={"w-full py-[0.5rem] font-[400]"}>
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