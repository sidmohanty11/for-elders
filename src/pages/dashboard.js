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
  const [itsTime, setItsTime] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [genderOfPerson, setGenderOfPerson] = useState("");
  const logout = async () => {
    await auth.signOut().then(() => console.log("signout"));
  };

  function whatToSpeak(username, genderOfPerson) {
    let utterance;
    if (genderOfPerson.toLowerCase() === "male") {
      utterance = `Grandpa `;
    } else {
      utterance = `Grandma `;
    }
    utterance += `${username.split(" ")[0]}, please take your medicine!`;
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10];
    msg.voiceURI = "native";
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    msg.text = utterance;
    msg.lang = "en-US";

    speechSynthesis.speak(msg);
    return <h2>{utterance}</h2>;
  }

  function setLiItems(meds) {
    const { med1, med2, med3, med4, med5 } = meds;
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
    const userInfo = async () => {
      await user;
      await db
        ?.collection(user.email)
        ?.doc("userInfo")
        ?.get()
        ?.then((doc) => {
          const { gender, name } = doc.data();
          setGenderOfPerson(gender);
          setUsername(name);
        });
    };
    userInfo();
  }, []);

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
              setItsTime(true);
              setTimeout(() => {
                setItsTime(false);
              }, 10000);
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
        {itsTime && (
          <>
            <img src="./speak.gif" alt="alert" />
            {whatToSpeak(username, genderOfPerson)}
          </>
        )}
        {loading && <img src="./loading.svg" width="100px" height="100px" />}
        <ul>{!loading && setLiItems(meds)}</ul>
      </div>
    </>
  );
};

export default Dashboard;
