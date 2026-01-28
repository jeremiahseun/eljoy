import React, { useMemo } from 'react';
import { AbsoluteFill, Img, staticFile, random } from 'remotion';

const ITEMS = [
  'assets/shirt.webp',
  'assets/jeans.webp',
  'assets/shoes.webp',
  'assets/suit.webp',
];

export const MessyCloset: React.FC = () => {
  // Generate random positions for items
  // We want to fill the screen with "clutter"
  const items = useMemo(() => {
    return new Array(20).fill(0).map((_, i) => {
      const src = ITEMS[Math.floor(random(i) * ITEMS.length)];
      const x = random(i + 100) * 100; // 0-100%
      const y = random(i + 200) * 100; // 0-100%
      const rotate = random(i + 300) * 360;
      const scale = 0.5 + random(i + 400) * 0.5;

      return { src, x, y, rotate, scale };
    });
  }, []);

  return (
    <AbsoluteFill style={{ backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <Img
          key={i}
          src={staticFile(item.src)}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg) scale(${item.scale})`,
            width: 400,
            height: 'auto',
          }}
        />
      ))}
      <AbsoluteFill style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
    </AbsoluteFill>
  );
};
