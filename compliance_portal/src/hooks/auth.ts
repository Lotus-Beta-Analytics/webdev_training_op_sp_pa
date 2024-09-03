import { baseUrl } from "@/constants";
import { useMutation } from "@tanstack/react-query";

export const login = async (formData) => {
  const url = `${baseUrl}/api/v1/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
