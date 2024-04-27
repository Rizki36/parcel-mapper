import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "chakra-react-select";
import { useMappingStore } from "../_providers/MappingProviders";

const formSchema = z.object({
  alpha: z.number().min(0.1),
  beta: z.number().min(0.1),
  rho: z.number().min(0.1),
  couriers: z.number().min(1),
  iterations: z.number().min(1),
  distance: z.object({
    value: z.enum(["euclidean", "real"]),
    label: z.string(),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Aside = () => {
  const { setConfig } = useMappingStore((state) => state);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      distance: {
        value: "euclidean",
        label: "Jarak Euklidian",
      },
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    setConfig({
      alpha: values.alpha,
      beta: values.beta,
      rho: values.rho,
      salesman: values.couriers,
      iterations: values.iterations,
    });
  };

  return (
    <Box bg="white" rounded="xl" px={5} py={6} minH="500px">
      <Box
        pb={4}
        mb={2}
        borderBottom={1}
        fontWeight="semibold"
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        Pengaturan
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={4}>
          <Controller
            name="distance"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl isInvalid={!!fieldState.error}>
                <FormLabel fontSize="13px">Perhitungan Jarak</FormLabel>
                <Select
                  colorScheme="teal"
                  size="sm"
                  placeholder="Pilih perhitungan jarak"
                  isClearable
                  options={[
                    {
                      value: "euclidean",
                      label: "Jarak Euklidian",
                    },
                    {
                      value: "real",
                      label: "Jarak Real",
                    },
                  ]}
                  {...field}
                />
                {fieldState.error ? (
                  <FormErrorMessage>
                    {fieldState.error.message}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            )}
          />

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
                  step={0.1}
                  min={1}
                  onChange={(_, value) => {
                    if (Number.isNaN(value)) onChange(undefined);
                    else onChange(value);
                  }}
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
                  step={0.1}
                  min={1}
                  onChange={(_, value) => {
                    if (Number.isNaN(value)) onChange(undefined);
                    else onChange(value);
                  }}
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
                  onChange={(_, value) => {
                    if (Number.isNaN(value)) onChange(undefined);
                    else onChange(value);
                  }}
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

          <Controller
            name="couriers"
            control={control}
            render={({
              field: { ref, onChange, ...restField },
              fieldState,
            }) => (
              <FormControl isInvalid={!!fieldState.error}>
                <FormLabel fontSize="13px">Jumlah Kurir</FormLabel>
                <NumberInput
                  size="sm"
                  colorScheme="teal"
                  step={1}
                  min={1}
                  onChange={(_, value) => onChange(value)}
                  {...restField}
                >
                  <NumberInputField
                    ref={ref}
                    name={restField.name}
                    placeholder="Jumlah Kurir"
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
                  step={1}
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

          <Button type="submit" size="sm" colorScheme="teal" mt={3}>
            Buat Pemetaan
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Aside;
