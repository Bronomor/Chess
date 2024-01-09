import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";


export function Lights() {
  const ambientRef = useRef();
  const directionalRef = useRef();
  // const pointRef = useRef();
  // const spotRef = useRef();

  useControls("Ambient Light", {
    visible: {
      value: true,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      onChange: (v) => {
        ambientRef.current.intensity = v;
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v);
      },
    },
  });

  // useControls("Directional Light", {
  //   visible: {
  //     value: false,
  //     onChange: (v) => {
  //       directionalRef.current.visible = v;
  //     },
  //   },
  //   intensity: {
  //     value: 1,
  //     min: 0,
  //     max: 10,
  //     onChange: (v) => {
  //       directionalRef.current.intensity = v;
  //     },
  //   },
  //   position: {
  //     x: 300,
  //     y: 300,
  //     z: 300,
  //     onChange: (v) => {
  //       directionalRef.current.position.copy(v);
  //     },
  //   },
  //   color: {
  //     value: "white",
  //     onChange: (v) => {
  //       directionalRef.current.color = new THREE.Color(v);
  //     },
  //   },
  // });

  // <directionalLight ref={directionalRef} castShadow />
  return (
    <>
    <ambientLight ref={ambientRef}  />
    </>
  );
}