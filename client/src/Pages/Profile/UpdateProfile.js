import React from "react";
import "./profile.css";
const UpdateProfile = () => {
  return (
    <div className="w-[75%] h-[100%] flex items-center background-greadient">
      <div className="border rounded-lg border-gray-700 p-5 w-[40%] mx-auto h-[80%]">
        <h1 className="text-white text-center">Hello Pradeep</h1>
        <div className=" flex flex-wrap items-center mt-5 gap-3 justify-center">
          {
            <img
              src="https://assets.website-files.com/638994e3ac476c94ba486f9c/638dc823ac558a1dfe810bbc_team-03-p-500.png"
              className="w-[100px] rounded-full h-[100px]"
              alt=""
            />
          }
          <form className="flex flex-col gap-3 mt-5 justify-center items-center">
            <input
              type="text"
              className="bg-gray-900 outline-none  text-gray-300 rounded-lg p-2"
              placeholder="Name"
            />
            <button className="bg-blue-500 px-3 w-full py-2 rounded-md text-white">
              Change
            </button>
          </form>
        </div>

        <form className="flex flex-col gap-3 mt-10 items-center">
          <input
            type="password"
            className="bg-gray-900 w-full outline-none  text-gray-300 rounded-lg p-2"
            placeholder="Enter old password"
          />
          <input
            type="password"
            className="bg-gray-900  w-full outline-none text-gray-300 rounded-lg p-2"
            placeholder="Enter new password"
          />

          <button className="bg-blue-500  w-full px-3 py-2 rounded-md text-white">
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
