import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AuthorProfile = () => {
  return (
    <div className=" p-5 flex gap-5 background-gredient-main rounded-lg">
      <div className="w-[40%] flex justify-center">
        <img
          src="https://assets.website-files.com/638994e3ac476c94ba486f9c/638dc823ac558a1dfe810bbc_team-03-p-500.png"
          className="w-[200px] rounded-full"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold">Pradeep Yadav</h1>
        <p className="mt-2">
          Luckily cheered colonel I do we attack highest enabled. Tried law yet
          style child. The bore of true of no be deal. Frequently sufficient to
          be unaffected. The furnished she concluded depending.
        </p>
        <div className="flex mt-3 gap-3">
          <FaFacebookF className="border rounded-full bg-white text-black text-3xl p-2" />
          <FaInstagram className="border rounded-full bg-white text-black text-3xl p-2" />
          <FaLinkedinIn className="border rounded-full bg-white text-black text-3xl p-2" />
          <FaXTwitter className="border rounded-full bg-white text-black text-3xl p-2" />
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
