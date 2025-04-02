import React from "react";
import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
