# Diorama

The vercel app - 

https://diorama-five.vercel.app/

A single-page React + Vite player for *The Mongoose and the Farmer's Wife* (Panchatantra), presented as a CSS-3D layered diorama. Each scene stacks five depth layers inside a `perspective` container; mouse movement parallaxes the layers; per-scene music cross-fades; characters reveal a textbox tooltip on hover.

## Stack

- React 18, Vite 5
- No animation libraries — every transition is CSS or a small lerp loop
- Cormorant Garamond + Playfair Display via Google Fonts
- PNG character art, MP3 audio per scene

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:5173. Production build:

```sh
npm run build
npm run preview
```

## How the diorama works

The wrapper is `perspective: 800px` with `overflow: hidden`. Inside is a single 3D-transformed inner container. Inside that, five layer divs each at a fixed `translateZ`:

| layer | translateZ | what it holds |
|---|---|---|
| sky | -200 | base color, horizon glow band, moon and stars |
| landscape | -150 | curved horizon path |
| environment | -100 | houses, well, walls, cobras, cradle (scene 5) |
| characters | -50 | farmer / wife / mongoose PNGs + spotlight halos |
| foreground | 0 | dark ground rect, grass blades, vignette |

On `mousemove` over the wrapper, the inner container rotates clamped to `±6° Y` and `±4° X`. Each layer drifts a different amount because of its `translateZ`, producing parallax. Layers are CSS-sized at 130% / -15% offset so the deepest layer (sky at -200) still covers the wrapper after CSS perspective scales it down.

`mousemove` transition is `0.08s linear`; `mouseleave` resets with `0.8s ease-out` — defined in `Diorama.jsx`.

## Project structure

```
src/
  main.jsx                        — React mount
  App.jsx                         — page composition, scene/beat state, mute state
  components/
    Diorama.jsx                   — perspective wrapper, parallax, layer rendering
    FrameOverlay.jsx              — corner ornament SVG
    StoryPanel.jsx                — beat text, dots, Next button, keyboard listener
    AudioBed.jsx                  — single <audio> element with cross-fade between scenes
    MuteToggle.jsx                — header right-side toggle
    HoverGif.jsx                  — frame-1 still + animated GIF on hover (brand)
    HoverTargets.jsx              — invisible bbox hit-zones + character tooltip
    CursorFollow.jsx              — Framer-style dot+ring custom cursor
  data/
    stories.js                    — story content, layer SVGs, hover targets, audio refs
  styles/
    global.css                    — fonts, page layout, all UI styles
  assets/
    characters/                   — PNG art (farmer, wife, mongoose, cobra)
    props/                        — PNG art (cradle)
    audio/                        — per-scene MP3 tracks
    video/                        — brand GIF
```

## Story data model

`src/data/stories.js` exports a `stories` array. Each story has scenes; each scene:

```js
{
  id: 'dawn',
  title: 'The household at first light',
  mood: 'still',
  audio: dawnTrack,              // imported MP3 URL
  hoverTargets: [
    { x, y, w, h, name, description },  // bbox in scene viewBox space
    ...
  ],
  layers: {
    sky:         '<svg>...</svg>',
    landscape:   '<svg>...</svg>',
    environment: '<svg>...</svg>',
    characters:  '<svg>...</svg>',  // spotlight ellipses + <image> tags
    foreground:  '<svg>...</svg>',
  },
  beats: [{ text: '...' }, ...]
}
```

All coordinates are in scene viewBox space — `0..800` wide × `0..450` tall (16:9). The diorama wrapper auto-scales to whatever pixel size it ends up rendered at.

## Asset format

Character art lives in `src/assets/characters/` as PNG files with transparent backgrounds. Each PNG is loaded via a Vite URL import and embedded into a layer SVG via `<image href="..." preserveAspectRatio="xMidYMax meet"/>` — the `xMidYMax` half makes figures bottom-align on the ground line of the placement rect.

The `placeImage(src, x, y, w, h)` helper in `stories.js` emits the `<image>` element. **Match the placement rect aspect to the source PNG's aspect** to avoid `meet` letterboxing.

## Audio

Five MP3 tracks live in `src/assets/audio/` — `scene-{dawn,morning,danger,return,grief}.mp3`. `AudioBed.jsx` keeps a single `<audio>` element ref'd; on scene change it fades volume `1 → 0` over 400 ms, swaps `src`, then fades `0 → 1`. Loops within a scene.

The player starts muted (Chrome/Safari block autoplay otherwise). The `♪ off` button in the header toggles to `♪ on`.

## Custom cursor

`CursorFollow.jsx` hides the native cursor and renders two fixed-position dots:

- a small dot at the exact pointer
- a larger ring that follows with `lerp = 0.18` for smooth lag

The ring expands and tints amber over `a, button, .beat-dot, [data-cursor-hover]` — character hit-zones carry that data attribute, so hovering a figure expands the ring as a hover affordance. On touch devices `(hover: none)` restores the OS cursor.

## Controls

- `→` or `space` — next beat (then next scene)
- `←` — previous beat
- `Hover` a character — tooltip appears
- `♪ off` toggle — mute/unmute audio bed
- `Next →` button — same as right arrow; on the final beat it reads `Again ↺` and resets

## Deployment (Vercel)

1. Push this repo to GitHub.
2. New project on Vercel → import the GitHub repo.
3. Vercel auto-detects Vite. No env vars needed.
4. Build command: `npm run build`. Output directory: `dist`.

Vercel hosts the `dist/` build, which contains only the imported assets (the source `.svg` files in `src/assets/characters/` are not imported and won't ship to production).

## Adding a character pose

1. Author a transparent PNG with the figure's feet at the bottom edge.
2. Drop it into `src/assets/characters/`.
3. In `stories.js`:
   - `import myPose from '../assets/characters/my-pose.png';`
   - In the relevant scene's `characters` layer, add `placeImage(myPose, x, y, w, h)` (rect should match the PNG's aspect ratio).
   - Add a `hoverTargets` entry with the same bbox + a `name` and `description`.

## Conventions worth knowing

- All silhouette geometry in inline SVG primitives uses `#0A0A14` (near-black). Sky / horizon / spotlight colors live in the relevant layer body strings.
- Spotlight halos are stacks of three `#F8E8B8` ellipses with opacity `0.06 → 0.10 → 0.14` (decreasing radius), drawn before character images so the figures sit on top.
- The frame overlay (corner brackets) is a separate SVG with `pointer-events: none`, layered above everything.
- Custom cursor is at `z-index: 9999`. Tooltip at `12`. Frame overlay at `10`. Hit-zones at `5`.
