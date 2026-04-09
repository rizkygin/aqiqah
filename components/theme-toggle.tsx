"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for component to mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="fixed bottom-4 right-4 z-[100] rounded-full bg-primary/20 p-3 text-primary shadow-lg backdrop-blur-sm transition-all flex items-center justify-center opacity-0"
        aria-label="Toggle theme"
        disabled
      >
        <span className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-4 right-4 z-[100] rounded-full bg-primary/20 p-3 text-primary shadow-lg backdrop-blur-sm transition-all hover:bg-primary/30 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
