import React,{useEffect,useRef} from 'react'
import './StafCard.css'
import imag from '../../assets/staff8.png'
const StafCard = ({name,position,description,src,width,height}) => {
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
           // backgroundImage: `url(https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2003/10/soho_image_28_october_2003/10098404-2-eng-GB/SOHO_image_28_October_2003_node_full_image_2.jpg)`
          // backgroundImage: `url(file:///C:/Users/benmi/Desktop/eliteWebsite/elite-jasmin/src/assets/staff8.png)`
          overflow: "hidden"
          }}>
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