import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button } from "@mui/material";

import { changeSearchResults } from "../../redux/action";

function Searching() {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=50");
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={fetchUsers()}>
            Retry
          </Button>
        }
      >
        {error}
      </Alert>;
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    dispatch(changeSearchResults(users));
    setTimeout(function () {
      navigate("/search");
    }, 3000);
  }, [users]);

  return (
    <>
      <h4>Pulling search results.</h4>
    </>
  );
}

export default Searching;
