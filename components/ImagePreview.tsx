import Image from "next/image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

interface CertificateBadgeProps {
  badgeSrc: string;
  certificateSrc: string;
  badgeAlt?: string;
  certificateAlt?: string;
}

const ImagePreview = ({
  badgeSrc,
  certificateSrc,
  badgeAlt = "Certificate Badge",
  certificateAlt = "Certificate",
}: CertificateBadgeProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        aria-label={`View ${certificateAlt}`}
        className="size-48 rounded-full bg-transparent p-0"
      >
        <Image
          src={badgeSrc}
          width={192}
          height={192}
          alt={badgeAlt}
          className="size-48 object-contain"
        />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Image
                  src={certificateSrc}
                  width={1600}
                  height={1200}
                  alt={certificateAlt}
                  unoptimized
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="max-md:me-auto"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImagePreview;
