import React from 'react';
import { AbsoluteFill, Sequence, Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';
import { TextOverlay } from '../../components/TextOverlay';
import { MessyCloset } from '../../components/MessyCloset';
import { AppInterface } from '../../components/AppInterface';

export const TikTokLaunchScript1: React.FC = () => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();

  // Animation for Scene 3 (Result)
  const resultSlideUp = interpolate(frame - 120, [0, 20], [height, 0], { extrapolateRight: 'clamp' });

  // Use a specific "Success" looking screenshot for the result
  const resultImage = 'assets/Screenshot_1769530501.png'; // Picking one from the list

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>

      {/* Scene 1: The Problem (Messy Closet) */}
      <Sequence from={0} durationInFrames={45}>
        <MessyCloset />
        <TextOverlay text="I have clothes..." subText="but nothing to wear." />
      </Sequence>

      {/* Scene 2: The Solution (App Interface / AI) */}
      <Sequence from={45} durationInFrames={75}>
         <AppInterface />
        <TextOverlay text="So I built an AI" subText="to choose for me." />
      </Sequence>

      {/* Scene 3: The Result (Good Outfit / Success UI) */}
      <Sequence from={120} durationInFrames={70}>
         <AbsoluteFill style={{ backgroundColor: '#fff' }}>
             <Img
                src={staticFile(resultImage)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transform: `translateY(${resultSlideUp}px)`
                }}
             />
         </AbsoluteFill>
        <TextOverlay text="It actually works 😭" />
      </Sequence>

      {/* Scene 4: CTA (Logo) */}
      <Sequence from={190} durationInFrames={110}>
         <AbsoluteFill style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
            <Img
                src={staticFile('assets/deo-logo.png')}
                style={{ width: '80%', objectFit: 'contain' }}
            />
         </AbsoluteFill>
        <TextOverlay text="Trying this with real people." subText="Link in bio." />
      </Sequence>

    </AbsoluteFill>
  );
};
