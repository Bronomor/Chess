/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import {  useFrame, useThree } from '@react-three/fiber'

export function Rook({pref, material, hoverMaterial, ...props}) { 
  const mesh = useRef()
  const { viewport } = useThree()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(0)
  // useFrame(() => (pref.current.rotation.z = pref.current.rotation.x += 0.01))
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    return ()=> document.body.style.cursor = 'auto';
  }, [hovered])
  
  return (
      <mesh 
        {...props}
        ref={pref}
        material={hovered || active ? hoverMaterial: material}
        // scale={(viewport.width / 5) * (active ? 1.5 : 1)}
        // onClick={(e) => {
        //     setActive((prev) => prev+10)
        //     // console.log(pref)
        //   }
        // }
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover(true)
          }}
        onPointerOut={(e) => setHover(false)} 
        />

      )
  }