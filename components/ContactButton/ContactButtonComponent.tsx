"use client";

import { Button } from "@heroui/react";

import { FaWhatsapp } from "react-icons/fa6";

const ContactButtonComponent = ({ whatsapp }: { whatsapp: string }) => {
  return (
    <Button
      as="a"
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      endContent={<FaWhatsapp className="size-6 text-white" />}
      className="fixed end-4 bottom-4 z-90 bg-[#25D366] min-w-0 rounded-full size-12 px-0"
      aria-label="Contact us on WhatsApp"
    />
  );
};

export default ContactButtonComponent;
