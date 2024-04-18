import axiosInstance from "@/_libs/axios";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  const { mutateAsync, status } = useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      const { data } = await axiosInstance.post(`api/auth/login`, payload);

      return data;
    },
  });

  const login = async (payload: { email: string; password: string }) => {
    const user = await mutateAsync(payload);

    return user;
  };

  return {
    login,
    loading: status === "pending",
  };
};

export default useLogin;
