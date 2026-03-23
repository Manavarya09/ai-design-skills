# Data-First Dashboard

## Intent
Create interfaces where data visualization and information architecture take precedence, enabling users to monitor, analyze, and act on metrics efficiently.

## Principles
1. **Data visibility** - Most important metrics visible without scrolling
2. **Progressive disclosure** - Summary first, details on demand
3. **Scan-friendly layouts** - Eye naturally moves to key metrics
4. **Real-time awareness** - Visual cues for data freshness
5. **Actionable insights** - Data leads to clear next steps

## Layout Rules
- Dashboard grid: 12-column responsive grid
- Hero metrics at top (KPIs, headlines)
- Secondary data in middle rows
- Tertiary details in expandable sections
- Fixed header with time range and filters
- Sidebar for navigation and context
- Sticky positioning for important metrics
- Dense but organized information hierarchy

## Typography
- Font: Inter, Roboto, or SF Pro (highly legible for numbers)
- Metrics: 32-48px bold for primary KPIs
- Labels: 12-14px, muted color
- Comparisons: 14px with color indicators
- Body text: 14px for descriptions
- Tabular numbers enabled for alignment
- Monospace for timestamps and IDs

## Colors
- Primary: Deep blue (#1E3A5F) for headers
- Background: Very light gray (#F8F9FA)
- Cards: White with subtle borders
- Positive: Green (#10B981)
- Negative: Red (#EF4444)
- Neutral: Gray (#6B7280)
- Chart colors: Palette of 6-8 distinct colors
- Trend indicators: Arrow icons with color

## Components
- Metric Cards: Large number, label, trend indicator, sparkline
- Charts: Line, bar, area, donut with clear legends
- Data Tables: Sortable, filterable, with pagination
- Filters: Date range picker, multi-select dropdowns
- Time Selector: Preset ranges + custom
- Export Actions: CSV, PDF buttons
- Refresh Indicator: Last updated timestamp
- Alert Badges: Critical metrics highlighted

## Do's
- Lead with key metrics
- Show trends and comparisons
- Use consistent chart types for related data
- Enable drill-down navigation
- Include data context (time periods, comparisons)
- Support keyboard shortcuts for power users
- Provide export functionality
- Show data quality indicators

## Don'ts
- Bury important data in tabs
- Use decorative charts without meaning
- Mix incompatible chart types
- Show raw data without summary
- Use colors that don't indicate meaning
- Overload with too many metrics
- Ignore mobile responsiveness

## Agent Instructions
- Prioritize data visibility in layout
- Use appropriate chart types for data
- Include trend indicators and comparisons
- Add sparklines for time-series data
- Structure with KPI summary → detailed breakdown
- Enable filtering and date selection
- Include export options
- Ensure charts have clear legends and labels

## Output Constraints
- HTML/CSS: Chart.js, D3.js, or Recharts compatible
- React: Chart components with responsive containers
- Grid: 12 columns, responsive breakpoints
- Chart colors: Accessible, colorblind-friendly palette
- Performance: Lazy load data-heavy sections

## Machine-Readable Rules
```json
{
  "name": "data-first-dashboard",
  "category": "core",
  "grid_columns": 12,
  "chart_types": ["line","bar","area","donut","sparkline"],
  "kpi_min_size": 32,
  "spacing_base": 8,
  "colors_meaningful": true,
  "trend_indicators": true,
  "export_enabled": true,
  "filters_required": true,
  "responsive": true
}
```
