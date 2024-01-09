// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from '@react-three/drei'
// import { Pawn } from './components/Pawn'
import { Chessboard } from './components/Chessboard'
import { Room } from './components/SmokingRoom'
import { Lights } from './components/Lights'
import { useRef, useState } from 'react'

function App() {
  const [running, setRunning] = useState(false)
  
  // <Chessboard position={[0,-0.1,0]}/>
  // <Room position={[0,-35,0]} scale={[26,26,26]}/>
  return (
    <>
    <Canvas camera={{near: 0.00001, position: [1, 0.8, 1.2], }}>
    <OrbitControls autoRotate={!running} autoRotateSpeed={1.6}/>
    <Lights/>
    <Chessboard position={[-0.087797,-0.1,-0.009988]}/>
    <Environment preset='apartment' background/>
      <Stats />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <axesHelper args={[15]} />
      </Canvas>
      <span 
        className='btn--start'
        onClick={(e) => {
          setRunning(true)
          e.target.style.display = "none"
        }}
      >Start the game</span>
    </>
  )
}

export default App
