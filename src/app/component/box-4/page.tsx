"use client";
import { useEffect, useState } from "react";
import "../box-4/box-4.css";

export default function ComponentBox4() {
  const [isCentered, setIsCentered] = useState(false); // Căn giữa khi lướt
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [bgPosition, setBgPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Căn giữa khi hover

  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-4") as HTMLElement;
    if (!backgroundElement || !boxElement) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollLeft = backgroundElement.scrollLeft;
      const screenWidth = window.innerWidth;
      clearTimeout(scrollTimeout);
      setBgPosition(currentScrollLeft);

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
      }, 300);
    };

    backgroundElement.addEventListener("scroll", handleScroll);

    return () => {
      backgroundElement.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollLeft]);

  // Khi hover vào, tự căn giữa
  const handleMouseEnter = () => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-4") as HTMLElement;
    if (!backgroundElement || !boxElement) return;

    setTimeout(() => {
      const boxCenter = boxElement.offsetLeft;
      const screenCenter = window.innerWidth;
      const scrollPosition = boxCenter - screenCenter / 2;

      backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setIsHovered(true);
    }, 500); // ⏳ ĐÃ CHỈNH LẠI 800ms
  };


  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`containerBox-4 ${isCentered ? "centered" : ""} ${isTop ? "return" : ""} ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="top">
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
      <div className="bg" style={{ left: `${bgPosition}px` }}></div>
    </>
  );
}
