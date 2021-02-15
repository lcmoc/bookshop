import React, { useState, useEffect } from 'react';

const WindowWith = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth)
  const handleResize = () => {
    setWindowWith(window.innerWidth)
  }


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return(
    <div>Window With: {windowWith}</div>
  );
}

export default WindowWith;