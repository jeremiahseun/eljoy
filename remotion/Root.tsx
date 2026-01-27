import React from 'react';
import { Composition } from 'remotion';
import { TikTokLaunchScript1 } from './compositions/TikTokLaunch/Script1';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TikTokLaunchScript1"
        component={TikTokLaunchScript1}
        durationInFrames={300} // 10 seconds @ 30fps
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
