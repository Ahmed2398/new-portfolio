import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Building Scalable SaaS Systems",
          "Performance & Architecture Focused",
          "Real-time Web Applications Expert",
          "System Design & Optimization",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
