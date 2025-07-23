import React from "react";

const ShowFeed = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, skills } = user;
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
        <button className="btn btn-secondary">Interested</button>
        <button className="btn btn-primary">Ignored</button>
      </div>
    </div>
  );
};

export default ShowFeed;
