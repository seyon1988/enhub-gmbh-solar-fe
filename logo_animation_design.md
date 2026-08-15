# enHub GmbH Logo Animation Design Documentation (v7 Milestone)

> [!NOTE]
> **Milestone Tag**: `v7.0-logo-animation`  
> This document tracks the active design specifications, current implementation status, and complete version memory history for the enHub GmbH animated logo assets.

---

## 🎨 Color Tokens & Aesthetic Foundations

| Role | Color Name | Hex Code | RGB | Usage |
| :--- | :--- | :---: | :---: | :--- |
| **Primary Base** | Solid Emerald Green | `#22a050` | `RGB(34, 160, 80)` | Default base color for unlit logo elements and resting state. |
| **Active Energy** | Pure Electric Yellow | `#ffeb14` | `RGB(255, 235, 20)` | Active energized color for lit leaves, lightning bolt, arch, and glow. |
| **Original Brand** | Multi-Tone Gradient | Derived from `logo_004.png` | Variable | Original multi-tone gradient used during 2-stage dissolve transitions. |

---

## ⏱️ Active Website Logo Timeline & Sequence (`logo_animated.gif` - v7.0)

**Total Duration**: 3.5 Seconds Total Loop (210 Frames @ 60 FPS)

| Phase # | Phase Name | Time Window | Frame Range | Duration | Exact Visual & Color Dynamics |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1** | **Base Green State** | `0.00s – 0.50s` | `0 – 29` | **0.5s** | Entire logo rests at **100% solid base emerald green** (`#22a050`). Zero glow. |
| **2** | **Leaves Sequence Phase** | `0.50s – 2.00s` | `30 – 119` | **1.5s** | 5 Leaves light up **1-by-1 sequentially from left to right** to pure electric yellow (`#ffeb14`). |
| **3** | **Combined Unit Ignition Phase** | `2.00s – 2.50s` | `120 – 149` | **0.5s** | **ONLY AFTER ALL 5 LEAVES ARE 100% YELLOW**, the **Combined Unit** (Lightning Bolt + Top Arch + Right Bar) ignites into **100% pure electric yellow** with max yellow glow aura. |
| **4** | **Dissolve Part 1 (Yellow ➔ Original)** | `2.50s – 2.75s` | `150 – 164` | **250ms** | Electric yellow smoothly dissolves into **original `logo_004.png` multi-tone gradient colors**. |
| **5** | **Dissolve Part 2 (Original ➔ Green)** | `2.75s – 3.00s` | `165 – 179` | **250ms** | Original `logo_004.png` gradient colors smoothly dissolve directly into **100% base emerald green** (*no pause, seamless loop reset*). |

*(Frames `180 – 209` / `3.00s – 3.50s` hold solid emerald green rest state before repeating).*

---

## 🖼️ Full GIF Assets Memory Registry

| Asset Path | Status / Usage | Behavior & Peak State | Dissolve Timing & Features |
| :--- | :--- | :--- | :--- |
| **`public/logo_animated.gif`** | 🌟 **Active Website Logo (v7.0)** | 5 leaves energize 1-by-1 to yellow; Combined unit (Bolt, Top Arch, Right Bar) ignites to 100% yellow **only after all 5 leaves turn yellow**; Left Bar & Bottom Curve stay green. | 500ms Two-Stage Seamless Dissolve (250ms Yellow ➔ `logo_004.png` ➔ 250ms Green, **no pause**). |
| **`public/logo_animated_preview.gif`** | 🔬 **Concept 1 (Symmetrical)** | Phase 2 is the **exact inverted mirror of Phase 4 & 5** (Green ➔ `logo_004.png` colors ➔ 100% Electric Yellow) on partial capsule. | Two-Stage Symmetrical Energize & Dissolve (500ms entrance, 1.5s yellow hold, 500ms exit). |
| **`public/logo_animated_preview_2.gif`** | 🔬 **Concept 2 (Full Capsule Max Cap)** | **ALL 4 Capsule Borders + Bolt (IDs 4, 8, 9, 10 + 7)** reach peak state of **original `logo_004.png` colors** (max yellow limitation = `logo_004.png`). | Full capsule energize & dissolve between base green and `logo_004.png`. |
| **`public/logo_animated_preview_3.gif`** | 🔬 **Concept 3 (Ultra-Smooth 1.0s)** | Phase 5 re-added with **doubled dissolve duration (1.0s total)** (500ms Yellow ➔ `logo_004.png` + 500ms `logo_004.png` ➔ Base Green) for maximum smoothness. | 1.0 second Ultra-Smooth Two-Stage Dissolve. |

---

## 🛠️ Component Geometry & Mask Map

Extracted via connected component analysis from `public/logo_004.png`:

| ID | Component Name | Geometry Location | Status in Website Logo (`logo_animated.gif`) |
| :---: | :--- | :--- | :--- |
| `5` | **Leaf 1** | Far-left ray (`x=2, y=122`) | ⚡ Animated (Energizes 1st) |
| `2` | **Leaf 2** | Top-left ray (`x=63, y=38`) | ⚡ Animated (Energizes 2nd) |
| `1` | **Leaf 3** | Top-center ray (`x=163, y=3`) | ⚡ Animated (Energizes 3rd) |
| `3` | **Leaf 4** | Top-right ray (`x=231, y=38`) | ⚡ Animated (Energizes 4th) |
| `6` | **Leaf 5** | Far-right ray (`x=283, y=122`) | ⚡ Animated (Energizes 5th) |
| `7` | **Lightning Bolt** | Central energy symbol (`x=116, y=129`) | ⚡ Animated (Combined Unit) |
| `4` | **Outer Arch** | Capsule top curved dome arch (`y=85`) | ⚡ Animated (Combined Unit) |
| `9` | **Outer Right Bar** | Capsule middle-right vertical bar (`y=207`) | ⚡ Animated (Combined Unit) |
| `8` | **Outer Left Bar** | Capsule middle-left vertical bar (`y=207`) | 🔒 Strictly Isolated (100% Solid Green) |
| `10` | **Outer Bottom Curve** | Capsule bottom U-curve base (`y=288`) | 🔒 Strictly Isolated (100% Solid Green) |

---

## 🔒 Permanent Design Rules

1. **Strict Bolt Color Rule**: Lightning bolt color MUST strictly mirror the leaves active color calculation across all frames without independent tinting.
2. **Pure Yellow Glow Math**: Glow aura overlay uses proportional R/G channel additive blending (`#ffeb14`), preventing orange color shifts.
3. **Strict Isolation Rule**: Left Vertical Bar (`ID 8`) and Bottom U-Curve (`ID 10`) remain 100% solid base green across all frames in the primary logo.
4. **V7 Ignition Sequence Rule**: Combined Unit (Bolt + Top Arch + Right Bar) ignites to 100% yellow ONLY AFTER all 5 leaves complete their yellow energize sequence.
