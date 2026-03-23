# PromptDesign

### Design Intelligence for AI Agents

[![npm](https://img.shields.io/badge/npm-1.0.0-blue.svg)](https://npmjs.com/package/promptdesign)
[![35 Design Languages](https://img.shields.io/badge/design_languages-35-blue.svg)](#)
[![6 Categories](https://img.shields.io/badge/categories-6-green.svg)](#)
[![License MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](#)

---

## Install

```bash
npm install promptdesign
```

## Usage

### npm Package

```javascript
import { getDesignLanguage, transformUI } from 'promptdesign';

const design = await getDesignLanguage('minimalism');
console.log(design.name); // 'minimalism'
```

### CLI

```bash
npx promptdesign list
npx promptdesign load core/minimalism
npx promptdesign search glass
```

### skills.sh / Claude

```
/load promptdesign
/load promptdesign/core/minimalism
/load promptdesign/depth-texture/glassmorphism
```

---

## Design Languages (35)

### Core & Foundational (8)

| Skill | Description |
|-------|-------------|
| `minimalism` | Reduce to essential elements |
| `flat-design` | Solid colors, no depth effects |
| `material-design` | Google's design system |
| `swiss-international` | Grid-based, typographic |
| `enterprise-ui` | Corporate reliability |
| `data-first-dashboard` | Metrics visualization |
| `card-based-ui` | Modular content blocks |
| `bento-grid-layout` | Variable-size grid cells |

### Depth, Texture & Effects (6)

| Skill | Description |
|-------|-------------|
| `glassmorphism` | Translucent frosted panels |
| `neumorphism` | Soft extruded surfaces |
| `claymorphism` | 3D clay-like shapes |
| `soft-ui` | Modern neumorphism variant |
| `gradient-mesh-design` | Flowing color blends |
| `aurora-ui` | Animated gradient aurora |

### Modes & Color Systems (5)

| Skill | Description |
|-------|-------------|
| `dark-mode-minimal` | True dark backgrounds |
| `monochrome-aesthetic` | Single-hue variations |
| `duotone-design` | Two-color systems |
| `high-contrast-accessibility` | WCAG AAA compliant |
| `pastel-ui` | Soft muted colors |

### Experimental & Bold (5)

| Skill | Description |
|-------|-------------|
| `brutalism` | Raw, exposed structure |
| `anti-design` | Intentional chaos |
| `retro-web` | 90s HTML aesthetic |
| `cyberpunk-ui` | Neon dystopia |
| `vaporwave-aesthetic` | 80s/90s digital art |

### Product-Oriented Styles (5)

| Skill | Description |
|-------|-------------|
| `saas-modern` | Stripe-style clean |
| `fintech-ui` | Trust-focused finance |
| `ecommerce-conversion` | Purchase optimization |
| `mobile-first-ui` | Touch-optimized |
| `super-app-ui` | Multi-service hub |

### Futuristic & Advanced (5)

| Skill | Description |
|-------|-------------|
| `tech-futurism` | Advanced tech aesthetics |
| `ai-native-ui` | Prompt-first interfaces |
| `spatial-ui` | 3D depth layers |
| `voice-first-ui` | Speech-dominant |
| `gesture-based-ui` | Touch gesture primary |

---

## API

### `getDesignLanguage(name)`

Get a design language by name.

```typescript
const design = await getDesignLanguage('glassmorphism');
```

### `getAllDesignLanguages()`

Get all categories with skills.

```typescript
const categories = await getAllDesignLanguages();
```

### `searchDesignLanguages(query)`

Search skills by name, intent, or tags.

```typescript
const results = await searchDesignLanguages('glass');
```

### `transformUI(input)`

Transform UI following design language rules.

```typescript
const result = await transformUI({
  design: 'minimalism',
  input: '<div>Your UI</div>'
});
```

---

## License

MIT
