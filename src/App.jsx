import {
  Stats,
  OrbitControls,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Leva, useControls } from 'leva';

function Model() {
  const { scene } = useLoader(GLTFLoader, './models/libreta2.glb');
  console.log(scene);
  const {
    x,
    y,
    z,
    visible,
    color,
    // metalness,
    // roughness,
    // clearcoat,
    // clearcoatRoughness,
    // transmission,
    // ior,
    // thickness,
  } = useControls('Suzanne', {
    x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    visible: true,
    color: { value: '#00ff00' },
    // metalness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    // roughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    // clearcoat: { value: 1, min: 0, max: 1.0, step: 0.01 },
    // clearcoatRoughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    // transmission: { value: 1.0, min: 0, max: 1.0, step: 0.01 },
    // ior: { value: 1.74, min: 1, max: 5, step: 0.01 },
    // thickness: { value: 3.12, min: 0, max: 5, step: 0.01 },
  });

  return (
    <primitive
      object={scene}
      children-5-rotation={[x, y, z]}
      children-5-visible={visible}
      children-5-children-0-children-0-children-0-children-1-children-4-material-color={
        color
      }
      //children-5-material-metalness={metalness}
      // children-0-material-roughness={roughness}
      // children-0-material-clearcoat={clearcoat}
      // children-0-material-clearcoatRoughness={clearcoatRoughness}
      // children-0-material-transmission={transmission}
      // children-0-material-ior={ior}
      // children-0-material-thickness={thickness}
    />
  );
}

function Env() {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 },
  });
  return (
    <Environment
      preset="sunset"
      background
      // ground={{
      //   height: height,
      //   radius: radius,
      //   scale: scale,
      // }}
      blur={0.9}
    />
  );
}

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [-8, 5, 8] }}>
        <Env />
        <Model />
        {/* <ContactShadows
          scale={150}
          position={[0.33, -0.33, 0.33]}
          opacity={1.5}
        /> */}
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
        <Stats />
      </Canvas>
      <Leva collapsed />
    </>
  );
}
