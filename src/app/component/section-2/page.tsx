'use client'
import { useEffect, useState } from 'react'
import '../section-2/section2.css'
export default function ComponentSection2(){
    const [isSection2,setSection2] = useState(false)
    const [isImg,setImg] = useState(false)
    const [isTop,setTop] = useState(false)
    const [isBottom,setBottom] = useState(false)
    const [scaleImg,setScaleImg] = useState(false)
    const [isLeft,setLeft] = useState(false)
    const [isRight ,setRight] = useState(false)
    const [isContent,setContent] = useState(false)
    const [childImg,setChildImg] = useState(false)
    const [showGPU,setGPU] = useState(0)
    const [showCPU,setCPU] = useState(0)
    const [showRAM,setRAM] = useState(0)

    useEffect(() => {
        const timeoutSection2 = setTimeout(() => setSection2(true), 6500);
        const timeoutImg = setTimeout(() => setImg(true), 7200);
        const timoutScaleImg = setTimeout(() => setScaleImg(true), 9000);
        const timeoutTop = setTimeout(() => setTop(true), 9200);
        const timeoutRight = setTimeout(() => setRight(true), 9200);
        const timeoutBottom = setTimeout(() => setBottom(true), 9000);
        const timeoutLeft = setTimeout(() => setLeft(true), 9500);
        const timeoutContent = setTimeout(() => setContent(true), 11000);
        const timeoutChildImg = setTimeout(() => setChildImg(true), 11000);
        return () => {
            clearTimeout(timeoutSection2)
            clearTimeout(timeoutImg)
            clearTimeout(timoutScaleImg)
            clearTimeout(timeoutBottom)
            clearTimeout(timeoutTop)
            clearTimeout(timeoutLeft)
            clearTimeout(timeoutContent)
            clearTimeout(timeoutChildImg)
            clearTimeout(timeoutRight)
        };
        
    }, []);
    useEffect(() => {
        setTimeout(() => {
            const intervalGPU = setInterval(() => {
                const gpu = 40;
                 setGPU(prevGPU => {
                     if (prevGPU < gpu) {
                         return prevGPU + 1;
                     } else {
                         clearInterval(intervalGPU);
                         return prevGPU;
                     }
                 });
             }, 30);
             
     
             return () => clearInterval(intervalGPU); 
        },10000);
        setTimeout(() => {
            const intervalCPU = setInterval(() => {
                const cpu = 7;
                 setCPU(prevCPU => {
                     if (prevCPU < cpu) {
                         return prevCPU + 1;
                     } else {
                         clearInterval(intervalCPU);
                         return prevCPU;
                     }
                 });
             }, 100);
             return () => clearInterval(intervalCPU); 
        },10000);
        setTimeout(() => {
            const intervalRAM = setInterval(() => {
                const ram = 6;
                 setRAM(prevRAM => {
                     if (prevRAM < ram) {
                         return prevRAM + 1;
                     } else {
                         clearInterval(intervalRAM);
                         return prevRAM;
                     }
                 });
             }, 100);
             
     
             return () => clearInterval(intervalRAM); 
        },10000);
    },
     []);
    return(
        <>
        <div className={`containerSection2 ${isSection2?"setSection2":""}`}>
        <div className={`top ${isTop?"setTop":""}`}>
            <div className={`left ${isLeft?"setLeft":""}`}>
                <div className={`LeftContent ${isContent?"setContent":""}`}>
                    <a href="#">SecureVision 360 ai Pro 
                    4-Camera</a>
                    <span>$699</span>
                    <p>The SecureVision 360 AI delivers top-tier, intelligent security that adapts to your needs, providing an all-in-one solution for smarter, safer environments. With advanced features, crystal-clear imaging, and intelligent automation, this system provides a new level of protection and convenience.</p>
                    <button>Add to card</button>
                </div>
            </div>
            <div className={`right ${isRight?"setRight":""} ${isImg?"setImg":""} ${scaleImg?"scaleImg":""}`}>  
            <img src="/img/cam5.png" alt="" />
            <div className={`childImg ${childImg?"setChildImg":""}`}>
                <div className="item">
                <img src="/img/cam5.png" alt="" />
                </div>
                <div className="item">
                <img src="/img/cam5.png" alt="" />
                </div>
                <div className="item">
                <img src="/img/cam5.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className={`bottom ${isBottom?"setBottom":""}`}>
            <div className="item-1">
                <div className="left">
                    <a href="#">Much More <span>Powerful</span></a>
                </div>
                <div className="right">
                    <div className='item'>
                        <a href="#">{showCPU}x</a>
                        <span>CPU Power</span>
                    </div>
                    <div className='item'>
                    <a href="#">{showGPU}x</a>
                    <span>GPU Power</span>
                    </div>
                    <div className='item'>
                    <a href="#">{showRAM}x</a>
                    <span>RAM</span>
                    </div>
                </div>
                
            </div>
            <div className="item-2">
                <div className="left">
                    <a href="#">No Noise</a>
                    <div className="spiral-container">
                        <div className="spiral"></div>
                        <div className="spiral"></div>
                        <div className="spiral"></div>
                        <div className="spiral"></div>
                        <div className="spiral"></div>
                    </div>
                </div>
                <div className="right">
                    <div className='item noHeat'>
                        <a href="#">No Heat</a>
                    </div>
                    <div className='item'>
                        <div>
                            <a href="#">Resolution</a>
                            <span>Full HD (1080p)</span>
                        </div>
                        <div className='pin'>
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <a href="#">Image Sensor</a>
                            <span>CMOS, CCD</span>
                        </div>
                        <div className="lightbulb">
                            💡
                            </div>

                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}