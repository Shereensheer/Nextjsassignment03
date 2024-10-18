"use client";

import React from "react";
import NAVBAR from "./navbar/page";
import ABOUT from "./about/page";
import CONTACT from "./contact/page";
import SKILLS from "./skills/page";
import { useRouter } from "next/navigation";

export default function HOME() {
  return (
    <div>
      <NAVBAR />
      <ABOUT />
      <SKILLS />
      <CONTACT />
      
    </div>
  );
}
