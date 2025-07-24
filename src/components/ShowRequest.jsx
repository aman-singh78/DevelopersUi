import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const ShowRequests = ({ user }) => {
  const { _id } = user;
  const { fromUserId } = user;
  const { firstName, lastName, photoUrl, age } = fromUserId;
  const dispatch = useDispatch();

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col m-6">
        <div className="card bg-base-100 w-96 shadow-sm border border-white mx-5 ">
          <div className="card-body">
            <img className="h-30" alt="image" src={photoUrl} />
            <h1>{firstName + " " + lastName}</h1>
            <h2>{age}</h2>
            <button
              className="btn btn-primary"
              onClick={() => handleRequest("accepted", _id)}
            >
              Accept
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleRequest("rejected", _id)}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRequests;
