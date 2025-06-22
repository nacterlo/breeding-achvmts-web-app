import { getAchivment } from "@/features/achivments-card/api/api"
import AchievmentPage from "@/features/achivments-card/ui/achievment-page"


export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const achievmentData = await getAchivment(Number(id))

    

    return (
        <div>
            <AchievmentPage data={achievmentData} />
        </div>
    )
}