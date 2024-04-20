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
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import usePostChangePasswordMutation from "@/_hooks/mutations/usePostChangePasswordMutation";
import { FaSync } from "react-icons/fa";
import { generateRandomPassword } from "@/_utils";

const formSchema = z.object({
  password: z.string().min(6),
});

type FormValues = z.infer<typeof formSchema>;

const UpdatePasswordForm: FC<{
  userId: string;
}> = ({ userId }) => {
  const toast = useToast();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { mutateAsync, status } = usePostChangePasswordMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      await mutateAsync({
        password: data.password,
        userId: userId || "",
      });

      toast({
        colorScheme: "teal",
        title: "Berhasil update password",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Gagal update password",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <Grid templateColumns="1fr" gap={4}>
          <GridItem colSpan={1}>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error}>
                  <FormLabel fontSize="13px">Password baru</FormLabel>
                  <InputGroup size="sm">
                    <Input
                      size="sm"
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
            type="submit"
            colorScheme="teal"
            size="sm"
            isLoading={status === "pending"}
          >
            Update
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default UpdatePasswordForm;
