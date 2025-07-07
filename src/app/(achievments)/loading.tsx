import { Badge } from "@/shared/ui/kit/badge";
import { Card, CardHeader, CardContent } from "@/shared/ui/kit/card";
import { AwardIcon } from "lucide-react";



export default function LoadingAchievments() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
                <div
                    key={index}
                    className="block transition-transform duration-100  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                    <Card className="group relative flex h-full w-full min-w-[450px] max-w-[500px] flex-col border border-gray-200 bg-white p-4  dark:border-[#333] dark:bg-[#121212]  sm:min-w-[320px] md:p-5">
                        <div className="absolute -left-3 -top-3">
                            <Badge
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-200/30 p-0 shadow-sm backdrop-blur-xs  dark:border-[#333] dark:bg-[#333]/30 md:h-10 md:w-10"
                                aria-hidden="true"
                            >
                                <AwardIcon className="h-8 w-8 scale-180 text-amber-500 md:h-4 md:w-4 animate-pulse" />
                            </Badge>
                        </div>
                        <CardHeader className="px-0 pt-1 pb-1">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                        </CardHeader>
                        <CardContent className="flex-1 px-0 pb-0">
                            <div className="space-y-2.5">
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )

}