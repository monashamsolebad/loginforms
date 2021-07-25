import React, { useEffect, useState } from "react";
import styles from "./RegistrationForm.module.css";

function RegistrationForm({ age = 20 }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   // do something when the component mounted, this runs once like the didMount
  //   return () => {
  //     // do something when unmount happens
  //   };
  // }, []);

  // useEffect(() => {
  //   // do something here, each time that the formValues changes
  // }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormValues(2);
    // setFormValues({ ...formValues, [name]: value });

    // const obj1 = { a: 2, b: 3, name: "arman" };
    // const obj2 = { b: 3 };
    // const obj3 = { ...obj1, ...obj2 }; // {  a: 2, b: 3, name: "arman", b: 3}

    // const baghali = { ["email"]: "arman" }
    setFormValues((baghali) => ({
      ...baghali,
      [name]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    const { password, confirmPassword } = formValues;
    if (password === confirmPassword) {
      console.log("email: ", email, "password: ", password);
      // fetch("/api/register", {
      //   method: "POST",
      // body: {
      //   email,
      //   psssword,
      // }
      // })
    } else {
      console.log("Passwords do not match!");
    }
  };

  const { email, password, confirmPassword } = formValues;
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.innerWrapper}>
          <div className={styles.formElementWrapper}>
            <label>Email Address</label>
            <input
              className={styles.formElement}
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.formElementWrapper}>
            <label>Password</label>
            <input
              className={styles.formElement}
              disabled
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.formElementWrapper}>
            <label>Confirm Password</label>
            <input
              className={styles.formElement}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            onClick={handleSubmitClick}
            className={styles.submitFormButton}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegistrationForm;
