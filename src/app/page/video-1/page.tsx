"use client";
import { useState, useEffect } from "react";
import "../video-1/video-1.css";
import ComponentNav from "@/app/component/nav/page";
import ComponentHeader from "@/app/component/header/page";
import DetailProduct from "@/app/component/detailProduct/page";

export default function PageVideo_1() {
  const [IsShowDetail, setIsShowDetail] = useState(false);
  const [bgClass, setBgClass] = useState("hidden-scroll");

  useEffect(() => {
    setBgClass(IsShowDetail ? "scroll" : "hidden-scroll");
  }, [IsShowDetail]);

  return (
    <div className={`backGroud ${bgClass}`}>
      <ComponentNav />
      <ComponentHeader setIsShowDetail={setIsShowDetail} />
      {IsShowDetail && <DetailProduct setIsShowDetail={setIsShowDetail} />}
    </div>
  );
}
