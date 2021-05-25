import React, { useRef, useState } from "react";
import "./Register.css";
import db from "../firebase";
import {useHistory} from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const MedsForm = () => {
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const again1Ref = useRef();
  const again2Ref = useRef();
  const again3Ref = useRef();
  const again4Ref = useRef();
  const again5Ref = useRef();

  const med1Ref = useRef();
  const med2Ref = useRef();
  const med3Ref = useRef();
  const med4Ref = useRef();
  const med5Ref = useRef();

  const history = useHistory();


  const formHandler = async (e) => {
    e.preventDefault();

    const medData = {
      med1: { name: med1Ref.current.value, time: again1Ref.current.value },
      med2: { name: med2Ref.current.value, time: again2Ref.current.value },
      med3: { name: med3Ref.current.value, time: again3Ref.current.value },
      med4: { name: med4Ref.current.value, time: again4Ref.current.value },
      med5: { name: med5Ref.current.value, time: again5Ref.current.value },
  };
    setLoading(true);
    await db.collection(user.email).doc("medData").set(medData, { merge: true });
    setLoading(false);
    history.push('/dashboard');
  };

  return (
    <div className="Body">
      <div className="container">
        <div className="title">Let's Start With Your Meds</div>
        <form action="POST" onSubmit={formHandler}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name of Medicine</span>
              <input type="text" ref={med1Ref} />
            </div>
            <div className="input-box">
              <span className="details">
                When do you take it and when again?
              </span>
              <input ref={again1Ref} type="datetime-local" />
            </div>
            <div className="input-box">
              <span className="details">Name of Medicine</span>
              <input type="text" ref={med2Ref} />
            </div>
            <div className="input-box">
              <span className="details">
                When do you take it and when again?
              </span>
              <input ref={again2Ref} type="datetime-local" />
            </div>
            <div className="input-box">
              <span className="details">Name of Medicine</span>
              <input type="text" ref={med3Ref} />
            </div>
            <div className="input-box">
              <span className="details">
                When do you take it and when again?
              </span>
              <input ref={again3Ref} type="datetime-local" />
            </div>
            <div className="input-box">
              <span className="details">Name of Medicine</span>
              <input type="text" ref={med4Ref} />
            </div>
            <div className="input-box">
              <span className="details">
                When do you take it and when again?
              </span>
              <input ref={again4Ref} type="datetime-local" />
            </div>
            <div className="input-box">
              <span className="details">Name of Medicine</span>
              <input type="text" ref={med5Ref} />
            </div>
            <div className="input-box">
              <span className="details">
                When do you take it and when again?
              </span>
              <input ref={again5Ref} type="datetime-local" />
            </div>
          </div>
          <div className="button">
            {loading ? (
              <img
                src="./loading.svg"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                alt=""
              />
            ) : (
              <input type="submit" value="Store!" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedsForm;
  //for retrieving data from firestore!
  //   const getDataFromFirebase = () => {
  //     db.collection("meds").onSnapshot((q) => {
  //       const items = [];
  //       q.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //         setMyState(items);
  //         console.log(items);
  //     });
  //   };

  //   useEffect(() => {
  //     getDataFromFirebase();
  //   }, []);

      // console.log(medData.map(({name, time, id}) => (console.log(name,time,id))));
    // console.log(db.collection("users").doc(""));