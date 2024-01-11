"use client";
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
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { MarkerLocation } from "../page";
import usePostParcelMutation from "../../../../_hooks/mutations/usePostParcelMutation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
});

type FormData = {
  recipientName: string;
  recipientAddress: string;
};

const Form: FC<{
  location: MarkerLocation;
}> = ({ location }) => {
  const router = useRouter();
  const toast = useToast();

  const { mutateAsync, isPending: creatingParcel } = usePostParcelMutation();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      recipientName: "",
      recipientAddress: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        latitude: location.latitude ?? null,
        longitude: location.latitude ?? null,
        recipientAddress: data.recipientAddress,
        recipientName: data.recipientName,
      });

      toast({
        colorScheme: "teal",
        title: "Berhasil menyimpan data",
        status: "success",
        isClosable: true,
        position: "top",
      });

      router.push("/admin/parcels");
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
          <Button
            type="submit"
            colorScheme="teal"
            size="sm"
            isLoading={creatingParcel}
          >
            Simpan
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
