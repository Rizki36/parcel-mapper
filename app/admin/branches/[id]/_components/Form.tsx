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
  Input,
  useToast,
} from "@chakra-ui/react";
import usePatchBranchMutation from "../../_hooks/usePatchBranchMutation";
import { GetOneBranchData } from "@/api/branch/[id]/route";

const formSchema = z.object({
  name: z.string(),
  branchCode: z.string().min(3),
});

const Form: FC<{
  branch: GetOneBranchData | undefined;
}> = ({ branch }) => {
  const toast = useToast();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: branch?.name || "",
      branchCode: branch?.branchCode || "",
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync } = usePatchBranchMutation();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        id: branch?.id || "",
        data: {
          name: data.name,
          branchCode: data?.branchCode,
        },
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
      <Flex direction="column" rowGap={3}>
        <Controller
          name="branchCode"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={!!fieldState.error}>
              <FormLabel fontSize="13px">Kode Cabang</FormLabel>
              <Input
                size="sm"
                colorScheme="teal"
                placeholder="Masukkan kode branch"
                {...field}
              />
              {fieldState.error ? (
                <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
              ) : null}
            </FormControl>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={!!fieldState.error}>
              <FormLabel fontSize="13px">Nama Branch</FormLabel>
              <Input
                size="sm"
                colorScheme="teal"
                placeholder="Masukkan nama branch"
                {...field}
              />
              {fieldState.error ? (
                <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
              ) : null}
            </FormControl>
          )}
        />

        <Flex justifyContent="center">
          <Button type="submit" colorScheme="teal" size="sm">
            Simpan
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
