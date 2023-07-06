import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  SpotLight,
} from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import Floor from './Floor';
import Lights from './Lights';

// import { Model } from './libreta4';

export default function App() {
  function Model(props) {
    // const ref = useRef();
    const { nodes, materials } = useGLTF('./models/libreta5.glb');

    // useFrame((state) => {
    //   const t = state.clock.getElapsedTime();
    //   ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5));
    //   ref.current.rotation.x = Math.cos(t / 4) / 8;
    //   ref.current.rotation.y = Math.sin(t / 4) / 8;
    //   ref.current.position.y = (0.2 + Math.sin(t / 1.5)) / 10;
    // }, []);

    return (
      // <group ref={ref} {...props} dispose={null}>
      <group {...props} dispose={null}>
        <group position={[-0.064, -0.021, 0.034]} scale={0.007}>
          <group position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Elástico(3DC1EE99-2D33-4495-8223-4BAA1260D758)'].geometry
              }
              material={materials.Material_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(05DAA8E6-C7CF-4657-92E9-EFD8F0005F06)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(077A05E9-2BD8-4B62-9B01-3387C604942A)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(119D16D1-4942-4A52-BD6A-DE874BB8F32D)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(3D83D045-8E56-4D70-886D-367F1D6F039B)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(5F1CFF6C-5BCC-450C-B831-39FC12063F55)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Front(78DF5E49-7C38-4F8F-A4C5-0D7C24FFB800)'].geometry
              }
              material={materials.Material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['Hojas(A52FF521-4CE0-45A5-BBB4-5174DAD361D2)'].geometry
              }
              material={materials.Material_1}
            />
          </group>
        </group>
      </group>
    );
  }

  return (
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 60 }}>
      {/* <Lights /> */}
      <ambientLight intensity={0.5} />

      <Environment preset="forest" />
      <Model />
      {/* <SpotLight
        intensity={1}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      /> */}
      <ContactShadows
        position={[0, -0.2, 0]}
        color="#ffffff"
        opacity={1.5}
        scale={10}
        blur={1.0}
        far={1.2}
      />
      {/* <Floor /> */}
      <axesHelper args={[5]} />
      <OrbitControls
        // minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI}
        // enableZoom={false}
        // enablePan={false}
      />
    </Canvas>
  );
}
