---
name: Aether Intelligence
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e2e2eb'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e2e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#124af0'
  secondary: '#d4bbff'
  on-secondary: '#41008b'
  secondary-container: '#6c04de'
  on-secondary-container: '#d4baff'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#007981'
  on-tertiary-container: '#c4faff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ebdcff'
  secondary-fixed-dim: '#d4bbff'
  on-secondary-fixed: '#270058'
  on-secondary-fixed-variant: '#5d00c2'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#111319'
  on-background: '#e2e2eb'
  surface-variant: '#33343b'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is built for the frontiers of artificial intelligence and high-performance software engineering. It evokes a sense of "digital precision" and "futuristic intelligence" through a curated mix of **Modern Corporate** and **Glassmorphism**. 

The aesthetic is anchored by a deep, dark environment that allows vibrant, luminous accents to pop. It targets a professional audience that demands both innovation and reliability. The visual language utilizes translucency to suggest depth and data transparency, creating a "cockpit" feel for complex AI workflows.

## Colors

The color palette is derived directly from the core energy of the brand's visual identity. 
- **Primary & Secondary:** A high-vibrancy duo of Electric Blue and Deep Purple, used for interactive elements and data highlights.
- **Accent:** A Cyan "glow" color for status indicators and high-priority callouts.
- **Neutrals:** The background uses a "Deep Space" navy (#0F1117) to provide a more sophisticated alternative to pure black, maintaining high contrast with the white typography.
- **Gradients:** Brand elements should utilize a linear gradient from the Secondary Purple to the Primary Blue at a 135-degree angle.

## Typography

The typography system uses three distinct fonts to reinforce the "tech-forward" narrative:
- **Display & Headlines:** *Space Grotesk* provides a geometric, futuristic feel with its unique terminals and high-tech character.
- **Body & UI:** *Geist* offers a hyper-readable, neutral, and developer-friendly experience for long-form content and interface labels.
- **Data & Monospace:** *JetBrains Mono* is used for all technical readouts, IDs, and code snippets, grounding the system in an engineering aesthetic.

All headlines should be rendered in "High-Contrast White" (#FFFFFF) for maximum legibility against the dark backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high internal density and generous external margins.
- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile.
- **Rhythm:** An 8px base grid ensures consistent alignment of UI elements.
- **Density:** UI components (inputs, list items) should maintain a compact vertical footprint to maximize information density, while layout sections should use large padding (64px+) to create "breathable" premium sections.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.
- **Layers:** Surface levels are distinguished by increasing lightness. The background is the darkest, with cards and containers being slightly lighter (#1C202B).
- **Glass Effects:** Top-level modals and navigation bars use a backdrop filter (blur: 12px) and a semi-transparent fill (rgba(255, 255, 255, 0.05)).
- **Inner Glow:** Interactive cards should feature a 1px subtle inner border (rgba(255, 255, 255, 0.1)) to simulate a beveled glass edge.

## Shapes

The shape language is **Soft** and precise. 
- **Standard UI:** 4px (0.25rem) radius for buttons and inputs creates a sharp, professional look without being aggressive.
- **Containers:** Large cards and modals use 12px (0.75rem) to soften the overall interface.
- **Icons:** Icons should be stroke-based (1.5px or 2px weight) with slight rounding to match the typography's geometric nature.

## Components

### Buttons
- **Primary:** Gradient fill (Purple to Blue) with white text. No border.
- **Secondary:** Ghost style with a 1px Primary Blue border and Primary Blue text.
- **Tertiary:** Pure white text with no background; underlays a subtle grey highlight on hover.

### Inputs & Fields
- Dark backgrounds (#0F1117) with a 1px border that glows (Secondary Purple) when focused. 
- Label text uses *JetBrains Mono* for a technical "Input Field" aesthetic.

### Cards
- Subtle background blur (8px).
- 1px border using a gradient of white-to-transparent to create a "light-source" effect from the top left.

### Chips & Tags
- Used for AI model versions or status. Feature a solid background with 10% opacity of the accent color and high-vibrancy text of the same color.

### Data Visualization
- Line charts should use the Primary Blue with a subtle gradient area fill underneath.
- Grid lines in charts should be kept at extremely low contrast (rgba(255, 255, 255, 0.05)).