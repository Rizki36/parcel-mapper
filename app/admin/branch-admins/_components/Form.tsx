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
import usePatchBranchAdminMutation from "@/_hooks/mutations/usePatchBranchAdminMutation";

const formSchema = z.object({
  name: z.string().min(3),
  branch: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
});

type FormValues = z.infer<typeof formSchema>;

const Form = ({
  id,
  mode,
  initialValues,
}: {
  id?: string;
  mode: "add" | "edit";
  initialValues: FormValues;
}) => {
  const router = useRouter();
  const toast = useToast();

  const { branchOptions } = useSelectBranchOptions();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync: createBranchAdmin, status: creatingStatus } =
    usePostBranchAdminMutation();
  const { mutateAsync: updateBranchAdmin, status: updatingStatus } =
    usePatchBranchAdminMutation();

  const loading = creatingStatus === "pending" || updatingStatus === "pending";

  const onSubmit = async (data: any) => {
    try {
      if (mode === "add") {
        await createBranchAdmin({
          branchId: data.branch?.value,
          name: data.name,
        });
      } else {
        if (!id) return;

        await updateBranchAdmin({
          id: id,
          branchId: data.branch?.value,
          name: data.name,
        });
      }

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
        </Grid>

        <Flex justifyContent="center" mt="30px">
          <Button
            isLoading={loading}
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
