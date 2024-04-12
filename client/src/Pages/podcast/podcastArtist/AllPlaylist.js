import React from "react";
import { FaPlay } from "react-icons/fa6";

const AllPlaylist = ({ artist }) => {
  return (
    <div>
      {artist.map((item) => {
        return (
          <div className="hover:bg-gray-700 rounded-lg ">
            <hr class="h-px bg-gray-200 border-0 w-[98%] mx-auto dark:bg-gray-700" />
            <div className="flex flex-col ">
              <div className="flex gap-5 my-5 mx-5 w-[80%]">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3"
                  alt=""
                  className="w-[150px] rounded-lg h-[120px]"
                />
                <div className="text-white flex flex-col gap ">
                  <h1 className="text-xl font-semibold">This is a title</h1>
                  <p className="text-[12px]">this is the artist</p>
                  <p className="text-[14px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti tenetur cumque doloribus quibusdam illo ratione.
                  </p>
                  <div className="flex gap-5 mt-3 items-center">
                    <div className="rounded-full text-black text-[14px] bg-white p-2 border">
                      <FaPlay />
                    </div>
                    <p className="flex text-[14px] gap-1 items-center">
                      <span>date</span>
                      <span>.</span>duration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPlaylist;
