"use client";
import { useState } from "react";
import "../header/header.css";
import ComponentBox1 from "../box-1/page";
import ComponentBox2 from "../box-2/page";
import ComponentBox3 from "../box-3/page";
import ComponentBox4 from "../box-4/page";
import ComponentBox5 from "../box-5/page";
import ComponentBox6 from "../box-6/page";
import DetailProduct from "../detailProduct/page";

export default function ComponentHeader({ setIsShowDetail }: { setIsShowDetail: (value: boolean) => void }) {
  const [IsShowDetail, setLocalShowDetail] = useState(false);

  const handleShowDetail = () => {
    setIsShowDetail(true);
    setLocalShowDetail(true);
  };

  return (
    <div className="containerHeader">
      <div className="title">
        <h1>Hey Cameron</h1>
        <h1>Welcome back!</h1>
      </div>
      <ComponentBox1 />
      <ComponentBox2 ShowDetail={handleShowDetail} />
      <ComponentBox3 />
      <ComponentBox4 />
      <ComponentBox5 />
      <ComponentBox6 />
      {IsShowDetail && <DetailProduct setIsShowDetail={setIsShowDetail} />}
    </div>
  );
}
