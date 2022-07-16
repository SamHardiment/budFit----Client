import React, { useState, useEffect, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TopBar } from "../../components";
import "./index.css";

const MatchButton = styled(IconButton)({
  color: "var(--turquoise)",
  border: "1px solid",
  borderColor: "var(--turquoise)",
  backgroundColor: "var(--off-white)",
  width: "100%",
  height: "100%",
});

const RejectButton = styled(IconButton)({
  color: "var(--mauve)",
  border: "1px solid",
  borderColor: "var(--mauve)",
  backgroundColor: "var(--off-white)",
  width: "100%",
  height: "100%",
});

const UndoButton = styled(IconButton)({
  color: "var(--grey)",
  border: "1px solid",
  borderColor: "var(--grey)",
  backgroundColor: "var(--off-white)",
  width: "100%",
  height: "100%",
});

function Search() {
  const users = useSelector((state) => state.searchResults);
  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const [lastDirection, setLastDirection] = useState();

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

  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
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
        {users.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={index}
            onSwipe={(dir) => swiped(dir, index)}
            onCardLeftScreen={() => outOfFrame(user.name.first, index)}
          >
            <div
              style={{ backgroundImage: "url(" + user.picture.large + ")" }}
              className="card"
            >
              <h3>{user.name.first}</h3>
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
