import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Search} from "lucide-react";
import React from "react";

export function SearchItem() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Search size={18} className={"font-bold hover:cursor-pointer"}  />
            </DialogTrigger>
            <DialogContent className="w-full sm:max-w-[20vw] overflow-y-scroll max-h-screen ">
                <DialogHeader>
                    <DialogTitle>Nhập từ khoá của bạn</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="key-word" className="text-right">
                            Từ khoá
                        </Label>
                        <Input
                            id="key-word"
                            defaultValue=""
                            placeholder={"Nhập từ khoá..."}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Tìm kiếm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
