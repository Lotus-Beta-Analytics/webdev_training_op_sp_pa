import { baseUrl } from "@/constants";
import { jsonHeaders } from "@/utils/fetchUtils";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// TODO: go over types and interfaces
type id = string | number;
// interface IInitiative {
//   _id?: id;
// }

export const getInititives = async () => {
  const url = `${baseUrl}/api/v1/initiative`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();

  return data.data;
};

export const getSingleInititives = async (id: id) => {
  const url = `${baseUrl}/api/v1/initiative/${id}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();

  return data.data;
};

export const createInitiative = async (formData: any) => {
  const url = `${baseUrl}/api/v1/initiative`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: jsonHeaders,
  });
  const data = await response.json();

  return data.data;
};

export const updateInitiative = async (formData: any) => {
  const url = `${baseUrl}/api/v1/initiative/${formData._id}`;
  const response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(formData),
    headers: jsonHeaders,
  });
  const data = await response.json();

  return data.data;
};

export const deleteInitiative = async (id: id) => {
  const url = `${baseUrl}/api/v1/initiative/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: jsonHeaders,
  });
  const data = await response.json();

  return data;
};

export const useInitiatives = () => {
  return useQuery({
    initialData: [],
    queryKey: ["initiative"],
    queryFn: getInititives,
  });
};

export const useSingleInitiatives = (id: id) => {
  return useQuery({
    initialData: {},
    queryKey: ["initiative", id],
    queryFn: () => getSingleInititives(id),
  });
};

export const useAddInitiative = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createInitiative,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["initiative"] });
    },
    onError: () => {},
  });
};

export const useUpdateInitiative = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateInitiative,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["initiative"] });
    },
    onError: () => {},
  });
};

export const useDeleteInitiative = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteInitiative,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["initiative"] });
    },
    onError: () => {},
  });
};
