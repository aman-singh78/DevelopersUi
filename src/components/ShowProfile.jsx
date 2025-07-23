import { useState } from "react";
import ShowFeed from "./showFeed";
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

      // 2. Make the PATCH request
      const res = await axios.patch(
        BASE_URL + "update",
        updatedFields, // Send the actual data directly
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // 3. Handle successful response
      console.log("Update successful:", res.data);
      dispatch(addUser(res.data.user)); // Assuming your backend returns { user: updatedUser }
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center px-5  ">
      <div className="flex justify-center mx-10">
        <div className="card card-dash bg-base-300 w-96 mt-6">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>

            <label className=" mt-2">
              <span>FirstName</span>
              <input
                type="text"
                placeholder=""
                className="input input-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label className=" mt-4">
              <span>LastName</span>
              <input
                type="text"
                placeholder=""
                className="input input-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className=" mt-2">
              <span>PhotoUrl</span>
              <input
                type="text"
                placeholder=""
                className="input input-md"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
            <label className=" mt-2">
              <span>age</span>
              <input
                type="text"
                placeholder=""
                className="input input-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className=" mt-2">
              <span>Gender</span>
              <input
                type="text"
                placeholder=""
                className="input input-md"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>

            <div className="card-actions justify-center mt-3">
              <button onClick={handleSaveProfile} className="btn btn-primary">
                Save profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ShowFeed
          user={{ firstName, lastName, gender, age, photoUrl }}
        ></ShowFeed>
      </div>
    </div>
  );
};

export default ShowProfile;
