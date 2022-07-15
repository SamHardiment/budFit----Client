import { Button } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function CreateButton() {
  return (
    <Button variant="contained" type="submit">
      Create
      <FontAwesomeIcon icon="fa-solid fa-plus" />
    </Button>
  );
}
