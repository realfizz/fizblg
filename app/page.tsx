import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12 md:py-16">
      <ThemeToggle className="fixed top-4 right-4 z-50 md:top-6 md:right-6" />

      <section>
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <Image
              src="/avatar.jpg"
              alt="Fizz"
              width={48}
              height={48}
              priority
              className="size-12 rounded-lg outline outline-1 -outline-offset-1 outline-border"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 select-none text-lg leading-none drop-shadow-sm"
            >
              🇬🇧
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              Fizz
            </h1>

            <p className="mt-0.5 text-[15px] leading-6 text-fg-secondary">
              15 years old
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-lg text-[17px] leading-7 text-fg-secondary">
          Software is fun. Breaking it is even more fun, hopefully I remember to
          write about the stuff I break on here.
        </p>
      </section>
    </main>
  )
}