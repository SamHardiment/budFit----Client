import { Button } from "@mui/material";
import React from "react";

export function LoginButton() {
  return (
    <Button
      variant="contained"
      type="submit"
      color="success"
      size="medium"
      fullWidth
    >
      Login
    </Button>
  );
}
