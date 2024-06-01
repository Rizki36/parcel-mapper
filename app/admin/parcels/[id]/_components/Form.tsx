import { zodResolver } from "@hookform/resolvers/zod";
import { Courier, Parcel } from "@prismaorm/generated/client";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import usePatchParcelMutation from "../../../../_hooks/mutations/usePatchParcelMutation";
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
import { Select } from "chakra-react-select";
import useSelectCourierOptions from "@/_hooks/useSelectCourierOptions";

const formSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
  courier: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable(),
  status: z
    .object({
      value: z.enum(["ON_THE_WAY", "DELIVERED"]),
      label: z.string(),
    })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

const Form: FC<{
  parcel:
    | (Parcel & {
        courier?: Courier;
      })
    | undefined;
}> = ({ parcel }) => {
  const toast = useToast();
  const { courierOptions } = useSelectCourierOptions();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      recipientName: parcel?.recipientName || "",
      recipientAddress: parcel?.recipientAddress || "",
      courier: parcel
        ? {
            label: parcel?.courier?.name,
            value: parcel?.courier?.id,
          }
        : null,
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync } = usePatchParcelMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        id: parcel?.id || "",
        recipientName: data.recipientName,
        recipientAddress: data.recipientAddress,
        courierId: data?.courier?.value,
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
        <Controller
          name="courier"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={!!fieldState.error}>
              <FormLabel fontSize="13px">Kurir pengirim</FormLabel>
              <Select
                colorScheme="teal"
                size="sm"
                placeholder="Pilih kurir"
                isClearable
                options={courierOptions}
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
