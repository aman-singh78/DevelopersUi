import React from "react";
import { Link } from "react-router-dom";

const ShowConnections = ({ user }) => {
  const { firstName, lastName, photoUrl, age, _id } = user;
  return (
    <div>
      <div className="flex justify-center items-center flex-col m-6">
        <div className="card bg-base-100 w-96 shadow-sm border border-white mx-5 ">
          <div className="card-body">
            <img className="h-30" alt="image" src={photoUrl} />
            <h1>{firstName + " " + lastName}</h1>
            <h2>{age}</h2>
            <Link to={"/chat/" + _id}>
              <button className="btn btn-primary">Chat</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowConnections;
