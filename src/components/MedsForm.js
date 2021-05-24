import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import db from "../firebase";

const MedsForm = () => {
  const [myState, setMyState] = useState([]);
  //the refs
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

  const formHandler = (e) => {
    e.preventDefault();

    const medData = [
      { name: med1Ref.current.value, time: again1Ref.current.value },
      { name: med2Ref.current.value, time: again2Ref.current.value },
      { name: med3Ref.current.value, time: again3Ref.current.value },
      { name: med4Ref.current.value, time: again4Ref.current.value },
      { name: med5Ref.current.value, time: again5Ref.current.value },
    ];
    // console.log(medData.map(({name, time, id}) => (console.log(name,time,id))));
    medData.map((o) =>
      db.collection("meds").add({ name: o.name, time: o.time })
    );
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
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedsForm;
