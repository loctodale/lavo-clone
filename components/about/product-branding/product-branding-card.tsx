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


export function ProductBrandingCard({ title, descroption }: { title: string; descroption: string[] }) {
    return (
        <Card className="w-full md:w-[70%] lg:w-[30vw] max-w-md">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl lg:text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full gap-4">
                    <div className="flex flex-col space-y-2 text-sm md:text-base">
                        {descroption.map((desc, i) => (
                            <p key={i}>- {desc}</p>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full md:w-auto">Xem chi tiết</Button>
            </CardFooter>
        </Card>
    );
}

