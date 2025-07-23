import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUserFeed } from "../utils/userFeed";
import ShowFeed from "./showFeed";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(JSON.stringify(feed, null, 2));

  const getFeed = async () => {
    const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
    dispatch(addUserFeed(res.data.data));
    console.log(res.data.data);
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {feed && feed.map((user) => <ShowFeed key={user._id} user={user} />)}
    </div>
  );
};

export default Feed;
