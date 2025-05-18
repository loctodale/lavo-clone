import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Product} from "@/types/product";
import {usePathname, useRouter} from "next/navigation";

export default function ProductCard({product, from}: {product: Product, from: string}) {
    const router = useRouter()
    const path = usePathname()
    return (
        <Card className="w-full max-w-xs rounded-xl border width hover:border-[1px] hover:border-[#fdc254] hover: cursor-pointer hover:bg-gray-200 transition-all duration-200">
            <div className="grid gap-4 p-4 ">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <img
                        src={product.image}
                        alt="Product image"
                        width="400"
                        height="500"
                        className="aspect-[4/5] object-cover  w-full"
                    />
                </div>
                <div className="grid">
                    <h3 className="text-center font-semibold text-sm md:text-base text-[#172345] text-nowrap truncate ">{product.name}</h3>
                </div>
                <div className={"flex justify-between w-full border-[1px] border-[#474747]"}>
                    <Button className={"w-1/2 h-full rounded-none font-bold p-[1rem] bg-[#474747] text-[#fdc254] text-[1rem] hover:bg-[#474747] hover:cursor-pointer"}>Liên hệ</Button>
                    <Button onClick={() => {
                        router.push(`${from}/product?brand=${product.brand}&category_name=${product.category}&product_slug=${product.slug}`)
                    }}   className={"w-1/2 h-full rounded-none font-bold p-[1rem] bg-white text-[#172345] text-[1rem] hover:bg-transparent hover:cursor-pointer"}>Chi tiết</Button>
                </div>
            </div>
        </Card>
    )
}