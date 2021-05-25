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
    //change datetimelocal to seconds.
    //subtract seconds(now) and seconds(time given) to get the val;
  }
  
  useEffect(() => {
    const waitForUser = async () => {
      await user;
      await db;
      console.log("1st phase");
      await db
        .collection(user.email)
        .doc("medData")
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
  }, []);


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
