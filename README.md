# AI Design Skills

### Give AI a Sense of Design

[![npm version](https://img.shields.io/npm/v/ai-design-skills.svg)](https://www.npmjs.com/package/ai-design-skills)
[![npm downloads](https://img.shields.io/npm/dm/ai-design-skills.svg)](https://www.npmjs.com/package/ai-design-skills)
[![npm license](https://img.shields.io/npm/l/ai-design-skills.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/Manavarya09/ai-design-skills.svg)](https://github.com/Manavarya09/ai-design-skills)
[![GitHub issues](https://img.shields.io/github/issues/Manavarya09/ai-design-skills.svg)](https://github.com/Manavarya09/ai-design-skills/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/Manavarya09/ai-design-skills.svg)](https://github.com/Manavarya09/ai-design-skills)

---

**35 structured design languages. One command. Consistent UIs.**

AI generates messy layouts, inconsistent spacing, and random colors. AI Design Skills fixes that by giving AI a complete design specification to follow.

---

## Quick Start

```bash
npm install ai-design-skills
```

### CLI Commands

```bash
npx ai-design-skills --help           # Show help
npx ai-design-skills                  # Show interactive menu
npx ai-design-skills list             # List all 35 design languages
npx ai-design-skills minimalism       # Get load command for a skill
npx ai-design-skills glassmorphism    # Get load command for glassmorphism
npx ai-design-skills brutalism        # Get load command for brutalism
npx ai-design-skills material-design  # Get load command for material
```

### Claude / skills.sh

```
/load ai-design-skills/core/minimalism
/load ai-design-skills/depth-texture/glassmorphism
/load ai-design-skills/bold/brutalism
```

### JavaScript / Node.js

```javascript
import { getDesignLanguage } from 'ai-design-skills';

const design = await getDesignLanguage('minimalism');
console.log(design);
// { name: 'minimalism', principles: [...], colors: {...}, ... }
```

---

## The Problem

AI-generated UIs look like AI generated them:
- Inconsistent spacing (random 16px, 24px, 8px values)
- Messy colors (arbitrary hex codes, clashing palettes)
- No design system (each component looks different)

## The Solution

Structured design language specifications that AI follows. Each skill includes:
- Layout rules (grid, spacing, responsive)
- Typography (fonts, sizes, hierarchy)
- Color system (palettes, contrast, usage)
- Components (buttons, forms, cards)
- Do's and Don'ts
- Machine-readable JSON

---

## CLI Output

When you run `npx ai-design-skills`:

```
==========================================================
   AI DESIGN SKILLS
   Give AI a Sense of Design
==========================================================

  35 Design Languages available

  Available Categories:

  1. Core (8)
  2. Depth & Texture (6)
  3. Modes & Color (5)
  4. Experimental (5)
  5. Product Oriented (5)
  6. Futuristic (5)

  Usage:
    npx ai-design-skills                    Show this menu
    npx ai-design-skills list                List all skills
    npx ai-design-skills minimalism          Show load command
    npx ai-design-skills --help              Show help
```

---

## 35 Design Languages

| Category | Skills |
|----------|--------|
| **Core** (8) | minimalism, flat-design, material-design, swiss-international, enterprise-ui, data-first-dashboard, card-based-ui, bento-grid-layout |
| **Depth** (6) | glassmorphism, neumorphism, claymorphism, soft-ui, gradient-mesh-design, aurora-ui |
| **Color** (5) | dark-mode-minimal, monochrome-aesthetic, duotone-design, high-contrast-accessibility, pastel-ui |
| **Bold** (5) | brutalism, anti-design, retro-web, cyberpunk-ui, vaporwave-aesthetic |
| **Product** (5) | saas-modern, fintech-ui, ecommerce-conversion, mobile-first-ui, super-app-ui |
| **Futuristic** (5) | tech-futurism, ai-native-ui, spatial-ui, voice-first-ui, gesture-based-ui |

---

## Each Skill Includes

- **Principles** - Core design philosophy
- **Layout Rules** - Grid system, spacing, breakpoints
- **Typography** - Font family, sizes, weights, line heights
- **Colors** - Complete palette with hex codes
- **Components** - Button styles, form specs, card layouts
- **Do's / Don'ts** - Quick design guidance
- **Agent Instructions** - Prompts for AI transformation
- **Output Constraints** - Technical specs for code output
- **JSON Schema** - Machine-readable for programmatic access

---

## Use Cases

| Need | Skills |
|------|--------|
| Clean landing page | minimalism, glassmorphism |
| Mobile app | material-design, soft-ui |
| Dashboard | data-first-dashboard, bento-grid-layout |
| E-commerce | ecommerce-conversion, saas-modern |
| Dark theme | dark-mode-minimal, cyberpunk-ui |
| Accessible | high-contrast-accessibility, voice-first-ui |

---

## API

```javascript
import { getDesignLanguage, getAllDesignLanguages, transformUI } from 'ai-design-skills';

// Get a single design language
const design = await getDesignLanguage('glassmorphism');

// List all available languages
const all = await getAllDesignLanguages();

// Transform UI following rules
const result = await transformUI({
  design: 'minimalism',
  input: '<div>Your UI</div>'
});
```

---

## Compatible Platforms

[![Claude](https://img.shields.io/badge/Claude-7B4CDB?style=flat&logo=anthropic)](https://www.anthropic.com/claude)
[![OpenAI](https://img.shields.io/badge/OpenAI-10A37F?style=flat&logo=openai)](https://openai.com)
[![Cursor](https://img.shields.io/badge/Cursor-FF6B35?style=flat&logo=cursor)](https://cursor.sh)
[![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visual-studio-code)](https://code.visualstudio.com)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm)](https://www.npmjs.com)

---

## Links

[![GitHub](https://img.shields.io/badge/GitHub-Manavarya09/ai-design-skills-181717?style=flat&logo=github)](https://github.com/Manavarya09/ai-design-skills)
[![npm](https://img.shields.io/badge/npm-ai--design--skills-CB3837?style=flat&logo=npm)](https://www.npmjs.com/package/ai-design-skills)
[![Landing Page](https://img.shields.io/badge/Landing%20Page-manavarya09.github.io/ai--design--skills-333333?style=flat)](https://manavarya09.github.io/ai-design-skills)

---

## License

[![npm license](https://img.shields.io/npm/l/ai-design-skills.svg)](LICENSE)

MIT
