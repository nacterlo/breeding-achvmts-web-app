import { getAchivmentsList } from "@/features/achivments-list/api/api"
import AchievmentsList from "@/features/achivments-list/ui/achievments-list";


export default async function AchievmentsListPage() {
  const achievementsData = await getAchivmentsList(0, 12)

  return (
    <AchievmentsList achievments={achievementsData.data} />
  )
}

// function LoadingSkeleton() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {Array.from({ length: 9 }).map((_, index) => (
//         <div
//           key={index}
//           className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 animate-pulse"
//         >
//           {/* Анимированный Badge для skeleton */}
//           <div className="absolute -top-2 -left-2 z-10">
//             <Badge className="bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 text-white border-0 shadow-lg animate-pulse">
//               <Award
//                 className="h-4 w-4 text-amber-400 dark:text-yellow-300 drop-shadow-sm animate-bounce"
//                 style={{
//                   animation: "bounce 1s infinite, shimmer 2s ease-in-out infinite alternate",
//                 }}
//               />
//             </Badge>
//           </div>

//           <Card className="h-full bg-white dark:bg-gray-800 rounded-lg border-0">
//             <CardHeader className="pt-6">
//               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
//               <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//                 <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
//                 <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       ))}
//     </div>
//   )
// }

// function ErrorMessage() {
//   return (
//     <Card className="max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle className="text-red-600 dark:text-red-400">Ошибка загрузки данных</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-gray-600 dark:text-gray-300">
//           Не удалось загрузить данные о селекционных достижениях. Пожалуйста, попробуйте позже.
//         </p>
//       </CardContent>
//     </Card>
//   )
// }
