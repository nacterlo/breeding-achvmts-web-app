
import { AchivmentsSmall } from "@/features/achivments-list/model/types"
import { formatDate } from "@/shared/lib/utils"
import { Badge } from "@/shared/ui/kit/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import { AwardIcon, Calendar, PawPrintIcon } from "lucide-react"

interface AchievmentCardProps {
    achievment: AchivmentsSmall
}
export function AchievmentCard({ achievment }: AchievmentCardProps) {
    return (
        <Card
            className="h-[200px] w-[400px] group relative flex flex-col p-2 border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#1e1e1e] transition-all duration-300  hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            
        >
            <div className="absolute -top-3 -left-3">
                <Badge
                    className={`h-8 w-8 p-0 flex items-center justify-center rounded-full bg-gray-200/30 dark:bg-[#333]/30 backdrop-blur-xs border border-gray-200 dark:border-[#333] shadow-sm transition-all duration-300  group-hover:shadow-md group-hover:-rotate-12`}
                >
                    <AwardIcon
                        className={`text-amber-500 group-hover:text-amber-600 transition-all duration-600 scale-130 group-hover:scale-170`}
                    />
                </Badge>
            </div>
            <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100 ">{achievment.name.trim()}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-0.5 transition-colors duration-300">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>{formatDate(achievment.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    <PawPrintIcon className="mr-2 h-5 w-5" />
                    <span>{achievment.breed.name}</span>
                </div>
            </CardContent>
        </Card>
    )
}