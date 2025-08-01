import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"


export function ProductBrandingCard({ title, description, url}: { title: string; description: string[], url: string }) {
    const {t} = useTranslation()
    return (
        <Card className="w-full md:w-[70%] lg:w-[30vw] max-w-md border-none shadow-none py-0">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl lg:text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4">
                    <div className="flex flex-col space-y-2 text-sm md:text-base">
                        {description.map((desc, i) => (
                            <p key={i}>- {t(`about.brand.items.${url}.${i}`)}</p>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full md:w-auto">{t("about.brand.button")}</Button>
            </CardFooter>
        </Card>
    );
}

