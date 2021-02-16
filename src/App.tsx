import React from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import RotatingBox from './components/RotatingBox';
import { softShadows, OrbitControls } from '@react-three/drei';

softShadows();

function App() {
  return (
    <Canvas shadowMap camera={{ position: [-5, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -2]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
        <RotatingBox
          position={[0, 1, 0]}
          args={[3, 2, 1]}
          color="lightblue"
          speed={2}
        />
        <RotatingBox position={[-2, 1, -5]} color="pink" speed={6} />
        <RotatingBox position={[5, 1, -2]} color="pink" speed={6} />
      </group>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
