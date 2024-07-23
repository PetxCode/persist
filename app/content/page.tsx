"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const mainAction = () => {
    // e.preventDefault();
    // console.log(e.target);
  };

  return (
    <main>
      <div>
        <h1>Welcome to our website!</h1>
        <p>This is the default page.</p>

        <div className="mt-10 w-[400px]">
          <div className="">
            <div className="flex flex-col">
              <label className="font-semibold text-[12px] mb-2">
                Enter your Name
              </label>

              <input
                type="text"
                name="name"
                className="border rounded-md h-[45px] outline-none pl-2 "
              />
            </div>

            <button
              onClick={mainAction}
              type="submit"
              className="mt-5 border flex justify-center items-center h-[50px] w-full bg-neutral-900 text-white rounded-md"
            >
              Created
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
