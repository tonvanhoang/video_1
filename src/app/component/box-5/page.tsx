'use client'
import { useEffect, useState } from 'react';
import '../box-5/box-5.css'
export default function ComponentBox5(){  
       const [iscentered, setIscentered] = useState(false);
      const [prevScrollLeft, setPrevScrollLeft] = useState(0);
      const [scrollTimes, setScrollTimes] = useState(0); // Đếm số lần cuộn ngang
      const [bgPosition, setBgPosition] = useState(0); // Vị trí của .bg
      useEffect(() => {
        const backgroundElement = document.querySelector(".backGroud") as HTMLElement;
        const boxElement = document.querySelector(".containerBox-5") as HTMLElement;
    
        if (!backgroundElement || !boxElement) return;
    
        let scrollTimeout: NodeJS.Timeout;
    
        const handleScroll = () => {
          const currentScrollLeft = backgroundElement.scrollLeft;
          clearTimeout(scrollTimeout);
          setBgPosition(currentScrollLeft);
    
          scrollTimeout = setTimeout(() => {
            if (currentScrollLeft > prevScrollLeft) {
              setScrollTimes((prev) => {
                if (prev === 6) {
                  const boxCenter = boxElement.offsetLeft;
                  const screenCenter = window.innerWidth ;
                  const scrollPosition = boxCenter - (screenCenter / 2);
                  backgroundElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
                  setIscentered(true);
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
      
    return(
        <>
        <div className={`containerBox-5 ${iscentered ? "centered" : ""}`}>
            <div className="top">
            <img src="./img/apple2.png" alt="" />
            </div>
            <div className="bottom">
                <div className='contentBox-3'>
                <p>Google</p>
                <span>Nest Hust</span>
                <span>(2nd gen)</span>
                <a>$49.99</a>
                </div>
                <div className='rating'>
                    <div className='item-1'>60%</div>
                </div>
            </div>
        </div>
        <div className="bg" style={{ left: `${bgPosition}px` }}></div>

        </>
    )
}