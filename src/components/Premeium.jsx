import React from "react";
import { BASE_URL } from "../constants";
import axios from "axios";

const Premeium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    // it should open the razorpay dialog box
  };

  return (
    <div className="m-10">
      <div className="flex w-full ">
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li>- Chat with other people</li>
            <li>- Chat with other people</li>
            <li>- Blue Tick</li>
            <li>- 3 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("silver")}
            className=" btn btn-secondary"
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li>- Chat with other people</li>
            <li>- Chat with other people</li>
            <li>- Blue Tick</li>
            <li>- 6 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className=" btn btn-primary"
          >
            Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premeium;
