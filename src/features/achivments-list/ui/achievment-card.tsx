
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
            className="group relative flex h-full w-full min-w-[280px] max-w-[400px] flex-col border border-gray-200 bg-white p-4 transition-all duration-600 hover:-translate-y-1 hover:shadow-lg dark:border-[#333] dark:bg-[#121212] dark:hover:bg-[#1e1e1e] sm:min-w-[320px] md:p-5"
        >
            {/* Бейдж с иконкой */}
            <div className="absolute -left-3 -top-3">
                <Badge
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-200/30 p-0 shadow-sm backdrop-blur-xs transition-all duration-100 group-hover:-rotate-12 group-hover:border-0 group-hover:shadow-md dark:border-[#333] dark:bg-[#333]/30 md:h-10 md:w-10"
                    aria-hidden="true"
                >
                    <AwardIcon className="h-8 w-8 scale-180 text-amber-500 transition-all duration-600 group-hover:h-4 group-hover:w-4 group-hover:text-amber-600 md:h-4 md:w-4" />
                </Badge>
            </div>

            <CardHeader className="px-0 pt-1 pb-1">
                <CardTitle className="text-sm font-semibold text-gray-900 dark:text-gray-100 md:text-xs">
                    {achievment.name.trim()}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 px-0 pb-0">
                <ul className="space-y-2.5">
                    <li>
                        <div className="flex items-start text-gray-600 dark:text-gray-400">
                            <Calendar className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-600" />
                            <span className="break-words text-xs self-center">
                                <p className="font-semibold">
                                    Дата включения: {formatDate(achievment.date)}
                                </p>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <PawPrintIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400 dark:text-sky-500" />
                            <span className="break-words text-xs self-center">
                                <p className="font-semibold">
                                    Вид животного: {achievment.breed.name.toLocaleLowerCase()}
                                </p>
                            </span>
                        </div>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}