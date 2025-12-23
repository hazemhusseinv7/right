import Link from "next/link";
import Image from "next/image";
import { getSettingsData } from "@/lib/sanity/queries";
import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaLocationDot,
  FaRegCopyright,
} from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = async () => {
  const settings: SettingsType | null = await getSettingsData();

  const links = [
    {
      title: "About us",
      href: "/about-us",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Partners",
      href: "/partners",
    },
    {
      title: "Industries",
      href: "/about-us/#industries",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      link: settings?.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      link: settings?.twitter,
      icon: FaXTwitter,
    },
    {
      name: "TikTok",
      link: settings?.tiktok,
      icon: FaTiktok,
    },
    {
      name: "Instagram",
      link: settings?.instagram,
      icon: FaInstagram,
    },
    {
      name: "Snapchat",
      link: settings?.snapchat,
      icon: FaSnapchat,
    },
    {
      name: "WhatsApp",
      link: settings?.whatsapp,
      icon: RiWhatsappLine,
    },
    {
      name: "Facebook",
      link: settings?.facebook,
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      link: settings?.youtube,
      icon: FaYoutube,
    },
  ].filter((item) => item.link);

  return (
    <footer className="relative py-16">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%,  var(--color-primary-green) 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image
            src="/logo/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="size-20"
          />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary-green block transition-colors duration-300"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {socialMedia.map(({ name, link, icon: Icon }, i) => (
            <Link
              key={i}
              href={link!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-muted-foreground hover:text-primary-green transition-colors duration-300"
            >
              <Icon className="size-6" />
            </Link>
          ))}
        </div>

        <div className="my-8 flex flex-wrap justify-between gap-2 border-t text-sm">
          <div className="flex flex-col justify-between space-y-8 p-4">
            <div className="flex flex-col">
              <h3 className="text-primary-blue mb-3 text-lg font-semibold">
                Phone Number
              </h3>

              {settings?.phones.map((phone, i) => (
                <p key={i} className="mt-3 text-sm">
                  {phone}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-8 p-4">
            <div className="flex flex-col">
              <h2 className="text-primary-blue mb-3 text-lg font-semibold">
                Email Address
              </h2>

              {settings?.emails.map((email, i) => (
                <Link
                  key={i}
                  href={email}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {email}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4">
            <span>Al Sawab Headquarter</span>

            <div className="felx items-center justify-center">
              <FaLocationDot className="text-primary-green me-2 inline" />
              <p className="inline">{settings?.location}</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground flex items-center justify-center text-center text-sm">
          <FaRegCopyright className="inline" />
          <span className="px-1">{new Date().getFullYear()}</span>
          <Link
            href="/"
            className="hover:text-primary-green transition-colors duration-300"
          >
            Right
          </Link>
          , All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
