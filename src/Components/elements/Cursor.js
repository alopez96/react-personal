import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import './animate.js'


function Cursor({ theme, width, isMobile, hoverable }) {

  // gsap animation
  let bigBall  = useRef(null)
  let smallBall  = useRef(null)
  
  useEffect(()=>{
    console.log('bigBall', bigBall)
    console.log('smallBall', smallBall)

    // event listener for mouse move
    document.body.addEventListener('mousemove', onMouseMove);

    // event listener for hover
    for (let i = 0; i < hoverable.length; i++) {
      hoverable[i].addEventListener('mouseenter', onMouseHover);
      hoverable[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      gsap.to(bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
      })
      gsap.to(smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      })
    }

    // Hover an element
    function onMouseHover() {
      gsap.to(bigBall, .3, {
        scale: 4
      })
    }
    function onMouseHoverOut() {
      gsap.to(bigBall, .3, {
        scale: 1
      })
    }
  
  }, [theme, width])

  if(!isMobile){
    return (
      <div>
      <div className="cursor">
        <div 
        className="cursor__ball cursor__ball--big" 
        ref={el => bigBall = el}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        
        <div
        className="cursor__ball cursor__ball--small"
        ref={el => smallBall = el}>
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
  } else {
    return null
  }
}



export default Cursor;