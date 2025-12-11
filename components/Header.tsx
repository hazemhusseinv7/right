"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBriefcase, FaCloud, FaUser, FaUserCheck } from "react-icons/fa6";
import { HiServer, HiNewspaper } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";
import { Drawer } from "vaul";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/services", label: "Services", icon: HiServer },
    { href: "/about-us", label: "About us", icon: FaUser },
    { href: "/partners", label: "Partners", icon: FaUserCheck },
    { href: "/industries", label: "Industries", icon: FaCloud },
    { href: "/team", label: "Team", icon: RiTeamFill },
    { href: "/blog", label: "Blog", icon: HiNewspaper },
    { href: "/careers", label: "Careers", icon: FaBriefcase },
  ];

  return (
    <header className="text-primary-foreground absolute top-0 z-10 w-full lg:z-10 lg:flex lg:items-center lg:px-8 lg:py-0">
      <div className="relative mx-auto flex h-18 w-full items-center justify-between rounded-b-xl border border-neutral-200 bg-white p-2 px-4 md:max-w-5xl dark:border-neutral-800 dark:bg-zinc-950">
        {isMobile && (
          <>
            <Drawer.Root
              direction="left"
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <Drawer.Trigger className="bg-primary-blue grid h-10 w-fit place-content-center rounded-lg px-3 text-white">
                <AlignJustify />
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
                <Drawer.Content
                  className="fixed top-2 bottom-2 left-2 z-50 flex w-72 outline-none"
                  style={
                    {
                      "--initial-transform": "calc(100% + 8px)",
                    } as React.CSSProperties
                  }
                >
                  <div className="flex h-full w-full grow flex-col rounded-2xl border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-black">
                    <div className="mb-2 flex w-full justify-between">
                      <Link href="/" className="flex items-center pl-2">
                        <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                          <Image
                            src="/logo/logo.png"
                            width={40}
                            height={40}
                            alt="Logo"
                            className="size-10"
                          />
                        </div>
                      </Link>
                      <button
                        className="w-fit rounded-md bg-neutral-950 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <X />
                      </button>
                    </div>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "hover:text-base-blue flex cursor-pointer items-center justify-start gap-1 rounded-md p-2 text-emerald-800 transition-colors duration-200 select-none dark:hover:text-blue-200",
                          pathname.startsWith(item.href) &&
                            "text-base-blue text-primary-green bg-emerald-100 dark:border dark:border-blue-950 dark:bg-neutral-900 dark:text-blue-200",
                        )}
                      >
                        <item.icon
                          size={20}
                          className={cn(
                            "text-primary-blue",
                            pathname.startsWith(item.href) &&
                              "text-primary-green",
                          )}
                        />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>

            <Link href="/">
              <Image
                src="/logo/logo.png"
                width={56}
                height={56}
                alt="Logo"
                className="size-14"
                priority
              />
            </Link>
          </>
        )}
        {!isMobile && (
          <>
            <nav className="flex items-center gap-2 font-medium">
              <Link href="/" className="flex items-center pl-2">
                <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                  <Image
                    src="/logo/logo.png"
                    width={56}
                    height={56}
                    alt="Logo"
                    className="size-14"
                    priority
                  />
                </div>
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-base-blue text-primary-blue flex cursor-pointer items-center justify-center gap-1 border-b-2 p-2 transition-colors duration-200 select-none dark:text-white dark:hover:text-blue-200",
                    pathname.startsWith(item.href) &&
                      "border-primary-green text-primary-green border-b-2 dark:border-blue-950 dark:bg-neutral-900 dark:text-blue-200",
                  )}
                >
                  <item.icon
                    size={20}
                    className={cn(
                      "text-primary-blue",
                      pathname.startsWith(item.href) && "text-primary-green",
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              ))}

              <Link
                href="/contact"
                className="bg-primary-blue hover:bg-primary-blue/90 flex h-10 items-center justify-center rounded-md border border-neutral-200 px-3 text-white transition-colors duration-300 dark:border-neutral-800"
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
