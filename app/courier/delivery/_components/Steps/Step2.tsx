import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useDeliveryStore } from "../../_providers/DeliveryProviders";

const formSchema = z.object({
  alpha: z.number().min(0.1),
  beta: z.number().min(0.1),
  rho: z.number().min(0.1),
  ants: z.number().min(1),
  iterations: z.number().min(1),
});

type FormValues = z.infer<typeof formSchema>;

const ConfigurationsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { config, setConfig } = useDeliveryStore((state) => state);
  const toast = useToast();

  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: config,
    resolver: zodResolver(formSchema),
  });

  console.log(typeof watch("alpha"));

  useEffect(() => {
    if (!isOpen) return;
    reset(config);
  }, [isOpen]);

  const onSubmit = async (values: FormValues) => {
    try {
      setConfig(values);
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Gagal mengubah konfigurasi",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Pengaturan Lanjut</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid gridTemplateColumns={"1fr 1fr 1fr"} gridGap={"10px"}>
              <GridItem>
                <Controller
                  name="alpha"
                  control={control}
                  render={({
                    field: { ref, onChange, ...restField },
                    fieldState,
                  }) => (
                    <FormControl isInvalid={!!fieldState.error}>
                      <FormLabel fontSize="13px">Alpha</FormLabel>
                      <NumberInput
                        size="sm"
                        colorScheme="teal"
                        min={1}
                        onChange={(_, value) => onChange(value)}
                        {...restField}
                      >
                        <NumberInputField
                          ref={ref}
                          name={restField.name}
                          placeholder="Alpha"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {fieldState.error ? (
                        <FormErrorMessage>
                          {fieldState.error.message}
                        </FormErrorMessage>
                      ) : null}
                    </FormControl>
                  )}
                />
              </GridItem>

              <GridItem>
                <Controller
                  name="beta"
                  control={control}
                  render={({
                    field: { ref, onChange, ...restField },
                    fieldState,
                  }) => (
                    <FormControl isInvalid={!!fieldState.error}>
                      <FormLabel fontSize="13px">Beta</FormLabel>
                      <NumberInput
                        size="sm"
                        colorScheme="teal"
                        min={1}
                        onChange={(_, value) => onChange(value)}
                        {...restField}
                      >
                        <NumberInputField
                          ref={ref}
                          name={restField.name}
                          placeholder="Delta"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {fieldState.error ? (
                        <FormErrorMessage>
                          {fieldState.error.message}
                        </FormErrorMessage>
                      ) : null}
                    </FormControl>
                  )}
                />
              </GridItem>

              <GridItem>
                <Controller
                  name="rho"
                  control={control}
                  render={({
                    field: { ref, onChange, ...restField },
                    fieldState,
                  }) => (
                    <FormControl isInvalid={!!fieldState.error}>
                      <FormLabel fontSize="13px">Rho</FormLabel>
                      <NumberInput
                        size="sm"
                        colorScheme="teal"
                        step={0.1}
                        min={0}
                        onChange={(_, value) => onChange(value)}
                        {...restField}
                      >
                        <NumberInputField
                          ref={ref}
                          name={restField.name}
                          placeholder="Rho"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {fieldState.error ? (
                        <FormErrorMessage>
                          {fieldState.error.message}
                        </FormErrorMessage>
                      ) : null}
                    </FormControl>
                  )}
                />
              </GridItem>

              <GridItem>
                <Controller
                  name="ants"
                  control={control}
                  render={({
                    field: { ref, onChange, ...restField },
                    fieldState,
                  }) => (
                    <FormControl isInvalid={!!fieldState.error}>
                      <FormLabel fontSize="13px">Jumlah Semut</FormLabel>
                      <NumberInput
                        size="sm"
                        colorScheme="teal"
                        min={1}
                        onChange={(_, value) => onChange(value)}
                        {...restField}
                      >
                        <NumberInputField
                          ref={ref}
                          name={restField.name}
                          placeholder="Jumlah Semut"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {fieldState.error ? (
                        <FormErrorMessage>
                          {fieldState.error.message}
                        </FormErrorMessage>
                      ) : null}
                    </FormControl>
                  )}
                />
              </GridItem>

              <GridItem>
                <Controller
                  name="iterations"
                  control={control}
                  render={({
                    field: { ref, onChange, ...restField },
                    fieldState,
                  }) => (
                    <FormControl isInvalid={!!fieldState.error}>
                      <FormLabel fontSize="13px">Iterasi</FormLabel>
                      <NumberInput
                        size="sm"
                        colorScheme="teal"
                        min={1}
                        onChange={(_, value) => onChange(value)}
                        {...restField}
                      >
                        <NumberInputField
                          ref={ref}
                          name={restField.name}
                          placeholder="Iterasi"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {fieldState.error ? (
                        <FormErrorMessage>
                          {fieldState.error.message}
                        </FormErrorMessage>
                      ) : null}
                    </FormControl>
                  )}
                />
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="teal" mr={3}>
              Simpan
            </Button>
            <Button type="button" variant="ghost" onClick={onClose}>
              Batal
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

const Step2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Flex justifyContent="center">
        <Button
          onClick={() => setIsOpen(true)}
          type="button"
          colorScheme="teal"
          size="sm"
        >
          Konfigurasi Lanjut
        </Button>
      </Flex>
      <ConfigurationsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Step2;
