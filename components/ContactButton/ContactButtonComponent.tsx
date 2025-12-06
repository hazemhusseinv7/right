"use client";

import { Button } from "@heroui/react";

import { RiWhatsappFill } from "react-icons/ri";

const ContactButtonComponent = ({ whatsapp }: { whatsapp: string }) => {
  return (
    <Button
      as="a"
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      color="success"
      endContent={<RiWhatsappFill className="size-4" />}
      className="fixed bottom-4 end-4 z-90"
    />
  );
};

export default ContactButtonComponent;
