"use client";
import { useState, useEffect } from "react";
import "../video-1/video-1.css";
import ComponentNav from "@/app/component/nav/page";
import ComponentHeader from "@/app/component/header/page";
export default function PageVideo_1() {
  return (
    <div className={`backGroud`}>
      <ComponentNav />
      <ComponentHeader />
    </div>
  );
}
