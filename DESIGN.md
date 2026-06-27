---
name: Tabbit
description: Mobile-first shared commitment UI for small group habit challenges.
colors:
  momentum-teal: "#159A9C"
  deep-teal: "#0F5F62"
  warm-cloud: "#FFF8F2"
  soft-white: "#FFFFFF"
  action-coral: "#F26D5B"
  coral-tint: "#FFE3DD"
  teal-mist: "#BFEDEA"
  success: "#159A9C"
  missed-gray: "#A89F94"
  warning-coral: "#F6A092"
  ink-brown: "#2F2A25"
  stone-muted: "#756F68"
  sand-line: "#E8DED2"
typography:
  display:
    fontFamily: '"LINE Seed Sans TH", "Noto Sans Thai", "IBM Plex Sans Thai", "Prompt", system-ui, sans-serif'
    fontSize: "32px"
    fontWeight: 760
    lineHeight: 1.15
    letterSpacing: "0"
  headline:
    fontFamily: '"LINE Seed Sans TH", "Noto Sans Thai", "IBM Plex Sans Thai", "Prompt", system-ui, sans-serif'
    fontSize: "26px"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "0"
  title:
    fontFamily: '"LINE Seed Sans TH", "Noto Sans Thai", "IBM Plex Sans Thai", "Prompt", system-ui, sans-serif'
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0"
  body:
    fontFamily: '"LINE Seed Sans TH", "Noto Sans Thai", "IBM Plex Sans Thai", "Prompt", system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: '"LINE Seed Sans TH", "Noto Sans Thai", "IBM Plex Sans Thai", "Prompt", system-ui, sans-serif'
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  sheet: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action-coral}"
    textColor: "{colors.soft-white}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: "20px 24px"
  button-secondary:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.momentum-teal}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "14px 20px"
  card-progress:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.ink-brown}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-status:
    backgroundColor: "{colors.teal-mist}"
    textColor: "{colors.deep-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
---

# Design System: Tabbit

## 1. Overview

**Creative North Star: "Shared Momentum Path"**

Tabbit's interface should feel like a small group visibly moving through a challenge together. The product is warm and friendly, but its visual energy comes from progress, day count, and shared movement rather than passive coziness or decorative cuteness.

This is a restrained product UI with one clear action layer. Surfaces stay calm and readable for Thai LINE-first mobile use; Momentum Teal carries progress and trust, while Action Coral appears only where the user should act or where a milestone needs energy.

The system explicitly rejects generic productivity dashboards, solo habit tracker patterns, leaderboard-first comparison, shame-based discipline, passive cozy tracking, and rabbit visuals where decoration is clearer than progress.

**Key Characteristics:**

- Mobile-first, thumb-friendly, and readable in a low-attention LINE context.
- Progress-oriented: users should understand today's group movement within two seconds.
- Supportive: missed-day states are neutral return paths, not failure moments.
- Restrained: teal is the memory color, coral is the action signal, and every color must earn its place.
- Familiar product UI: standard buttons, cards, chips, and progress states before novelty.

## 2. Colors

The palette is warm, clear, and progress-oriented: teal creates memory and calm accountability, coral adds controlled challenge energy, and warm neutrals keep the product approachable without becoming passive.

### Primary

- **Momentum Teal**: The brand anchor for logo linework, progress paths, checked-in states, active status, and supportive confirmation.
- **Deep Teal**: Used for high-contrast emphasis, active progress outlines, icon strokes, and text on teal-tinted surfaces.

### Secondary

- **Action Coral**: Used sparingly for the highest-intent action, day count, join challenge CTA, current milestone, and completion energy.
- **Coral Tint**: Used for soft milestone fills and gentle action backgrounds. It must never become a generic decorative wash.

### Tertiary

- **Teal Mist**: Used for calm progress modules, supportive callouts, checked-in context, and non-urgent group momentum messages.
- **Warning Coral**: Used for gentle reminders only. It is not a failure color.

### Neutral

- **Warm Cloud**: The app background and LINE-preview base. It should feel warm but not parchment-heavy.
- **Soft White**: Cards, sheets, controls, and contained product surfaces.
- **Ink Brown**: Primary text and key labels.
- **Stone Muted**: Secondary text, helper copy, and quiet metadata.
- **Sand Line**: Dividers, card borders, low-emphasis strokes, and inactive avatar rings.
- **Missed Gray**: Missed or not-yet states. It should read as "returnable", not "failed".

### Named Rules

**The Coral Is Action Rule.** Action Coral is reserved for CTAs, day counts, milestones, and completion. Do not use coral as confetti, random decoration, or failure.

**The Teal Carries Momentum Rule.** Momentum Teal should identify progress, checked-in states, and group movement across every screen.

**The No Red Failure Rule.** Missed days use neutral gray, copy, and layout to invite return. Never use harsh red, broken streak visuals, or public failure marks.

## 3. Typography

**Display Font:** LINE Seed Sans TH with Noto Sans Thai, IBM Plex Sans Thai, Prompt, and system-ui fallback  
**Body Font:** LINE Seed Sans TH with Noto Sans Thai, IBM Plex Sans Thai, Prompt, and system-ui fallback  
**Label/Mono Font:** Same sans stack; no mono is needed in the MVP UI

**Character:** The type is friendly, clear, mobile-readable, and lightly rounded. It should sound like a focused Thai product, not a campaign poster or enterprise dashboard.

### Hierarchy

- **Display** (760, 32px, 1.15): Used for primary mobile screen questions such as "วันนี้ไปต่ออีกนิดไหม?" and major LINE share headlines. Use sparingly.
- **Headline** (720, 26px, 1.2): Used for screen titles, progress summaries, and important challenge state.
- **Title** (700, 20px, 1.3): Used for module headings, card titles, and primary button labels.
- **Body** (400, 16px, 1.6): Used for explanatory copy and member-facing context. Keep prose at 65-75ch on wider surfaces.
- **Label** (600, 13px, 1.3): Used for status labels, day chips, helper metadata, and compact state text.

### Named Rules

**The Thai-First Clarity Rule.** User-facing copy must be short, natural Thai with English product terms only when they are clearer, such as check in, progress, MVP, or challenge.

**The No Display Labels Rule.** Do not use display-scale type for buttons, chips, labels, member rows, or compact product panels.

## 4. Elevation

Tabbit is flat by default and uses tonal layering, borders, and filled progress states before shadows. Shadows are allowed only for large preview cards, important raised modules, and state feedback where elevation clarifies action.

### Shadow Vocabulary

- **Soft Teal Lift** (`box-shadow: 0 12px 36px rgba(15, 95, 98, 0.12)`): Use on supportive progress modules or focused action containers.
- **Preview Card Lift** (`box-shadow: 0 18px 48px rgba(47, 42, 37, 0.12)`): Use on LINE preview compositions or presentation mockups, not on every in-app card.

### Named Rules

**The Flat-By-Default Rule.** Product surfaces are bordered or tonal at rest. Do not pair a 1px border with a broad decorative drop shadow on ordinary cards.

**The Shadow Must Explain State Rule.** If a shadow does not clarify focus, action, or preview depth, remove it.

## 5. Components

### Buttons

- **Shape:** Gently rounded controls (12px for standard buttons, 18px for the primary mobile check-in CTA).
- **Primary:** Action Coral fill with white text, large touch target, and direct labels such as "Check in วันนี้" or "เข้าร่วมกลุ่ม".
- **Hover / Focus:** Slight darkening or lift is acceptable on desktop; focus must use a visible teal or coral outline with at least 2px thickness.
- **Secondary:** Soft White background, Sand Line or Momentum Teal border, and Momentum Teal or Ink Brown text for encouragement, progress, and lower-pressure actions.

### Chips

- **Style:** Pill-shaped status chips with teal mist, coral tint, or neutral gray backgrounds.
- **State:** Checked-in chips use teal plus a check icon or label. Not-yet and missed chips use neutral styling plus return-oriented copy.

### Cards / Containers

- **Corner Style:** Cards use 12-18px radius. Sheets and phone frames can use 28px. Do not round ordinary cards past 18px.
- **Background:** Soft White for cards, Warm Cloud for page background, Teal Mist for supportive momentum panels.
- **Shadow Strategy:** Flat at rest. Use Soft Teal Lift only for key progress modules or focused action areas.
- **Border:** Sand Line at 1-2px for calm separation.
- **Internal Padding:** 16px for compact cards, 24px for progress modules, 32px for larger preview compositions.

### Inputs / Fields

- **Style:** Soft White fill, Sand Line border, 12px radius, Ink Brown text, and 16px horizontal padding.
- **Focus:** Switch border to Momentum Teal and add a 2px visible focus outline or ring.
- **Error / Disabled:** Error copy must be specific and non-shaming. Disabled states use Stone Muted text and low-contrast neutral surfaces without hiding labels.

### Navigation

- **Style:** Mobile headers should be minimal: Tabbit wordmark, group/challenge status, and one or two obvious actions.
- **Typography:** Navigation labels use Label or Body scale, never display type.
- **States:** Active views use Momentum Teal text or indicator. Inactive views use Stone Muted.
- **Mobile Treatment:** Keep primary check-in visible before secondary navigation. Do not bury the core action behind tabs.

### Progress Path

The progress path is Tabbit's signature component. It can use steps, a path, member markers, day count, or rabbit-stairs imagery, but it must communicate group movement before decoration.

- Checked-in states combine Momentum Teal with a check icon or explicit label.
- Current day or milestone can use Action Coral.
- Not-yet states use Sand Line, Soft White, or Missed Gray with neutral copy.
- The path should show the group is still moving, even if some members have not checked in yet.

### Member Status Row

Member rows show name, status, and encouragement opportunity without ranking people.

- Checked-in: teal marker plus "ไปต่อแล้ว" or equivalent.
- Not-yet: neutral marker plus "ยังไม่ check in".
- Missed or returning: neutral marker plus "กลับมาต่อได้" or "วันนี้ยังไปต่อได้".
- Never sort members by failure or inactivity by default.

## 6. Do's and Don'ts

### Do:

- **Do** make group progress visible within two seconds on the main screen.
- **Do** use Momentum Teal for progress, checked-in states, and active group movement.
- **Do** reserve Action Coral for the main CTA, day count, milestones, and completion moments.
- **Do** keep check-in as one obvious primary action with a large mobile touch target.
- **Do** pair color states with labels, icons, or shape so progress does not rely on color alone.
- **Do** use Thai-first, short, forwardable copy for member-facing moments.
- **Do** keep missed-day states quiet, neutral, and return-oriented.

### Don't:

- **Don't** make Tabbit look like a generic productivity app or to-do list.
- **Don't** make it feel like a solo habit tracker with social features added later.
- **Don't** use leaderboard-first layouts, rankings, trophies, or comparison as the default progress model.
- **Don't** use shame-based discipline, harsh red failure states, broken streak visuals, or public failure marks.
- **Don't** make the product a passive cozy tracker that is admired but does not create action.
- **Don't** make rabbit visuals decorative when they do not communicate progress, commitment, or group movement.
- **Don't** build a broad community platform, full productivity suite, or corporate dashboard in the MVP visual language.
- **Don't** use nested cards, oversized decorative shadows, gradient text, side-stripe accents, or rounded cards above 18px.
