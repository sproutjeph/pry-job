import { useQuery } from "@tanstack/react-query";
import { URL } from "@/lib/utils";
import axios from "axios";
import { ISuggestion } from "@/lib/types";

async function getSuggestions(): Promise<ISuggestion[]> {
  const { data } = await axios.get(URL);

  return data;
}

export function useAutocompleteSuggestions() {
  const {
    data: suggestions,
    isSuccess,
    isLoading,
  } = useQuery(["suggestion"], () => getSuggestions());

  return { suggestions, isSuccess, isLoading };
}
