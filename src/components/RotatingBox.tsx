import { MeshWobbleMaterial } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring/three';
import { useFrame, Vector3 } from 'react-three-fiber';
import { Mesh } from 'three';

type Props = {
  position: Vector3;
  args?: any;
  color: string;
  speed: number;
};

function RotatingBox({ position, args, color, speed }: Props) {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    mesh.current!.rotation.x += 0.01;
    mesh.current!.rotation.y += 0.01;
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const spring = useSpring({
    scale: isExpanded ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onClick={() => setIsExpanded(!isExpanded)}
      scale={spring.scale}
      castShadow
      ref={mesh}
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </animated.mesh>
  );
}

export default RotatingBox;
