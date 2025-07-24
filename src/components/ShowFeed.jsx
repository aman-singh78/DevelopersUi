import React from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFeed } from "../utils/userFeed";

const ShowFeed = ({ user }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, age, gender, photoUrl, skills, _id } = user;
  const handleFed = async (status, _id) => {
    try {
      const res = await axios.post(`${BASE_URL}send/${status}/${_id}`, null, {
        withCredentials: true,
      });
      dispatch(removeUserFeed(_id));
    } catch (err) {
      if (err.response?.data?.message === "Request already exists") {
        alert("You’ve already sent a request to this user.");
      } else {
        console.error("Error sending request:", err.message);
      }
    }
  };

  return (
    <div className="card bg-base-300 w-96 h-[400px] shadow-sm flex flex-col items-center">
      <figure className="p-4">
        <img
          src={photoUrl}
          alt="photo"
          className="rounded-xl object-cover h-40 w-40"
        />
      </figure>

      <div className="flex-1 px-6 w-full text-center">
        <p className="font-bold text-lg">{firstName + " " + lastName}</p>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{skills}</p>
      </div>

      <div className="card-actions justify-center mb-4 px-4 w-full">
        <button
          className="btn btn-secondary"
          onClick={() => handleFed("interested", _id)}
        >
          Interested
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFed("ignored", _id)}
        >
          Ignored
        </button>
      </div>
    </div>
  );
};

export default ShowFeed;
