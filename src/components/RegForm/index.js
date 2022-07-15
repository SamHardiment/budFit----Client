import React, { useState } from "react";
function RegForm() {
  const [formdata, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="That's not my name!"
        />
        <input type="submit" value="Update!" />
      </form>
    </div>
  );
}

export default RegForm;
