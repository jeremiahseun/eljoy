# Remotion Skill Guide

This guide provides instructions and best practices for creating videos programmatically using Remotion.

## Core Concepts

### 1. Composition
The entry point for a video. Defined in `Root.tsx`.
```tsx
<Composition
  id="MyVideo"
  component={MyVideo}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920} // TikTok/Reels format
/>
```

### 2. Sequence
Used to time components on the timeline.
```tsx
<Sequence from={0} durationInFrames={60}>
  <Intro />
</Sequence>
<Sequence from={60}>
  <MainContent />
</Sequence>
```
*   `from`: Start frame.
*   `durationInFrames`: Length of the segment.
*   `layout="none"`: Use if you don't want the Sequence to wrap children in an absolute div (useful for layouts).

### 3. AbsoluteFill
A helper component to fill the screen (position absolute, top/left/bottom/right 0).
```tsx
import { AbsoluteFill } from 'remotion';

const MyComponent = () => (
  <AbsoluteFill style={{ backgroundColor: 'white' }}>
    {/* Content */}
  </AbsoluteFill>
);
```

### 4. useCurrentFrame & useVideoConfig
Hooks to get animation state.
```tsx
const frame = useCurrentFrame();
const { fps, width, height } = useVideoConfig();
```

## Animation

### Interpolate
Map frame numbers to values (opacity, scale, translate).
```tsx
import { interpolate, useCurrentFrame } from 'remotion';

const frame = useCurrentFrame();
const opacity = interpolate(frame, [0, 20], [0, 1], {
  extrapolateRight: 'clamp',
});
```

### Spring
Physics-based animation for smooth movement.
```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const scale = spring({
  frame,
  fps,
  from: 0,
  to: 1,
  config: { damping: 10 },
});
```

## Best Practices

1.  **Idempotency:** Components must render the same output for the same frame number. Avoid `Math.random()` or `Date.now()` inside render. Use seeded randoms if necessary.
2.  **Asset Loading:** Use `staticFile()` for assets in the `public/` folder.
    ```tsx
    import { staticFile } from 'remotion';
    <Img src={staticFile('logo.png')} />
    ```
3.  **Optimization:** Heavy computations should be memoized.
4.  **Fonts:** Load fonts using `@remotion/google-fonts` or standard CSS `@font-face`.

## Common Patterns for "TikTok" Style

*   **Fast Cuts:** Short sequences (1-2 seconds).
*   **Pop-in Text:** Use `spring` scaling on text elements.
*   **Overlays:** Semi-transparent black overlays behind white text for readability.
*   **Vertical Video:** Always set width: 1080, height: 1920.

## Project Structure
*   `remotion/Root.tsx`: Registry.
*   `remotion/compositions/`: Folder per video/template.
*   `remotion/components/`: Reusable UI (Buttons, Text wrappers).
