# Enterprise UI

## Intent
Build trustworthy, efficient interfaces for business users that prioritize clarity, data density, and reduced cognitive load.

## Principles
1. **Reliability over novelty** - Predictable patterns users trust
2. **Information density** - Pack data efficiently without clutter
3. **Action clarity** - Every action has clear consequences
4. **Professional aesthetics** - Serious, polished, corporate-appropriate
5. **Accessibility compliance** - WCAG 2.1 AA minimum

## Layout Rules
- Sidebar navigation (collapsible)
- Header: 48-64dp height
- Content: 1440px max-width centered
- Dense tables: 36-48px row height
- 12px base spacing unit
- Card-based sections for grouping
- Clear visual hierarchy for dense content

## Typography
- Font: Segoe UI, San Francisco, or system sans-serif
- Body: 13-14px, Line-height: 1.4
- Table data: 12-13px
- Clear hierarchy: H1 24px, H2 20px, H3 16px
- No decorative fonts
- High contrast: 4.5:1 minimum

## Colors
- Primary: Corporate blue (#0066CC, #0052CC)
- Background: Light gray (#F5F5F5) or white
- Surface: White (#FFFFFF)
- Text: Dark gray (#1A1A1A)
- Success: #107C10
- Warning: #FFB900
- Error: #D13438
- Borders: Light gray (#E0E0E0)

## Components
- Buttons: Contained primary, outlined secondary, text tertiary
- Tables: Zebra striping optional, sortable columns, pagination
- Forms: Inline validation, clear labels above inputs
- Modals: Centered, 600px max-width
- Alerts: Top banner or inline
- Navigation: Icons + text in sidebar

## Do's
- Use familiar UI patterns
- Provide clear feedback and states
- Support keyboard navigation
- Show loading states for async operations
- Allow bulk operations in tables
- Include export/print functionality
- Use breadcrumbs for deep navigation

## Don'ts
- Use flashy animations
- Create non-standard interactions
- Hide important actions in menus
- Use ambiguous iconography
- Display data without context
- Mix primary colors unexpectedly

## Agent Instructions
- Use established UI patterns
- Prioritize clarity over visual interest
- Include all necessary states (hover, focus, disabled, loading)
- Add inline validation for forms
- Ensure keyboard accessibility
- Use enterprise-appropriate colors
- Keep interactions predictable

## Output Constraints
- HTML/CSS: BEM naming, enterprise framework compatible
- React: Class components or functional with hooks
- WCAG 2.1 AA compliance
- Touch targets: 44x44px minimum
- Focus indicators visible

## Machine-Readable Rules
```json
{
  "name": "enterprise-ui",
  "category": "core",
  "max_content_width": 1440,
  "base_spacing": 12,
  "row_height_min": 36,
  "header_height": 56,
  "contrast_min": 4.5,
  "touch_target_min": 44,
  "wcag_level": "AA",
  "color_corporate": true,
  "patterns": "established"
}
```
