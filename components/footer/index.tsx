import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Phone, Youtube} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
       <div className="py-16 bg-black text-white text-base">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between">
      {/* Location */}
      <div className="flex flex-col gap-2 w-full lg:w-1/4">
        <div className={"relative w-full h-full"}>
          <Image className={"relative md:absolute md:bottom-[-2rem] left-[-2rem]"} width={200} height={50} src="/assets/logo.png" alt="logo" />
        </div>
        <h3 className="font-bold">Địa chỉ: <span className="font-normal">34 ĐÀO DUY ANH, PHƯỜNG 9, <br /> QUẬN PHÚ NHUẬN, TPHCM</span></h3>
        <h3 className="font-bold">Điện thoại: <span className="font-normal">(02)838424372</span></h3>
        <h3 className="font-bold">HOTLINE: <span className="font-normal">0919797414</span></h3>
        <h3 className="font-bold">Fax: <span className="font-normal">028-38424372</span></h3>
        <h3 className="font-bold">Email: <span className="font-normal">CAODAT.COSMETICS@GMAIL.COM</span></h3>
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
          <Link href={"/"} className="font-bold">Trang chủ</Link>
          <Link href={"/about"} className="font-bold">Giới thiệu</Link>
          <Link href={"/video"} className="font-bold">Video sản phẩm</Link>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Footer;