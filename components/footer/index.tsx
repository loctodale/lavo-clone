import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Phone, Youtube} from "lucide-react";

const Footer = () => {
    return (
       <div className="py-16 bg-black text-white text-base">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between">
      {/* Location */}
      <div className="flex flex-col gap-2 w-full lg:w-1/4">
        <Image className="mb-4" width={150} height={150} src="/branding-logo.png" alt="logo" />
        <h3 className="font-bold">Địa chỉ: <span className="font-normal">11 Nguyễn Sơn, P. Phú Thạnh, <br /> Q. Tân Phú, TP.HCM</span></h3>
        <h3 className="font-bold">Điện thoại: <span className="font-normal">028 3973 5599 – 028 3973 6699</span></h3>
        <h3 className="font-bold">HOTLINE: <span className="font-normal">1900 77 99 26</span></h3>
        <h3 className="font-bold">Fax: <span className="font-normal">028 3973 5959</span></h3>
        <h3 className="font-bold">Email: <span className="font-normal">lavo@lavo.com.vn</span></h3>
      </div>
      {/* Register Notification */}
      <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
        <h3 className="uppercase font-bold text-[#fdc254] mb-4">
          Đăng ký nhận khuyến mãi
        </h3>
        <div className="w-full flex flex-col gap-4">
          <Input className="bg-white" placeholder="Họ và Tên liên hệ" />
          <Input className="bg-white" placeholder="Số điện thoại" />
          <Input className="bg-white" placeholder="E-mail" />
          <Button className="w-full">Đăng ký</Button>
        </div>
      </div>
      {/* Social */}
      <div className="w-full lg:w-1/4">
        <h3 className="uppercase font-bold text-[#fdc254] mt-8 lg:mt-0">
          Mạng xã hội
        </h3>
        <div className="flex gap-2 py-6">
          <Facebook size={40} />
          <Instagram size={40} />
          <Youtube size={40} />
          <div>
            <Image width={40} height={40} src="/zalo-icon-outline.png" alt="zalo-icon" />
          </div>
          <div>
            <Image width={40} height={40} src="/tiktok-icon-outline.png" alt="tiktok-icon" />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Chăm sóc khách hàng</h3>
          <Phone size={40} />
        </div>
      </div>
      {/* Links */}
      <div className="w-full lg:w-1/4">
        <h3 className="uppercase font-bold text-[#fdc254] mt-8 mb-4 lg:mt-0">
          Liên kết
        </h3>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold">Trang chủ</h3>
          <h3 className="font-bold">Giới thiệu</h3>
          <h3 className="font-bold">Hoạt động</h3>
          <h3 className="font-bold">Kinh nghiệm hay</h3>
          <h3 className="font-bold">Xu hướng tóc</h3>
          <h3 className="font-bold">Kỹ thuật</h3>
          <h3 className="font-bold">Video sản phẩm</h3>
          <h3 className="font-bold">Liên hệ</h3>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Footer;