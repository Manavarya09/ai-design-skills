#!/usr/bin/env node

import inquirer from 'inquirer';

const categories = {
  'Core': ['minimalism', 'flat-design', 'material-design', 'swiss-international', 'enterprise-ui', 'data-first-dashboard', 'card-based-ui', 'bento-grid-layout'],
  'Depth & Texture': ['glassmorphism', 'neumorphism', 'claymorphism', 'soft-ui', 'gradient-mesh-design', 'aurora-ui'],
  'Modes & Color': ['dark-mode-minimal', 'monochrome-aesthetic', 'duotone-design', 'high-contrast-accessibility', 'pastel-ui'],
  'Experimental': ['brutalism', 'anti-design', 'retro-web', 'cyberpunk-ui', 'vaporwave-aesthetic'],
  'Product Oriented': ['saas-modern', 'fintech-ui', 'ecommerce-conversion', 'mobile-first-ui', 'super-app-ui'],
  'Futuristic': ['tech-futurism', 'ai-native-ui', 'spatial-ui', 'voice-first-ui', 'gesture-based-ui']
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

function showLoadCommand(skill) {
  console.log(green(`\n  Load Command for: ${white(skill)}\n`));
  console.log(gray('  Claude / skills.sh:'));
  console.log(white(`  /load ai-design-skills/core/${skill}\n`));
  console.log(gray('  Or use npm package:'));
  console.log(white(`  npm install ai-design-skills\n`));
}

async function interactiveMenu() {
  showBanner();
  
  const allSkills = Object.entries(categories).flatMap(([cat, skills]) => 
    skills.map(s => ({ name: s, category: cat }))
  );
  
  const choices = [
    ...Object.keys(categories).map(cat => ({
      name: `${cat} (${categories[cat].length})`,
      value: `category:${cat}`
    })),
    new inquirer.Separator(),
    ...allSkills.map(s => ({
      name: s.name,
      value: `skill:${s.name}`
    })),
    new inquirer.Separator(),
    { name: 'List all 35 skills', value: 'list' },
    { name: 'Show categories', value: 'categories' },
    { name: 'Exit', value: 'exit' }
  ];

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: gray('Select an option:'),
      choices: choices,
      loop: false,
      pageSize: 20
    }
  ]);

  const selection = answer.selection;

  if (selection === 'exit') {
    console.log(gray('\n  Goodbye!\n'));
    process.exit(0);
  }
  else if (selection === 'list') {
    console.clear();
    showBanner();
    console.log(gray('  All Design Languages:\n'));
    Object.entries(categories).forEach(([cat, skills]) => {
      console.log(yellow(`  ${cat}:`));
      skills.forEach((skill, i) => {
        console.log(`    ${white(String(i + 1) + '.')} ${skill}`);
      });
      console.log();
    });
    await inquirer.prompt([{ type: 'input', name: 'done', message: gray('\n  Press Enter to continue...') }]);
    await interactiveMenu();
  }
  else if (selection === 'categories') {
    console.clear();
    showBanner();
    console.log(gray('  Available Categories:\n'));
    Object.keys(categories).forEach((cat, i) => {
      console.log(`  ${white(String(i + 1) + '.')} ${cat} (${categories[cat].length})`);
    });
    console.log();
    await inquirer.prompt([{ type: 'input', name: 'done', message: gray('\n  Press Enter to continue...') }]);
    await interactiveMenu();
  }
  else if (selection.startsWith('category:')) {
    const cat = selection.replace('category:', '');
    console.clear();
    showBanner();
    console.log(gray(`  ${cat} Skills:\n`));
    categories[cat].forEach((skill, i) => {
      console.log(`  ${white(String(i + 1) + '.')} ${skill}`);
    });
    console.log();
    
    const skillAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'skill',
        message: gray('Select a skill to get load command:'),
        choices: [
          ...categories[cat],
          { name: 'Go back', value: 'back' }
        ]
      }
    ]);
    
    if (skillAnswer.skill !== 'back') {
      showLoadCommand(skillAnswer.skill);
    }
    await inquirer.prompt([{ type: 'input', name: 'done', message: gray('\n  Press Enter to continue...') }]);
    await interactiveMenu();
  }
  else if (selection.startsWith('skill:')) {
    const skill = selection.replace('skill:', '');
    showLoadCommand(skill);
    await inquirer.prompt([{ type: 'input', name: 'done', message: gray('\n  Press Enter to continue...') }]);
    await interactiveMenu();
  }
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

function showCategories() {
  console.log(gray('  Available Categories:\n'));
  Object.keys(categories).forEach((cat, i) => {
    console.log(`  ${white(String(i + 1) + '.')} ${cat} (${categories[cat].length})`);
  });
  console.log();
}

 {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    await interactiveMenu();
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
