// components/HorizontalScroll.tsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {ProductBrandingCard} from "@/components/about/product-branding/product-branding-card";
import {useTranslation} from "react-i18next";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);
interface ProductBranding {
    imgUrl: string;
    title: string;
    description: string[];
}
const itemsProductBranding : ProductBranding[] = [
  {
    imgUrl: "/assets/branding/2.png",
    description: ["Chất lượng chuẩn Nhật, chăm sóc tóc toàn diện và an toàn.",
      "Dưỡng tóc toàn diện: Sản phẩm như dầu gội, dầu xả, thuốc nhuộm và bọt tạo kiểu của ZDNB được thiết kế để cung cấp dưỡng chất cần thiết, giúp tóc mềm mượt, bóng khỏe và giảm hư tổn.",
    "An toàn cho tóc và da đầu: Công thức sản phẩm thường chứa hàm lượng amoniac thấp hoặc không có, giảm thiểu nguy cơ kích ứng da đầu và hư tổn tóc."],
    title: "ZDNB (Nhật Bản) – Chất lượng chuẩn Nhật, chăm sóc tóc toàn diện và an toàn."
  },
  {
    imgUrl: "/assets/branding/3.png",
    description: ["Thành phần chất lượng cao: Các sản phẩm của KARSILK chứa tinh chất keratin siêu mịn, giúp bổ sung keratin tự nhiên cho tóc, hàn gắn cấu trúc tóc và phục hồi độ đàn hồi.",
    "Khả năng kháng nhiệt: Sản phẩm có khả năng bảo vệ tóc khỏi tác động của nhiệt độ cao từ máy sấy, máy duỗi, giúp tóc không bị hư tổn thêm.",
    ],
    title: "KARSILK (Ý) – Dòng mỹ phẩm tóc cao cấp, mang đến trải nghiệm đẳng cấp cho salon."
  },
  {
    imgUrl: "/assets/branding/4.png",
    description: ["Nguồn gốc Pháp, nơi nổi tiếng với truyền thống làm đẹp và mỹ phẩm chất lượng cao", "Chuyên biệt về các dòng sản phẩm dành cho salon tóc chuyên nghiệp", "Kết hợp giữa khoa học hiện đại và thành phần tự nhiên", "Thiết kế sang trọng, tinh tế phản ánh đẳng cấp của thương hiệu", "Được nhiều salon cao cấp và stylist chuyên nghiệp tin dùng"],
    title: "Aurane (Pháp) – Sự tinh tế trong từng sản phẩm, phù hợp cho những salon chuyên nghiệp."
  },
  {
    imgUrl: "/assets/branding/5.png",
    description: ["Xuất xứ từ Ý - một quốc gia nổi tiếng với truyền thống và đổi mới trong lĩnh vực làm đẹp", "Áp dụng công nghệ nghiên cứu và phát triển hiện đại từ châu Âu", "Tập trung vào hiệu quả điều trị và chăm sóc chuyên sâu cho tóc","Công thức độc quyền kết hợp giữa khoa học và thành phần tự nhiên", "Phù hợp với các salon chuyên nghiệp và các stylist hàng đầu"],
    title: "Slider (Ý) – Công nghệ chăm sóc tóc tiên tiến từ châu Âu, mang đến hiệu quả vượt trội."
  }
]

const ProductBrandingSlide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const {t} = useTranslation();
  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    const slides = slider.children;
    const totalSlides = slides.length;
    const slideWidth = window.innerWidth;

    const totalScroll = slideWidth * totalSlides;

    gsap.to(slider, {
      x: () => `-${totalScroll - slideWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
      <div ref={containerRef} className="w-full overflow-hidden relative h-screen">
        <h2 className="uppercase font-semibold text-2xl sm:text-3xl md:text-4xl text-center mt-6 m-4 text-[#172345]">
          {t("about.brand.name")}
        </h2>
        <div
            ref={sliderRef}
            className=" mb-4 h-screen gap-40 hidden md:flex"
            style={{ width: `${(itemsProductBranding.length ) * 100}vw` }}
        >

          {itemsProductBranding.map((item, i) => (
              <div
                  key={i}
                  className="w-screen h-[80vh] flex flex-col md:flex-row items-center justify-center gap-6 px-4 border-gray-200 border-1 shadow-sm mx-1"
              >
                <img
                    src={item.imgUrl}
                    alt={`Slide ${i}`}
                    className="w-full md:w-1/4 h-[25vh] md:h-[60vh] object-contain"
                />
                <div className="w-[98vw] md:w-1/2 flex items-center justify-center h-auto md:h-[60vh]">
                  <ProductBrandingCard
                      url={item.imgUrl}
                      title={t(`about.brand.items.${item.imgUrl}.title`)}
                      description={item.description}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ProductBrandingSlide;
