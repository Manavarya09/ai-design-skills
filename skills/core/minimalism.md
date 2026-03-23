# Minimalism

## Intent
Reduce UI to essential elements only. Every pixel must earn its place.

## Principles
1. **Less is more** - Remove anything that doesn't serve a purpose
2. **Content-first** - UI fades away, content takes center stage
3. **Deliberate whitespace** - Space is a design element, not emptiness
4. **Extreme clarity** - No ambiguity in hierarchy or action

## Layout Rules
- Maximum 60% content area, minimum 40% whitespace
- Single-column layouts preferred
- Maximum 3 levels of visual hierarchy
- No decorative elements
- Center-aligned content preferred
- Generous padding: minimum 24px between sections

## Typography
- Font: System fonts or single Google Font (Inter, Roboto)
- Hierarchy via weight and size only
- Body: 16-18px, Line-height: 1.6
- Headings: Bold weight, scaled 1.25x ratio
- No decorative fonts
- Maximum 2 font sizes for body text

## Colors
- Primary: Monochromatic (black/white/gray scale)
- Accent: Single color, used sparingly (max 10% of UI)
- Background: Pure white (#FFFFFF) or near-white (#FAFAFA)
- Text: #1A1A1A (primary), #6B6B6B (secondary)
- No gradients
- No shadows

## Components
- Buttons: Flat, solid fill, no border, no shadow
- Cards: No border, no shadow, subtle background change
- Forms: Minimal borders (1px), clear labels
- Icons: Line icons only, single stroke weight
- Navigation: Simple horizontal or hidden drawer

## Do's
- Use whitespace generously
- Keep to one accent color
- Maintain consistent spacing
- Use typography for hierarchy
- Remove redundant elements

## Don'ts
- Use gradients or shadows
- Add decorative elements
- Mix multiple font weights unnecessarily
- Use borders to create separation
- Include elements without purpose

## Agent Instructions
- Remove any decorative or redundant elements
- Consolidate similar elements
- Use whitespace to create hierarchy
- Prioritize content over decoration
- Strip visual noise aggressively

## Output Constraints
- HTML/CSS: Pure, semantic HTML with minimal CSS
- React: Functional components with inline styles or CSS modules
- No external dependencies beyond core libraries
- Maximum 500 lines of code for any single view

## Machine-Readable Rules
```json
{
  "name": "minimalism",
  "category": "core",
  "whitespace_ratio": 0.4,
  "font_limit": 2,
  "color_palette_size": 3,
  "shadow_allowed": false,
  "gradient_allowed": false,
  "border_allowed": false,
  "decorative_elements_allowed": false,
  "spacing_base": 8,
  "typography_scale": 1.25
}
```
