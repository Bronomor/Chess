// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from '@react-three/drei'
// import { Pawn } from './components/Pawn'
import { Chessboard } from './components/Chessboard'
import { Room } from './components/SmokingRoom'
import { Lights } from './components/Lights'
import { useEffect, useRef, useState } from 'react'
import StartMenu from './components/StartMenu'

function App() {
  const [running, setRunning] = useState(false)
  const [restart, setRestart] = useState(0)
  const [selectedTimeFormat, setSelectedTimeFormat] = useState("5+3")

  const canvasRef = useRef()
  const controlsRef = useRef()

  return (
    <>
    <Canvas ref={canvasRef} camera={{near: 0.00001, position: [1, 0.8, 1.2],}}>
      <OrbitControls ref={controlsRef} autoRotate={!running} autoRotateSpeed={1.8} zoomSpeed={0.5} dampingFactor={0.15}/>
      {/* <Lights/> */}
      <Chessboard running={running} key={restart} timeFormat={selectedTimeFormat} position={[-0.087797,-0.1,-0.009988]} onPointerMissed={()=>{console.log("missed")}}/>
      {/* <Room position={[0,-25,0]} scale={[20,20,20]}/> */}
      <Environment preset='apartment' background/>
      <Stats />
      {/* <axesHelper/> */}
    </Canvas>
      {!running ?
        <StartMenu setRunning={setRunning} handleChange={(e)=>{setSelectedTimeFormat(e.target.value)}}/>
        :
        <span
          className='btn--restart'
          onClick={()=>{
            setRestart(prev => prev+1)
          }}
        >Restart</span>

        
      }
        </>
  )
}

export default App
