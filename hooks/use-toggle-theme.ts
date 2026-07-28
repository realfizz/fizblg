"use client"

import { useCallback } from "react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"

function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark"

    if (!document.startViewTransition) {
      setTheme(next)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
  }, [resolvedTheme, setTheme])

  return { resolvedTheme, toggleTheme }
}

export { useToggleTheme }
