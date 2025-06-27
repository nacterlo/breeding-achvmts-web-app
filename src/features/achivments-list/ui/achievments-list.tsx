
import { AchievmentCard } from "@/features/achivments-list/ui/achievment-card"
import { AchivmentsSmall } from "../model/types"
import Link from "next/link"

interface AchievmentsListProps {
    achievments: AchivmentsSmall[]
}
export default function AchievmentsList({ achievments }: AchievmentsListProps) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6">
            {achievments.map((achievment) => (
                <Link
                    href={`/${achievment.id}`}
                    key={achievment.id}
                    className="block transition-transform duration-100  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    aria-label={`Достижение: ${achievment.name}`}
                >
                    <AchievmentCard
                        achievment={achievment}
                    />
                </Link>
            ))}
        </div>
    )
}