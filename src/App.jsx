import { Stats, OrbitControls, Circle, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Env() {
  return (
    <Environment
      files="./img/neon_photostudio_1k.hdr"
      background
      ground={{ height: 10, radius: 115, scale: 100 }}
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
        <OrbitControls target={[0, 1, 0]} autoRotate />
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </>
  );
}
