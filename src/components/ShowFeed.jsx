import React from "react";

const ShowFeed = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, skills } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm flex justify-center items-center flex-wrap">
        <figure>
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <p className="font-bold">{firstName + " " + lastName}</p>
          <p>{gender}</p>
          <p>{age}</p>
          <p>{skills}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary">Ignored</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeed;
