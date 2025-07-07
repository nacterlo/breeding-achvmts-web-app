import { getAchivmentsList } from "@/features/achivments-list/api/api"
import AchievmentsList from "@/features/achivments-list/ui/achievments-list";
import { Suspense } from "react";
import LoadingAchievments from "./loading";


export default async function AchievmentsListPage() {
    const achievementsData = await getAchivmentsList(0, 9)

    return (
        <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<LoadingAchievments />}>
                <AchievmentsList achievments={achievementsData} />
            </Suspense>
        </div>
    )
}
