import { Button } from "@mui/material";
import React from "react";

export function CreateButton() {
  return (
    <Button
      aria-label="create-button"
      variant="contained"
      type="submit"
      color="success"
      size="medium"
      fullWidth
    >
      Create Account
    </Button>
  );
}
