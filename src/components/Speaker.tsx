import { Typography, Stack, Link, Paper } from "@mui/material";
import { Speaker as SpeakerType } from "../../types";

type SpeakerProps = {
  speaker: SpeakerType;
};

export const Speaker = ({ speaker }: SpeakerProps) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Typography variant="subtitle1">
          {speaker.first_name} {speaker.last_name}
          {speaker.role && ` - ${speaker.role}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {speaker.email}
        </Typography>
        {speaker.social_link && (
          <Link href={speaker.social_link} target="_blank" rel="noopener">
            Social Profile
          </Link>
        )}
      </Stack>
    </Paper>
  );
};

export default Speaker;
