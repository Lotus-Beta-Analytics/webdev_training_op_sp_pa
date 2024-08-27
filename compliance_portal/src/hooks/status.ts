import { baseUrl, queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const getStatuses = async () => {
  const url = `${baseUrl}/api/v1/status`;
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();
  return data.data;
};

export const useStatuses = () => {
  return useQuery({
    initialData: [],
    queryKey: [queryKeys.status],
    queryFn: getStatuses,
  });
};
