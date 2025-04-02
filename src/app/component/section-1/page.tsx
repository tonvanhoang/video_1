'use client'
import { useEffect, useState } from 'react'
import '../section-1/section1.css'
export default function ComponentSection1(){
    const [isViture,setViture] = useState(false)
    const [isImg,setImg] = useState(false)
    const [updateImg,setUpdateImg] = useState(false)
    const [noneImg,setNoneImg] = useState(false)
    const [isName,setName] = useState(false)
    const [isItemBottom,setItemBottom] = useState(false)
    const [openLeft,setOpenLeft] = useState(false)
    const [openRight,setOpenRight] = useState(false)
    const [isSection1,setSection1] = useState(false)
    const [isContent,setContent] = useState(false)
    const [isVideo,setVideo] = useState(false)
    useEffect(() => {
        const timeout1 = setTimeout(() => setViture(true), 500);
        const timeout2 = setTimeout(() => setViture(false), 3000);
        const timeoutOpenLeft = setTimeout(() => setOpenLeft(true),1500);
        const timeoutOpenRight = setTimeout(() => setOpenRight(true),1500);
        const timeoutImg1 = setTimeout(() =>setImg(true),3000);
        const timeoutUpdateImg =setTimeout(()=>setUpdateImg(true),3500);
        const timeoutName = setTimeout(() => setName(true),4000);
        const timeoutBottom = setTimeout(() => setItemBottom(true), 4500);
        const timeoutVideo = setTimeout(() => setVideo(true), 5000);
        const timeoutContent = setTimeout(() => setContent(true), 6000);
        const timeoutNoneImg = setTimeout(() => setNoneImg(true), 6000);
        const timeoutSection1 = setTimeout(() => setSection1(true), 8000);
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeoutImg1)
            clearTimeout(timeoutUpdateImg)
            clearTimeout(timeoutName)
            clearTimeout(timeoutBottom)
            clearTimeout(timeoutOpenLeft)
            clearTimeout(timeoutOpenRight)
            clearTimeout(timeoutContent)
            clearTimeout(timeoutNoneImg)
            clearTimeout(timeoutSection1)
            clearTimeout(timeoutVideo)
        };
    }, []);
    useEffect(() => {
        
    }, []);
    return(
        <>
        <div className={`section-1 ${isSection1?"setSection1":""}`}>
                <div className="opening">
                    <div className={`left ${openLeft?"setLeft":""}`}>
                    </div>
                    <div className={`right ${openRight?"setRight":""}`}></div>
                </div>
                <div className={`imgSection1 ${isImg?"setImg":""} ${updateImg?"updateImg":""} ${noneImg?"noneImg":""}`}>
                 <img src="/img/cam3.png" alt="" /> 
                 <img src="/img/cam5.png" alt="" />
                </div>
               <div className={`content ${isContent?"setContent":""}`}>
               <div className="headerContent">
                    <h6 className={`${isViture?"viture":''}`}>VITURE</h6>
                </div>
                <div className={`name ${isName ? "setName":""}`} >
                    <button>PRO</button>
                    <a href='#'>Neckband</a>
                </div>
                <div className={`ItemBottom ${isItemBottom?"setBottom":""}`}>
                    <p className='title'><span>Sleek</span> Design, Trusted Like a <span>True Friend</span></p>
                    <a className={`clickVideo ${isVideo ? "setvideo":""}`}>Watch the Film</a>
                </div>
               </div>
            </div>
        </>
    )
}