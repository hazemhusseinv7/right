"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Drawer } from "vaul";
import { Button } from "@heroui/react";
import { cn } from "@/lib/utils";

import { AlignJustify, X } from "lucide-react";
import { FaBriefcase, FaUser, FaUserCheck } from "react-icons/fa6";
import { HiServer, HiNewspaper } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";

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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    left: [
      { href: "/services", label: "Services", icon: HiServer },
      { href: "/partners", label: "Partners", icon: FaUserCheck },
    ],
    right: [{ href: "/about-us", label: "About us", icon: FaUser }],
  };

  const navItemsMobile = [
    { href: "/about-us", label: "About us", icon: FaUser },
    { href: "/services", label: "Services", icon: HiServer },
    { href: "/partners", label: "Partners", icon: FaUserCheck },
    { href: "/team", label: "Team", icon: RiTeamFill },
    { href: "/blog", label: "Blog", icon: HiNewspaper },
    { href: "/careers", label: "Careers", icon: FaBriefcase },
  ];

  return (
    <header className="text-primary-foreground fixed top-0 z-100 w-full lg:flex lg:items-center lg:py-0">
      <div className="relative mx-auto flex h-18 w-full items-center justify-between border border-neutral-200 bg-white p-2 px-4 lg:hidden dark:border-neutral-800 dark:bg-zinc-950">
        <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger
            className="bg-primary-blue hover:bg-primary-blue/90 grid h-10 w-fit cursor-pointer place-content-center rounded-lg px-3 text-white transition-colors duration-300"
            aria-label="Open menu"
          >
            <AlignJustify />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-200 bg-black/40" />
            <Drawer.Content
              className="fixed top-2 bottom-2 left-2 z-200 flex w-72 outline-none"
              style={
                {
                  "--initial-transform": "calc(100% + 8px)",
                } as React.CSSProperties
              }
            >
              <div className="flex h-full w-full grow flex-col rounded-2xl border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-black">
                <Drawer.Title>
                  <span className="sr-only">Navigation Menu</span>

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
                      className="bg-primary-blue hover:bg-primary-blue/90 w-fit cursor-pointer rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </button>
                  </div>
                </Drawer.Title>

                {navItemsMobile.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "hover:text-base-blue text-primary-blue flex cursor-pointer items-center justify-start gap-1 rounded-md p-2 transition-colors duration-200 select-none dark:hover:text-blue-200",
                      pathname.startsWith(item.href) &&
                        "text-base-blue text-primary-green bg-emerald-100 dark:border dark:border-blue-950 dark:bg-neutral-900 dark:text-blue-200",
                    )}
                    onClick={() => setIsOpen(false)}
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
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <div className="flex w-full items-center justify-between gap-4">
          <Button
            as="a"
            href="/contact"
            className="bg-primary-blue ms-4 text-white"
          >
            Contact Us
          </Button>

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
        </div>
      </div>

      <div className="bg-primary-blue border-t-primary-blue relative mx-auto hidden h-21 w-full items-center justify-center border-y-8 border-b-white px-14 lg:flex dark:border-neutral-800 dark:bg-zinc-950">
        <nav className="bg-primary-blue z-10 -me-5 flex h-full flex-1 items-center justify-end gap-2 rounded-b-full pe-20">
          {navItems.left.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-primary-green flex cursor-pointer items-center justify-center gap-1 p-2 text-xl text-white transition-colors duration-200 select-none dark:text-white dark:hover:text-blue-200",
                pathname.startsWith(item.href) &&
                  "text-primary-green dark:bg-neutral-900 dark:text-blue-200",
              )}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mx-0.5 flex h-full w-80 items-center justify-center gap-2 rounded-t-full bg-white font-medium before:-ms-70 before:h-[51%] before:w-40 before:translate-y-1/2 before:bg-white after:-me-70 after:h-[51%] after:w-40 after:translate-y-1/2 after:bg-white">
          <Link href="/" className="flex items-center pl-2">
            <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
              <Image
                src="/logo/logo.png"
                width={68}
                height={68}
                alt="Logo"
                className="mt-1 size-17"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="bg-primary-blue z-10 -ms-5 flex h-full flex-1 items-center justify-start gap-2 rounded-b-full ps-20">
          {navItems.right.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-primary-green flex cursor-pointer items-center justify-center gap-1 p-2 text-xl text-white transition-colors duration-200 select-none dark:text-white dark:hover:text-blue-200",
                pathname.startsWith(item.href) &&
                  "text-primary-green dark:bg-neutral-900 dark:text-blue-200",
              )}
            >
              <span>{item.label}</span>
            </Link>
          ))}

          <Button
            as="a"
            href="/contact"
            className="bg-primary-green text-white"
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
