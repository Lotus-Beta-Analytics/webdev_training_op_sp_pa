import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const getInititives = async () => {
  const url = "https://lbansdlc.azurewebsites.net/api/v1/initiative";
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();

  const intitatives = data.data;

  return intitatives;
};

export const createInitiative = async (formData) => {
  console.log({ formData });
  const url = "https://lbansdlc.azurewebsites.net/api/v1/initiative";
  // const response = await fetch(url, {
  //   method: "POST",
  //   body: formData,
  //   // TODO: auth in fetch
  // });

  // const data = await response.json();

  // const intitative = data.data;

  // return intitative;
};

export const useInitiatives = () => {
  return useQuery({
    initialData: [],
    queryKey: ["initiative"],
    queryFn: getInititives,
  });
};

export const useAddInitiative = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createInitiative,
    mutationKey: ["initiative-create"], // what does this do
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["initiative"] });
    },
    onError: () => {},
  });
};
