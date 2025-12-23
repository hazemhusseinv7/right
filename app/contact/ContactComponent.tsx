"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { TextEffect } from "@/components/ui/text-effect";
import { addToast, Button, Input, Textarea } from "@heroui/react";
import { Card } from "@/components/ui/card";

import { FaLocationDot } from "react-icons/fa6";
import { useInView } from "motion/react";
import { MdMarkChatUnread } from "react-icons/md";

interface FormDataType {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

const ContactComponent = ({ settings }: { settings?: SettingsType }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addToast({
          title: "Message Sent Successfully",
          description:
            'Thank you for contacting us. We will get back to you as soon as possible."',
          color: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Sending Failed");
      }
    } catch (error) {
      addToast({
        title: "Sending Failed",
        description:
          "An error occurred while sending the message. Please try again.",
        color: "danger",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <div className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
          <MdMarkChatUnread className="text-primary-green mx-auto size-10 lg:size-12" />

          <TextEffect
            per="word"
            as="h1"
            preset="blur"
            speedReveal={0.3}
            speedSegment={0.3}
            trigger={inView}
            className="text-primary-green mx-auto text-5xl font-semibold lg:text-7xl"
          >
            Contact Us
          </TextEffect>

          <TextEffect
            per="word"
            as="h1"
            preset="blur"
            speedReveal={0.8}
            speedSegment={0.8}
            trigger={inView}
            className="mx-auto mt-4 text-lg font-light"
          >
            For partnership discussions, media inquiries, vendor outreach, or
            general questions contact us to start the conversation Submit your
            inquiry below we&apos;ll route it to the appropriate team Full Name
            Work Email Phone Number Company Name Message Al Sawab Headquarter
          </TextEffect>
        </div>

        <div className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto w-full max-w-120 p-4 shadow-2xl shadow-zinc-300 dark:shadow-zinc-900">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                label="Name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <Input
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
              <Textarea
                label="Message"
                minRows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-primary-green text-white"
                disabled={isLoading}
              >
                Send
              </Button>
            </form>
          </Card>
        </div>
        <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>

        <div className="grid grid-cols-1 divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
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

          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
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

          <div className="border-t p-8 md:col-span-2">
            <span>Al Sawab Headquarter</span>

            <div className="felx items-center justify-center">
              <FaLocationDot className="text-primary-green me-2 inline" />
              <p className="inline">{settings?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
