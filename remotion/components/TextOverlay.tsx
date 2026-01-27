import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const TextOverlay: React.FC<{ text: string; subText?: string }> = ({ text, subText }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    from: 0.5,
    to: 1,
    config: { damping: 10 },
  });

  const opacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: { damping: 20 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          textAlign: 'center',
          padding: 40,
        }}
      >
        <h1
          style={{
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: 80,
            fontWeight: 'bold',
            textShadow: '0px 0px 20px rgba(0,0,0,0.8)',
            margin: 0,
          }}
        >
          {text}
        </h1>
        {subText && (
          <h2
            style={{
              color: 'white',
              fontFamily: 'sans-serif',
              fontSize: 40,
              fontWeight: 'normal',
              textShadow: '0px 0px 10px rgba(0,0,0,0.8)',
              marginTop: 20,
            }}
          >
            {subText}
          </h2>
        )}
      </div>
    </AbsoluteFill>
  );
};
