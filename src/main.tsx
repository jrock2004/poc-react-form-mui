import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import { App } from "./App.tsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    background: {
      default: "#fff",
      paper: "#eff1f3",
    },
    primary: {
      light: "#e5f2f4",
      main: "#0a7c8e",
    },
  },
  typography: {
    allVariants: {
      color: "#2d2d2d",
    },
    fontFamily: [
      "Averta",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      letterSpacing: "0.0625rem",
      lineHeight: "140%",
    },
    h2: {
      fontSize: "2rem",
      letterSpacing: "0.0625rem",
      lineHeight: "150%",
    },
    h3: {
      fontSize: "1.6875rem",
      letterSpacing: "0.0625rem",
      lineHeight: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
      letterSpacing: "0",
      lineHeight: "2rem",
    },
    h5: {
      fontSize: "1.25rem",
      letterSpacing: "0",
      lineHeight: "1.5rem",
    },
    h6: {
      fontSize: "1.125rem",
      letterSpacing: "0",
      lineHeight: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "5px",
          textTransform: "none",
          ...(ownerState.size === "small" && {
            height: "32px",
            padding: "4px 16px",
          }),
          ...(ownerState.size === "medium" && {
            height: "40px",
            padding: "8px 16px",
          }),
          "&.Mui-focusVisible": {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: "1px",
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          border: "1px solid #d5d9de",
          borderRadius: "8px",
          boxShadow: "none",
          padding: "1rem 0.5rem 1rem 1rem",
        }),
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
