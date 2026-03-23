# Swiss / International Style

## Intent
Achieve visual harmony through asymmetrical layouts, objective photography, and sans-serif typography.

## Principles
1. **Form follows function** - Design serves content, not decoration
2. **Mathematical grid** - Strict adherence to grid systems
3. **Asymmetric balance** - Dynamic tension through unequal elements
4. **Objective communication** - Photography and clarity over illustration
5. **Sans-serif typography** - Helvetica, Akzidenz-Grotesk as standards

## Layout Rules
- Strict 12-column grid
- Asymmetric but balanced layouts
- Alignment as primary organizing principle
- White space as active design element
- No centered layouts
- Left-aligned text and elements
- Strong vertical rhythm

## Typography
- Font: Helvetica Neue, Akzidenz-Grotesk, or Inter
- All caps for headlines
- Left-aligned text only
- Generous letter-spacing for headlines (0.1-0.2em)
- Body: 12-14px, Line-height: 1.4
- Font size contrast: 2-3x between headline and body
- Maximum 2 font weights

## Colors
- Primary: Black (#000000) and white (#FFFFFF)
- Single accent color for emphasis (red #FF0000 traditional)
- Grays: #333333, #666666, #999999, #CCCCCC
- No more than 3 colors total
- High contrast always

## Components
- Typography IS the design
- Simple geometric shapes only when needed
- No decorative elements
- No gradients or shadows
- Thin borders (1px) for structure
- Numbered lists for sequences

## Do's
- Follow grid strictly
- Use left alignment consistently
- Create strong typographic hierarchy
- Balance asymmetry intentionally
- Use white space dramatically
- Keep it minimal and rational

## Don'ts
- Center anything
- Use decorative fonts
- Add ornament without function
- Use more than 3 colors
- Create organic or curved shapes
- Use gradients or textures

## Agent Instructions
- Enforce strict grid alignment
- Remove all decorative elements
- Set headlines to all caps
- Use asymmetric layouts (never centered)
- Minimize color palette
- Prioritize typography over graphics

## Output Constraints
- HTML/CSS: Grid-based layout (CSS Grid or Flexbox)
- React: Minimal components, typography-focused
- No decorative elements
- Maximum 500px for content width on desktop
- Strict vertical rhythm

## Machine-Readable Rules
```json
{
  "name": "swiss-international",
  "category": "core",
  "grid_columns": 12,
  "alignment": "left",
  "center_allowed": false,
  "color_limit": 3,
  "font_weights": 2,
  "text_transform_headline": "uppercase",
  "letter_spacing_headline": 0.15,
  "decoration_allowed": false,
  "grid_strict": true
}
```
