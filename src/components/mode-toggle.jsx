import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-secondary/50 px-4 py-2 rounded-full border border-border"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
      <span>{isLight ? "Dark Mode" : "Light Mode"}</span>
    </button>
  )
}
