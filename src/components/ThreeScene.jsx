import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
    // Using a hosted model for testing
    const gltf = useGLTF('/models/laptop.glb', true);
    return <primitive object={gltf.scene} scale={1.4} />;
}

export default function ThreeScene() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls enablePan={false} enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    );
}