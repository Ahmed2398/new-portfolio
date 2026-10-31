import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../theme/ThemeContext";

function Particle() {
  const { isLight } = useTheme();
  return (
    <Particles
      id="tsparticles"
      key={isLight ? "light" : "dark"}
      params={{
        particles: {
          color: { value: isLight ? "#64748b" : "#ffffff" },
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: isLight ? 1.6 : 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
