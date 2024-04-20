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
import usePostBranchAdminMutation from "@/_hooks/mutations/usePostBranchAdminMutation";
import { FaSync } from "react-icons/fa";
import { generateRandomPassword } from "@/_utils";

const createFormSchema = z.object({
  name: z.string().min(3),
  branch: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
  email: z.string().email(),
  password: z.string().min(6),
});

type CreateFormValues = z.infer<typeof createFormSchema>;

const Form = ({
  initialValues,
}: {
  id?: string;
  initialValues: CreateFormValues;
}) => {
  const router = useRouter();
  const toast = useToast();

  const { branchOptions } = useSelectBranchOptions();

  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(createFormSchema),
  });

  const { mutateAsync: createBranchAdmin, isPending } =
    usePostBranchAdminMutation();

  const onSubmit = async (data: any) => {
    try {
      const _data = data as CreateFormValues;
      await createBranchAdmin({
        branchId: _data.branch?.value ?? "",
        name: _data.name,
        email: _data.email,
        password: _data.password ?? "",
      });

      toast({
        colorScheme: "teal",
        title: "Berhasil menyimpan data",
        status: "success",
        isClosable: true,
        position: "top",
      });

      router.push("/admin/branch-admins");
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
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Nama Admin Cabang</FormLabel>
                  <Input
                    size="sm"
                    colorScheme="teal"
                    placeholder="Masukkan nama admin cabang"
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
