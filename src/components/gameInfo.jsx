import React,  { useRef, Suspense } from "react";
import { CylinderGeometry, MeshStandardMaterial } from 'three';
import {
  Text3D,
  Center,
  Stars,
  Float,
  useMatcapTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import TextRing from "./TextRing";


export default function GameInfo({whiteTurn, props}) {
  // const scoreboardRef = useRef()
  // const [matcapTexture] = useMatcapTexture("2D2D2A_74716E_8F8C8C_92958E");
  // const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <group {...props}>
      <Suspense>
        <Center position={[0,.9,0]} >
        <TextRing>
          {whiteTurn ? "White turn 🔲" : "Black turn 🔳"}
        </TextRing>
        </Center>
        {/* <Center position={[0,.75,0]} >
        <Text3D
              position={[0, 0, 0]}
              rotation={[0,0,0]}
              scale={[.25, .25, .25]}
              ref={textRef}
              size={w / 9}
              // maxWidth={[-w / 5, -h * 2, 3]}
              font={"/gt.json"}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.08}
              bevelThickness={0.03}
              height={.5}
              lineHeight={1.9}
              letterSpacing={0.3}
              
            >
              {whiteTurn ? "White turn" : "Black turn"}
              <meshMatcapMaterial color="white" matcap={matcapTexture} />
        </Text3D>
        </Center> */}
        
      </Suspense>
    </group>
  );
}
