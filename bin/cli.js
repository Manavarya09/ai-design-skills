#!/bin/bash

# PromptDesign CLI
# Usage: npx promptdesign [command]

COMMAND=$1
ARG=$2

case "$COMMAND" in
  "list")
    echo "PromptDesign - Available Design Languages"
    echo ""
    echo "Core (8):"
    echo "  minimalism, flat-design, material-design, swiss-international"
    echo "  enterprise-ui, data-first-dashboard, card-based-ui, bento-grid-layout"
    echo ""
    echo "Depth & Texture (6):"
    echo "  glassmorphism, neumorphism, claymorphism, soft-ui"
    echo "  gradient-mesh-design, aurora-ui"
    echo ""
    echo "Modes & Color (5):"
    echo "  dark-mode-minimal, monochrome-aesthetic, duotone-design"
    echo "  high-contrast-accessibility, pastel-ui"
    echo ""
    echo "Experimental (5):"
    echo "  brutalism, anti-design, retro-web, cyberpunk-ui, vaporwave-aesthetic"
    echo ""
    echo "Product-Oriented (5):"
    echo "  saas-modern, fintech-ui, ecommerce-conversion"
    echo "  mobile-first-ui, super-app-ui"
    echo ""
    echo "Futuristic (5):"
    echo "  tech-futurism, ai-native-ui, spatial-ui"
    echo "  voice-first-ui, gesture-based-ui"
    ;;
  "load")
    echo "Loading: $ARG"
    cat "promptdesign/skills/$ARG.md" 2>/dev/null || echo "Skill not found"
    ;;
  "search")
    echo "Searching for: $ARG"
    grep -r "$ARG" promptdesign/skills/*.md | head -10
    ;;
  *)
    echo "PromptDesign CLI"
    echo ""
    echo "Usage: promptdesign [command] [args]"
    echo ""
    echo "Commands:"
    echo "  list              List all design languages"
    echo "  load [skill]       Load a specific skill"
    echo "  search [query]     Search skills"
    echo ""
    echo "Examples:"
    echo "  promptdesign list"
    echo "  promptdesign load core/minimalism"
    echo "  promptdesign search glass"
    ;;
esac
