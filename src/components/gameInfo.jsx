import React,  { useRef, Suspense } from "react";
import { CylinderGeometry, MeshStandardMaterial } from 'three';
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  useMatcapTexture,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function GameInfo({whiteTurn, props}) {
  const scoreboardRef = useRef();
  // Use the useCylinder hook from drei to set up the cylinder
  // const { geometry, material } = useCylinder({
  //   args: [2, 4, 1.5, 4], // arguments for CylinderGeometry
  //   material: { flatShading: true }, // material options
  // });
  const geometry = new CylinderGeometry(.5, .25, .5, 4);
  const material = new MeshStandardMaterial({ 
    flatShading: false, 
    side: 2,
    color: 0x432616,
    emissive: 0x000000,
  });
  
  return (
    <group>
      <mesh 
        {...props} 
        castShadow
        receiveShadow
        ref={scoreboardRef} 
        geometry={geometry} 
        material={material} 
        position={[0,1,0]}
        rotation={[0,Math.PI/4,0]}
        onClick={()=>{
        console.log(scoreboardRef)
        }}

      />
    </group>
  );
}
