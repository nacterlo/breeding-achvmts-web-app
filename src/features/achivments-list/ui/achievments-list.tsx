
import { AchievmentCard } from "@/features/achivments-list/ui/achievment-card"
import { AchivmentsSmall } from "../model/types"
import Link from "next/link"

interface AchievmentsListProps {
    achievments: AchivmentsSmall[]
}
export default function AchievmentsList({ achievments }: AchievmentsListProps) {


    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {achievments.map((achievment) => (
                    <Link href={`/${achievment.id}`} key={achievment.id}>
                        <AchievmentCard key={achievment.id} achievment={achievment} />
                    </Link>
                ))}
            </div>
        </div>
    )
}