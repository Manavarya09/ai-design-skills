# Bento Grid Layout

## Intent
Create dynamic, modern layouts using a modular grid system where content blocks of varying sizes create visual interest and clear hierarchy.

## Principles
1. **Modular composition** - Content lives in rectangular cells of varying sizes
2. **Proportional hierarchy** - Larger cells = more important content
3. **Tight spacing** - Minimal gaps, content-dense but not cramped
4. **Asymmetric balance** - Deliberate variation creates rhythm
5. **Visual anchors** - Hero cells draw initial attention

## Layout Rules
- Base grid: 4x4 or 6x6
- Cells span 1x1, 1x2, 2x1, 2x2, 2x3, or larger
- Grid gap: 12-16px
- Asymmetric placement creates visual interest
- Large cells typically top-left or top-center
- Consistent border-radius: 16-24px
- Full-bleed or contained options
- Responsive: Simplified grid on mobile

## Typography
- Font: Clean geometric sans-serif (Inter, Plus Jakarta Sans)
- Cell titles: 20-28px bold
- Cell content: 14-16px regular
- Small labels: 11-12px uppercase
- Numbers in cells: 36-48px for stats
- Tight line-height: 1.2-1.4
- High contrast within cells

## Colors
- Background: White or very light gray
- Cell backgrounds: White, light tints, or brand colors
- Text: Dark gray (#1A1A2E) on light
- Accent cells: Brand color fills
- Graphical cells: Gradients or images
- Subtle cell borders: 1px rgba(0,0,0,0.05)
- No harsh shadows, use subtle elevation

## Components
- Hero Cell: 2x2 or larger, primary content
- Standard Cell: 1x1 or 1x2, basic content
- Media Cell: Image or video dominant
- Stats Cell: Large numbers with labels
- List Cell: Compact list or feed
- Chart Cell: Embedded visualization
- Text Cell: Article or announcement
- Action Cell: CTA button prominent

## Do's
- Create clear visual hierarchy with cell sizes
- Use consistent spacing throughout grid
- Match cell border-radius to design tone
- Include micro-interactions on hover
- Support both contained and image cells
- Use brand colors strategically
- Ensure touch-friendly cell interactions
- Provide fallback content for media cells

## Don'ts
- Make cells too small to read
- Use inconsistent gap sizes
- Create cluttered cells with too much content
- Mix sharp corners with rounded cells
- Force square cells when aspect ratios vary
- Ignore mobile stacking order
- Use heavy shadows that dominate
- Overlap cells

## Agent Instructions
- Define cell sizes based on content importance
- Use 12-16px gaps between all cells
- Apply consistent 16-24px border-radius
- Mix cell sizes: 1x1, 2x1, 2x2 for variety
- Place most important content in larger cells
- Ensure cells are self-sufficient
- Add subtle hover states
- Support mobile as stacked or simplified grid

## Output Constraints
- HTML/CSS: CSS Grid with grid-template-areas
- React: Grid component with span props
- Gap: 12-16px
- Border-radius: 16-24px
- Mobile: Stack or 2-column max
- Performance: Lazy load off-screen cells

## Machine-Readable Rules
```json
{
  "name": "bento-grid-layout",
  "category": "core",
  "grid_base": 4,
  "gap": 14,
  "border_radius": 20,
  "cell_sizes": ["1x1","1x2","2x1","2x2","2x3"],
  "asymmetric": true,
  "shadow_heavy": false,
  "mobile_columns": 2,
  "touch_spacing": 44
}
```
