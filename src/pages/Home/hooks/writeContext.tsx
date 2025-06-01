import { boardItem } from "@/types";
import { useForm, type UseFormReturn } from "react-hook-form";

export const useWriteContext = (): UseFormReturn<boardItem> => {
  return useForm<boardItem>({
    defaultValues: {
      title: "",
      content: "",
      tag: "",
    },
  });
};
