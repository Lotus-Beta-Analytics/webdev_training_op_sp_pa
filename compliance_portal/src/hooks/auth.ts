import { baseUrl } from "@/constants";
import { jsonHeaders } from "@/utils/fetchUtils";
import { useMutation } from "@tanstack/react-query";

export const login = async (formData) => {
  const url = `${baseUrl}/api/v1/auth`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: jsonHeaders,
  });

  const data = await response.json();

  if (response.status === 500) {
    throw new Error(`Server Error: Kindly contact the site admin`);
  }

  if (!response.ok) {
    throw new Error(`Login error: ${data.message}`);
  }

  return data;
};

export const logout = async () => {
  localStorage.removeItem("token");
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // store the token in localstorage
      localStorage.setItem("token", data.token);
      // TODO: add a success popup / notification
    },
    onError: (error) => {
      // TODO: add an error popup / notification
    },
  });
};
