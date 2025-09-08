import {Category} from "@/types/category";
import {CoverCategory} from "@/types/cover-category";
import {mockCategory} from "@/service/mock.category";

export const mockCoverCategory : CoverCategory[] = [
    {
        name: "Sản phẩm chăm tóc",
        englishName: "hair-care",
        category: [
            {
                name: "Dầu gội",
                englishName: "shampoo",
            },
            {
                name: "Dầu xả",
                englishName: "conditioner",
            },
            {
                name: "Tinh dầu",
                englishName: "hair-oil-and-serum"
            }
        ],
        image: "/assets/cover-category/1.jpeg"
    },
    {
        name: "Sản phẩm tạo kiểu",
        englishName: "gel-wax",
        category: [
            {
                name: "Sản phẩm tạo kiểu tóc",
                englishName: "styling-products"
            },
        ],
        image: "/assets/cover-category/2.jpeg"
    },
    {
        name: "Sản phẩm chuyên nghiệp",
        englishName: "profression-product",
        category: [
            {
                name: "Phục hồi tóc hư tổn",
                englishName: "hair-mask-and-treatment",
            },
            {
                name: "Sản phẩm uốn & duỗi",
                englishName: "perm-and-straightening-products"
            },
            {
                name: "Sản phẩm nhuộm và tẩy",
                englishName: "hair-coloring-and-bleaching"
            }
        ],
        image: "/assets/cover-category/3.jpeg"
    }
]