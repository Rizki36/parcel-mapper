"use client";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "chakra-react-select";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import useSelectBranchOptions from "@/_hooks/useSelectBranchOptions";
import usePostCourierMutation from "@/_hooks/mutations/usePostCourierMutation";
import { FaSync } from "react-icons/fa";

const generateRandomPassword = () => Math.random().toString(36).slice(-10);

const formSchema = z.object({
  courierName: z.string().min(3),
  branch: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof formSchema>;

const Form = () => {
  const router = useRouter();
  const toast = useToast();

  const { branchOptions } = useSelectBranchOptions();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      courierName: "",
      branch: null,
      password: generateRandomPassword(),
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isPending } = usePostCourierMutation();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        branchId: data.branch?.value,
        name: data.courierName,
        email: data.email,
        password: data.password,
      });

      toast({
        colorScheme: "teal",
        title: "Berhasil menyimpan data",
        status: "success",
        isClosable: true,
        position: "top",
      });

      router.push("/admin/couriers");
    } catch (error) {
      console.error(error);
      toast({
        title: "Gagal menyimpan data",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <Grid templateColumns="1fr 1fr" gap={4}>
          <GridItem colSpan={1}>
            <Controller
              name="courierName"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Nama Kurir</FormLabel>
                  <Input
                    size="sm"
                    colorScheme="teal"
                    placeholder="Masukkan nama kurir"
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
          </GridItem>
          <GridItem colSpan={1}>
            <Controller
              name="branch"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Cabang</FormLabel>
                  <Select
                    colorScheme="teal"
                    size="sm"
                    placeholder="Pilih cabang"
                    isClearable
                    options={branchOptions}
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
          </GridItem>
          <GridItem colSpan={1}>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Email</FormLabel>
                  <Input
                    size="sm"
                    colorScheme="teal"
                    placeholder="Masukkan email"
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
          </GridItem>
          <GridItem colSpan={1}>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Password</FormLabel>
                  <InputGroup size="sm">
                    <Input
                      colorScheme="teal"
                      placeholder="Masukkan password"
                      {...field}
                    />
                    <InputRightElement width="3.5rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={() => {
                          const randomPassword = generateRandomPassword();
                          field.onChange(randomPassword);
                        }}
                      >
                        <FaSync />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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

        <Flex justifyContent="center" mt="30px">
          <Button
            isLoading={isPending}
            type="submit"
            colorScheme="teal"
            size="sm"
          >
            Simpan
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
