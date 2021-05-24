import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";

const Register = () => {
  const [genderCategory, setGenderCategory] = useState("");
  const nameHandler = useRef();
  const emailHandler = useRef();
  const phoneHandler = useRef();
  const ageHandler = useRef();
  const pinHandler = useRef();
  const addressHandler = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: nameHandler.current.value,
      email: emailHandler.current.value,
      phone: phoneHandler.current.value,
      age: ageHandler.current.value,
      pin: pinHandler.current.value,
      address: addressHandler.current.value,
      gender: genderCategory,
    };

    console.log(userData);
  };

  return (
    <div className="container">
      <div className="title">Tell me about yourself</div>
      <form action="POST" onSubmit={formHandler}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input ref={nameHandler} type="text" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input ref={emailHandler} type="text" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input ref={phoneHandler} type="text" />
          </div>
          <div className="input-box">
            <span className="details">Age</span>
            <input ref={ageHandler} type="text" />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input ref={addressHandler} type="text" />
          </div>
          <div className="input-box">
            <span className="details">PIN Code</span>
            <input ref={pinHandler} type="text" />
          </div>
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            value={genderCategory}
            onChange={(e) => setGenderCategory(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
