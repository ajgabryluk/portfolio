import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 3.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(color.set(hovered ? '#EF233C' : '#2B2D42'), 0.1)
  })
  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
    </Billboard>
  )
}

function Cloud({ count = 4, radius = 22 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const words = [
        "Unity",
        "Unreal 5",
        "React",
        "UX Researcher",
        "VR",
        "XR",
        "Gamer",
        "BCI",
        "Python",
        "Machine Learning",
        "AI",
        "Graduate Student",
        "Georgia Tech",
        "Musician",
        "Front End",
        "NodeJS",
        "Traveler",
        "Camper",
        "CSS",
        "HTML 5",
        "Web Developer",
        "Data Science",
        "Computer Science",
        "Git Hub",
        "UI/UX Design"
      ]
    let k = 0;
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++){
        for (let j = 0; j < count; j++) {
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), words[k]])
            k++
        }
    }
    console.log(temp)
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function WordCloud() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={5} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}
