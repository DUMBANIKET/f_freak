import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { styled } from 'styled-components'

const Container=styled.div`
height:30vh;
`

export default function Builder() {
  return (
  <>
  <Container className='p-8'>
  <Canvas>
    <OrbitControls enableZoom={false} autoRotate/>
    <mesh>
        <boxGeometry args={[3,3,3]}></boxGeometry>
    </mesh>
  </Canvas>
  </Container>
  
  </>
  )
}
