import { baseUrl, queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const getUsers = async () => {
  const url = `${baseUrl}/api/v1/staff`;
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();
  return data.data;
};

export const useUsers = () => {
  return useQuery({
    initialData: [],
    queryKey: [queryKeys.user],
    queryFn: getUsers,
  });
};