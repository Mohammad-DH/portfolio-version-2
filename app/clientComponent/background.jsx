"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function Background({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,

          color: 0x000033, // Set the color of the fog to a darker blue shade
          backgroundColor: 0x000000,
          highlightColor: 0x0d47a1, // Set the color of the fog highlights to a deeper blue shade
          midtoneColor: 0x1565c0, // Set the color of the fog midtones to a mid-range blue shade
          lowlightColor: 0x1e88e5, // Set the color of the fog lowlights to a lighter blue shade
          speed: 1.5, // Adjust the speed of the fog animation
          zoom: 0.8, // Adjust the zoom level of the fog

          // highlightColor: 0xff9bbe,
          // midtoneColor: 0xff7b8a,
          // lowlightColor: 0xffdd71,
          // baseColor: 0xe4f8ff,
          // blurFactor: 0.6,
          // speed: 2,
          // zoom: 1.05,
          // highlightColor: 0xff5360,
          // midtoneColor: 0xffd69e,
          // lowlightColor: 0xff8cff,
          // baseColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="background" ref={vantaRef} />;
}
