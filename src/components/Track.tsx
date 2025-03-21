import {
  Typography,
  Stack,
  Paper,
  Skeleton,
  Alert,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
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
            <DateTimeRange
              startDate={new Date().toISOString()}
              endDate={new Date().toISOString()}
            />
          </Stack>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Session</TableCell>
                  <TableCell>Date & Time</TableCell>
                  <TableCell>Speakers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <TableCell width="30%">
                      <Skeleton variant="text" />
                    </TableCell>
                    <TableCell width="30%">
                      <Skeleton variant="text" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Session</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Speakers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sessions?.map((session, index) => (
                <Session key={index} session={session} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
};

export default Track;
