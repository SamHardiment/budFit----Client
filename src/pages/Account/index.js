import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BackButton } from "../../components";
import testimage from "../../assets/images/bgbball.jpg";
import "./style.css";
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
export const Account = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUserDetails(user_id) {
      user_id ||= "1";
      try {
        setError("");
        const URL = `https://budfit.herokuapp.com/users`;
        const { data } = await axios.get(URL);
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchUserDetails("1");
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
    }, 2000);
    console.log(user);
  }, [user]);

  return (
    <>
      {loading ? (
        <ThemeProvider theme={theme}>
          <div className="account-container">
            <div className="account-top">
              <BackButton />
              <Typography variant="h6">Account</Typography>
            </div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    fs: 3,
                    p: 4,
                    m: 1,
                    bgcolor: purple[500],
                    width: 48,
                    height: 48,
                  }}
                >
                  <img className="avatar" src={testimage} alt="logo" />
                </Avatar>
                <Typography variant="h5">Users Account</Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  Review or adjust your details
                </Typography>
              </Box>
              <div className="account-details"></div>
            </Container>
          </div>
        </ThemeProvider>
      ) : (
        <div>
          {error ? (
            <h1>error</h1>
          ) : (
            <div>
              <BackButton />
              <div className="rays" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

// {loading ? (
//   <ThemeProvider theme={theme}>
//     <BackButton />
//     <h1>Account</h1>
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ p: 4, m: 1, bgcolor: "pink" }}>
//           <img src="" alt="logo" />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Username
//         </Typography>
//       </Box>
//     </Container>
//   </ThemeProvider>
// ) : (
//   <div>
//     {error ? (
//       <h1>error</h1>
//     ) : (
//       <div>
//         <BackButton />
//         <div className="rays" />
//       </div>
//     )}
//   </div>
// )}
