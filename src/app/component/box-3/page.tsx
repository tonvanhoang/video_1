"use client";
import { useEffect, useState } from "react";
import "../box-3/box-3.css";

export default function ComponentBox3() {
  const [iscentered, setIscentered] = useState(false);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [scrollTimes, setScrollTimes] = useState(0);

  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-3") as HTMLElement;
    if (!backgroundElement || !boxElement) return;
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollLeft = backgroundElement.scrollLeft;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollTimes((prev) => {
          if (prev === 4) {
            const boxCenter = boxElement.offsetLeft;
            const screenCenter = window.innerWidth;
            const scrollPosition = boxCenter - (screenCenter / 2);
            backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
            setIscentered(true);
          }
          return prev +1;
        });
        setPrevScrollLeft(currentScrollLeft);
      }, 100);
    };
    backgroundElement.addEventListener("scroll", handleScroll);

    return () => {
      backgroundElement.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollLeft]);

  return (
    <div className={`containerBox-3 ${iscentered ? "centered" : ""}`}>
      <div className="childBox-3">
        <p>top</p>
        <span>65</span>
        <p>bottom</p>
      </div>
      <div className="contentBox-3">
        <p>Google</p>
        <span>Nest Thermostat</span>
        <a>$49.99</a>
      </div>
    </div>
  );
}
