import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export function BackButton() {
  const goTo = useNavigate();

  return (
    <div className="">
      <Button
        variant="contained"
        id="back-button"
        onClick={() => goTo(-1)}
        style={{ cursor: "pointer" }}
        size="medium"
      >
        Back
      </Button>
    </div>
  );
}
