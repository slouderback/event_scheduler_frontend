import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Track } from "../../types";

export const useEventTracks = (eventId?: string) => {
  return useQuery<Track[], Error>({
    queryKey: ["event-tracks", eventId],
    queryFn: () => fetchData<Track[]>(ENDPOINTS.TRACKS_BY_EVENT(eventId!)),
    enabled: !!eventId,
  });
};
