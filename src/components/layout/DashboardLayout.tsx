import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import { Navigate, Outlet, useLocation } from "react-router";
import { useActiveEvent } from "../../contexts/EventContext";

const TitleMap = {
  events: "Events",
  speakers: "Speakers",
  settings: "Settings",
};

export const DashboardLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const { event } = useActiveEvent();

  if (!event) {
    console.log("redirecting to", "/events");
    return <Navigate to={"/events"} />;
  }

  const AppBarTitle = () => {
    const path = location.pathname.split("/").pop();
    return TitleMap[path as keyof typeof TitleMap] ?? "Dashboard";
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar - permanent on desktop, temporary on mobile */}
      <Sidebar
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
      />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* App bar */}
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              {AppBarTitle()}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Page content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            overflow: "auto",
            backgroundColor: "background.default",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
