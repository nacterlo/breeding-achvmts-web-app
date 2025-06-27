"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./kit/button"


export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Изменить тему</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="cursor-pointer border-2 border-sky-400 dark:border-amber-300">
      {resolvedTheme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-sky-700" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-300" />
      )}
      <span className="sr-only">Изменить тему</span>
    </Button>
  )
}
