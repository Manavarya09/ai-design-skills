import type {
  DesignLanguage,
  TransformInput,
  TransformOutput,
  Category,
  SkillMeta,
} from '../types/index.js';

export async function getAllDesignLanguages(): Promise<Category[]> {
  const modules = await Promise.all([
    import('../skills/core/minimalism.md'),
    import('../skills/core/flat-design.md'),
    import('../skills/core/material-design.md'),
    import('../skills/core/swiss-international.md'),
    import('../skills/core/enterprise-ui.md'),
    import('../skills/core/data-first-dashboard.md'),
    import('../skills/core/card-based-ui.md'),
    import('../skills/core/bento-grid-layout.md'),
    import('../skills/depth-texture/glassmorphism.md'),
    import('../skills/depth-texture/neumorphism.md'),
    import('../skills/depth-texture/claymorphism.md'),
    import('../skills/depth-texture/soft-ui.md'),
    import('../skills/depth-texture/gradient-mesh-design.md'),
    import('../skills/depth-texture/aurora-ui.md'),
    import('../skills/modes-color/dark-mode-minimal.md'),
    import('../skills/modes-color/monochrome-aesthetic.md'),
    import('../skills/modes-color/duotone-design.md'),
    import('../skills/modes-color/high-contrast-accessibility.md'),
    import('../skills/modes-color/pastel-ui.md'),
    import('../skills/experimental/brutalism.md'),
    import('../skills/experimental/anti-design.md'),
    import('../skills/experimental/retro-web.md'),
    import('../skills/experimental/cyberpunk-ui.md'),
    import('../skills/experimental/vaporwave-aesthetic.md'),
    import('../skills/product-oriented/saas-modern.md'),
    import('../skills/product-oriented/fintech-ui.md'),
    import('../skills/product-oriented/ecommerce-conversion.md'),
    import('../skills/product-oriented/mobile-first-ui.md'),
    import('../skills/product-oriented/super-app-ui.md'),
    import('../skills/futuristic/tech-futurism.md'),
    import('../skills/futuristic/ai-native-ui.md'),
    import('../skills/futuristic/spatial-ui.md'),
    import('../skills/futuristic/voice-first-ui.md'),
    import('../skills/futuristic/gesture-based-ui.md'),
  ]);

  return modules.map(m => m.default as unknown as Category);
}

export async function getDesignLanguage(name: string): Promise<DesignLanguage | null> {
  const modules = await Promise.all([
    import('../skills/core/minimalism.md'),
    import('../skills/core/flat-design.md'),
    import('../skills/core/material-design.md'),
    import('../skills/core/swiss-international.md'),
    import('../skills/core/enterprise-ui.md'),
    import('../skills/core/data-first-dashboard.md'),
    import('../skills/core/card-based-ui.md'),
    import('../skills/core/bento-grid-layout.md'),
    import('../skills/depth-texture/glassmorphism.md'),
    import('../skills/depth-texture/neumorphism.md'),
    import('../skills/depth-texture/claymorphism.md'),
    import('../skills/depth-texture/soft-ui.md'),
    import('../skills/depth-texture/gradient-mesh-design.md'),
    import('../skills/depth-texture/aurora-ui.md'),
    import('../skills/modes-color/dark-mode-minimal.md'),
    import('../skills/modes-color/monochrome-aesthetic.md'),
    import('../skills/modes-color/duotone-design.md'),
    import('../skills/modes-color/high-contrast-accessibility.md'),
    import('../skills/modes-color/pastel-ui.md'),
    import('../skills/experimental/brutalism.md'),
    import('../skills/experimental/anti-design.md'),
    import('../skills/experimental/retro-web.md'),
    import('../skills/experimental/cyberpunk-ui.md'),
    import('../skills/experimental/vaporwave-aesthetic.md'),
    import('../skills/product-oriented/saas-modern.md'),
    import('../skills/product-oriented/fintech-ui.md'),
    import('../skills/product-oriented/ecommerce-conversion.md'),
    import('../skills/product-oriented/mobile-first-ui.md'),
    import('../skills/product-oriented/super-app-ui.md'),
    import('../skills/futuristic/tech-futurism.md'),
    import('../skills/futuristic/ai-native-ui.md'),
    import('../skills/futuristic/spatial-ui.md'),
    import('../skills/futuristic/voice-first-ui.md'),
    import('../skills/futuristic/gesture-based-ui.md'),
  ]);

  const skillMap: Record<string, unknown> = {
    'minimalism': modules[0].default,
    'flat-design': modules[1].default,
    'material-design': modules[2].default,
    'swiss-international': modules[3].default,
    'enterprise-ui': modules[4].default,
    'data-first-dashboard': modules[5].default,
    'card-based-ui': modules[6].default,
    'bento-grid-layout': modules[7].default,
    'glassmorphism': modules[8].default,
    'neumorphism': modules[9].default,
    'claymorphism': modules[10].default,
    'soft-ui': modules[11].default,
    'gradient-mesh-design': modules[12].default,
    'aurora-ui': modules[13].default,
    'dark-mode-minimal': modules[14].default,
    'monochrome-aesthetic': modules[15].default,
    'duotone-design': modules[16].default,
    'high-contrast-accessibility': modules[17].default,
    'pastel-ui': modules[18].default,
    'brutalism': modules[19].default,
    'anti-design': modules[20].default,
    'retro-web': modules[21].default,
    'cyberpunk-ui': modules[22].default,
    'vaporwave-aesthetic': modules[23].default,
    'saas-modern': modules[24].default,
    'fintech-ui': modules[25].default,
    'ecommerce-conversion': modules[26].default,
    'mobile-first-ui': modules[27].default,
    'super-app-ui': modules[28].default,
    'tech-futurism': modules[29].default,
    'ai-native-ui': modules[30].default,
    'spatial-ui': modules[31].default,
    'voice-first-ui': modules[32].default,
    'gesture-based-ui': modules[33].default,
  };

  return skillMap[name] as DesignLanguage | null;
}

export async function searchDesignLanguages(query: string): Promise<SkillMeta[]> {
  const allDesignLanguages = await getAllDesignLanguages();
  const q = query.toLowerCase();
  const results: SkillMeta[] = [];

  for (const cat of allDesignLanguages) {
    for (const skill of cat.skills) {
      if (
        skill.name.toLowerCase().includes(q) ||
        skill.intent.toLowerCase().includes(q) ||
        skill.tags.some((t: string) => t.toLowerCase().includes(q))
      ) {
        results.push(skill);
      }
    }
  }

  return results;
}

export async function transformUI(input: TransformInput): Promise<TransformOutput> {
  const design = await getDesignLanguage(input.design);

  if (!design) {
    throw new Error(`Design language "${input.design}" not found`);
  }

  const appliedRules: TransformOutput['applied_rules'] = [];
  const changes: TransformOutput['changes'] = [];

  appliedRules.push({
    category: 'layout',
    rule: 'spacing',
    applied: true,
  });

  appliedRules.push({
    category: 'typography',
    rule: design.typography.fontFamily[0],
    applied: true,
  });

  appliedRules.push({
    category: 'colors',
    rule: 'palette',
    applied: true,
  });

  return {
    styled_output: input.input,
    applied_rules: appliedRules,
    changes,
  };
}

export function getMasterPrompt(designName: string): string {
  return `You are a Design Language Engine.

Follow the ${designName} design language rules strictly:
- Layout: Grid-based, follow spacing system
- Typography: Font hierarchy, scale
- Colors: Use defined palette
- Components: Follow component specs

Enforce all constraints. Reject invalid patterns.
Maintain accessibility (WCAG AA minimum).

Output only valid, production-ready code.`;
}

export const DESIGN_LANGUAGES = [
  'minimalism',
  'flat-design',
  'material-design',
  'swiss-international',
  'enterprise-ui',
  'data-first-dashboard',
  'card-based-ui',
  'bento-grid-layout',
  'glassmorphism',
  'neumorphism',
  'claymorphism',
  'soft-ui',
  'gradient-mesh-design',
  'aurora-ui',
  'dark-mode-minimal',
  'monochrome-aesthetic',
  'duotone-design',
  'high-contrast-accessibility',
  'pastel-ui',
  'brutalism',
  'anti-design',
  'retro-web',
  'cyberpunk-ui',
  'vaporwave-aesthetic',
  'saas-modern',
  'fintech-ui',
  'ecommerce-conversion',
  'mobile-first-ui',
  'super-app-ui',
  'tech-futurism',
  'ai-native-ui',
  'spatial-ui',
  'voice-first-ui',
  'gesture-based-ui',
];

export default {
  getDesignLanguage,
  getAllDesignLanguages,
  searchDesignLanguages,
  transformUI,
  getMasterPrompt,
  DESIGN_LANGUAGES,
};
