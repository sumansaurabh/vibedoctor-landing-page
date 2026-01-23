# 3D Components Guide

## Overview
This project includes 3D interactive components powered by Spline for creating immersive, engaging website experiences. These components are particularly useful for tech-focused landing pages, product showcases, and creative portfolios.

## Available Components

### 1. Globe Component (Cobe)
**Location**: `~/components/blocks/feature-section-with-bento-grid.tsx`

**Purpose**: Animated 3D globe using the Cobe library, perfect for showcasing global reach or international presence.

**Features**:
- Auto-rotating 3D Earth globe
- Customizable markers for locations
- Adjustable colors (base, marker, glow)
- Smooth canvas-based animation
- Lightweight and performant

**Usage**:
```tsx
import { Globe } from "~/components/blocks/feature-section-with-bento-grid";

export function GlobalPresence() {
  return (
    <div className="h-[400px] flex items-center justify-center">
      <Globe className="mx-auto" />
    </div>
  );
}
```

**Customization**:
The Globe component in the file can be customized by modifying these `createGlobe` options:
- `width/height`: Canvas dimensions
- `phi/theta`: Initial rotation angles
- `dark`: 0-1, controls dark mode intensity
- `baseColor`: RGB array for globe base color
- `markerColor`: RGB array for location markers
- `glowColor`: RGB array for the glow effect
- `markers`: Array of `{ location: [lat, lng], size: number }`

**Complete Bento Grid Example**:
```tsx
import { FeaturesSectionWithBentoGrid } from "~/components/blocks/feature-section-with-bento-grid";

export default function Features() {
  return <FeaturesSectionWithBentoGrid />;
}
```

**Dependencies**: Requires `cobe` package

**Bento Grid Layout**:
The component also includes a complete features section with a Bento Grid layout (6-column grid) featuring four skeleton components:
- **SkeletonOne**: Image showcase with gradient overlays
- **SkeletonTwo**: Interactive image gallery with hover animations
- **SkeletonThree**: YouTube video link with play button overlay
- **SkeletonFour**: 3D Globe component

**Use Cases**:
- Global reach sections
- International locations showcase
- World map alternatives
- SaaS product with worldwide presence
- Agency location displays
- Feature sections with visual interest

### 2. SplineScene Component
**Location**: `~/components/ui/splite.tsx`

**Purpose**: Core component for embedding interactive 3D scenes from Spline into the application.

**Features**:
- Lazy loading with React Suspense for optimal performance
- Customizable loading fallback UI
- Full scene interactivity support (rotate, zoom, click events)
- Lightweight wrapper around `@splinetool/react-spline`

**Usage**:
```tsx
import { SplineScene } from "~/components/ui/splite";

export function MyComponent() {
  return (
    <SplineScene 
      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      className="w-full h-[600px]"
    />
  );
}
```

**Props**:
- `scene` (string, required): URL to your Spline scene
- `className` (string, optional): Tailwind classes for styling

### 2. Spotlight Component
**Location**: `~/components/ui/spotlight.tsx`

**Purpose**: Animated spotlight effect for dramatic visual emphasis and attention-drawing.

**Features**:
- SVG-based gradient animation
- Customizable fill color
- Smooth 2-second fade-in with scale animation
- 0.75s delay before animation starts
- Responsive positioning support

**Usage**:
```tsx
import { Spotlight } from "~/components/ui/spotlight";

export function HeroSection() {
  return (
    <div className="relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Your content */}
    </div>
  );
}
```

**Props**:
- `className` (string, optional): Custom positioning and styling
- `fill` (string, optional): Color of the spotlight (default: "white")

**Animation Details**:
- Duration: 2 seconds
- Delay: 0.75 seconds
- Effect: fade-in + scale (0.5 → 1) + translate
- Timing: ease function
- Defined in `tailwind.config.ts` as `animate-spotlight`

### 3. SplineSceneBasic Component
**Location**: `~/components/ui/spline-scene-basic.tsx`

**Purpose**: Pre-built showcase section featuring a 3D robot model with text content and spotlight effects.

**Features**:
- Split-screen layout (text left, 3D scene right)
- Integrated spotlight animation
- Dark theme with gradient text effects
- Fully responsive design (stacks on mobile)
- Ready-to-use hero section

**Default Scene**: Interactive 3D robot model (`https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode`)

**Usage**:
```tsx
import { SplineSceneBasic } from "~/components/ui/spline-scene-basic";

export default function Index() {
  return (
    <div className="container py-20">
      <SplineSceneBasic />
    </div>
  );
}
```

**Customization Examples**:
```tsx
// Change the 3D scene
<SplineScene 
  scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode"
  className="w-full h-full"
/>

// Modify text content
<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
  Your Custom Title
</h1>

// Adjust spotlight position
<Spotlight
  className="-top-20 right-0"
  fill="blue"
/>
```

## The Robot 3D Model

### Description
The default scene features an interactive, modern robot model designed for tech and AI-focused applications.

### Use Cases

| Use Case | Why It Works |
|----------|--------------|
| **Landing Pages** | Instantly captures attention, conveys innovation |
| **Product Showcases** | Perfect for AI/ML products, robotics, SaaS tools |
| **Portfolio Sites** | Adds personality and memorability to developer/designer portfolios |
| **About Pages** | Creates engaging team or company introductions |
| **Loading States** | Keeps users engaged during data loads |
| **Interactive Demos** | Visual aid for explaining technical concepts |

### Best Practices
- Use as hero section to make strong first impression
- Pair with concise, impactful copy (max 2-3 sentences)
- Ensure adequate contrast between 3D scene and text
- Test performance on mobile devices
- Consider adding interaction hints for users

## Creating Custom 3D Scenes

### Step-by-Step Process

1. **Visit Spline**
   - Go to [spline.design](https://spline.design)
   - Sign up for free account

2. **Create Scene**
   - Design your 3D model or use templates
   - Add animations, interactions, materials
   - Keep file size under 5MB for optimal performance

3. **Export Scene**
   - Click "Export" → "Code Export"
   - Choose "React / Next.js"
   - Copy the scene URL

4. **Implement in App**
   ```tsx
   <SplineScene 
     scene="YOUR_SCENE_URL_HERE"
     className="w-full h-full"
   />
   ```

### Performance Optimization Tips
- **Polygon Count**: Keep under 50k triangles
- **Textures**: Use compressed formats (WebP, compressed PNG)
- **File Size**: Target under 3MB, maximum 5MB
- **Animations**: Limit to 2-3 simultaneous animations
- **Mobile**: Test on actual devices, not just browser emulation

## Integration Patterns

### Hero Section Pattern
```tsx
export default function Index() {
  return (
    <div className="min-h-screen">
      <SplineSceneBasic />
      {/* Rest of your content */}
    </div>
  );
}
```

### Split Layout Pattern
```tsx
export function ProductShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Product Features</h2>
        <p>Description...</p>
      </div>
      <SplineScene 
        scene="YOUR_SCENE_URL"
        className="w-full h-[400px]"
      />
    </div>
  );
}
```

### Background Pattern
```tsx
export function ImmersiveSection() {
  return (
    <div className="relative h-screen">
      <SplineScene 
        scene="YOUR_SCENE_URL"
        className="absolute inset-0 opacity-30"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1>Content overlaid on 3D background</h1>
      </div>
    </div>
  );
}
```

### Card Integration Pattern
```tsx
import { Card } from "~/components/ui/card";

export function Feature3D() {
  return (
    <Card className="overflow-hidden">
      <SplineScene 
        scene="YOUR_SCENE_URL"
        className="w-full h-[300px]"
      />
      <div className="p-6">
        <h3>Feature Title</h3>
        <p>Description</p>
      </div>
    </Card>
  );
}
```

## Styling and Customization

### Responsive Height Management
```tsx
<SplineScene 
  scene="..."
  className="w-full h-[300px] md:h-[500px] lg:h-[600px]"
/>
```

### Dark/Light Mode Integration
```tsx
<div className="bg-background">
  <Spotlight
    className="-top-40 left-0"
    fill="hsl(var(--primary))"
  />
  <SplineScene scene="..." className="..." />
</div>
```

### Loading State Customization
Modify the `SplineScene` component's Suspense fallback:
```tsx
<Suspense 
  fallback={
    <div className="w-full h-full flex items-center justify-center bg-muted">
      <div className="space-y-2 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
        <p className="text-sm text-muted-foreground">Loading 3D scene...</p>
      </div>
    </div>
  }
>
  <Spline scene={scene} className={className} />
</Suspense>
```

## Performance Considerations

### Bundle Size
- `@splinetool/react-spline`: ~50KB gzipped
- Scene files: 1-5MB (varies by complexity)
- Lazy loading prevents blocking initial page load

### Runtime Performance
- **GPU Usage**: 3D scenes use WebGL, ensure device has adequate GPU
- **Memory**: Typical scene uses 50-150MB RAM
- **CPU**: Animations may impact low-end devices

### Best Practices
1. ✅ Always lazy load with React Suspense
2. ✅ Provide meaningful loading states
3. ✅ Test on target devices (especially mobile)
4. ✅ Use `will-change` CSS for animated elements
5. ✅ Consider reduced motion preferences
6. ✅ Implement fallback for devices without WebGL

### Performance Monitoring
```tsx
import { useEffect } from 'react';

export function SplineWithMonitoring({ scene, ...props }) {
  useEffect(() => {
    const startTime = performance.now();
    return () => {
      const loadTime = performance.now() - startTime;
      console.log(`3D scene loaded in ${loadTime}ms`);
    };
  }, []);

  return <SplineScene scene={scene} {...props} />;
}
```

## Browser Support

### Supported Browsers
| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| iOS Safari | 14+ | ✅ Full support |
| Chrome Mobile | 90+ | ✅ Full support |

### Requirements
- WebGL 2.0 support
- ES6+ JavaScript support
- Modern CSS support (grid, flexbox)

## Troubleshooting

### Scene Not Loading
**Problem**: 3D scene doesn't appear

**Solutions**:
1. Verify scene URL is correct and publicly accessible
2. Check browser console for errors
3. Ensure `@splinetool/react-spline` is installed: `bun add @splinetool/react-spline`
4. Verify parent container has defined height
5. Check network tab for failed requests

### Performance Issues
**Problem**: Scene is laggy or slow

**Solutions**:
1. Reduce polygon count in Spline editor
2. Optimize textures (compress, reduce resolution)
3. Limit simultaneous animations
4. Add loading state to prevent layout shift
5. Test on actual devices, not just browser dev tools
6. Consider using lower-quality scene for mobile

### Layout Issues
**Problem**: Scene not displaying correctly

**Solutions**:
1. Ensure parent has `relative` positioning if using absolute children
2. Define explicit height on SplineScene component
3. Check z-index layering with other elements
4. Verify responsive breakpoints work as expected
5. Test in different viewport sizes

### Styling Conflicts
**Problem**: Spotlight or scene conflicts with existing styles

**Solutions**:
1. Use `relative` on parent, `absolute` on Spotlight
2. Adjust z-index values (Spotlight should be lower than content)
3. Check for CSS conflicts in global styles
4. Use Tailwind's arbitrary values for precise positioning

## Dependencies

### Required Packages
```json
{
  "@splinetool/react-spline": "latest",
  "cobe": "^0.6.5",
  "@tabler/icons-react": "^3.36.1",
  "framer-motion": "^11.x",
  "react": "^18.3.1",
  "tailwindcss": "^3.4"
}
```

### Installation
```bash
# If not already installed
bun add @splinetool/react-spline cobe @tabler/icons-react
```

### Important: Remix vs Next.js
This project uses **Remix**, not Next.js. When using components from external libraries:
- ❌ Don't use `import Image from "next/image"` → Use `<img>` tag
- ❌ Don't use `import Link from "next/link"` → Use `import { Link } from "@remix-run/react"`
- ✅ Change `href` to `to` in Link components
- ✅ Use standard HTML img tags with className for styling

### Tailwind Configuration
The spotlight animation is defined in `tailwind.config.ts`:
```ts
animation: {
  spotlight: "spotlight 2s ease .75s 1 forwards",
},
keyframes: {
  spotlight: {
    "0%": {
      opacity: "0",
      transform: "translate(-72%, -62%) scale(0.5)",
    },
    "100%": {
      opacity: "1",
      transform: "translate(-50%,-40%) scale(1)",
    },
  },
}
```

## Additional Resources

- **Spline Documentation**: [docs.spline.design](https://docs.spline.design)
- **Spline Community**: [community.spline.design](https://community.spline.design)
- **Component Documentation**: `docs/3D_COMPONENTS.md`
- **Example Scenes**: Explore Spline's community gallery for inspiration

## Common Recipes

### Full-Screen Interactive Experience
```tsx
export default function Interactive3D() {
  return (
    <div className="fixed inset-0">
      <SplineScene 
        scene="YOUR_SCENE_URL"
        className="w-full h-full"
      />
    </div>
  );
}
```

### Parallax Effect with 3D
```tsx
import { useScroll, useTransform, motion } from "framer-motion";

export function Parallax3D() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div style={{ y }}>
      <SplineScene scene="..." className="w-full h-[500px]" />
    </motion.div>
  );
}
```

### Loading State with Progress
```tsx
import { useState } from "react";
import { Progress } from "~/components/ui/progress";

export function SplineWithProgress({ scene }) {
  const [progress, setProgress] = useState(0);

  return (
    <Suspense fallback={
      <div className="space-y-4">
        <Progress value={progress} />
        <p>Loading 3D scene...</p>
      </div>
    }>
      <SplineScene scene={scene} className="w-full h-full" />
    </Suspense>
  );
}
```

## When to Use 3D Components

### ✅ Good Use Cases
- Landing pages needing visual impact
- Product demonstrations
- Portfolio showcases
- Brand storytelling
- Interactive tutorials
- Gaming or entertainment sites
- Tech/AI company websites

### ❌ Avoid When
- Content-heavy blogs or articles
- Forms or data input pages
- Performance-critical applications
- Accessibility is primary concern
- Target audience on very old devices
- SEO is the only priority

## Accessibility Considerations

### Recommendations
1. **Provide Alternatives**: Always include text descriptions
2. **Respect Preferences**: Honor `prefers-reduced-motion`
3. **Keyboard Navigation**: Ensure interactive elements are keyboard-accessible
4. **Screen Readers**: Add `aria-label` to describe 3D content
5. **Loading States**: Clear feedback during scene loading

### Example Implementation
```tsx
export function Accessible3D() {
  return (
    <div>
      <div 
        aria-label="Interactive 3D robot model showcasing our AI technology"
        role="img"
      >
        <SplineScene scene="..." className="..." />
      </div>
      <p className="sr-only">
        A 3D animated robot representing our AI-powered platform
      </p>
    </div>
  );
}
```
