import { Suspense } from 'react';
import './styles.css';
import styled from 'styled-components';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Background from './components/Background';
import TextSectionOne from './components/TextSectionOne';

import Hero from './components/models/Hero';
import Deskv2 from './components/Deskv2';
import Human from './components/Human';
import OctoDraco from './components/OctoDraco';

export default function App() {
  return (
    <Wrapper className='App'>
      <Background />
      <TextSectionOne />
      <Canvas clasName='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
      </Canvas>
      <Canvas clasName='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Deskv2 />
        </Suspense>
      </Canvas>
      <Canvas clasName='canvas'>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Human />
        </Suspense>
      </Canvas>
      <Canvas clasName='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <OctoDraco />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1a0340;

  canvas {
    height: 720px;
  }
`;
