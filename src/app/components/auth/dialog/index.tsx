import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function Modal({
    isDialogOpen,
    setIsDialogOpen,
    children,
    title,
    titleSub,
    isDialog = true,
    addClass= '',
}: {
    isDialogOpen?: any,
    setIsDialogOpen?: any,
    children?: any,
    title?: string,
    titleSub?: string,
    isDialog?: boolean,
    addClass?: string,
}) {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className={`max-w-[22rem] rounded-xl sm:max-w-md flex items-start flex-col ${addClass}`}>
                <DialogHeader>
                    <DialogTitle className="text-[20px] text-left font-bold text-[#080C19]">{title}</DialogTitle>
                    <DialogDescription className="text-[14px] text-left font-normal text-[#080C19]">{titleSub}</DialogDescription>
                </DialogHeader>
                {children}
                {
                    isDialog &&
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                }
            </DialogContent>
        </Dialog>
    )
}
