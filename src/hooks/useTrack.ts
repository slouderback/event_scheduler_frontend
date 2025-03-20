import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/queries";
import { ENDPOINTS } from "../api/endpoints";
import { Track } from "../../types";

export const useTrack = (trackId?: string) => {
  return useQuery<Track, Error>({
    queryKey: ["track", trackId],
    queryFn: () => fetchData<Track>(ENDPOINTS.TRACK(trackId!)),
    enabled: !!trackId,
  });
};
