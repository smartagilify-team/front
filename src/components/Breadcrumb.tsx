import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link, { LinkProps } from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: ".7rem",
          fontWeight: "bolder",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: ".7rem",
          fontWeight: "bolder",
          lineHeight: 1.5,
          display: "block",
        },
      },
    },
  },
});

const MyLink = (props: LinkRouterProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Link {...props} component={RouterLink as any} />
    </ThemeProvider>
  );
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box mb={3}>
      <Breadcrumbs aria-label='breadcrumb' maxItems={3} sx={{ opacity: 0.6 }}>
        <MyLink underline='hover' color='inherit' to='/'>
          Home
        </MyLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <ThemeProvider key={to} theme={theme}>
              <Typography sx={{ textTransform: "capitalize" }}>
                {value}
              </Typography>
            </ThemeProvider>
          ) : (
            <MyLink
              sx={{ textTransform: "capitalize" }}
              underline='hover'
              to={to}
              key={to}>
              {value}
            </MyLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
