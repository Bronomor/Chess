// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from '@react-three/drei'
// import { Pawn } from './components/Pawn'
import { Chessboard } from './components/Chessboard'
import { Room } from './components/SmokingRoom'
import { Lights } from './components/Lights'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [running, setRunning] = useState(false)
  const [restart, setRestart] = useState(0)
  const controlsRef = useRef()
  // useEffect(()=> {
  //   setRunning(false)
  // }, [restart])
  return (
    <>
    <Canvas ref={controlsRef} camera={{near: 0.00001, position: [1, 0.8, 1.2], }}>
      <OrbitControls autoRotate={!running} autoRotateSpeed={1.8} dampingFactor={0.15}/>
      {/* <Lights/> */}
      <Chessboard key={restart} position={[-0.087797,-0.1,-0.009988]} onPointerMissed={()=>{console.log("missed")}}/>
      {/* <Room position={[0,-25,0]} scale={[20,20,20]}/> */}
      <Environment preset='apartment' background/>
      <Stats />
      {/* <axesHelper/> */}
    </Canvas>
      {!running ?
        <>
          <span 
          className='btn--start'
          onClick={(e) => {
            setRunning(true)
            // e.target.style.display = "none"
          }}
          >Start the game</span>
          <div className='background'></div>
        </>
        :
        <span
          className='btn--restart'
          onClick={()=>{
            setRestart(prev => prev+1)
            console.log(controlsRef)
          }}
        >Restart</span>
      }
        </>
  )
}

export default App
