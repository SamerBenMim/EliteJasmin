import React,{useEffect,useRef} from 'react'
import './StafCard.css'
import imag from '../../assets/staff8.png'
const StafCard = ({name,position,description,src,width,height,quote}) => {
  // const image=useRef();
  // useEffect(()=> {
  //   console.log("img",image);
  // image.current.style.setProperty("--bg","secretary.jpg");
  // },[])
  

  return (
    <div className="cardCont" style={{   width:width,
      height:height}}>
        <div className="cardHead">
            <h1>
            {name}
            </h1>
        </div>
        <div className="cardImg" style={{
          overflow: "hidden"
          }}>
            <div className='quote'>
            {quote}
            </div>
        <img src={src} style={{width:"100%",height:'100%', }} alt="img" />
        </div>
        <div className="cardFoot">
        <h1>
            {position}
        </h1>
        </div>
    </div>
  )
}

export default StafCard