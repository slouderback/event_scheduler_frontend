import { apiClient } from "./client";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchData = async <T>(url: string): Promise<T> => {
  return apiClient<T>(url, { method: "GET" });
};

export const postData = async <T>(url: string, data: any): Promise<T> => {
  return apiClient<T>(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
