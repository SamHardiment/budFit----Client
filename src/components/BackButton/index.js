import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BackButton() {
  const goTo = useNavigate();

  return (
    <div className="backBtn">
      <Button
        id="back-button"
        onClick={() => goTo(-1)}
        style={{ cursor: "pointer" }}
        size="large"
      >
        <FontAwesomeIcon icon="fa-solid fa-angle-left fa-7x" />
      </Button>
    </div>
  );
}
