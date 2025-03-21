"use client";
import { useEffect, useState } from "react";
import "../box-2/box-2.css";

export default function ComponentBox2() {
  const [prevScrollLeft, setPrevScrollLeft] = useState(0); 
  const [isExpanded,setIsExpanded] = useState(false)
  const [isShrink,setIsShrink] = useState(false)
  const [scrollTimes, setScrollTimes] = useState(0);

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
            return prev + 1;
          });
        } else if (currentScrollLeft < prevScrollLeft) {
          setScrollTimes(1);
        }
        setPrevScrollLeft(currentScrollLeft);
      }, 100);
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
    <div
    className={`containerBox-2
      ${isExpanded ? "expand" : ""}
      ${isShrink ? "shrink" : ""}`}  >
      <div className="img">
        <img src="./img/apple1.png" alt="Apple Watch 1" />
        <img src="./img/apple2.png" alt="Apple Watch 2" />
      </div>
      <div className="content">
        <span className="brand">Apple</span>
        <a className="name" href="#">Watch Series 9</a>
        <span className="price">$699</span>
        <p>
          Swimproof and crack-resistant technology makes this a great fit for both your weekly swims and early-morning hikes.
        </p>
        <div className="rating">
          <div className="item-1">60%</div>
        </div>
      </div>
    </div>
  );
}
