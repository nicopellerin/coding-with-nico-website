import * as React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// @ts-ignore
function Asset({ url }) {
  const gltf = useLoader(GLTFLoader, url)
  // @ts-ignore

  return <primitive object={gltf.scene} />
}

const ThreeDee = () => {
  return (
    <Canvas
      // colorManagement
      // concurrent
      //   camera={{
      //     position: [0, 0, 1],
      //   }}
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        // zIndex: -2,
      }}
      //   gl={{
      //     alpha: false,
      //     antialias: false,
      //     stencil: false,
      //   }}
      //   onCreated={({ gl }) => {
      //     gl.toneMapping = THREE.ACESFilmicToneMapping
      //     gl.setClearColor(new THREE.Color(`${bgColor}`))
      //   }}
    >
      <React.Suspense fallback={null}>
        <Asset url="/scene.gltf" />
        {/* <fog attach="fog" args={['#DD5E98', 8, 1]} /> */}
        <directionalLight position={[0, 1, 2]} color="#fff" />
      </React.Suspense>
    </Canvas>
  )
}

export default ThreeDee
