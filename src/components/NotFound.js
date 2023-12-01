import React from "react";
import SadAnimation from "../images/sadAnimation.gif";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center">
      <div className="drop-shadow-xl w-96 justify-center mt-10 h-64 bg-white rounded-2xl  flex flex-col place-items-center">
        <img src={SadAnimation} className="w-24 h-24 my-3" />
        <h2 className="text-3xl"> Error 404 </h2>
        <h2 className="text-md mt-5">Page Not Found!</h2>
      </div>
    </div>
  );
}
