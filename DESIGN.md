---
name: Samuel Bruno
description: Technical sheet on a multipart carbon form; every project is a signed, stamped test.
colors:
  ink: "#ede8dc"
  carbon: "#e2b659"
  stamp: "#ff6a55"
  ink-it: "#f6e9ea"
  carbon-it: "#ffc9a8"
  stamp-it: "#ff8a7a"
  ink-paper: "#141414"
  carbon-paper: "#16318c"
  stamp-paper: "#c8232c"
  copy-white: "#ffffff"
  copy-en: "#0f1b33"
  copy-it: "#5a1322"
  copy-paper: "#f2efe8"
  tint: "#252a33"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.2vw, 5.75rem)"
    fontWeight: 750
    lineHeight: 0.92
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 75"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4.4vw, 3.25rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 85"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  fill-lg:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.35
  fill:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.35
  prose:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 75"
  measure-lg:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "clamp(1.6rem, 3.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum'"
  measure:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: "'tnum'"
  stamp:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 62"
rounded:
  none: "0px"
  tab: "3px"
  stamp: "6px"
  eyelet: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  gutter: "clamp(16px, 4vw, 48px)"
  block: "clamp(64px, 9vw, 112px)"
  sheet-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.copy-white}"
    rounded: "{rounded.tab}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.copy-white}"
  link-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-secondary-hover:
    textColor: "{colors.carbon}"
  copy-tab-white:
    backgroundColor: "{colors.copy-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "8px 12px"
    height: "40px"
  copy-tab-it:
    backgroundColor: "{colors.copy-it}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "8px 12px"
    height: "40px"
  section-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.copy-white}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "10px 16px 9px"
  field:
    backgroundColor: "{colors.copy-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    padding: "12px 16px 14px"
  stamp-pass:
    textColor: "{colors.stamp}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "5px 12px 4px"
  schedule-row-hover:
    backgroundColor: "{colors.tint}"
---

# Design System: Samuel Bruno

## Overview

**Creative North Star: "The Signed Technical Sheet"**

The site is a multipart carbon form filled in by hand-feel machinery: a technical sheet where each project is a test with a measured value, a spec line, a red PASS stamp and a signature line. The paper does the structuring. Black printed rules divide the sheet into cells; condensed capital labels name each cell; the answers are filled in carbon blue, slightly off register, as if pressed through from the top copy. Nothing floats and nothing is decorated; every mark is either printed form, filled value, or stamp.

Language is the copy you hold. The English original is navy, the Italian copy is bordeaux, and the sign-off at the bottom is the light paper copy torn along a perforation. Copy colors own whole regions of the page (the root background and every cell), never accents or chips. Density is high and orderly, like a real form: tight ruled cells, tabular numerals, dotted leaders from each description to its value.

The world refuses the dev-portfolio default: no name hero over a gradient, no skill-badge clouds, no card grid of projects. Projects are rows in a test schedule and sheets in their own right.

**Key Characteristics:**
- Three inks only: printed black, carbon blue, stamp red.
- Paper color is a region, never an accent: navy (EN), bordeaux (IT), light paper (sign-off).
- Ruled cells built from 1px ink gaps, with 3px heavy rules opening each block.
- Archivo on its width axis for everything printed and filled; Martian Mono for every identifier and measurement.
- One signature motion: stamps impress in sequence; copy color cross-fades on language change.

## Colors

A paper-and-ink palette: three inks over three paper copies, with one faint working tint.

### Primary
- **Carbon Blue** (carbon): every filled-in value. Names, roles, scope text, measured values, project names, schedule key values, checkmarks, focus rings, text selection and hover state on printed links. If it was written into the form, it is carbon.

### Secondary
- **Stamp Red** (stamp): the rubber stamp and nothing else. PASS / SUPERATO stamps in results tables and the VOID stamp on the 404 sheet.

### Neutral
- **Printed Black** (ink): the form itself. Rules, cell gaps, labels, section bars, the eyelet rings, the staple, the primary button, footer text, body copy.
- **Navy Original** (copy-en): the English copy and the default page and cell background (`data-copy="navy"`). Inks on it: paper ink #ede8dc, brass #e2b659 for filled values, stamp #ff6a55.
- **Bordeaux Copy** (copy-it): the Italian copy (`data-copy="bordeaux"`). Inks on it: #f6e9ea, carbon #ffc9a8, stamp #ff8a7a.
- **Paper Copy** (copy-paper): the sign-off section only. It carries the original light-paper inks: black #141414, carbon #16318c, stamp #c8232c.
- **Each copy owns its ink set.** `--ink`, `--carbon`, `--stamp` and `--tint` are redeclared per copy so every component keeps AA contrast on every ground.
- **Print White** (copy-white): never a page ground. Only the photo print border and text on the black primary button.
- **Carbon Wash** (tint): a 7% carbon wash over the current copy (`color-mix(in srgb, carbon 7%, copy)`), used only as the hover fill for schedule rows and pager links.

### Named Rules
**The Three Inks Rule.** Ink color is decided by what the mark is: printed form is black, filled-in answers are carbon, stamps are red. No fourth ink, no gray text, no opacity-faded text for hierarchy.

**The Whole Copy Rule.** Paper colors change whole regions through the `--copy` variable; cells, strip and stamp rings read `--copy` so the entire sheet flips together. Never use a copy color as a badge, button fill or highlight (the copy tabs are the one place a copy color appears as a swatch, because they are the copies).

**The Stamp Stays On The Sheets Rule.** Stamps belong to the navy and bordeaux test sheets; the paper sign-off carries no stamp.

## Typography

**Display Font:** Archivo variable, width 62–125 and weight 400–900 (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo (same family; roles are separated by width and weight, not by a second sans)
**Label/Mono Font:** Martian Mono variable (with ui-monospace, Menlo, monospace)

**Character:** Archivo's width axis carries the whole form voice: compressed caps for printed labels and bars, near-normal width for filled answers. Martian Mono is the test instrument: document numbers, test IDs, periods and every measured value, always with tabular numerals.

### Hierarchy
- **Display** (750, width 82%, clamp 2.75–5.75rem, line-height 0.92): the subject name on the cover, the project name on a project sheet, the status on the void sheet. Carbon, balanced wrap. On phones it clamps to 2.5–3.25rem.
- **Headline** (800, width 75%, clamp 1.25–1.75rem, uppercase, 0.05em): section bars, reversed out of ink.
- **Lead** (750, width 85%, clamp 1.75–3.25rem, max 24ch): the single sign-off sentence on the paper copy.
- **Title** (750, width 85%, clamp 1.5–2.125rem): project names in the test schedule, carbon.
- **Fill** (500, 1.125rem; large variant 600 at clamp 1.25–1.5rem; prose variant 500 at clamp 1.0625–1.25rem, max 62ch): filled field values, carbon, with the carbon impression.
- **Body** (400, 1.0625rem, line-height 1.5): descriptions, duties, work lists, in black. Lists cap at 88ch.
- **Label** (650, width 75%, 0.78rem, uppercase, 0.07em): printed field labels, table column heads, signature and date captions, attachment caption.
- **Measure** (Martian Mono 600): large measured values at clamp 1.6–2.75rem, line-height 1, -0.03em, carbon; test IDs at 0.9rem in black; schedule key values at 1.5rem carbon; the strip doc number and footer at 0.75–0.78rem.
- **Stamp** (850, width 62%, 1.2rem, uppercase, 0.12em): stamp lettering only.

### Named Rules
**The Carbon Impression Rule.** Filled values (field fills, measured values, schedule names and values) carry a faint off-register second pass: `text-shadow: 0.45px 0.35px 0 color-mix(in srgb, carbon 45%, transparent)`. Printed labels and body text never do; the impression is what separates written from printed.

**The Numbers Are Measured Rule.** Any identifier, count, frequency, latency or period is set in Martian Mono with tabular numerals. Archivo never sets a measurement.

**The Label Names A Cell Rule.** A label always sits inside a ruled cell, column head or signature line and names the value beneath or beside it. It never floats above a heading as a decorative lead-in.

## Layout

The page is a stack of sheets, each centered at a 1200px maximum with a fluid gutter (clamp 16–48px). The cover sits close under the strip (clamp 16–28px); every following block opens after a large gap (clamp 64–112px) with a section bar. The sign-off copy runs full bleed with its own padding (clamp 48–72px top).

Cover and project sheets use a 12-column ruled grid whose cells span irregular column counts, like a real form (subject 9, attachment 3 spanning three rows; project sheet number 2, name 10). At 900px the cover grid becomes 6 columns, the record grid 2, and three-up records stack to 1. At 640px the cover becomes a two-column form (fields left, 132px attachment right), results tables re-flow into stacked rows (ID and value left, stamp right, description beneath) and leaders drop out. At 1080px the strip's eyelet index wraps to a second row.

Cells pad 12px 16px 14px; table rows pad 13px 12px; schedule rows 22px 16px. Internal gaps step through 8, 12, 16 and 24px.

**The Ruled Cell Rule.** Grids of fields are built as ink-backed grids with a 1px gap and copy-colored cells, so the rules are the ink showing through. Never draw cell borders individually.

## Elevation & Depth

The form is flat. Depth appears only for physical objects that sit on or above the paper: the photo print and the lifted copy tab. Everything else separates by rule weight (1px cell, 2px dotted leader, 3px heavy rule) and by reversed section bars.

### Shadow Vocabulary
- **Photo print** (`box-shadow: 0 14px 26px -12px rgba(20,20,20,0.45), 0 2px 5px rgba(20,20,20,0.18)`): the stapled attachment print only, with a 7px white border (5px on phones) and a 2.4deg tilt.
- **Stamp double ring** (`box-shadow: inset 0 0 0 2px copy, inset 0 0 0 3.5px stamp`): draws the inner ring of the rubber stamp; not elevation.

### Named Rules
**The Flat Form Rule.** Paper does not cast shadows. Only objects attached to the paper (a print, a lifted tab) may.

## Shapes

Square by default: cells, bars, tables, the acceptance box and the pager have no radius. Small 3px corners belong to handled objects (the primary button and the copy tabs). The stamp has a 6px corner with a double ring and a fractal-noise mask for worn ink, rotated -7deg (-9deg for VOID). Eyelets are 11px punched rings. The perforation is a repeat of 14px punched holes across the top of the paper sign-off copy. Rules come in three weights: 1px solid for cells and rows, 2px dotted for leaders (1px dotted for checklists and work lists), 3px solid to open a block, a strip, a table head or the footer.

## Components

### Buttons
Printed and decisive: one ink slab per surface.
- **Shape:** slightly softened corners (3px), min-height 52px.
- **Primary:** ink background, white text, Archivo 750 at width 85%, 1.05rem uppercase with 0.05em tracking, 14px 24px padding, trailing 20px arrow.
- **Hover / Focus:** background turns carbon, arrow nudges 3px right; press drops 1px. Focus is the global 3px carbon outline at 3px offset.
- **Secondary:** a plain underlined text link (650 weight, 2px underline) that turns carbon on hover. Used for Download CV beside the button.

### Copy tabs
The language switch is the pair of paper copies. Each tab is filled with its own copy color, a 1.5px ink border, 3px corners, 40px min-height, label in Archivo 800 at width 80% plus a Martian Mono note ("Copy 1", "Copia 2", hidden under 640px). The pressed copy lifts 2px; the other sits at 0.78 opacity until hover.

### Fields (ruled cells)
- **Corner Style:** square.
- **Background:** the current copy.
- **Border:** the ink showing through a 1px grid gap; groups open with a 3px top rule.
- **Internal Padding:** 12px 16px 14px, label and fill 8px apart.

### Results table
Columns: test ID (Martian Mono, underlined link to the project sheet), description with a 2px dotted leader running to the value, measured value in large carbon Martian Mono, and the stamp. Head row is labels over a 3px rule; rows divide with 1px ink.

### Stamp
Stamp red, 3px border, 6px corners, inner ring, worn-ink mask, multiply blend, rotated -7deg. On first view each stamp impresses in sequence: 520ms, scale 1.65 to 1 with a blur-in, delayed 650ms plus 340ms per row. The void variant is larger (clamp 2–3.5rem, 5px border, -9deg).

### Section bar
Full-width ink bar with the headline style reversed out in the current copy color. Doubles as a table caption on project sheets.

### Navigation (form strip and eyelet index)
The sticky strip is the form header: sheet title (Archivo 800, width 75%, uppercase) over a Martian Mono doc number, the eyelet index in the middle, copy tabs on the right, closed by a 3px ink rule. Eyelet links are uppercase Archivo 650 at width 80% preceded by an 11px punched ring; on hover text and ring turn carbon. On project sheets a back link replaces the index.

### Test schedule row
One row per project: Martian Mono ID column (88px), carbon title with sector and role beneath, a key measured value, and an "Open sheet" cue with arrow. The whole row is the link; hover washes it in the carbon tint and nudges the arrow 4px; focus-within draws a 3px carbon inset outline.

### Acceptance box
The sign-and-submit block: label and note, the primary button and CV link, then an "X" signature line over label captions for signature and date. Square, 1px ink with a 3px top rule, 16px padding.

### Attachment
The portrait as a physical print: white border, 2.4deg tilt, photo shadow, and a flat ink SVG staple through the top edge, captioned "Attachment A" in a label.

## Do's and Don'ts

### Do:
- **Do** color by mark type: black for printed form, carbon for filled answers, red for stamps only.
- **Do** switch paper through the `--copy` variable so the root, strip, cells and stamp rings flip together, with the 380ms ease-out cross-fade.
- **Do** build field groups as 1px ink-gap grids and open each group with a 3px ink rule.
- **Do** set every ID, count and measurement in Martian Mono with tabular numerals.
- **Do** give filled values the carbon impression text-shadow, and only filled values.
- **Do** use the 3px carbon outline at 3px offset for focus everywhere, and honor reduced motion by dropping stamp animation and transitions.

### Don't:
- **Don't** add a fourth ink, gray text, or opacity-faded text for hierarchy.
- **Don't** use copy colors (navy, bordeaux, paper) as accents, chips or button fills.
- **Don't** stamp the sign-off copy; stamps live on the test sheets.
- **Don't** round cells, bars or tables; corners belong only to the button, tabs, stamp and eyelets.
- **Don't** add shadows to the form itself; only attached objects (the print) cast one.
- **Don't** use a label as a decorative lead-in above a heading; labels name cells.
- **Don't** introduce project cards, skill badges or a gradient name hero; projects are schedule rows and sheets.
