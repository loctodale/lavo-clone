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


export function ProductBrandingCard({title, descroption} : {title: string; descroption: string[]}) {
    return (
        <Card className="w-[30vw]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            {descroption.map((desc, i) => (
                                <p key={i}>- {desc}</p>
                            ))}
                        </div>
                    </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Xem chi tiết</Button>
            </CardFooter>
        </Card>
    )
}
