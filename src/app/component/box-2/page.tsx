"use client";
import { useEffect, useState } from "react";
import "../box-2/box-2.css";
import Link from "next/link";
export default function ComponentBox2() {
  const [prevScrollLeft, setPrevScrollLeft] = useState(0); 
  const [isExpanded,setIsExpanded] = useState(false)
  const [isShrink,setIsShrink] = useState(false)
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isReset,setIsreset]= useState(false)
  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-1") as HTMLElement;
    if (!backgroundElement || !boxElement) return;
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollLeft = backgroundElement.scrollLeft;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (currentScrollLeft > prevScrollLeft) {
          setScrollTimes((prev) => {
           if (prev === 0) {
              setIsShrink(true)
              setIsExpanded(false)
            }else if(prev ===1){
              setIsShrink(false)
              setIsExpanded(true)
            }
            else if(prev ===2){
              setIsreset(true)
            }
            return prev + 1;
          });
        } else if (currentScrollLeft < prevScrollLeft) {
          setScrollTimes(1);
        }
        setPrevScrollLeft(currentScrollLeft);
      }, 300);
    };
    if (backgroundElement) {
      backgroundElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (backgroundElement) {
        backgroundElement.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollLeft]);

  return (
    <>
    <div
    className={`containerBox-2
      ${isExpanded ? "expand" : ""}
      ${isShrink ? "shrink" : ""}
      ${isReset ? "reset":""}
      `}  >
      <div className="img">
        <img src="./img/cam2.png" alt="Apple Watch 1" />
      </div>
      <div className="content">
        <span className="brand">B&O</span>
        <Link className="name" href={`/page/video-2`}>Beoplay H95</Link>
        <span className="price">$849 </span>
        <p>
          Swimproof and crack-resistant technology makes this a great fit for both your weekly swims and early-morning hikes.
        </p>
        <div className="rating">
          <div className="item-1">60%</div>
        </div>
      </div>
    </div>
    </>
  );
}
