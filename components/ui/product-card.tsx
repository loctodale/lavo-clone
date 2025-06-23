import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Product} from "@/types/product";
import {usePathname, useRouter} from "next/navigation";

export default function ProductCard({product, from}: {product: Product, from: string}) {
    const router = useRouter()
    const path = usePathname()
    return (
        <Card className="group w-full max-w-xs rounded-xl border width hover:cursor-pointer hover:shadow-xl transition-all duration-200">
            <div className="grid gap-4 p-4 ">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl ">
                    <div className="group aspect-[4/5] w-full overflow-hidden rounded-xl">
                        <img
                            src={product.image}
                            alt="Product image"
                            width="400"
                            height="500"
                            className="aspect-[4/5] object-cover w-full transition-transform duration-300 group-hover:scale-[1.2]"
                        />
                    </div>
                </div>
                <div className="grid">
                    <h3 className="text-center font-semibold text-sm md:text-base text-[#172345] text-nowrap truncate ">{product.name}</h3>
                </div>
                <div className={"flex justify-between w-full"}>
                    {/*<Button className={"w-1/2 h-full rounded-none font-bold p-[1rem] bg-[#474747] text-[#fdc254] text-[1rem] hover:bg-[#474747] hover:cursor-pointer"}>Liên hệ</Button>*/}
                    <Button onClick={() => {
                        router.push(`${from}/product?brand=${product.brand}&category_name=${product.category}&product_slug=${product.slug}`)
                    }}   className={"w-full h-full font-bold p-[0.5rem] text-white text-[1rem] hover:cursor-pointer bg-black opacity-85 rounded-3xl"}>Chi tiết</Button>
                </div>
            </div>
        </Card>
    )
}