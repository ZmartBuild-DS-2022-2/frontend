import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Html, useProgress } from "@react-three/drei"

function Loader() {
  // Show the current loading progress instead of a blank space
  const { progress } = useProgress()
  return (
    <Html center className="text-sm">
      {Math.round(progress)} % loaded
    </Html>
  )
}

const Model = ({ url, scale }) => {
  // location of the 3D model, currently we have to save the model in the directory,
  // so the name is the name of the folder where the model is saved
  // For the moment the name and url is hardcoded
  const gltf = useLoader(GLTFLoader, url)

  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={scale} />
    </>
  )
}

export default function LoadModel({ url, scale = 0.8, autoRotate = false }) {
  return (
    <div className="box-border w-full h-52 lg:h-96 border rounded">
      <Canvas flat linear camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={<Loader />}>
          <Model url={url} scale={scale} />
          {/* To add environment effect to the model */}
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate={autoRotate} />
      </Canvas>
    </div>
  )
}
