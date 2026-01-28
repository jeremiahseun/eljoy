import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

const SCREENSHOTS = [
  'assets/Screenshot_1769529298.png',
  'assets/Screenshot_1769529313.png',
  'assets/Screenshot_1769529325.png',
  'assets/Screenshot_1769529333.png',
  'assets/Screenshot_1769529745.png',
];

export const AppInterface: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cycle through screenshots every 15 frames (0.5s)
  const index = Math.floor(frame / 15) % SCREENSHOTS.length;

  // Subtle zoom effect
  const scale = interpolate(frame % 15, [0, 15], [1, 1.05]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <Img
          src={staticFile(SCREENSHOTS[index])}
          style={{
            width: '90%',
            height: 'auto',
            maxHeight: '90%',
            objectFit: 'contain',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            borderRadius: 20,
            transform: `scale(${scale})`
          }}
        />
      </div>
      <div style={{
          position: 'absolute',
          bottom: 150,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px 30px',
          borderRadius: 50,
          fontSize: 30,
          fontFamily: 'monospace',
      }}>
          AI ANALYZING WARDROBE...
      </div>
    </AbsoluteFill>
  );
};
