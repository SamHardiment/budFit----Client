import React from "react";

import { BackButton } from "../../components";
import { Typography, Button } from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "newacc" },
          style: {
            textTransform: "none",
            color: purple[600],
            fontSize: "0.9rem",
            border: `1px solid ${purple[600]}`,
          },
        },
      ],
    },
  },
});
function UserSafety() {
  return (
    <div className="reg-container">
      <div className="account-top">
        <BackButton />
        <Typography variant="h6">Saftey</Typography>
      </div>
      <div id="safteyPageContainer">
        <Typography variant="h5">User Safety Advice</Typography>
        <div id="safety-container">
          <p>
            Most of our users are friendly, but it's always best to err on the
            side of caution. We've compiled some safety advice for meeting
            people you find online.
          </p>
          <p>
            <strong>Tell a friend.</strong> Make sure that someone knows you’re
            on a date and where you are. Update them if plans change.
          </p>
          <p>
            <strong>Stay charged.</strong> Make sure your phone is charged and
            that you have enough credit to call or text someone.
          </p>
          <p>
            <strong>Arrange your own transport.</strong> Letting someone collect
            you from or drop you off (especially at home) might not be a good
            idea. Also, try to meet somewhere that you can get back from easily.
          </p>
          <p>
            <strong>Watch your stuff.</strong> Try not to leave your belongings
            unattended and within eyesight when possible.
          </p>
          <p>
            <strong>Feeling uncomfortable?</strong> Leave at any time if you
            feel uncomfortable; your safety is the most important thing. If you
            feel embarrassed or guilty about leaving, tell them you feel unwell
            and make your excuses.
          </p>
        </div>
      </div>
      <div className="report-button">
        <ThemeProvider theme={theme}>
          <Button variant="newacc" className="register" name="register">
            Report a user
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default UserSafety;
