# Material Design

## Intent
Create interfaces with a unified system that combines classic principles of good design with technological innovation.

## Principles
1. **Material as metaphor** - UI elements behave like physical materials
2. **Intentional motion** - Animation has meaning and purpose
3. **Bold, graphic design** - Typography is expressive, not just functional
4. **Color with meaning** - Colors are drawn from real-world palettes
5. **Depth and hierarchy** - Layered paper metaphor with shadows

## Layout Rules
- 8dp grid system (spacing, sizing)
- Elevation system: 0, 1, 2, 3, 4, 6, 8, 16, 24dp
- Floating action buttons (FAB) as primary actions
- App bars: 56dp standard height
- Cards: 8dp border-radius, 2dp elevation
- Touch targets: Minimum 48x48dp

## Typography
- Font: Roboto (or system default)
- Scale: Display, Headline, Title, Body, Caption, Overline
- Letter spacing: -0.25px to 1.5px depending on size
- Body: 14-16px, Line-height: 1.5
- Use all caps sparingly (labels only)

## Colors
- Primary: One primary color with light/dark variants
- Secondary/Accent: For FAB, sliders, switches
- Surface: White (#FFFFFF) for cards, slightly darker for backgrounds
- Error: #B00020
- On-colors: Text/icons on colored backgrounds
- Use Material Color Tool for accessible combinations

## Components
- Buttons: Contained (primary), Outlined (secondary), Text (tertiary)
- Cards: White with 2dp elevation, 8dp radius
- FAB: 56dp circular, elevated 6dp, secondary color
- App Bar: White with 4dp elevation, centered title
- Bottom Navigation: 56dp height, 3-5 items
- Dialogs: 24dp padding, 4dp elevation
- Snackbar: 48dp height, bottom-positioned

## Do's
- Use elevation to show hierarchy
- Include meaningful micro-interactions
- Use the full Material color palette
- Follow the 8dp grid strictly
- Use FAB for primary actions
- Include ripple effects on interactive elements

## Don'ts
- Use custom shadows outside elevation scale
- Mix Material with other design systems
- Use more than 3 FABs per screen
- Create inconsistent elevation usage
- Ignore accessibility contrast ratios

## Agent Instructions
- Apply elevation shadows per Material spec
- Use 8dp grid for all spacing and sizing
- Include ripple/ink effects on interactive elements
- Use Material color tokens for consistency
- Ensure touch targets are minimum 48dp
- Add appropriate motion/animation

## Output Constraints
- HTML/CSS: Material Design CSS (MDC Web) or custom mimicking spec
- React: @material/react-components or custom
- Grid: 8dp base
- Elevation: Only defined levels (0,1,2,3,4,6,8,16,24)
- Animation: 200-300ms standard duration

## Machine-Readable Rules
```json
{
  "name": "material-design",
  "category": "core",
  "grid_base": 8,
  "elevation_levels": [0,1,2,3,4,6,8,16,24],
  "touch_target_min": 48,
  "border_radius_card": 8,
  "app_bar_height": 56,
  "fab_size": 56,
  "animation_duration_standard": 300,
  "font_family": "Roboto",
  "color_palette": "material"
}
```
