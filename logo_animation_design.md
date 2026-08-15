# enHub GmbH Logo Animation Design Documentation (v4 Milestone)

> [!NOTE]
> **Milestone Tag**: `v4.0-logo-animation`  
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

### 2. Animation Timeline & Sequence (5.4 Seconds Total Loop - 0.6x T, 540 Frames)

| Time Window | Frame Range (100 fps) | Description | Visual State |
| :--- | :--- | :--- | :--- |
| **0.0s – 0.6s** | `0 – 59` | **Base State** | Entire logo (5 leaves + bolt + outer frame) is 100% solid emerald green. |
| **0.6s – 3.0s** | `60 – 299` | **Energize Phase** | Leaves energize 1 by 1 from left to right. Combined unit (bolt, arch, right bar) energizes smoothly in sync. |
| **3.0s – 4.2s** | `300 – 419` | **Stay Yellow Phase** | All elements hold 100% full vibrant yellow and maximum glow aura. |
| **4.2s – 5.4s** | `420 – 539` | **Dissolve Phase** | All lit elements dissolve smoothly back into emerald green together. |

---

### 3. Gradient Geometry & Slant
* **Fill Direction**: Bottom-to-Top (Yellow starts at the lowest tip of the bolt and rises upwards).
* **Slant Angle**: Backslash (`\`) diagonal gradient direction.
* **Transition Softness**: Wide 60% full-surface soft blend feather to eliminate hard edge cuts.

---

## 🛠️ Logo Geometry Analysis & Component Map

Using connected component analysis on `logo_004.png`:

| ID | Component Name | Geometry Description |
| :---: | :--- | :--- |
| `5` | **Leaf 1** | Far-left ray (`x=2, y=122`) |
| `2` | **Leaf 2** | Top-left ray (`x=63, y=38`) |
| `1` | **Leaf 3** | Top-center ray (`x=163, y=3`) |
| `3` | **Leaf 4** | Top-right ray (`x=231, y=38`) |
| `6` | **Leaf 5** | Far-right ray (`x=283, y=122`) |
| `7` | **Lightning Bolt** | Central energy symbol (`x=116, y=129`) |
| `4` | **Outer Arch** | Capsule top curved dome arch (`y=85`) |
| `8` | **Outer Left Bar** | Capsule middle-left vertical bar (`y=207`) |
| `9` | **Outer Right Bar** | Capsule middle-right vertical bar (`y=207`) |
| `10` | **Outer Bottom Curve** | Capsule bottom U-curve base (`y=288`) |

---

## 📋 Open Tasks & Next Steps for Discussion

> [!IMPORTANT]
> The outer capsule ring components (`ID 4, 8, 9, 10`) are currently unanimated base green. We can now design how they should react during the animation sequence.

- [x] **Strict Bolt-Follows-Leaves Color Rule**: Lightning bolt color is strictly synchronized with leaves active color across all frames (Energize, Stay, and Dissolve).
- [x] **Pure Electric Yellow Glow Math**: Glow aura uses proportional R/G channel additive blending (`#ffeb14`), preventing orange color shifts.
- [x] **Unified Combined Unit (Bolt + Top Arch + Right Bar)**: Energizes smoothly 1s->5s, holds 100% yellow 5s->7s, and dissolves 7s->9s.
- [ ] **Left Bar (ID 8) + Bottom Curve (ID 10) Animation**: Pending design discussion.
- [ ] **Timing & Transition Refinement**: Adjust step delays, hold duration, or dissolve duration if needed.
- [ ] **Glow & Shadow Effects**: Explore adding drop-shadows or glow halos to the lit yellow elements.
- [ ] **Final Deployment**: Sync approved GIF to live site repo.
