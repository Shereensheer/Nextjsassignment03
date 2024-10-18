"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ABOUT() {
  const route = useRouter();
  return (
    <div className="bg-fuchsia-300">
      <div className="bg-fuchsia-300  h-screen flex justify-between items-center mr-60 text-3x1 ">
        <h5 className="text-7xl m-40 ">
          This is My first
          <br /> NEXT JS
          <br /> PROJECT
        </h5>

        <ul className="text-3x1 text-black text-2xl">
          <li>Hi I am SHEREEN AHMED</li>
          <li> I hope you like my web page</li>
          <li> I am a becoming a full stack developer</li>
          <li> Thanks to vist my web page</li>

          <center>
            <li className="bg-purple-600 h-7 w-32  mr-auto text-white rounded-xl">
              <button onClick={() => route.push("/skills")}>SKILLS</button>
            </li>
          </center>
        </ul>
      </div>
    </div>
  );
}

export default ABOUT;
