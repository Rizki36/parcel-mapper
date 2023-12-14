import { zodResolver } from "@hookform/resolvers/zod";
import { Parcel } from "@prismaorm/generated/client";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import usePatchParcelMutation from "../../_hooks/usePatchParcelMutation";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const formSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
});

const Form: FC<{
  parcel: Parcel | undefined;
}> = ({ parcel }) => {
  const toast = useToast();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      recipientName: parcel?.recipientName || "",
      recipientAddress: parcel?.recipientAddress || "",
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync } = usePatchParcelMutation();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        id: parcel?.id || "",
        data: {
          recipientName: data.recipientName,
          recipientAddress: data.recipientAddress,
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
          name="recipientName"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={!!fieldState.error}>
              <FormLabel fontSize="13px">Nama Penerima</FormLabel>
              <Input
                size="sm"
                colorScheme="teal"
                placeholder="Masukkan nama penerima"
                {...field}
              />
              {fieldState.error ? (
                <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
              ) : null}
            </FormControl>
          )}
        />
        <Controller
          name="recipientAddress"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={!!fieldState.error}>
              <FormLabel fontSize="13px">Alamat Penerima</FormLabel>
              <Textarea
                size="sm"
                colorScheme="teal"
                placeholder="Masukkan alamat penerima"
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
