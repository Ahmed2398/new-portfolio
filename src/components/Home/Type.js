import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FinTech platforms",
          "RegTech & compliance",
          "real-time dashboards",
          "SaaS products",
          "team leadership",
        ],
        autoStart: true,
        loop: true,
        delay: 55,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
