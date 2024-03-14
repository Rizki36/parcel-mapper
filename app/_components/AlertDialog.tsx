import {
  AlertDialog as AlertDialogChakra,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps,
} from "@chakra-ui/react";
import React, { useRef } from "react";

type AlertDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
};

const AlertDialog = ({
  title,
  description,
  cancelText = "Batal",
  confirmText = "Yakin",
  isOpen,
  onClose,
  onConfirm,
  confirmButtonProps,
  cancelButtonProps,
}: AlertDialogProps) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialogChakra
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} {...cancelButtonProps}>
              {cancelText}
            </Button>
            <Button
              colorScheme="red"
              onClick={onConfirm}
              ml={3}
              {...confirmButtonProps}
            >
              {confirmText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialogChakra>
  );
};

export default AlertDialog;
