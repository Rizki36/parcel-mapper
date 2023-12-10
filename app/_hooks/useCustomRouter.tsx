import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pushToggleFilter = useCallback(
    (pathname: string, key: string, value: string) => {
      const selectedParams = searchParams.getAll(key);
      const filteredParams = selectedParams.includes(value)
        ? selectedParams.filter((v) => v !== value)
        : [...selectedParams, value];

      const params = new URLSearchParams(searchParams);
      params.delete(key);
      filteredParams.forEach((v) => params.append(key, v));

      router.push(`${pathname}?` + params.toString());
    },
    [searchParams, router]
  );

  const pushReplaceFilter = useCallback(
    (pathname: string, key: string, value: string | string[]) => {
      const params = new URLSearchParams(searchParams);

      if (Array.isArray(value)) {
        params.delete(key);
        value.forEach((v) => params.append(key, v));
      } else {
        params.set(key, value);
      }

      router.push(`${pathname}?` + params.toString());
    },
    [searchParams, router]
  );

  const pushRemoveFilter = useCallback(
    (pathname: string, key: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(key);

      router.push(`${pathname}?` + params.toString());
    },
    [searchParams, router]
  );

  return {
    pushToggleFilter,
    pushReplaceFilter,
    pushRemoveFilter,
  };
};

export default useCustomRouter;
