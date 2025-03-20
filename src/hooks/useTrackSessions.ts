import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Session } from "../../types";

export const useTrackSessions = (trackId?: string) => {
  return useQuery<Session[], Error>({
    queryKey: ["sessions", trackId],
    queryFn: () => fetchData<Session[]>(ENDPOINTS.SESSION_BY_TRACK(trackId!)),
    enabled: !!trackId,
  });
};
