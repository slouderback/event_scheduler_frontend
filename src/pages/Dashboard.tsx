import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Typography, Grid2 as Grid, Paper, Box } from "@mui/material";

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout title="Dashboard">
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
              Upcoming Events
            </Typography>
            <Typography variant="h3" component="div">
              5
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Next event in 3 days
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
    </DashboardLayout>
  );
};
