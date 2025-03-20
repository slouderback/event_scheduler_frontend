import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  InputAdornment,
  Grid2 as Grid,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const Speakers = () => {
  // Mock data for speakers
  const speakers = [
    {
      speaker_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      total_sessions: 3,
      social_link: "https://www.linkedin.com/in/john-doe",
    },
    {
      speaker_id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      total_sessions: 2,
      social_link: "https://www.linkedin.com/in/jane-smith",
    },
    {
      speaker_id: 3,
      first_name: "Robert",
      last_name: "Johnson",
      email: "robert.johnson@example.com",
      total_sessions: 1,
      social_link: "https://www.linkedin.com/in/robert-johnson",
    },
    {
      speaker_id: 4,
      first_name: "Emily",
      last_name: "Davis",
      email: "emily.davis@example.com",
      total_sessions: 4,
      social_link: "https://www.linkedin.com/in/emily-davis",
    },
    {
      speaker_id: 5,
      first_name: "Michael",
      last_name: "Wilson",
      email: "michael.wilson@example.com",
      total_sessions: 2,
      social_link: "https://www.linkedin.com/in/michael-wilson",
    },
  ];

  return (
    <Grid container direction="column" spacing={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4">Speakers</Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            size="small"
            placeholder="Search speakers"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Add Speaker
          </Button>
        </Stack>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="speakers table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total Sessions</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {speakers.map((speaker) => (
              <TableRow
                key={speaker.speaker_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {speaker.first_name} {speaker.last_name}
                </TableCell>
                <TableCell>{speaker.email}</TableCell>
                <TableCell>{speaker.total_sessions}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button size="small" variant="outlined">
                      View
                    </Button>
                    <Button size="small" variant="outlined" color="secondary">
                      Edit
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Speakers;
