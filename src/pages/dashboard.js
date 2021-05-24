import React from "react";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import '../components/Dashboard.css';
import db from "../firebase";

const Dashboard = () => {
  const logout = async () => {
    await auth.signOut().then(() => console.log("signout"));
  };
  return (
    <>
          <Navbar logout={logout} />
          <div className="the_main">
              <div>
                  Your next medicine
            </div>
          </div>
    </>
  );
};

export default Dashboard;
