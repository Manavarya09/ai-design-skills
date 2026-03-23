export interface DesignLanguage {
  name: string;
  category: string;
  intent: string;
  principles: string[];
  layout: LayoutRules;
  typography: TypographyRules;
  colors: ColorRules;
  components: ComponentSpec[];
  dos: string[];
  donts: string[];
  agentInstructions: string[];
  outputConstraints: OutputConstraints;
  rules: MachineReadableRules;
}

export interface LayoutRules {
  gridSystem?: string;
  spacingBase?: number;
  maxWidth?: number;
  padding?: string;
  borderRadius?: string;
  elevation?: string[];
  [key: string]: unknown;
}

export interface TypographyRules {
  fontFamily: string[];
  fontWeights?: number[];
  fontSizes?: string[];
  lineHeight?: number;
  letterSpacing?: string;
  [key: string]: unknown;
}

export interface ColorRules {
  primary?: string;
  accent?: string;
  background?: string;
  text?: string;
  surface?: string;
  borders?: string;
  palette?: ColorPalette[];
  [key: string]: unknown;
}

export interface ColorPalette {
  name: string;
  hex: string;
  usage?: string;
}

export interface ComponentSpec {
  name: string;
  description: string;
  styles: Record<string, string>;
  states?: ComponentState[];
}

export interface ComponentState {
  name: string;
  styles: Record<string, string>;
}

export interface OutputConstraints {
  html?: string;
  react?: string;
  css?: string;
  framework?: string;
  performance?: string;
  [key: string]: unknown;
}

export interface MachineReadableRules {
  name: string;
  category: string;
  [key: string]: unknown;
}

export interface TransformInput {
  design: string;
  input: string;
  options?: TransformOptions;
}

export interface TransformOptions {
  framework?: 'html' | 'react' | 'vue' | 'svelte';
  preserveContent?: boolean;
  strict?: boolean;
}

export interface TransformOutput {
  styled_output: string;
  applied_rules: AppliedRule[];
  changes: Change[];
  warnings?: string[];
}

export interface AppliedRule {
  category: string;
  rule: string;
  applied: boolean;
}

export interface Change {
  type: 'added' | 'removed' | 'modified';
  element: string;
  before?: string;
  after: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  description: string;
  skills: SkillMeta[];
}

export interface SkillMeta {
  name: string;
  file: string;
  intent: string;
  tags: string[];
  mood: string;
}

export interface PromptDesignConfig {
  defaultFramework?: 'html' | 'react' | 'vue' | 'svelte';
  strictMode?: boolean;
  accessibilityLevel?: 'A' | 'AA' | 'AAA';
}
