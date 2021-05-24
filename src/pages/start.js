import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TheStartBody from "../components/TheStartBody";
import { auth } from "../firebase";

const LetsStart = () => {
    const logout = async () => {
        await auth.signOut().then(() => console.log("signout"));
  };
  return (
    <div>
      <Navbar logout={logout} />
      <TheStartBody />
    </div>
  );
};

export default LetsStart;
