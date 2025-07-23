import React, { useState } from "react";
import ShowProfile from "./ShowProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  if (!user) return;
  console.log(user);
  const { firstName, lastName, gender, age, photoUrl } = user;
  return <ShowProfile user={{ firstName, lastName, gender, age, photoUrl }} />;
};

export default Profile;
