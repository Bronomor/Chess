/* eslint-disable react/prop-types */
import React,  { useRef, Suspense, useState, useEffect } from "react";
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


export default function GameInfo({whiteTurn, timeFormat, ...props}) {
  const scoreboardRef = useRef()
  
  const increment = parseInt(timeFormat.split('+')[1]) 
  const [whiteTime, setWhiteTime] = useState(60*parseInt(timeFormat.split('+')[0]))
  const [blackTime, setBlackTime] = useState(60*parseInt(timeFormat.split('+')[0]))

  const [blackMatcapTexture] = useMatcapTexture("1B1B1B_999999_575757_747474");
  const [whiteMatcapTexture] = useMatcapTexture("312C34_A2AAB3_61656A_808494");
  // const [whiteMatcapTexture] = useMatcapTexture("2D2D2A_74716E_8F8C8C_92958E");
  const { width: w, height: h } = useThree((state) => state.viewport);

  const updateTime = () => {
    if (whiteTurn) {
      console.log(whiteTime%60)
      if(whiteTime <= 0) {
        alert("White lost on time!")
      } else {
        setWhiteTime(prev => prev-1)
      }
    } else {
      if(blackTime <= 0) {
        alert("Black lost on time!")
      } else {
        setBlackTime(prev => prev-1)

      }
    }
  }

  useEffect(()=>{   
    const interval = setInterval(updateTime, 1000)
    
    return () => {
      clearInterval(interval)
      if (whiteTurn) {
        setWhiteTime(prev=>prev+increment)
      } else {
        setBlackTime(prev=>prev+increment)
      }
    }
  }, [whiteTurn])

  

  return (
    <group {...props}>
      <Suspense>
        <Center position={[0,.9,0]} >
        <TextRing>
          {whiteTurn ? "White turn 🔲" : "Black turn 🔳"}
        </TextRing>
        </Center>
        <Center position={[1,.15,0]} rotation={[0,-Math.PI/2,0]} >
          
          <Text3D
                position={[-0.05, -0.433, -1]}
                rotation={[0,0,0]}
                scale={[.25, .25, .25]}
                ref={scoreboardRef}
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
                {`${blackTime/600<1?0:''}${Math.floor(blackTime/60)}:${blackTime%60<10?0:''}${blackTime%60}`}
                <meshMatcapMaterial color="white" matcap={blackMatcapTexture} />
          </Text3D>
          <Text3D
                position={[1.1, -0.433, -1]}
                rotation={[0,0,0]}
                scale={[.25, .25, .25]}
                ref={scoreboardRef}
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
                {`${whiteTime/600<1?0:''}${Math.floor(whiteTime/60)}:${whiteTime%60<10?0:''}${whiteTime%60}`}
                <meshMatcapMaterial color="white" matcap={whiteMatcapTexture} />
          </Text3D>
        </Center>
          

        
      </Suspense>
    </group>
  );
}
