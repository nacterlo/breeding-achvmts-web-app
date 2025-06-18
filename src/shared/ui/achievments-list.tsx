
import { Calendar, User, Building, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./kit/card"
import { Badge } from "./kit/badge"

interface Achievement {
  id: number
  name: string
  author?: string
  organization?: string
  registrationDate?: string
  category?: string
  description?: string
  [key: string]: any
}

interface AchievementsListProps {
  data: {
    content?: Achievement[]
    items?: Achievement[]
    data?: Achievement[]
    [key: string]: any
  }
}

export default function AchievementsList({ data }: AchievementsListProps) {
  // Пытаемся найти массив достижений в разных возможных структурах ответа
  const achievements = data?.content || data?.items || data?.data || []

  if (!Array.isArray(achievements) || achievements.length === 0) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="dark:text-white">Нет данных</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">Селекционные достижения не найдены.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement: Achievement, index: number) => (
        <div
          key={achievement.id || index}
          className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 group"
        >
          {/* Badge с иконкой Award в левом верхнем углу */}
          <div className="absolute -top-2 -left-2 z-10">
            <Badge className="bg-gradient-to-r from-cyan-500 via-sky-500 via-blue-500 to-indigo-500 dark:from-violet-500 dark:via-purple-500 dark:via-fuchsia-500 dark:via-pink-500 dark:to-rose-500 text-white border-0 shadow-lg hover:animate-pulse transition-all duration-300">
              <Award className="h-4 w-4 text-amber-400 dark:text-yellow-300 drop-shadow-sm group-hover:animate-bounce" />
            </Badge>
          </div>

          <Card className="h-full bg-white dark:bg-gray-800 rounded-lg border-0 group-hover:scale-[1.02] transition-transform duration-300">
            <CardHeader className="pb-3 pt-6">
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {achievement.name || `Достижение ${index + 1}`}
              </CardTitle>
              {achievement.category && (
                <Badge variant="secondary" className="w-fit dark:bg-gray-700 dark:text-gray-200">
                  {achievement.category}
                </Badge>
              )}
            </CardHeader>

            <CardContent className="space-y-3">
              {achievement.author && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <User className="h-4 w-4 flex-shrink-0" />
                  <span className="line-clamp-1">{achievement.author}</span>
                </div>
              )}

              {achievement.organization && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Building className="h-4 w-4 flex-shrink-0" />
                  <span className="line-clamp-2">{achievement.organization}</span>
                </div>
              )}

              {achievement.registrationDate && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>{new Date(achievement.registrationDate).toLocaleDateString("ru-RU")}</span>
                </div>
              )}

              {achievement.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mt-3">{achievement.description}</p>
              )}

              {/* Отображаем дополнительные поля, если они есть */}
              <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  {Object.entries(achievement).map(([key, value]) => {
                    // Пропускаем уже отображенные поля
                    if (
                      ["id", "name", "author", "organization", "registrationDate", "category", "description"].includes(
                        key,
                      )
                    ) {
                      return null
                    }

                    // Отображаем только строковые и числовые значения
                    if (typeof value === "string" || typeof value === "number") {
                      return (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium capitalize">
                            {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                          </span>
                          <span className="text-right max-w-[60%] truncate">{String(value)}</span>
                        </div>
                      )
                    }

                    return null
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
