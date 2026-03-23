# Card-Based UI

## Intent
Organize content into self-contained, scannable units that create visual rhythm and enable flexible, responsive layouts.

## Principles
1. **Self-contained units** - Each card stands alone with complete information
2. **Consistent sizing** - Cards align in grids with predictable dimensions
3. **Clear hierarchy** - Content within cards follows strict hierarchy
4. **Equal visual weight** - Cards of same type have equal prominence
5. **Whitespace breathing** - Adequate space between cards for clarity

## Layout Rules
- Grid system: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Card gap: 16-24px
- Cards float above background with subtle shadow or border
- Masonry option for variable height content
- Consistent card padding: 16-24px
- Maximum card width: 400px for readability
- Equal height cards in same row
- Visual grouping of related cards

## Typography
- Font: System sans-serif for performance
- Card title: 16-20px bold, max 2 lines
- Card description: 14px regular, max 3-4 lines
- Meta information: 12px muted
- Action text: 14px medium
- Ellipsis for overflow text
- Line-height: 1.4-1.5

## Colors
- Card background: White (#FFFFFF)
- Card border: Light gray (#E5E7EB) or none
- Card shadow: Subtle rgba(0,0,0,0.1)
- Title text: Dark gray (#1F2937)
- Body text: Medium gray (#4B5563)
- Meta text: Light gray (#9CA3AF)
- Accent: One brand color for actions
- Hover state: Slight background darken or lift

## Components
- Content Card: Image, title, description, actions
- Profile Card: Avatar, name, role, stats
- Product Card: Image, title, price, rating, CTA
- Stat Card: Large number, label, trend
- List Card: Icon, title, subtitle, chevron
- Action Card: Title, description, primary action
- Media Card: Video or image dominant
- Form Card: Grouped inputs with save

## Do's
- Keep cards focused on single purpose
- Use consistent sizing within categories
- Include clear CTAs
- Show key information without expansion
- Support clickable entire card or individual actions
- Use thumbnails for visual interest
- Include metadata (date, author, category)
- Handle empty/loading states gracefully

## Don'ts
- Mix card sizes without reason
- Overcrowd cards with information
- Use cards for navigation menus
- Nest cards within cards
- Create cards that require horizontal scroll
- Use too many actions per card
- Ignore touch target sizes on mobile

## Agent Instructions
- Create uniform cards with consistent structure
- Apply same padding to all cards
- Use grid alignment for card layout
- Include image placeholders for missing visuals
- Add hover/focus states
- Structure: Image → Title → Description → Actions
- Support skeleton loading states
- Ensure equal heights in rows

## Output Constraints
- HTML/CSS: CSS Grid or Flexbox with gap
- React: Reusable Card component with variants
- Border radius: 8-12px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Mobile: Single column, full width cards
- Touch targets: 44px minimum

## Machine-Readable Rules
```json
{
  "name": "card-based-ui",
  "category": "core",
  "grid_columns_desktop": 4,
  "grid_columns_tablet": 2,
  "grid_columns_mobile": 1,
  "card_gap": 20,
  "card_padding": 20,
  "card_max_width": 400,
  "border_radius": 12,
  "shadow_subtle": true,
  "self_contained": true
}
```
