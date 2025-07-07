import { Input } from "@/shared/ui/kit/input"
import { Label } from "@/shared/ui/kit/label"
import { Search } from "lucide-react"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
    return (
        <form {...props}>
            <div className="pb-4">
                <div className="relative">
                    <Input
                        id="search"
                        placeholder="Поиск..."
                        className="pl-8 h-8"
                    />
                    <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
                </div>
            </div>
        </form>
    )
}