'use client';

import { useState, useEffect } from "react";

export default function WindowSize() {
  console.log('Rendering: WindowSize');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
