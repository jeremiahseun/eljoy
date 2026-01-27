import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { TextOverlay } from '../../components/TextOverlay';

export const TikTokLaunchScript1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>

      {/* Scene 1: The Problem */}
      <Sequence from={0} durationInFrames={45}>
        <AbsoluteFill style={{ backgroundColor: '#ff6b6b', justifyContent: 'center', alignItems: 'center' }}>
            {/* Placeholder for Messy Closet */}
            <div style={{ opacity: 0.5, fontSize: 100 }}>😫</div>
            <div style={{ position: 'absolute', bottom: 50, color: 'white', fontSize: 24, fontFamily: 'monospace' }}>[CLIP: Messy Closet / Frustration]</div>
        </AbsoluteFill>
        <TextOverlay text="I have clothes..." subText="but nothing to wear." />
      </Sequence>

      {/* Scene 2: The Solution */}
      <Sequence from={45} durationInFrames={75}>
         <AbsoluteFill style={{ backgroundColor: '#4ecdc4', justifyContent: 'center', alignItems: 'center' }}>
            {/* Placeholder for Coding/Building */}
            <div style={{ opacity: 0.5, fontSize: 100 }}>📱</div>
            <div style={{ position: 'absolute', bottom: 50, color: 'white', fontSize: 24, fontFamily: 'monospace' }}>[CLIP: Scrolling Photos / Deo App]</div>
         </AbsoluteFill>
        <TextOverlay text="So I built an AI" subText="to choose for me." />
      </Sequence>

      {/* Scene 3: The Result */}
      <Sequence from={120} durationInFrames={70}>
         <AbsoluteFill style={{ backgroundColor: '#ffe66d', justifyContent: 'center', alignItems: 'center' }}>
            {/* Placeholder for Deo App */}
            <div style={{ opacity: 0.5, fontSize: 100 }}>✨</div>
            <div style={{ position: 'absolute', bottom: 50, color: 'black', fontSize: 24, fontFamily: 'monospace' }}>[CLIP: Deo Generating Outfit]</div>
         </AbsoluteFill>
        <TextOverlay text="It actually works 😭" />
      </Sequence>

      {/* Scene 4: CTA */}
      <Sequence from={190} durationInFrames={110}>
         <AbsoluteFill style={{ backgroundColor: '#1a535c', justifyContent: 'center', alignItems: 'center' }}>
             {/* Placeholder for CTA */}
            <div style={{ opacity: 0.5, fontSize: 100 }}>🚀</div>
            <div style={{ position: 'absolute', bottom: 50, color: 'white', fontSize: 24, fontFamily: 'monospace' }}>[CLIP: Final Look / User]</div>
         </AbsoluteFill>
        <TextOverlay text="Trying this with real people." subText="Link in bio." />
      </Sequence>

    </AbsoluteFill>
  );
};
