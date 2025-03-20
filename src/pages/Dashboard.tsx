import { useAuth } from "../contexts/AuthContext";
import { Typography, Grid2 as Grid, Paper, Box, Stack } from "@mui/material";
import { useEvents } from "../hooks/useEvents";

export const Dashboard = () => {
  const { user } = useAuth();
  const { data: events, isLoading } = useEvents();

  return (
    <Grid container direction="column" spacing={3}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name || "User"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's an overview of your events and activities
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Total Number of Events
            </Typography>
            <Typography variant="h3" component="div">
              {isLoading ? "Loading..." : events?.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body1">
              No recent activity to display.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
