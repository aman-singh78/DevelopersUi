import React from "react";

const ShowConnections = ({ user }) => {
  const { firstName, lastName, photoUrl, age } = user;
  return (
    <div>
      <div className="flex justify-center items-center flex-col m-6">
        <div className="card bg-base-100 w-96 shadow-sm border border-white mx-5 ">
          <div className="card-body">
            <img className="h-30" alt="image" src={photoUrl} />
            <h1>{firstName + " " + lastName}</h1>
            <h2>{age}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowConnections;
