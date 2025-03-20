import { Typography, Stack, Paper, Skeleton } from "@mui/material";
import { Speaker } from "./Speaker";
import { DateTimeRange } from "./Dates/DateTimeRange";
import { Session as SessionType } from "../../types";
import { useSessionSpeakers } from "../hooks/useSessionSpeakers";

type SessionProps = {
  session: SessionType;
};

export const Session = ({ session }: SessionProps) => {
  const { data: speakers, isLoading: speakersLoading } = useSessionSpeakers(
    session.session_id
  );

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h6">{session.name}</Typography>
          <DateTimeRange
            startDate={session.start_date}
            endDate={session.end_date}
          />
        </Stack>

        {speakersLoading ? (
          <Skeleton variant="rectangular" height={100} />
        ) : (
          speakers &&
          speakers.length > 0 && (
            <Stack spacing={1}>
              <Typography variant="subtitle1">Speakers:</Typography>
              <Stack direction="row" spacing={1}>
                {speakers.map((speaker) => (
                  <Speaker key={speaker.speaker_id} speaker={speaker} />
                ))}
              </Stack>
            </Stack>
          )
        )}
      </Stack>
    </Paper>
  );
};

export default Session;
