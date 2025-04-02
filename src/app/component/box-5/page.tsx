'use client';
import { useEffect, useState } from 'react';
import '../box-5/box-5.css';

export default function ComponentBox5() {  
  const [isCentered, setIsCentered] = useState(false);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [scrollTimes, setScrollTimes] = useState(0);

  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".containerBox-5") as HTMLElement;
    if (!backgroundElement || !boxElement) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollLeft = backgroundElement.scrollLeft;
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (currentScrollLeft > prevScrollLeft) {
          setScrollTimes((prev) => {
            if (prev === 6) {
              const boxCenter = boxElement.offsetLeft;
              const screenCenter = window.innerWidth;
              const scrollPosition = boxCenter - screenCenter / 2;

              backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
              setIsCentered(true);
            }
            return prev + 1;
          });
        }
        setPrevScrollLeft(currentScrollLeft);
      }, 100); // Giảm thời gian debounce để phản ứng nhanh hơn nhưng vẫn mượt
    };

    backgroundElement.addEventListener("scroll", handleScroll);
    return () => {
      backgroundElement.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollLeft]);

  useEffect(() => {
    const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
    const boxElement = document.querySelector(".bg_box5") as HTMLElement;
    if (!backgroundElement || !boxElement) return;

    const updatePosition = () => {
      requestAnimationFrame(() => {
        const scrollLeft = backgroundElement.scrollLeft;
        const screenWidth = backgroundElement.offsetWidth;
        const boxWidth = boxElement.offsetWidth;

        // Tính toán vị trí căn giữa
        const newLeft = scrollLeft + (screenWidth / 2) - (boxWidth / 2);
        boxElement.style.transform = `translateX(${newLeft}px)`;
      });
    };

    backgroundElement.addEventListener("scroll", updatePosition);
    updatePosition(); // Chạy ngay khi load trang

    return () => {
      backgroundElement.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <>
      <div className={`containerBox-5 ${isCentered ? "centered" : ""}`}>
        <div className="top">
          <img src="./img/box5.png" alt="Apple" />
        </div>
        <div className="bottom">
          <div className="contentBox-3">
            <p>Google</p>
            <span>Nest Hust</span>
            <span>(2nd gen)</span>
            <a>$49.99</a>
          </div>
          <div className="rating">
            <div className="item-1"><span>60%</span></div>
          </div>
        </div>
      </div>
      <div className="bg_box5"></div>
    </>
  );
}
