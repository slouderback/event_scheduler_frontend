import DashboardLayout from "../components/layout/DashboardLayout";
import { Typography, Grid2 as Grid, Paper, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Events = () => {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Annual Conference",
      date: "2023-12-15",
      location: "Convention Center",
    },
    {
      id: 2,
      title: "Product Launch",
      date: "2023-11-05",
      location: "Main Office",
    },
    {
      id: 3,
      title: "Team Building",
      date: "2023-10-22",
      location: "Adventure Park",
    },
  ];

  return (
    <DashboardLayout title="Events">
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4">Events</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid key={event.id}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                {event.title}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Date: {new Date(event.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {event.location}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small" variant="outlined">
                  View Details
                </Button>
                <Button size="small" variant="outlined" color="secondary">
                  Edit
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}

        {events.length === 0 && (
          <Grid>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="body1">No events found.</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ mt: 2 }}
              >
                Create your first event
              </Button>
            </Paper>
          </Grid>
        )}
      </Grid>
    </DashboardLayout>
  );
};

export default Events;
