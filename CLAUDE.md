# Diorama — Indian Folklore Story Player

## What this is
A single-page React + Vite web app that presents Indian folklore stories as CSS 3D layered dioramas. Each story is a sequence of scenes; each scene is five SVG layers stacked at different translateZ depths inside a CSS perspective container, creating parallax depth on mouse movement. Character art is placed via PNG images; hovering over characters reveals interactive tooltips with their names and descriptions.

## Architecture decisions — do not change these

### The CSS 3D layer system
The diorama effect is achieved entirely with CSS 3D transforms. Do not switch to Three.js, canvas, WebGL, or any parallax library. The structure is:

- Outer wrapper: `perspective: 800px`, `overflow: hidden` — never apply rotation here
- Inner container: receives `rotateX` / `rotateY` on mouse move (clamped ±4° / ±6°)
- 5 layer divs inside the inner container, each sized 120% with -10% offset to allow tilt without exposing edges

translateZ values are fixed:
- `sky`: -200px
- `landscape`: -150px  
- `environment`: -100px
- `characters`: -50px
- `foreground`: 0px

Mouse move transition: `0.08s linear`. Mouse leave transition: `0.8s ease-out`, reset to identity.

### SVG layers and character placement
Every layer SVG uses `viewBox="0 0 800 450"` and `preserveAspectRatio="xMidYMid slice"`. Layers are stored as SVG strings in `src/data/stories.js`.

SVG layers use primitives (`rect`, `ellipse`, `polygon`, `path`, `line`, `circle`) for environment and scene elements. Character art is placed as PNG images via the `placeImage(src, x, y, width, height)` helper, which embeds `<image>` tags with `preserveAspectRatio="xMidYMax meet"` to bottom-align figures on the ground line. All coordinates are in viewBox space (`0..800` wide × `0..450` tall).

### No external libraries
The only dependencies are React and Vite. Do not add framer-motion, GSAP, react-spring, or any animation/parallax library. All transitions are CSS.

### Fonts
Playfair Display loaded via `@import` in `global.css`. Do not switch to a local font or a different loading method.

## Aesthetic rules
- Page background: `#F7F5F0`
- Gold frame colour: `#C4921A`, inner rule: `#8B6410`
- Story text panel background: `#F0E8D0`
- Story text colour: `#2D1A06`
- No box-shadows, no gradients, no blur in the UI layer (only within SVG scene art)
- Maximum whitespace. Nothing decorative that isn't structural.

## Story data model
All content lives in `src/data/stories.js`. Each story follows this shape exactly:

```js
{
  id: string,
  title: string,
  subtitle: string,                    // e.g. "Panchatantra · Sanskrit · Folktale"
  scenes: [{
    id: string,
    title: string,
    mood: string,                      // scene atmosphere descriptor
    audio: string,                     // imported MP3 URL
    hoverTargets: [
      {
        x, y, w, h,                    // bbox in viewBox space (0..800 × 0..450)
        name: string,                  // character name for tooltip
        description: string,           // character description for tooltip
      }
    ],
    layers: {
      sky: string,                     // full SVG element as string
      landscape: string,
      environment: string,
      characters: string,              // includes spotlight halos + placeImage() calls
      foreground: string,
    },
    beats: [{ text: string }]
  }]
}
```

When adding a new story, follow this model exactly. Do not restructure it.

## SVG art conventions
- Sky layers: always a `rect` filling the full viewBox as the base colour, then additional elements
- Landscape layers: at least one curved `path` forming a horizon line
- Character layers: silhouettes only — near-black (`#0A0A14`), built from basic primitives
- Foreground layers: very dark (`#040A06`) ground fill plus simple vertical botanical shapes
- No colour fills on character/environment layers except near-black silhouettes
- A small warm mark (dark red or amber) is acceptable on characters to suggest fire, blood, or a lamp flame

## File structure

src/
  main.jsx
  App.jsx
  components/
    Diorama.jsx           — CSS 3D container, parallax, layer rendering
    StoryPanel.jsx        — beat text, dots, back/next buttons, keyboard listener
    FrameOverlay.jsx      — corner ornament SVG overlay
    HoverTargets.jsx      — invisible character hit-zones + tooltips
    AudioBed.jsx          — cross-fade audio bed with per-scene MP3
    MuteToggle.jsx        — mute/unmute audio header button
    CursorFollow.jsx      — custom cursor (dot + ring) with hover tracking
    HoverGif.jsx          — brand image (PNG still + animated GIF on hover)
  data/
    stories.js            — story content, SVG layers, PNG placements, audio refs, hover targets
  styles/
    global.css
  assets/
    characters/           — PNG art (character poses)
    props/                — PNG art (prop objects like cradle)
    audio/                — per-scene MP3 tracks
    video/                — brand animated GIF

Do not reorganise this structure without being asked.

## Interaction model
- Right arrow or spacebar: advance beat, then advance scene
- Left arrow: go back one beat (or to previous scene's last beat)
- Beat text transitions via opacity (0 → 1 over 0.3s), not position
- "Next →" becomes "Again ↺" on the final beat of the final scene, then resets to scene 0 beat 0
- No other controls, no router, no loading states
