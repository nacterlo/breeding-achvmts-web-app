import { Suspense } from "react"
import { Award } from "lucide-react"
import { ModeToggle } from "@/shared/ui/theme-toogle"
import { Badge } from "@/shared/ui/kit/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/kit/card"
import AchievementsList from "@/shared/ui/achievments-list"

// Функция для получения данных с сервера
async function getAchievements() {
  try {
    const response = await fetch("https://iis-sa.mshp.gov.by/api/99-achievement/list?page=0&limit=10", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // Отключаем кеширование для получения актуальных данных
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ошибка при получении данных:", error)
    return null
  }
}

export default async function HomePage() {
  const achievementsData = await getAchievements()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 relative">
          <div className="absolute top-0 right-0">
            <ModeToggle />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Селекционные достижения</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Реестр селекционных достижений Республики Беларусь</p>
        </header>

        <Suspense fallback={<LoadingSkeleton />}>
          {achievementsData ? <AchievementsList data={achievementsData} /> : <ErrorMessage />}
        </Suspense>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 animate-pulse"
        >
          {/* Анимированный Badge для skeleton */}
          <div className="absolute -top-2 -left-2 z-10">
            <Badge className="bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 text-white border-0 shadow-lg animate-pulse">
              <Award
                className="h-4 w-4 text-amber-400 dark:text-yellow-300 drop-shadow-sm animate-bounce"
                style={{
                  animation: "bounce 1s infinite, shimmer 2s ease-in-out infinite alternate",
                }}
              />
            </Badge>
          </div>

          <Card className="h-full bg-white dark:bg-gray-800 rounded-lg border-0">
            <CardHeader className="pt-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
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

function ErrorMessage() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-red-600 dark:text-red-400">Ошибка загрузки данных</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          Не удалось загрузить данные о селекционных достижениях. Пожалуйста, попробуйте позже.
        </p>
      </CardContent>
    </Card>
  )
}
