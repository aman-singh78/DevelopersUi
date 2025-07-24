import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showRequest } from "../utils/requestSlice";
import ShowRequests from "./ShowRequest";

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  console.log(requests);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/request/received", {
        withCredentials: true,
      });
      dispatch(showRequest(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return <div>Loading...</div>;
  if (requests.length === 0) return <div>"No request found"</div>;

  return (
    <>
      <h1 className="flex justify-center my-5 text-2xl">Requests</h1>

      {requests.data.map((user) => (
        <ShowRequests user={user} key={user._id} />
      ))}
    </>
  );
};
export default Request;
