import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";
import db from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const RegisterForm = () => {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const [genderCategory, setGenderCategory] = useState("");
  const nameHandler = useRef();
  const bdHandler = useRef();
  const phoneHandler = useRef();
  const ageHandler = useRef();
  const pinHandler = useRef();
  const addressHandler = useRef();

  const formHandler = async (e) => {
    e.preventDefault();

    const userData = {
      name: nameHandler.current.value,
      bd: bdHandler.current.value,
      phone: phoneHandler.current.value,
      age: ageHandler.current.value,
      pin: pinHandler.current.value,
      address: addressHandler.current.value,
      gender: genderCategory,
    };

    await db.collection("users").doc(user.uid).set(userData);

    history.push("/more");
  };

  return (
    <div className="Body">
      <div className="container">
        <div className="title">Tell me about yourself</div>
        <form action="POST" onSubmit={formHandler}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input
                ref={nameHandler}
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-box">
              <span className="details">Birthday</span>
              <input
                ref={bdHandler}
                type="date"
                placeholder="Enter your BirthDay"
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                ref={phoneHandler}
                type="text"
                placeholder="Enter your phone"
              />
            </div>
            <div className="input-box">
              <span className="details">Age</span>
              <input
                ref={ageHandler}
                type="text"
                placeholder="Enter your age"
              />
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input
                ref={addressHandler}
                type="text"
                placeholder="Enter your address"
              />
            </div>
            <div className="input-box">
              <span className="details">PIN Code</span>
              <input
                ref={pinHandler}
                type="text"
                placeholder="Enter your PIN"
              />
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
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
