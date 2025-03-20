import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Session } from "../../types";

export const useSession = (sessionId?: string) => {
  return useQuery<Session, Error>({
    queryKey: ["session", sessionId],
    queryFn: () => fetchData<Session>(ENDPOINTS.SESSION(sessionId!)),
    enabled: !!sessionId,
  });
};
