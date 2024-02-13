import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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
import usePatchCourierMutation from "@/_hooks/mutations/usePatchCourierMutation";
import { GetOneCourierData } from "@/api/courier/[id]/route";
import { Select } from "chakra-react-select";
import useSelectBranchOptions from "../../_hooks/useSelectBranchOptions";

type FormValues = {
  name: string;
  branch: {
    value: string;
    label: string;
  } | null;
};

const formSchema = z.object({
  name: z.string(),
  branch: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable(),
});

const Form: FC<{
  courier: GetOneCourierData | undefined;
}> = ({ courier }) => {
  const { branchOptions } = useSelectBranchOptions();

  const toast = useToast();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: courier?.name || "",
      branch: courier?.branch
        ? {
            value: courier.branch.id,
            label: `${courier.branch.name} - (${courier.branch.branchCode})`,
          }
        : null,
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync, status } = usePatchCourierMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      await mutateAsync({
        id: courier?.id || "",
        name: data.name,
        branchId: data?.branch?.value || null,
      });

      toast({
        colorScheme: "teal",
        title: "Berhasil menyimpan data",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } catch (error) {
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
        </Grid>

        <Flex justifyContent="center" mt="30px">
          <Button
            type="submit"
            colorScheme="teal"
            size="sm"
            isLoading={status === "pending"}
          >
            Simpan
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
