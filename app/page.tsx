import { ThemeToggle } from "@/components/theme-toggle"

import { Hero } from "./_components/hero"

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12 md:py-16">
      <ThemeToggle className="fixed top-4 right-4 z-50 md:top-6 md:right-6" />
      <Hero />
    </main>
  )
}
