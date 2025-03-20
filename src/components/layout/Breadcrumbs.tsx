import {
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
  Box,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router";
import HomeIcon from "@mui/icons-material/Home";

interface BreadcrumbsProps {
  extraCrumbs?: Array<{ label: string; path: string }>;
}

export const Breadcrumbs = ({ extraCrumbs = [] }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x: string) => x);

  // Create breadcrumb items based on the current path
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    ...pathnames.map((value: string, index: number) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        label: value.charAt(0).toUpperCase() + value.slice(1),
        path: to,
      };
    }),
    ...extraCrumbs,
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: "background.paper" }}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {breadcrumbItems.map((crumb, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return isLast ? (
            <Typography key={crumb.path} color="text.primary">
              {index === 0 ? (
                <>
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {crumb.label}
                </>
              ) : (
                crumb.label
              )}
            </Typography>
          ) : (
            <Link
              key={crumb.path}
              component={RouterLink}
              to={crumb.path}
              underline="hover"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {index === 0 ? (
                <>
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {crumb.label}
                </>
              ) : (
                crumb.label
              )}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
