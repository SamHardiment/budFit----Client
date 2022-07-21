import React from "react";

import { TopBar } from "../../components";

function UserSafety() {
  return (
    <>
      <TopBar />
      <div id="chatsPageContainer">
        <h4>User Safety Advice</h4>
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
    </>
  );
}

export default UserSafety;
