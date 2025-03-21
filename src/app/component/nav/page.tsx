import '../nav/nav.css'
export default function ComponentNav(){
    return(
        <>
        <div className="containerNav">
            <div className="navLeft">
                <img src="./img/gg.png" alt="" />
                <a href="#">Google Shopping</a>
            </div>
            <div className="navRight">
                <a href="#">Tôn văn Hoàng</a>
                <img src="./img/avatar.jpg" alt="" />
            </div>
        </div>
        </>
    )
}