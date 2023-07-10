import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black/30 z-20 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div
            className="border-r-transparent animate-spin inline-block w-32 h-32 border-4 rounded-full border-blue-500"
            role="status"
          ></div>
        </div>
        <p className="mt-4">Loading</p>
      </div>
    </div>
  );
}
