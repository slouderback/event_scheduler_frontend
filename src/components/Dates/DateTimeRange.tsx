import { Stack, Typography } from "@mui/material";
import { DateDisplay } from "./DateDisplay";

type DateTimeRangeProps = {
  startDate: string;
  endDate: string;
  showTime?: boolean;
};

export const DateTimeRange = ({
  startDate,
  endDate,
  showTime = true,
}: DateTimeRangeProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <DateDisplay datetime={startDate} showTime={showTime} />
      <Typography color="textSecondary">to</Typography>
      <DateDisplay datetime={endDate} showTime={showTime} />
    </Stack>
  );
};

export default DateTimeRange;
