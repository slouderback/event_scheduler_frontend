import { Stack, Alert, Skeleton, Typography } from "@mui/material";
import { Track as TrackType } from "../../types";
import { Track } from "../components/Track";
import { useEventTracks } from "../hooks/useEventTracks";
import { useActiveEvent } from "../contexts/EventContext";

export const EventDashboard = () => {
  const { event } = useActiveEvent();
  const { data: tracks, isLoading, error } = useEventTracks(event?.event_id);

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        Error loading event tracks. Please try again later.
      </Alert>
    );
  }

  if (isLoading || !tracks) {
    return (
      <Stack spacing={3}>
        {[1, 2].map((index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={300}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Stack>
    );
  }

  if (!tracks?.length) {
    return <Alert severity="info">No tracks found for this event.</Alert>;
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h4">{event?.name}</Typography>
      {tracks.map((track: TrackType) => (
        <Track key={track.track_id} trackId={track.track_id} />
      ))}
    </Stack>
  );
};

export default EventDashboard;
