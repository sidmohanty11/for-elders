import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import "../components/Dashboard.css";
import db from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [meds, setMeds] = useState({});
  const logout = async () => {
    await auth.signOut().then(() => console.log("signout"));
  };

  function convertFunc() {
    let dateString = "7/15/20 7:9:00 PM";

    if (dateString !== "") {
      let dateVal = new Date(dateString);
      let day = dateVal.getDate().toString().padStart(2, "0");
      let month = (1 + dateVal.getMonth()).toString().padStart(2, "0");
      let hour = dateVal.getHours().toString().padStart(2, "0");
      let minute = dateVal.getMinutes().toString().padStart(2, "0");
      let sec = dateVal.getSeconds().toString().padStart(2, "0");
      let ms = dateVal.getMilliseconds().toString().padStart(3, "0");
      let inputDate = dateVal.getFullYear() + "-" + (month) + "-" + (day) + "T" + (hour) + ":" + (minute) + ":" + (sec) + "." + (ms);
      console.log(inputDate);
    }
  }
  useEffect(() => {
    const waitForUser = async () => {
      await user;
      await db;
      console.log("1st phase");
      await db
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const { med1, med2, med3, med4, med5 } = doc.data();
            setMeds({ med1, med2, med3, med4, med5 });
            console.log("done storing");
          }
        });
    };
    waitForUser();
  }, [meds]);
  convertFunc();


  return (
    <>
      <Navbar logout={logout} />
      <div className="the_main">
        <div>Your next medicine</div>
      </div>
    </>
  );
};

export default Dashboard;
