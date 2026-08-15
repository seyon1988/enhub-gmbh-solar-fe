# enHub GmbH Logo Animation Design Documentation (v7 Milestone)

> [!NOTE]
> **Milestone Tag**: `v7.0-logo-animation`  
> This document tracks the active design specifications, current implementation status, and remaining work/open decisions for the enHub GmbH animated logo.

---

## 📌 Project Overview
Herbert Admin requested an animated version of **Werner's enHub Logo** (`logo_004.png`). The primary requirement is to animate the 5 leaves (half-sun rays at the top) turning yellow sequentially, accompanied by an energy accumulation effect on the central lightning bolt symbol.

---

## 🎨 Current Implementation State

### 1. Color Palette
| Element | State | Color | Hex Code |
| :--- | :--- | :--- | :--- |
| **Base Logo (0s - 1s)** | Unlit / Initial | Solid Emerald Green | `#22a050` |
| **Active Rays / Bolt** | Lit / Active | Vibrant Electric Yellow | `#ffeb14` |

---

### 2. Animation Timeline & Sequence (3.5 Seconds Total Loop - 210 Frames @ 60 FPS)

| Time Window | Frame Range (60 fps) | Description | Visual State |
| :--- | :--- | :--- | :--- |
| **0.00s – 0.50s** | `0 – 29` | **Base State** | Entire logo (5 leaves + bolt + outer frame) is 100% solid emerald green (0.5s). |
| **0.50s – 2.00s** | `30 – 119` | **Phase 1: Leaves Sequence** | 5 leaves energize 1 by 1 from left to right to pure yellow (1.5s). |
| **2.00s – 2.50s** | `120 – 149` | **Phase 2: Combined Unit Ignition** | **AFTER ALL 5 LEAVES ARE 100% YELLOW**, Combined Unit (Bolt + Top Arch + Right Bar) ignites to **COMPLETELY 100% PURE YELLOW** (0.5s). |
| **2.50s – 2.75s** | `150 – 164` | **Dissolve Part 1 (250ms)** | Electric yellow smoothly dissolves into **original `logo_004.png` gradient colors**. |
| **2.75s – 3.00s** | `165 – 179` | **Dissolve Part 2 (250ms)** | Original `logo_004.png` colors smoothly dissolve into **100% base emerald green** (no pause!). |

---

### 3. Gradient Geometry & Slant
* **Fill Direction**: Bottom-to-Top (Yellow starts at the lowest tip of the bolt and rises upwards).
* **Slant Angle**: Backslash (`\`) diagonal gradient direction.
* **Transition Softness**: Wide 60% full-surface soft blend feather to eliminate hard edge cuts.

---

## 🖼️ Active GIF Assets Comparison

| Asset Path | Usage | Behavior & Peak State | Dissolve Timing |
| :--- | :--- | :--- | :--- |
| **`public/logo_animated.gif`** | 🌟 **Active Website Logo** | 5 leaves energize to pure yellow; Combined unit (Bolt, Top Arch, Right Bar) energize to yellow; Left Bar & Bottom Curve stay green. | 500ms Two-Stage Seamless Dissolve (250ms Yellow -> `logo_004.png` -> 250ms Green, **no pause**). |
| **`public/logo_animated_preview.gif`** | 🔬 **Alternative Concept Asset** | 5 leaves energize to pure yellow; **ALL 4 Capsule Borders + Bolt (IDs 4, 8, 9, 10 + 7)** reach peak state of **original `logo_004.png` colors**. | 500ms Dissolve (`logo_004.png` colors -> Base Green). |

---

## 🛠️ Logo Geometry Analysis & Component Map

Using connected component analysis on `logo_004.png`:

| ID | Component Name | Geometry Description | Active Status in Website Logo (`logo_animated.gif`) |
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

## 📋 Milestone Checklist & Version History

- [x] **v6.0-logo-animation**:
  - Removed 0.5s logo pause entirely from `logo_animated.gif` (250ms Yellow -> `logo_004.png` -> 250ms Green direct seamless dissolve).
  - Maintained `logo_animated_preview.gif` as an alternative concept asset (ALL capsule borders + bolt peak state = `logo_004.png`).
  - Active website header configured to render `/logo_animated.gif`.
