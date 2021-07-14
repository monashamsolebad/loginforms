import React, { useState } from "react";
function RegistrationForm(props) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      console.log(
        "email: ",
        formValues.email,
        "password: ",
        formValues.password
      );
    } else {
      console.log("Passwords do not match!");
    }
  };
  return (
    <div>
      <form>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" onClick={handleSubmitClick}>
          Register
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;
