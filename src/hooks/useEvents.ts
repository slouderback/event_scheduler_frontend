import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Event } from "../../types";

export const useEvents = () => {
  return useQuery<Event[], Error>({
    queryKey: ["events"],
    queryFn: () => fetchData<Event[]>(ENDPOINTS.EVENTS),
  });
};
