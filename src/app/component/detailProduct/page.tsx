'use client';
import { useState, useEffect } from 'react';
import '../detailProduct/detailProduct.css';

export default function DetailProduct({ setIsShowDetail }: { setIsShowDetail: (value: boolean) => void }) {
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [scrollTimes, setScrollTimes] = useState(0);
  const [isNone, setIsNone] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [IsCartDetail,setIsCartDetail] = useState(false)
  const [isNoneCard,setIsNoneCard] = useState(false)
  useEffect(() => {
    const backgroundElement = document.querySelector('.backGroud') as HTMLElement;
    if (!backgroundElement) return;
  
    const handleScroll = () => {
      const currentScrollTop = backgroundElement.scrollTop;
      if (currentScrollTop > 0) {
        setIsNoneCard(true);
        setTimeout(() => setIsNone(true), 1000);
      }
      setPrevScrollTop(currentScrollTop);
    };
  
    backgroundElement.addEventListener('scroll', handleScroll);
    return () => backgroundElement.removeEventListener('scroll', handleScroll);
  }, []);
  

  useEffect(() => {
    if (isNone) {
      const backgroundElement = document.querySelector('.backGroud') as HTMLElement;
      if (backgroundElement) backgroundElement.scrollTop = 0;
      setTimeout(() => setIsShowDetail(false), 0);
    }
  }, [isNone, setIsShowDetail]);

  useEffect(() => {
    const backgroundElement = document.querySelector('.backGroud') as HTMLElement;
    const boxElement = document.querySelector('.containerDetail') as HTMLElement;
    if (!backgroundElement || !boxElement) return;

    const centerBox = () => {
      const boxCenter = boxElement.offsetLeft + boxElement.offsetWidth / 2;
      const scrollLeft = boxCenter - backgroundElement.offsetWidth / 2;
      backgroundElement.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    };

    if (!isCentered) {
      setIsCentered(true);
      centerBox();
    }
  }, [isCentered]);
useEffect(()=>{
  setTimeout(() => {
    setIsCartDetail(true)
  }, 500);
})
  return (
    <div className={`containerDetail ${isNone ? 'none' : ''}`}>
      <div className={`childDetail ${IsCartDetail ? "card":""} ${isNoneCard ? "NoneCard":""}`}>
        {/* Phần hình ảnh sản phẩm */}
        <div className="detailLeft">
          <img src="/img/cam2.png" alt="Apple Watch Series 9" />
          <div className='img'>
            <img src="/img/cam2.png" alt="" />
            <img src="/img/cam2.png" alt="" />
            <img src="/img/cam2.png" alt="" />
            <img src="/img/cam2.png" alt="" />
          </div>
        </div>
        {/* Phần mô tả sản phẩm */}
        <div className="detailRight">
          <a>Beoplay H95</a>
          <label>B&O</label>
          <span>$849</span>
          <p>
          Swimproof and crack-resistant technology makes this a great fit for both your weekly swims and early-morning hikes.          </p>
          {/* Nút mua hàng */}
          <div className="button">
            <button><a href="#">Add to cart</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}