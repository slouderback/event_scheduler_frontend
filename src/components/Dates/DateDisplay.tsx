import { Typography, Stack, Paper } from "@mui/material";
import { CalendarMonth, AccessTime } from "@mui/icons-material";

type DateDisplayProps = {
  datetime: string;
  showTime?: boolean;
};

export const DateDisplay = ({
  datetime,
  showTime = false,
}: DateDisplayProps) => {
  const date = new Date(datetime);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <Stack spacing={showTime ? 0.5 : 0}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <CalendarMonth fontSize="small" sx={{ color: "textSecondary" }} />
          <Typography variant="body2" color="textSecondary">
            {date.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Stack>
        {showTime && (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <AccessTime fontSize="small" sx={{ color: "textSecondary" }} />
            <Typography variant="body2" color="textSecondary">
              {formatTime(date)}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default DateDisplay;
