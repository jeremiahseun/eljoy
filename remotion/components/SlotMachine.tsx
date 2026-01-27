import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

const ITEMS = [
  'assets/shirt.webp',
  'assets/jeans.webp',
  'assets/shoes.webp',
  'assets/suit.webp',
];

export const SlotMachine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Change item every 5 frames
  const index = Math.floor(frame / 5) % ITEMS.length;

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <Img
        src={staticFile(ITEMS[index])}
        style={{ width: 600, height: 'auto' }}
      />
      <div style={{
          position: 'absolute',
          bottom: 200,
          fontSize: 40,
          fontFamily: 'monospace',
          color: '#333'
      }}>
          ANALYZING...
      </div>
    </AbsoluteFill>
  );
};
