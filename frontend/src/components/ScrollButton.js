
import React, {useState} from 'react';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Button} from '@mui/material'
import { scroller } from "react-scroll";
// import { Button } from './Styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(true)
  
//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 0){
//       setVisible(true)
//     } 
//     else if (scrolled <= -100){
//       setVisible(false)
//     }
//   };
  
  const scrollToTop = () =>{
    scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
  };
  
//   window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FastfoodIcon onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;