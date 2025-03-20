import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
  Divider,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid2 as Grid,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const Settings = () => {
  const { user } = useAuth();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="settings tabs"
          >
            <Tab label="Profile" />
            <Tab label="Account" />
            <Tab label="Notifications" />
            <Tab label="Privacy" />
          </Tabs>
        </Box>

        {/* Profile Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Name"
                defaultValue={user?.name || ""}
                margin="normal"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                defaultValue={user?.email || ""}
                margin="normal"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                defaultValue=""
                margin="normal"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Organization"
                defaultValue=""
                margin="normal"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Bio"
                multiline
                rows={4}
                defaultValue=""
                margin="normal"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="contained">Save Changes</Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Account Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Account Settings
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Change Password
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type="password"
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button variant="contained">Update Password</Button>
            </Box>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Typography variant="subtitle1" color="error" gutterBottom>
              Danger Zone
            </Typography>
            <Button variant="outlined" color="error">
              Delete Account
            </Button>
          </Box>
        </TabPanel>

        {/* Notifications Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Notification Preferences
          </Typography>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email notifications for new events"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email notifications for event updates"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch />}
              label="SMS notifications for event reminders"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Browser notifications"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button variant="contained">Save Preferences</Button>
          </Box>
        </TabPanel>

        {/* Privacy Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Privacy Settings
          </Typography>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Show my profile to other users"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Allow others to see events I'm attending"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Switch />}
              label="Share my contact information with event organizers"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button variant="contained">Save Privacy Settings</Button>
          </Box>
        </TabPanel>
      </Paper>
    </Grid>
  );
};

export default Settings;
