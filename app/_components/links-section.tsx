import { DiscordIcon, GithubIcon, XIcon } from "@/components/icons"

const links = [
  {
    label: "X",
    href: "https://x.com/fizzssh",
    icon: XIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/realfizz",
    icon: GithubIcon,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1488066002800349235",
    icon: DiscordIcon,
  },
] as const

function LinksSection() {
  return (
    <section aria-label="Social links">
      <nav className="flex items-center gap-4">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="relative rounded-control text-fg-tertiary transition-[color,transform] duration-150 ease-out hover:text-fg-secondary focus-visible:text-fg-secondary focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.96] after:absolute after:top-1/2 after:left-1/2 after:size-8 after:-translate-x-1/2 after:-translate-y-1/2 after:content-['']"
          >
            <Icon className="block" />
          </a>
        ))}
      </nav>
    </section>
  )
}

export { LinksSection }
