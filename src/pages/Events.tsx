import { Typography, Grid2 as Grid, Paper, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEvents } from "../hooks/useEvents";
import { useNavigate } from "react-router";
import { useActiveEvent } from "../contexts/EventContext";

export const Events = () => {
  const navigate = useNavigate();
  const { data: events, isLoading } = useEvents();
  const { setActiveEvent } = useActiveEvent();

  if (isLoading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {events?.map((event, index) => (
        <Grid key={index}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              {event.name}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Date: {new Date(event.start_date).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {event.venue?.name ?? "None set"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  setActiveEvent(event);
                  navigate(`/`);
                }}
              >
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}

      {events?.length === 0 && (
        <Grid>
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="body1">No events found.</Typography>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
              Create your first event
            </Button>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Events;
