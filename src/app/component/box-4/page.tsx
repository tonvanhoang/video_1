"use client";
import { useEffect, useState, useRef } from "react";
import "../box-4/box-4.css";

export default function ComponentBox4() {
  const [isCentered, setIsCentered] = useState(false);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isClass,setIsClass] = useState(false)
  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-4") as HTMLElement;
    if (!backgroundElement || !boxElement) return;
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollLeft = backgroundElement.scrollLeft;
      const screenWidth = window.innerWidth;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (currentScrollLeft > prevScrollLeft) {
          setScrollTimes((prev) => {
            if (prev === 4) {
              const boxCenter = boxElement.offsetLeft;
              const screenCenter = screenWidth;
              const scrollPosition = boxCenter - screenCenter / 2;
              backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
              setIsCentered(true);
            } else if (prev === 6) {
              setIsTop(true);
            }
            return prev + 1;
          });
        }
        setPrevScrollLeft(currentScrollLeft);
      }, 100);
    };
    backgroundElement.addEventListener("scroll", handleScroll);
    return () => {
      backgroundElement.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollLeft]);
  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".bg_box4") as HTMLElement;
    if (!backgroundElement || !boxElement) return;
    const updatePosition = () => {
      const scrollLeft = backgroundElement.scrollLeft;
      const screenWidth = backgroundElement.offsetWidth;
      const boxWidth = boxElement.offsetWidth;
      // Tính toán vị trí căn giữa
      const newLeft = scrollLeft + (screenWidth / 2) - (boxWidth / 2);
      boxElement.style.transform = `translateX(${newLeft}px)`;
    };
    backgroundElement.addEventListener("scroll", updatePosition);
    updatePosition(); // Chạy ngay khi load trang
    return () => {
      backgroundElement.removeEventListener("scroll", updatePosition);
    };
  }, []);
  const hoverContainer = ()=>{
    setTimeout(() => {
      setIsClass(true)
    }, 300);
  }
  const leaveContainer=()=>{
    setIsClass(false)
  }
  return (
    <>
      <div
        className={`containerBox-4 ${isCentered ? "centered" : ""} ${isTop ? "return" : ""}`}
        onMouseEnter={hoverContainer}
        onMouseLeave={leaveContainer}
      >
        <div className={`top`}>
        {isClass && <div className="newTop"></div>} 

          <img src="./img/box4.png" alt="Apple" />
        </div>
        <div className="bottom">
          <div className="contentBox-3">
            <p>Google</p>
            <span>Nest Hust</span>
            <span>(2nd gen)</span>
            <a>$49.99</a>
          </div>
          <div className="rating">
            <div className="item-1">60%</div>
          </div>
        </div>
      </div>
      <div className="bg_box4"></div>
    </>
  );
}
