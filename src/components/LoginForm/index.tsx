import { ReactElement, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type TFormInput = {
  username: string;
  password: string;
};

export const LoginForm = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { control, formState, handleSubmit, reset, setError } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    // Prevent double submit
    if (isSubmitting) return;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { username, password } = data;

    if (username === "bad") {
      setError("root.invalidUser", {
        message: "Invalid username or password",
        type: "401",
      });
    } else {
      setUsername(username);
      setPassword(password);

      setShowModal(true);
    }
  };

  const handleReset = () => {
    reset();
  };

  const handleModalClose = () => {
    reset();

    setShowModal(false);
  };

  return (
    <Box>
      <form
        aria-invalid={errors.root !== undefined}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader title="Login Form" />
          <CardContent>
            <Stack spacing={2}>
              {errors.root?.invalidUser && (
                <Typography
                  variant="body1"
                  mb="16px"
                  textAlign="center"
                  sx={{
                    color: "#d10f0f",
                  }}
                >
                  Invalid username and or password
                </Typography>
              )}
              <Typography variant="body2" mb="16px" textAlign="center">
                This is a basic example of using react-hook-form and MUI. To
                test global error, use "bad" as username and any password.
              </Typography>
              <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <TextField
                      {...field}
                      placeholder="Username"
                      size="small"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  );
                }}
                rules={{
                  minLength: {
                    message: "Username must be at least 3 characters",
                    value: 3,
                  },
                  required: {
                    message: "Username is required",
                    value: true,
                  },
                }}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <TextField
                      {...field}
                      placeholder="Password"
                      size="small"
                      type="password"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  );
                }}
                rules={{
                  minLength: {
                    message: "Password must be at least 6 characters",
                    value: 6,
                  },
                  required: {
                    message: "Password is required",
                    value: true,
                  },
                }}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              width="100vh"
            >
              <Button
                size="small"
                variant="text"
                type="reset"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button size="small" variant="contained" type="submit">
                {isSubmitting && (
                  <Stack mr="8px" sx={{ color: "#fff" }}>
                    <CircularProgress color="inherit" size="16px" />
                  </Stack>
                )}
                Login
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </form>
      <Dialog open={showModal} onClose={handleModalClose}>
        <DialogTitle>Successfully Logged In</DialogTitle>
        <DialogContent>
          <Typography variant="body2">Username is {username}</Typography>
          <Typography variant="body2">Password is {password}</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleModalClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
