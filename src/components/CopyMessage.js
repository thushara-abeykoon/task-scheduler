import React, { useState } from "react";

export default function CopyMessage({ activeStatus }) {
  return activeStatus ? (
    <div className="copyMessage fixed w-screen bottom-3 flex justify-center z-50">
      <div className="p-3 bg-black bg-opacity-80 rounded-xl text-white text-lg">
        Copied to ClipBoard
      </div>
    </div>
  ) : null;
}
