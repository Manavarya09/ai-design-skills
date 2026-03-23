# Flat Design

## Intent
Create clean, unambiguous interfaces using solid colors and simple shapes without depth effects.

## Principles
1. **No depth simulation** - Avoid shadows, gradients, textures
2. **Bold, solid colors** - Use flat color fills exclusively
3. **Clear boundaries** - Use contrast and color to separate, not shadows
4. **Geometric simplicity** - Prefer basic shapes and clean lines
5. **Function over form** - Every element has a clear purpose

## Layout Rules
- Grid-based layouts (12-column grid)
- Even spacing between elements
- Asymmetric layouts acceptable
- Clear visual sections via color blocks
- No overlapping elements
- Consistent margin: 16px minimum

## Typography
- Font: Clean sans-serif (Open Sans, Lato, Roboto)
- Bold headings for hierarchy
- Uppercase for small labels
- High contrast between text and background
- Body: 14-16px, Line-height: 1.5
- Maximum 3 font weights (Light, Regular, Bold)

## Colors
- Primary: Vibrant solid colors (Blue #3498DB, Green #2ECC71, Orange #E67E22)
- Background: Solid light colors or white
- Text: Dark gray #333333 or black
- Accent: One bright color for CTAs
- No gradients, no transparency
- Minimum 50% opacity for overlays if needed

## Components
- Buttons: Solid fill, no shadow, 4px border-radius max
- Cards: Flat background, 1px border optional, no shadow
- Icons: Flat, solid color, geometric style
- Images: No filters, no shadows, displayed at natural aspect ratio
- Forms: Flat inputs with solid borders

## Do's
- Use solid, vibrant colors
- Create hierarchy with color contrast
- Keep shapes geometric and simple
- Maintain consistent spacing
- Use icons to reinforce meaning

## Don'ts
- Use drop shadows or inner shadows
- Apply gradients to any element
- Add 3D effects or textures
- Use bevels or embossing
- Layer elements with depth

## Agent Instructions
- Replace all shadows with solid color backgrounds
- Flatten any gradients
- Simplify complex shapes to basic forms
- Ensure high contrast between all elements
- Remove any texture or depth simulation

## Output Constraints
- HTML/CSS: Flat CSS with solid colors, no box-shadow
- React: Components with solid color props
- Maximum 3 colors per component type
- No CSS filters or blend modes

## Machine-Readable Rules
```json
{
  "name": "flat-design",
  "category": "core",
  "shadow_allowed": false,
  "gradient_allowed": false,
  "texture_allowed": false,
  "border_radius_max": 4,
  "color_type": "solid",
  "shape_preference": "geometric",
  "spacing_base": 8,
  "icon_style": "flat-solid"
}
```
