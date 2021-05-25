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
  const [loading, setLoading] = useState(true);
  const logout = async () => {
    await auth.signOut().then(() => console.log("signout"));
  };

  function setLiItems(meds) {
    const {med1,med2,med3,med4,med5} = meds;
    const medArray = [med1, med2, med3, med4, med5];
    
    return (
      <ul>
        {medArray.map((o) => (
          <li>
            {o.name} on{" "}
            {`${moment(o.time).format("DD/MM/YYYY")} - ${moment(o.time).format(
              "hh:mm A"
            )}`}
          </li>
        ))}
      </ul>
    );
  }

  function convertFunc(med) {
    return moment(med.time).unix() * 1000;
    //change datetimelocal to seconds.
    //subtract seconds(now) and seconds(time given) to get the val;
  }

  useEffect(() => {
    const waitForUser = async () => {
      await user;
      await db;
      console.log("1st phase");
      await db
        ?.collection(user.email)
        ?.doc("medData")
        ?.get()
        ?.then((doc) => {
          const { med1, med2, med3, med4, med5 } = doc.data();
          setMeds({ med1, med2, med3, med4, med5 });
          setLoading(false);
          
          if (convertFunc(med1) - moment.now() >= 0) {
            setTimeout(() => {
              //speech api!
            }, convertFunc(med1) - moment.now());
          }
          if (convertFunc(med2) - moment.now() >= 0) {
            setTimeout(() => {
              alert("take your medsssssssss");
            }, convertFunc(med2) - moment.now());
          }
          if (convertFunc(med3) - moment.now() >= 0) {
            setTimeout(() => {
              alert("take your medsssssssss");
            }, convertFunc(med3) - moment.now());
          }
          if (convertFunc(med4) - moment.now() >= 0) {
            setTimeout(() => {
              alert("take your medsssssssss");
            }, convertFunc(med4) - moment.now());
          }
          if (convertFunc(med5) - moment.now() >= 0) {
            setTimeout(() => {
              alert("take your medsssssssss");
            }, convertFunc(med5) - moment.now());
          }
        });
    };
    waitForUser();
  }, []);

  return (
    <>
      <Navbar logout={logout} />
      <div className="the_main">
        <h1>Your medicines:</h1>
        <ul>
          {!loading && setLiItems(meds)}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
