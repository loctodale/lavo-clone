import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {Product} from "@/types/product";
import {useTranslation} from "react-i18next";

export default function ProductDetail({product}: {product: Product }) {
    const {t} = useTranslation()
    return (
        <div className="grid gap-6 lg:gap-12 max-w-7xl mx-auto px-4 py-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="grid md:grid-cols-5 gap-3 items-start">
                    <div className="flex md:hidden items-start">
                        <div className="grid gap-4">
                            <h1 className="font-bold text-3xl sm:text-3xl">{product.fullName}</h1>
                        </div>
                        {/*<div className="text-4xl font-bold ml-auto">$99</div>*/}
                    </div>
                    <div className="md:col-span-4">
                        <img
                            src={product.image}
                            alt="Product Image"
                            width={600}
                            height={900}
                            className="aspect-[5/6] border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 object-contain"
                        />
                    </div>
                </div>
                <div className="grid  items-start">
                    <form className="grid gap-2 ">
                        <div className="grid">
                            <Label htmlFor="color" className="text-lg font-bold ">
                                {product.name}
                            </Label>
                            <p className={"text-sm text-gray-500"}>
                                {product.fullName}
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="size" className="text-lg font-bold">
                                {t("product.desc")}:
                            </Label>
                            <p className={"font-[400] text-[1rem] text-gray-700"}>
                                {product.description}
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="quantity" className="text-lg font-bold ">
                                {t("product.size")}: <span className={"font-[400] text-[1rem] text-gray-700"}>{product.size} ml</span>
                            </Label>
                        </div>
                        <div className={"grid gap-2"}>
                            <Label className="text-lg font-bold ">{t("product.howToUse")}:</Label>
                            {
                                product.howToUse.map((item, index) => (
                                    <p className={"font-[400] text-[1rem] text-gray-700"} key={index}>- {item}</p>
                                ))
                            }
                        </div>
                        {
                            product.note?.trim() != null && (
                                <div className={"grid gap-2"}>
                                    <Label className={"font-bold text-lg"}>{t("product.note")}: </Label>
                                    <p className={"font-[400] text-[1rem] text-gray-700"}>{product.note}</p>
                                </div>
                            )
                        }
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button onClick={event => {
                                event.preventDefault()
                            }} className={"w-1/2 h-full rounded-3xl font-bold p-[0.5rem] bg-[#474747]  text-[1rem] hover:bg-[#474747] hover:cursor-pointer"}>{t("product.contact")}</Button>
                        </div>
                    </form>
                    {/*<Separator />*/}
                </div>
            </div>
        </div>
    )
}

function ChevronRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function HeartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}


function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}