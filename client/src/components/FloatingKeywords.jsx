import * as THREE from 'three';
import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

// This is our base object. It defines what a "word" looks like but contains no animation logic.
// It will be "instanced" or copied by the <Instances> component.
// A "dumb" component that just displays the text
function Word({ children, ...props }) {
  const color = useMemo(() => new THREE.Color(), []);
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // NOTE: The useFrame hook has been REMOVED from this component.
  // The parent component will now handle all animation.

  // We still need to handle the hover color change here.
  useFrame(() => {
     ref.current.material.color.lerp(color.set(hovered ? '#fa27a0' : '#8B5CF6'), 0.1);
  });

  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props}>
      {children}
      <meshBasicMaterial transparent opacity={0.2} toneMapped={false} />
    </Text>
  );
}

// This component now contains ALL the animation logic.
// It manages every single instance.
// The "smart" parent component that handles all animation
function Cloud({ count = 100, bgKeywords  }) {
  const { viewport } = useThree();
  const groupRef = useRef();

  // Create the data for each word just once
  const words = useMemo(() => {
    const temp = [];
    // const keywords = ["React", "Java", "Node.js", "SQL", "Express", "MongoDB", "Git", "CSS", "JavaScript", "HTML", "REST API", "DSA"];
    const keywords = bgKeywords;
    for (let i = 0; i < count; i++) {
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      const x = (Math.random() - 0.5) * viewport.width;
      const y = (Math.random() - 0.5) * viewport.height;
      const z = (Math.random() - 0.5) * 10;
      temp.push({ 
        initialPosition: new THREE.Vector3(x, y, z), 
        word: keyword 
      });
    }
    return temp;
  }, [count, bgKeywords, viewport.width, viewport.height]);

  // This single useFrame loop controls all the words
  useFrame((state) => {
    // Check if the group and its children are ready
    if (groupRef.current && groupRef.current.children.length > 0) {
      // Loop through each word in the group
      groupRef.current.children.forEach((child, index) => {
        const { initialPosition } = words[index];
        const speedFactor = 0.2;
        const time = state.clock.elapsedTime * speedFactor + index * 0.5;

        // Calculate the new orbiting position
        const x = initialPosition.x + Math.sin(time) * 2;
        const z = initialPosition.z + Math.cos(time) * 2;

        // Update the child's position directly
        child.position.set(x, initialPosition.y, z);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(({ initialPosition, word }, index) => (
        <Word key={index} position={initialPosition} children={word} />
      ))}
    </group>
  );
}

// Your main export remains the same.
export default function FloatingKeywords({keywords}) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 75 }}>
      <fog attach="fog" args={['#F9FAFB', 0, 40]} />
      <Cloud count={100} bgKeywords={keywords} />
    </Canvas>
  );
}