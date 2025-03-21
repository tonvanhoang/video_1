"use client";
import { useState } from "react";
import "../video-1/video-1.css";
import ComponentNav from "@/app/component/nav/page";
import ComponentHeader from "@/app/component/header/page";
import ComponentBox4 from "@/app/component/box-4/page";

export default function PageVideo_1() {
  return (
    <div className={`backGroud`}> 
      <ComponentNav />
      <ComponentHeader />
    </div>
  );
}
