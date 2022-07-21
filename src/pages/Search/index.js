import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { useSelector } from "react-redux";
import axios from "axios";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { TopBar } from "../../components";
import "./index.css";
const theme = createTheme({
  typography: {
    color: grey[100],
  },
});
const MatchButton = styled(IconButton)({
  marginBottom: "8px",
  color: "var(--green)",
  border: "1px solid",
  borderColor: "var(--green)",
  backgroundColor: "var(--off-white)",
  "&:hover": {
    color: "var(--off-white)",
    border: "1px solid",
    borderColor: "var(--green)",
    backgroundColor: "var(--green)",
  },
  width: "100%",
  height: "100%",
});

const RejectButton = styled(IconButton)({
  marginBottom: "8px",
  color: "var(--error)",
  border: "1px solid",
  borderColor: "var(--error)",
  backgroundColor: "var(--off-white)",
  "&:hover": {
    color: "var(--off-white)",
    border: "1px solid",
    borderColor: "var(--error)",
    backgroundColor: "var(--error)",
  },
  width: "100%",
  height: "100%",
});

const UndoButton = styled(IconButton)({
  marginTop: "14px",
  color: "var(--grey)",
  border: "1px solid",
  borderColor: "var(--grey)",
  backgroundColor: "var(--off-white)",
  "&:hover": {
    color: "var(--off-white)",
    border: "1px solid",
    borderColor: "var(--grey)",
    backgroundColor: "var(--grey)",
  },
  width: "100%",
  height: "100%",
});

function Search() {
  const users = useSelector((state) => state.searchResults);
  const currentUser = useSelector((state) => state.currentUser);
  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const [lastDirection, setLastDirection] = useState("");

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < users.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = async (direction, index, id) => {
    if (direction == "right") {
      await match(id);
    }
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const match = async (event_id) => {
    await axios.post("https://budfit.herokuapp.com/matches", {
      user_id: currentUser.user_id,
      event_id: event_id,
    });
  };

  const outOfFrame = (idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <>
      <TopBar />
      <div className="cardContainer">
        <h4>No more events!</h4>
        <br />
        <br />
        <h4>
          Search again by clicking
          <br /> search at the bottom.
        </h4>
        {users.map((thisEvent, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={index}
            onSwipe={(dir) => swiped(dir, index, thisEvent.event_id)}
            onCardLeftScreen={() => outOfFrame(index)}
          >
            <div
              style={{ backgroundImage: "url(" + thisEvent.img + ")" }}
              className="card"
            >
              <div className="swipe-overlay">
                <div className="innerCardContainer">
                  <ThemeProvider theme={theme}>
                    <Typography variant="h5">{thisEvent.title}</Typography>
                    <Typography variant="subtitle1">
                      {thisEvent.descr}
                    </Typography>
                    <Typography variant="subtitle1">
                      Users Joined: {thisEvent.attending.length}/
                      {thisEvent.spaces}
                    </Typography>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="searchButtonContainer">
        <div className="aSearchButtonContainer" id="rejectButton">
          <div className="dummySpacing"></div>
          <RejectButton onClick={() => swipe("left")} aria-label="reject">
            <FontAwesomeIcon icon="xmark" />
          </RejectButton>
        </div>
        <div className="aSearchButtonContainer" id="undoButton">
          <div className="dummySpacing"></div>
          <UndoButton onClick={() => goBack()} aria-label="undo">
            <FontAwesomeIcon icon="rotate-left" />
          </UndoButton>
        </div>
        <div className="aSearchButtonContainer" id="matchButton">
          <div className="dummySpacing"></div>
          <MatchButton onClick={() => swipe("right")} aria-label="match">
            <FontAwesomeIcon icon="check" />
          </MatchButton>
        </div>
      </div>
    </>
  );
}

export default Search;
