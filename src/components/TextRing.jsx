/* eslint-disable react/no-unknown-property */
import { Cylinder } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from 'three'

function ccccc(children, color) {
  const fontSize = 300

  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1048
  const context = canvas.getContext('2d')

  context.fillStyle = "transparent"
  context.fillRect(0, 0, canvas.width, canvas.height)

  // context.font = `bold ${fontSize}px  -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
  context.font = `bold ${fontSize}px helvetica`
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = color
  context.fillText(children, 1024, canvas.height / 2)
  return canvas

}


export default function TextRing({children}) {
  const canvas = useMemo(() => {
    return ccccc(children, "#342a21")
  }, [children])


  const texture = useRef()
  const texture2 = useRef()
  useFrame(({ clock }) => {
    texture.current.offset.x = clock.getElapsedTime() / 8
  })

  const cylArgs = [.32, .25, .25, 120, 1, true]

  return (
    <group rotation-y={Math.PI / 4} scale={[1, 1, 1]}>
      {/* <primitive object={target.texture} ref={texture} wrapS={THREE.RepeatWrapping} wrapT={THREE.RepeatWrapping} repeat={[1, 1]} /> */}

      <Cylinder args={cylArgs} side={THREE.FrontSide}>
        <meshStandardMaterial  attach="material">
          <canvasTexture
            attach="map"
            repeat={[4, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>

      <Cylinder args={cylArgs}>
        <meshStandardMaterial attach="material" side={THREE.BackSide}>
          <canvasTexture            
            attach="map"
            repeat={[8, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture2}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>
    </group>
  )
}