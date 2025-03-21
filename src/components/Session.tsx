import {
  Typography,
  Stack,
  Skeleton,
  TableRow,
  TableCell,
} from "@mui/material";
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
    <TableRow key={session.session_id}>
      <TableCell>
        <Typography variant="subtitle1">{session.name}</Typography>
      </TableCell>
      <TableCell>
        <DateTimeRange
          startDate={session.start_date}
          endDate={session.end_date}
        />
      </TableCell>
      <TableCell>
        {speakersLoading ? (
          <Skeleton variant="rectangular" height={100} />
        ) : (
          speakers &&
          speakers.length > 0 && (
            <Stack direction="row" spacing={1}>
              {speakers.map((speaker) => (
                <Speaker key={speaker.speaker_id} speaker={speaker} />
              ))}
            </Stack>
          )
        )}
      </TableCell>
    </TableRow>
  );
};

export default Session;
