import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Speaker } from "../../types";

export const useSessionSpeakers = (sessionId?: string) => {
  return useQuery<Speaker[], Error>({
    queryKey: ["session-speakers", sessionId],
    queryFn: () =>
      fetchData<Speaker[]>(ENDPOINTS.SPEAKERS_ON_SESSION(sessionId!)),
    enabled: !!sessionId,
  });
};
