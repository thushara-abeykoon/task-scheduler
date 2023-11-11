import React from "react";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center">
      <div className="drop-shadow-xl w-96 justify-center mt-10 h-40 bg-white rounded-2xl  flex flex-col place-items-center">
        <h2 className="text-3xl">404 Error</h2>
        <h2 className="text-xl mt-5">Page Not Found!</h2>
      </div>
    </div>
  );
}
