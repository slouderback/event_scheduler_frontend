import { Typography, Stack, Paper, Skeleton, Alert } from "@mui/material";
import { useTrack } from "../hooks/useTrack";
import { DateTimeRange } from "./Dates/DateTimeRange";
import { useTrackSessions } from "../hooks/useTrackSessions";
import { Session } from "./Session";

type TrackProps = {
  trackId: string;
};

export const Track = ({ trackId }: TrackProps) => {
  const { data: track, isLoading, error } = useTrack(trackId);
  const { data: sessions, isLoading: sessionsLoading } =
    useTrackSessions(trackId);

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        Error loading track data. Please try again later.
      </Alert>
    );
  }

  if (isLoading || !track) {
    return (
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Skeleton variant="text" width="60%" height={32} />
            <Stack direction="row" spacing={1}>
              <Stack spacing={0.5}>
                <Stack direction="row" spacing={1}>
                  <Skeleton variant="text" width={200} />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Skeleton variant="text" width={100} />
                </Stack>
              </Stack>
              <Skeleton variant="text" width={40} />
              <Stack spacing={0.5}>
                <Stack direction="row" spacing={1}>
                  <Skeleton variant="text" width={200} />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Skeleton variant="text" width={100} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            {[1, 2, 3].map((i) => (
              <Paper key={i} sx={{ p: 2 }}>
                <Stack spacing={2}>
                  <Stack spacing={1}>
                    <Skeleton variant="text" width="40%" height={28} />
                    <Skeleton variant="text" width="30%" />
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h5">{track.name}</Typography>
          <DateTimeRange
            startDate={track.start_date}
            endDate={track.end_date}
          />
        </Stack>
        {sessionsLoading ? (
          <Skeleton variant="rectangular" height={100} />
        ) : (
          <Stack spacing={2}>
            {sessions?.map((session, index) => (
              <Session key={index} session={session} />
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default Track;
