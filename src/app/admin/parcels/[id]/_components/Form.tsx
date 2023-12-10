import { zodResolver } from "@hookform/resolvers/zod";
import { Parcel } from "@prismaorm/generated/client";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import usePatchParcelMutation from "../../_hooks/usePatchParcelMutation";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";

const formSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
});

const Form: FC<{
  parcel: Parcel | undefined;
}> = ({ parcel }) => {
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

      alert("Berhasil menyimpan data");
    } catch (error) {
      alert("Gagal menyimpan data");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3">
        <Text as="label" size="2">
          Nama Penerima
          <Controller
            name="recipientName"
            control={control}
            render={({ field }) => (
              <TextField.Input
                size="2"
                placeholder="Masukkan nama penerima"
                {...field}
              />
            )}
          />
        </Text>
        <Text as="label" size="2">
          Alamat Penerima
          <Controller
            name="recipientAddress"
            control={control}
            render={({ field }) => (
              <TextArea
                size="2"
                placeholder="Masukkan alamat penerima"
                {...field}
              />
            )}
          />
        </Text>
        <div className="flex justify-center">
          <Button type="submit" size="2">
            Simpan
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
