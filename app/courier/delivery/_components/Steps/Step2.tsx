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
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import useStepWithValidation from "../../_hooks/useStepWithValidation";
import { RouteItems } from "../RouteItems";

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

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: config,
    resolver: zodResolver(formSchema),
  });

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

  const { route, setRoute } = useDeliveryStore((state) => state);
  const { setStep } = useStepWithValidation();

  return (
    <>
      <ConfigurationsModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Flex
        justify="center"
        direction="column"
        flex={1}
        overflowY="auto"
        flexWrap="nowrap"
      >
        <Flex columnGap="4px">
          <Button
            onClick={() => setIsOpen(true)}
            type="button"
            colorScheme={route.length ? undefined : "teal"}
            size="sm"
          >
            <HiOutlineCog6Tooth />
          </Button>
          <Button
            flex={1}
            type="button"
            colorScheme={route.length ? undefined : "teal"}
            size="sm"
            onClick={() =>
              setRoute([
                {
                  id: 1,
                  visited: true,
                },
                {
                  id: 2,
                  visited: false,
                },
                {
                  id: 3,
                  visited: false,
                },
                {
                  id: 4,
                  visited: false,
                },
                {
                  id: 5,
                  visited: false,
                },
                {
                  id: 1,
                  visited: false,
                },
              ])
            }
          >
            {route.length ? "Perbarui Rute" : "Dapatkan Rute"}
          </Button>
          {!!route.length && (
            <Button
              type="button"
              colorScheme="teal"
              size="sm"
              onClick={() => setStep(3)}
            >
              Lanjut
            </Button>
          )}
        </Flex>

        <RouteItems />
      </Flex>
    </>
  );
};

export default Step2;
