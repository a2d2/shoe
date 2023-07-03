import { Stats, OrbitControls, Circle, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';

function Env() {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 1 },
    radius: { value: 115, min: 0, max: 1 },
    scale: { value: 100, min: 0, max: 1 },
  });
  return (
    <Environment
      files="./img/neon_photostudio_1k.hdr"
      background
      ground={{ height: height, radius: radius, scale: scale }}
      //blur={0.9}
    />
  );
}
export default function App() {
  const gltf = useLoader(GLTFLoader, './models/scene.glb');
  // console.log(gltf);

  return (
    <>
      {/* <Canvas camera={{ position: [-0.5, 1, 2] }} shadows> */}
      <Canvas camera={{ position: [-0.5, 1, 2] }}>
        {/* <Environment preset="forest" background blur={0.9} /> */}
        <Env />
        {/* <directionalLight position={[3.3, 1.0, 4.4]} intensity={1} castShadow /> */}
        <primitive
          object={gltf.scene}
          position={[0, 0, 0]}
          // children-0-castShadow
        />
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle> */}
        {/* <OrbitControls target={[0, 1, 0]} autoRotate /> */}
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </>
  );
}
