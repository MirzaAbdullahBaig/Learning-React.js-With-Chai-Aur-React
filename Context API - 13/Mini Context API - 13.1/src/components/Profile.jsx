import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
        <div className="text-center">
          <p className="text-2xl font-bold mt-6 text-gray-700">Please Login</p>
        </div>
    );
  }

  return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mt-6 text-gray-700">
          Welcome, {user.username}!
        </h1>
        <p className="text-gray-500 mt-2">We're glad to see you back.</p>
      </div>
  );
}

export default Profile;
