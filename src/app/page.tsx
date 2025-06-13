import { getAchivmentsList } from "@/features/achivments-list/api/api";
import AchievmentsList from "@/features/achivments-list/ui/achievments-list";
import Image from "next/image";
import { Suspense } from "react";

type ResponseAchivmentsList = {
  data: {
    id: number,
    name: string
  }[],
  page: number,
  limit: number,
  totalCount: number,
  totalPage: number
}

export default async function Home() {

  const achievments = await getAchivmentsList(1, 5);

  console.log(achievments);

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <AchievmentsList achievments={achievments.data} />
      </Suspense>
  );
}
