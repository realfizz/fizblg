"use client"

import { useTheme } from "next-themes"
import { flushSync } from "react-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    const next = resolvedTheme === "dark" ? "light" : "dark"

    if (!document.startViewTransition) {
      setTheme(next)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      className={cn(
        "text-fg-tertiary hover:bg-transparent hover:text-fg-secondary",
        className
      )}
    >
      <span
        aria-hidden
        className="size-2 rounded-full bg-current"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export { ThemeToggle }
