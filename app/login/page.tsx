"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { z } from "zod";
import useLogin from "./hooks/useLogin";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type FormValues = z.infer<typeof formSchema>;

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const { login, loading } = useLogin();

  const handleShowClick = () => setShowPassword(!showPassword);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const data = await login({
        email: values.email,
        password: values.password,
      });

      toast({
        colorScheme: "teal",
        title: "Login berhasil",
        status: "success",
        isClosable: true,
        position: "top",
      });

      if (["admin", "super-admin"].includes(data.role)) router.push("/admin");
      else router.push("/courier");
    } catch (error) {
      console.error(error);
      toast({
        title: "Email atau password salah",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Login Admin</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              p={10}
              rounded={6}
            >
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <CFaUserAlt color="gray.300" />
                      </InputLeftElement>
                      <Input placeholder="Email address" {...field} />
                    </InputGroup>
                    {fieldState.error ? (
                      <FormErrorMessage>
                        {fieldState.error.message}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" color="gray.300">
                        <CFaLock color="gray.300" />
                      </InputLeftElement>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
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

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                isLoading={loading}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
