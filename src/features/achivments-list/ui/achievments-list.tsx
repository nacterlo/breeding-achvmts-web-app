'use client'

import { redirect, useRouter } from "next/navigation"
import { AchivmentsSmall } from "../model/types"

interface AchievmentsListProps {
    achievments: AchivmentsSmall[]
}
export default function AchievmentsList({ achievments }: AchievmentsListProps) {
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/achievments/${id}`)
    }

    return (
        <div>
            {achievments.map((achievment) => (
                <div key={achievment.id} onClick={() => handleClick(achievment.id)}>
                    <p>{achievment.name}</p>
                </div>
            ))}
        </div>
    )
}