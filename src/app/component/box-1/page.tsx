"use client";
import { useEffect, useState } from "react";
import "../box-1/box-1.css";

export default function ComponentBox1() {
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
              const boxCenter = boxElement.offsetLeft;
              const screenCenter = window.innerWidth ;
              const scrollPosition = boxCenter - (screenCenter / 2);
              backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
              setIsExpanded(true)
            }else if(prev ===1){
              const boxCenter = boxElement.offsetLeft;
              const screenCenter = window.innerWidth ;
              const scrollPosition = boxCenter - (screenCenter / 2);
              backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
              setIsShrink(true)    
             }
            return prev + 1;
          });
        } else if (currentScrollLeft < prevScrollLeft) {

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
    <div
      className={`containerBox-1
        ${isExpanded ? "expanded" : ""}
        ${isShrink ? "shrink" : ""}`}
      style={{ float: "left", marginRight: "20px" }} // Đặt box ở bên trái
    >
      <div className="img">
        <img src="/img/cam1.png" alt="Apple Watch 1" />
        <img src="/img/cam2.png" alt="Apple Watch 2" />
      </div>
      <div className="content">
        <button>
          <a href="#">butbutbut</a>
        </button>
        <span className="brand">Apple</span>
        <a className="name" href="#">Watch Series 9</a>
        <span className="price">$699</span>
        <p>
          Swimproof and crack-resistant technology makes this a great fit for both your weekly swims and early-morning hikes.
        </p>
        <div className="rating">
          <div className="item-1">60%</div>
          <div className="item-2">
            <img src="/img/avatar.jpg" alt="Avatar" />
            <img src="/img/avatar.jpg" alt="Avatar" />
            <img src="/img/avatar.jpg" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
