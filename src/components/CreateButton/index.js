import { Button } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "login" },
          style: {
            textTransform: "none",
            color: grey[100],
            fontSize: "1.1rem",
            backgroundColor: purple[400],
            "&:hover": {
              backgroundColor: purple[600],
            },
            border: `2px none ${purple[500]}`,
          },
        },
      ],
    },
  },
});
export function CreateButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        aria-label="create-button"
        variant="login"
        className="register"
        type="submit"
        color="success"
        size="medium"
        fullWidth
      >
        Create Account
      </Button>
    </ThemeProvider>
  );
}
