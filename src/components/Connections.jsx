import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/userConnections";
import ShowConnections from "./showConnections";

const Connections = () => {
  const dispatch = useDispatch();
  const [error, setShowError] = useState("");
  const users = useSelector((store) => store.userConnection);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    if (users && users.length === 0) {
      setShowError("You have no connection request..");
    }
  }, [users]);

  if (!users) return <div>Loading...</div>;
  if (users.length === 0) return <div>{error}</div>;

  return (
    <>
      <h1 className="flex justify-center my-5 text-2xl">Connections</h1>

      {users.map((user) => (
        <ShowConnections user={user} key={user._id} />
      ))}
    </>
  );
};

export default Connections;
