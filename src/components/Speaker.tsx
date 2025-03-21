import { Typography, Stack, Chip, Avatar } from "@mui/material";
import { Speaker as SpeakerType } from "../../types";

type SpeakerProps = {
  speaker: SpeakerType;
};

export const Speaker = ({ speaker }: SpeakerProps) => {
  return (
    <Chip
      avatar={<Avatar src={""} />}
      label={
        <Stack spacing={0}>
          <Typography variant="subtitle1">
            {speaker.first_name} {speaker.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {speaker.role}
          </Typography>
        </Stack>
      }
      onDelete={() => {
        alert(
          `Remove ${speaker.first_name} ${speaker.last_name} from session?`
        );
      }}
      variant="outlined"
      sx={{
        height: "auto",
      }}
    />
  );
};

export default Speaker;
