import { ReactElement } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { LoginForm } from "./components/LoginForm";

export const App = (): ReactElement => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        alignItems: "center",
        height: "100vh",
        paddingTop: "10vh",
      }}
    >
      <Stack
        spacing={6}
        sx={{
          width: isSmall ? "350px" : "500px",
        }}
      >
        <LoginForm />
      </Stack>
    </Stack>
  );
};
