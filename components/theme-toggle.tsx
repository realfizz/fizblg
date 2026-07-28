"use client"

import { Button } from "@/components/ui/button"
import { useToggleTheme } from "@/hooks/use-toggle-theme"
import { cn } from "@/lib/utils"

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useToggleTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "text-fg-tertiary hover:bg-transparent hover:text-fg-secondary",
        className
      )}
    >
      <span aria-hidden className="size-2 rounded-full bg-current" />
    </Button>
  )
}

export { ThemeToggle }
