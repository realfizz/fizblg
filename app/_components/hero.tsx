import Image from "next/image"

import { SocialLinks } from "./social-links"

function Hero() {
  return (
    <section>
      <div className="flex items-center gap-3.5">
        <div className="relative shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Fizz"
            width={48}
            height={48}
            sizes="48px"
            priority
            className="size-12 rounded-lg outline outline-1 -outline-offset-1 outline-image-outline"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 select-none text-lg leading-none drop-shadow-sm"
          >
            🇬🇧
          </span>
        </div>

        <div>
          <h1 className="text-balance text-2xl font-medium tracking-tight text-foreground">
            Fizz
          </h1>

          <p className="mt-0.5 text-body-sm text-fg-secondary">15 years old</p>
        </div>
      </div>

      <p className="mt-5 max-w-lg text-body text-pretty text-fg-secondary">
        Software is fun. Breaking it is even more fun,{" "}
        <strong className="font-medium text-foreground">hopefully</strong> I
        remember to write about the stuff I break on here.
      </p>

      <div className="mt-6">
        <SocialLinks />
      </div>
    </section>
  )
}

export { Hero }
