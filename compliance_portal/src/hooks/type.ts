import { baseUrl, queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const getTypes = async () => {
  const url = `${baseUrl}/api/v1/type`;
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();
  return data.data;
};

export const useTypes = () => {
  return useQuery({
    initialData: [],
    queryKey: [queryKeys.type],
    queryFn: getTypes,
  });
};
