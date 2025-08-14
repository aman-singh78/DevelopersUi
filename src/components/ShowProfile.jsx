import { useState } from "react";
import ShowFeed from "./ShowFeed";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const ShowProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || " ");
  const [lastName, setLastName] = useState(user?.lastName || " ");
  const [gender, setGender] = useState(user?.gender);
  const [age, setAge] = useState(user?.age);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    try {
      console.log("Save profile called");
      const updatedFields = { firstName, lastName, gender, age, photoUrl };

      const res = await axios.patch(BASE_URL + "update", updatedFields, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Update successful:", res.data);
      dispatch(addUser(res.data.user));
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || err.message);
    }
  };
  return (
    <div className="flex items-start justify-center gap-10 px-5 mt-6">
      <div className="card card-dash bg-base-300 w-96 h-[600px]">
        <div className="card-body overflow-y-auto">
          <h2 className="card-title justify-center">Login</h2>
          <label className="mt-2">
            <span>First Name</span>
            <input
              type="text"
              className="input input-md w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="mt-4">
            <span>Last Name</span>
            <input
              type="text"
              className="input input-md w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="mt-4">
            <span>Photo URL</span>
            <input
              type="text"
              className="input input-md w-full"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="mt-4">
            <span>Age</span>
            <input
              type="text"
              className="input input-md w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="mt-4">
            <span>Gender</span>
            <input
              type="text"
              className="input input-md w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>

          <div className="card-actions justify-center mt-5">
            <button onClick={handleSaveProfile} className="btn btn-primary">
              Save Profile
            </button>
          </div>
        </div>
      </div>

      <div className="card card-dash bg-base-300 w-96 h-[600px]">
        <div className="card-body overflow-y-auto">
          <h2 className="card-title justify-center">Profile Preview</h2>
          <ShowFeed user={{ firstName, lastName, gender, age, photoUrl }} />
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
