import React from "react";
import Particles from "react-particles-js";

export default function BgParticles() {
  return (
    <div style={{width:"100%", height:"", position:'absolute', zIndex:"-100",overflow: 'hidden',top:0}}>
      <Particles
        height="4500px"
        width="100%"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.8,
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
     
    </div>
  );
}
