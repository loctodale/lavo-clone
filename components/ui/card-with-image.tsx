/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jvOgkyh3xyN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function CardWithImage({imageUrl, title, date, status}:{imageUrl:string, title:string, date:Date, status:string}) {
    return (
        <div className="w-full max-w-md mx-auto my-4 text-[#172345]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
                <img
                    src={imageUrl}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-full h-64 object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-[1rem] font-bold truncate w-full">{title}</h3>
                    <div className="mt-10 flex items-center justify-between ">
                        <div>{date.toLocaleDateString("en-GB")}</div>
                        <div >{status}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}