import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Html, useProgress } from "@react-three/drei"

function Loader() {
  // Show the current loading progress instead of a blank space
  const { progress } = useProgress()
  return <Html center>{Math.round(progress)} % loaded</Html>
}

const Model = ({ name, scale }) => {
  // location of the 3D model,
  // Currently we have to save the model in the directory, so the
  // name is the name of the folder where the model is saved
  const gltf = useLoader(GLTFLoader, `models/${name}/scene.gltf`)
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={scale} />
    </>
  )
}

export default function LoadModel({ name, scale, autoRotate }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<Loader />}>
        <Model name={name} scale={scale} />
        {/* To add environment effect to the model */}
        <Environment preset="city" />
      </Suspense>
      <OrbitControls autoRotate={autoRotate} />
    </Canvas>
  )
}