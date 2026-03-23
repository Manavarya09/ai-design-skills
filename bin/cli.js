#!/usr/bin/env node

// AI Design Skills CLI
// Run: npx ai-design-skills

const categories = {
  'Core (8)': ['minimalism', 'flat-design', 'material-design', 'swiss-international', 'enterprise-ui', 'data-first-dashboard', 'card-based-ui', 'bento-grid-layout'],
  'Depth & Texture (6)': ['glassmorphism', 'neumorphism', 'claymorphism', 'soft-ui', 'gradient-mesh-design', 'aurora-ui'],
  'Modes & Color (5)': ['dark-mode-minimal', 'monochrome-aesthetic', 'duotone-design', 'high-contrast-accessibility', 'pastel-ui'],
  'Experimental (5)': ['brutalism', 'anti-design', 'retro-web', 'cyberpunk-ui', 'vaporwave-aesthetic'],
  'Product Oriented (5)': ['saas-modern', 'fintech-ui', 'ecommerce-conversion', 'mobile-first-ui', 'super-app-ui'],
  'Futuristic (5)': ['tech-futurism', 'ai-native-ui', 'spatial-ui', 'voice-first-ui', 'gesture-based-ui']
};

function cyan(text) { return '\x1b[36m' + text + '\x1b[0m'; }
function green(text) { return '\x1b[32m' + text + '\x1b[0m'; }
function white(text) { return '\x1b[37m' + text + '\x1b[0m'; }
function gray(text) { return '\x1b[90m' + text + '\x1b[0m'; }
function yellow(text) { return '\x1b[33m' + text + '\x1b[0m'; }

const asciiArt = `
${cyan('╔══════════════════════════════════════════════════════════════╗')}
${cyan('║')}  ${white('AI Design Skills')}                                ${cyan('║')}
${cyan('║')}  ${gray('Give AI a Sense of Design')}                        ${cyan('║')}
${cyan('╚══════════════════════════════════════════════════════════════╝')}
`;

function showBanner() {
  console.clear();
  console.log(asciiArt);
  console.log(green('  35 Design Languages available\n'));
}

function showCategories() {
  console.log(gray('  Available Categories:\n'));
  Object.keys(categories).forEach((cat, i) => {
    console.log(`  ${white(String(i + 1) + '.')} ${cat}`);
  });
  console.log();
}

function showSkills() {
  console.log(gray('  All Design Languages:\n'));
  let count = 1;
  Object.entries(categories).forEach(([cat, skills]) => {
    console.log(yellow(`  ${cat}:`));
    skills.forEach(skill => {
      console.log(`    ${white(String(count++) + '.')} ${skill}`);
    });
    console.log();
  });
}

function showLoadCommand(skill) {
  console.log(green(`\n  Load Command for: ${white(skill)}\n`));
  console.log(gray('  Claude / skills.sh:'));
  console.log(white(`  /load promptdesign/core/${skill}\n`));
  console.log(gray('  Or use npm package:'));
  console.log(white(`  npm install ai-design-skills\n`));
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    showBanner();
    showCategories();
    
    console.log(gray('  Usage:'));
    console.log(white('    npx ai-design-skills                    Show this menu'));
    console.log(white('    npx ai-design-skills list                List all skills'));
    console.log(white('    npx ai-design-skills categories          Show categories'));
    console.log(white('    npx ai-design-skills minimalism         Show load command'));
    console.log(white('    npx ai-design-skills --help              Show help\n'));
    
    console.log(gray('  Quick Examples:'));
    console.log(`    ${white('minimalism, glassmorphism, cyberpunk-ui, saas-modern, etc.')}\n`);
    
    return;
  }

  const command = args[0];

  if (command === 'list' || command === '--list') {
    showBanner();
    showSkills();
  }
  else if (command === 'categories' || command === '--categories') {
    showBanner();
    showCategories();
  }
  else if (command === '--help' || command === '-h') {
    showBanner();
    console.log(gray('  Available Commands:\n'));
    console.log(white('    list           - Show all 35 design languages'));
    console.log(white('    categories     - Show categories'));
    console.log(white('    [skill-name]   - Show load command for that skill'));
    console.log(white('    --help         - Show this help\n'));
    console.log(gray('  Examples:'));
    console.log(white('    npx ai-design-skills list'));
    console.log(white('    npx ai-design-skills glassmorphism'));
    console.log(white('    npx ai-design-skills brutalism'));
  }
  else {
    // Check if it's a valid skill
    let found = false;
    Object.values(categories).forEach(skills => {
      if (skills.includes(command)) {
        showLoadCommand(command);
        found = true;
      }
    });
    
    if (!found) {
      showBanner();
      console.log(yellow(`  Unknown command: ${command}\n`));
      console.log(gray('  Run: npx ai-design-skills --help\n'));
    }
  }
}

main();