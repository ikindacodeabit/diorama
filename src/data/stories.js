import farmerWife from '../assets/characters/farmer-wife.png';
import farmerWalking from '../assets/characters/farmer-walking.png';
import wifeWell from '../assets/characters/wife-well.png';
import wifeWalking from '../assets/characters/wife-walking.png';
import wifeKneeling from '../assets/characters/wife-kneeling.png';
import mongooseCurled from '../assets/characters/mongoose-curled.png';
import mongooseSitting from '../assets/characters/mongoose-sitting.png';
import mongooseCombat from '../assets/characters/mongoose-combat.png';
import mongooseDead from '../assets/characters/mongoose-dead.png';
import cobraCoiled from '../assets/characters/cobra-coiled.png';
import cobraDead from '../assets/characters/cobra-dead.png';
import cradle from '../assets/props/cradle.png';

import dawnTrack from '../assets/audio/scene-dawn.mp3';
import morningTrack from '../assets/audio/scene-morning.mp3';
import dangerTrack from '../assets/audio/scene-danger.mp3';
import returnTrack from '../assets/audio/scene-return.mp3';
import griefTrack from '../assets/audio/scene-grief.mp3';

const SVG_OPEN =
  '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">';
const SVG_CLOSE = '</svg>';
const wrap = (body) => SVG_OPEN + body + SVG_CLOSE;

const placeImage = (src, x, y, width, height) =>
  `<image href="${src}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMax meet"/>`;

export const stories = [
  {
    id: 'mongoose',
    title: "The Mongoose and the Farmer's Wife",
    subtitle: 'Panchatantra · Sanskrit · Folktale',
    scenes: [
      {
        id: 'dawn',
        title: 'The household at first light',
        mood: 'still',
        audio: dawnTrack,
        hoverTargets: [
          {
            x: 351,
            y: 256,
            w: 81,
            h: 100,
            name: 'The Farmer and His Wife',
            description:
              'Tenders of the cradle. The mongoose was taken in as a kit when its mother died in the field, and they have come to keep it as a third child.',
          },
          {
            x: 495,
            y: 315,
            w: 50,
            h: 41,
            name: 'The Mongoose',
            description:
              'Curled at the foot of the cradle. It sleeps in a household it now considers its own.',
          },
        ],
        layers: {
          sky: wrap(
            '<rect x="0" y="0" width="800" height="450" fill="#2E1E68"/>' +
              '<rect x="0" y="220" width="800" height="60" fill="#5A2C50"/>' +
              '<rect x="0" y="270" width="800" height="35" fill="#A6624A"/>' +
              '<circle cx="640" cy="80" r="22" fill="#F5E8C4"/>' +
              '<circle cx="200" cy="55" r="1.8" fill="#F5E8C4"/>' +
              '<circle cx="320" cy="38" r="1.4" fill="#F5E8C4"/>' +
              '<circle cx="500" cy="30" r="1.4" fill="#F5E8C4"/>' +
              '<circle cx="120" cy="115" r="1.4" fill="#F5E8C4"/>'
          ),
          landscape: wrap(
            '<path d="M 0 310 Q 150 280 320 295 Q 480 315 640 285 Q 740 270 800 295 L 800 450 L 0 450 Z" fill="#0A0A14"/>'
          ),
          environment: wrap(
            '<rect x="180" y="245" width="150" height="95" fill="#0A0A14"/>' +
              '<polygon points="170,245 255,200 340,245" fill="#0A0A14"/>' +
              '<rect x="232" y="290" width="28" height="50" fill="#040A06"/>' +
              '<ellipse cx="565" cy="240" rx="65" ry="58" fill="#0A0A14"/>' +
              '<rect x="558" y="270" width="14" height="80" fill="#0A0A14"/>'
          ),
          characters: wrap(
            '<ellipse cx="391" cy="315" rx="130" ry="80" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="391" cy="315" rx="85" ry="55" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="391" cy="315" rx="55" ry="35" fill="#F8E8B8" opacity="0.14"/>' +
              '<ellipse cx="520" cy="345" rx="70" ry="35" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="520" cy="345" rx="45" ry="22" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="520" cy="345" rx="25" ry="13" fill="#F8E8B8" opacity="0.14"/>' +
              placeImage(farmerWife, 351, 256, 81, 100) +
              placeImage(mongooseCurled, 495, 315, 50, 41)
          ),
          foreground: wrap(
            '<rect x="0" y="380" width="800" height="70" fill="#040A06"/>' +
              '<polygon points="40,395 43,372 46,395" fill="#0A0A14"/>' +
              '<polygon points="100,398 103,378 106,398" fill="#0A0A14"/>' +
              '<polygon points="160,395 163,370 166,395" fill="#0A0A14"/>' +
              '<polygon points="240,400 243,382 246,400" fill="#0A0A14"/>' +
              '<polygon points="680,395 683,370 686,395" fill="#0A0A14"/>' +
              '<polygon points="730,400 733,378 736,400" fill="#0A0A14"/>' +
              '<line x1="380" y1="395" x2="380" y2="378" stroke="#0A0A14" stroke-width="1.5"/>' +
              '<line x1="430" y1="395" x2="430" y2="376" stroke="#0A0A14" stroke-width="1.5"/>'
          ),
        },
        beats: [
          {
            text: 'At first light the household was a small inhabited country: a man, a woman, a child sleeping in its cradle, and a mongoose curled at the foot of it.',
          },
          {
            text: 'They had taken the mongoose in as a kit, when its mother was killed in the field. The wife had at first refused; then, slowly, allowed it to remain.',
          },
          {
            text: 'On most mornings the four of them woke without urgency, and there was nothing in the house that needed to be feared.',
          },
        ],
      },

      {
        id: 'morning',
        title: 'The farmer departs',
        mood: 'dispersing',
        audio: morningTrack,
        hoverTargets: [
          {
            x: 40,
            y: 258,
            w: 85,
            h: 100,
            name: 'The Farmer',
            description:
              'He leaves for the fields and asks his wife to keep the mongoose near the cradle while she fetches water.',
          },
          {
            x: 591,
            y: 240,
            w: 87,
            h: 100,
            name: 'The Wife',
            description:
              'She walks to the well with her mind already on the day. She agreed, but only just.',
          },
          {
            x: 110,
            y: 303,
            w: 40,
            h: 53,
            name: 'The Mongoose',
            description:
              'It remains at the threshold, watching the door.',
          },
        ],
        layers: {
          sky: wrap(
            '<rect x="0" y="0" width="800" height="450" fill="#4A3878"/>' +
              '<rect x="0" y="210" width="800" height="70" fill="#8A4838"/>' +
              '<rect x="0" y="275" width="800" height="28" fill="#D08648"/>'
          ),
          landscape: wrap(
            '<path d="M 0 305 Q 200 295 400 305 Q 600 315 800 300 L 800 450 L 0 450 Z" fill="#0A0A14"/>'
          ),
          environment: wrap(
            '<rect x="60" y="270" width="120" height="80" fill="#0A0A14"/>' +
              '<polygon points="50,270 120,235 190,270" fill="#0A0A14"/>' +
              '<rect x="105" y="305" width="22" height="45" fill="#040A06"/>' +
              '<ellipse cx="640" cy="340" rx="40" ry="10" fill="#0A0A14"/>' +
              '<rect x="600" y="295" width="80" height="50" fill="#0A0A14"/>' +
              '<line x1="610" y1="295" x2="610" y2="252" stroke="#0A0A14" stroke-width="3"/>' +
              '<line x1="670" y1="295" x2="670" y2="252" stroke="#0A0A14" stroke-width="3"/>' +
              '<line x1="608" y1="252" x2="672" y2="252" stroke="#0A0A14" stroke-width="3"/>'
          ),
          characters: wrap(
            '<ellipse cx="82" cy="325" rx="85" ry="50" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="82" cy="325" rx="58" ry="35" fill="#F8E8B8" opacity="0.09"/>' +
              '<ellipse cx="82" cy="325" rx="35" ry="22" fill="#F8E8B8" opacity="0.13"/>' +
              '<ellipse cx="635" cy="315" rx="80" ry="55" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="635" cy="315" rx="55" ry="38" fill="#F8E8B8" opacity="0.09"/>' +
              '<ellipse cx="635" cy="315" rx="35" ry="24" fill="#F8E8B8" opacity="0.13"/>' +
              '<ellipse cx="130" cy="343" rx="55" ry="35" fill="#F8E8B8" opacity="0.07"/>' +
              '<ellipse cx="130" cy="343" rx="35" ry="22" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="130" cy="343" rx="20" ry="13" fill="#F8E8B8" opacity="0.14"/>' +
              placeImage(farmerWalking, 40, 258, 85, 100) +
              placeImage(wifeWell, 591, 240, 87, 100) +
              placeImage(mongooseSitting, 110, 303, 40, 53)
          ),
          foreground: wrap(
            '<rect x="0" y="385" width="800" height="65" fill="#040A06"/>' +
              '<ellipse cx="400" cy="395" rx="280" ry="5" fill="#0A0A14" opacity="0.45"/>' +
              '<polygon points="220,400 223,378 226,400" fill="#0A0A14"/>' +
              '<polygon points="290,402 293,380 296,402" fill="#0A0A14"/>' +
              '<polygon points="500,398 503,376 506,398" fill="#0A0A14"/>' +
              '<polygon points="560,402 563,382 566,402" fill="#0A0A14"/>' +
              '<polygon points="720,395 723,372 726,395" fill="#0A0A14"/>' +
              '<polygon points="760,400 763,378 766,400" fill="#0A0A14"/>'
          ),
        },
        beats: [
          {
            text: 'Before he left for the fields the farmer asked his wife to keep the mongoose near the cradle while she fetched water. She agreed, but with the impatience of someone whose mind was already on the day.',
          },
          {
            text: 'The well was not far. She took the pot and went, and the mongoose remained at the threshold, watching the door.',
          },
        ],
      },

      {
        id: 'danger',
        title: 'The serpent enters',
        mood: 'tightening',
        audio: dangerTrack,
        hoverTargets: [
          {
            x: 238,
            y: 252,
            w: 110,
            h: 104,
            name: 'The Black Cobra',
            description:
              'It enters through a gap beneath the wall, moving toward warmth in the way that snakes move toward warmth.',
          },
          {
            x: 383,
            y: 308,
            w: 94,
            h: 48,
            name: 'The Mongoose',
            description:
              'Low and tense. It meets the cobra before the cobra can reach the child.',
          },
          {
            x: 532,
            y: 275,
            w: 70,
            h: 70,
            name: 'The Cradle',
            description:
              'Behind the mongoose. The child sleeps in it, unaware.',
          },
        ],
        layers: {
          sky: wrap(
            '<rect x="0" y="0" width="800" height="450" fill="#2A1A30"/>' +
              '<rect x="0" y="285" width="800" height="22" fill="#502838"/>'
          ),
          landscape: wrap(
            '<path d="M 0 320 Q 200 305 400 320 Q 600 335 800 315 L 800 450 L 0 450 Z" fill="#0A0A14"/>'
          ),
          environment: wrap(
            '<rect x="100" y="170" width="600" height="220" fill="#0A0A14"/>' +
              '<rect x="130" y="200" width="540" height="180" fill="#040A06"/>' +
              placeImage(cobraCoiled, 238, 252, 110, 104)
          ),
          characters: wrap(
            '<ellipse cx="430" cy="345" rx="130" ry="55" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="430" cy="345" rx="85" ry="38" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="430" cy="345" rx="50" ry="22" fill="#F8E8B8" opacity="0.16"/>' +
              '<ellipse cx="565" cy="320" rx="75" ry="50" fill="#F8E8B8" opacity="0.04"/>' +
              '<ellipse cx="565" cy="320" rx="48" ry="32" fill="#F8E8B8" opacity="0.06"/>' +
              placeImage(mongooseCombat, 383, 308, 94, 48) +
              placeImage(cradle, 532, 275, 70, 70)
          ),
          foreground: wrap(
            '<rect x="0" y="385" width="800" height="65" fill="#040A06"/>' +
              '<rect x="0" y="0" width="70" height="450" fill="#040A06"/>' +
              '<rect x="730" y="0" width="70" height="450" fill="#040A06"/>' +
              '<polygon points="100,402 103,380 106,402" fill="#0A0A14"/>' +
              '<polygon points="690,400 693,378 696,400" fill="#0A0A14"/>'
          ),
        },
        beats: [
          {
            text: 'Inside, where no one was watching, a black cobra found the gap beneath the wall and entered the house. It moved towards the cradle in the way that snakes move toward warmth.',
          },
          {
            text: 'The mongoose met it before it reached the child.',
          },
        ],
      },

      {
        id: 'return',
        title: 'The wife returns',
        mood: 'mistaken',
        audio: returnTrack,
        hoverTargets: [
          {
            x: 336,
            y: 329,
            w: 40,
            h: 53,
            name: 'The Mongoose',
            description:
              'Sitting at the threshold, its small face raised toward her, blood on its mouth.',
          },
          {
            x: 592,
            y: 265,
            w: 56,
            h: 100,
            name: 'The Wife',
            description:
              'She comes back along the path. She sees the blood before she sees anything else, and does not pause to think.',
          },
        ],
        layers: {
          sky: wrap(
            '<rect x="0" y="0" width="800" height="450" fill="#5A1E36"/>' +
              '<rect x="0" y="200" width="800" height="60" fill="#9A3E2A"/>' +
              '<rect x="0" y="258" width="800" height="50" fill="#D07838"/>'
          ),
          landscape: wrap(
            '<path d="M 0 315 Q 200 305 400 320 Q 600 330 800 315 L 800 450 L 0 450 Z" fill="#0A0A14"/>' +
              '<path d="M 600 450 Q 580 405 560 360 Q 545 325 528 300" stroke="#040A06" stroke-width="3" fill="none"/>'
          ),
          environment: wrap(
            '<rect x="200" y="200" width="280" height="180" fill="#0A0A14"/>' +
              '<polygon points="180,200 340,150 500,200" fill="#0A0A14"/>' +
              '<rect x="305" y="265" width="70" height="115" fill="#040A06"/>'
          ),
          characters: wrap(
            '<ellipse cx="356" cy="358" rx="95" ry="50" fill="#F8E8B8" opacity="0.07"/>' +
              '<ellipse cx="356" cy="358" rx="62" ry="32" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="356" cy="358" rx="38" ry="20" fill="#F8E8B8" opacity="0.14"/>' +
              '<ellipse cx="620" cy="335" rx="75" ry="55" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="620" cy="335" rx="50" ry="38" fill="#F8E8B8" opacity="0.09"/>' +
              '<ellipse cx="620" cy="335" rx="32" ry="24" fill="#F8E8B8" opacity="0.13"/>' +
              placeImage(mongooseSitting, 336, 329, 40, 53) +
              '<ellipse cx="358" cy="350" rx="3" ry="2" fill="#5A0A0A"/>' +
              placeImage(wifeWalking, 592, 265, 56, 100)
          ),
          foreground: wrap(
            '<rect x="0" y="385" width="800" height="65" fill="#040A06"/>' +
              '<polygon points="60,395 63,372 66,395" fill="#0A0A14"/>' +
              '<polygon points="120,400 123,378 126,400" fill="#0A0A14"/>' +
              '<polygon points="720,398 723,378 726,398" fill="#0A0A14"/>' +
              '<polygon points="760,400 763,380 766,400" fill="#0A0A14"/>'
          ),
        },
        beats: [
          {
            text: 'When the wife came back along the path the mongoose was waiting at the door, sitting upright as it always did, its small face raised toward her.',
          },
          {
            text: 'She saw the blood on its mouth before she saw anything else, and she did not pause to think.',
          },
        ],
      },

      {
        id: 'grief',
        title: 'Too late',
        mood: 'final',
        audio: griefTrack,
        hoverTargets: [
          {
            x: 270,
            y: 324,
            w: 240,
            h: 56,
            name: 'The Black Cobra',
            description:
              'Broken into three lengths upon the floor. It died protecting nothing.',
          },
          {
            x: 302,
            y: 315,
            w: 120,
            h: 65,
            name: 'The Wife',
            description:
              'Kneeling. She has understood what the mongoose did, and what she did in return.',
          },
          {
            x: 333,
            y: 365,
            w: 60,
            h: 26,
            name: 'The Mongoose',
            description:
              'Killed by her hand for the very thing it died to prevent.',
          },
          {
            x: 578,
            y: 275,
            w: 70,
            h: 70,
            name: 'The Cradle',
            description:
              'The child sleeps through the entire telling of the story. It is the reason the mongoose acted.',
          },
        ],
        layers: {
          sky: wrap(
            '<rect x="0" y="0" width="800" height="450" fill="#1A1428"/>' +
              '<rect x="0" y="0" width="800" height="180" fill="#0A0810"/>' +
              '<rect x="0" y="290" width="800" height="22" fill="#3A1E30"/>'
          ),
          landscape: wrap(
            '<path d="M 0 330 L 800 330 L 800 450 L 0 450 Z" fill="#0A0A14"/>'
          ),
          environment: wrap(
            '<rect x="100" y="170" width="600" height="220" fill="#0A0A14"/>' +
              '<rect x="130" y="200" width="540" height="180" fill="#040A06"/>' +
              placeImage(cobraDead, 270, 324, 240, 56) +
              placeImage(cradle, 578, 275, 70, 70)
          ),
          characters: wrap(
            '<ellipse cx="370" cy="355" rx="145" ry="80" fill="#F8E8B8" opacity="0.06"/>' +
              '<ellipse cx="370" cy="355" rx="95" ry="58" fill="#F8E8B8" opacity="0.10"/>' +
              '<ellipse cx="370" cy="355" rx="60" ry="38" fill="#F8E8B8" opacity="0.16"/>' +
              placeImage(wifeKneeling, 302, 315, 120, 65) +
              placeImage(mongooseDead, 333, 365, 60, 26)
          ),
          foreground: wrap(
            '<rect x="0" y="395" width="800" height="55" fill="#040A06"/>' +
              '<rect x="0" y="0" width="90" height="450" fill="#040A06"/>' +
              '<rect x="710" y="0" width="90" height="450" fill="#040A06"/>' +
              '<rect x="0" y="0" width="800" height="40" fill="#040A06"/>'
          ),
        },
        beats: [
          {
            text: 'Inside the house she found the cobra, broken into three lengths upon the floor, and the cradle untouched.',
          },
          {
            text: 'She understood then what the mongoose had spent itself to do, and what she had spent in return.',
          },
          {
            text: 'It is an old story. It is told to children, and to adults, and the meaning of it does not change.',
          },
        ],
      },
    ],
  },
];
