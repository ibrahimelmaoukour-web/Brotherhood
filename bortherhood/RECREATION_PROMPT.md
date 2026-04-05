# RECREATION PROMPT — Primitive Blueprint Guide

Copy everything below this line as your prompt to any AI coding model:

---

## Prompt Start

Build a complete single-page web application called **"Primitive Blueprint Guide"** — a dark-themed, GitHub-style technical reference for primitive crafting techniques. The app has 3 files: `index.html`, `style.css`, and `script.js`. No frameworks, no build tools — pure vanilla HTML/CSS/JS.

### Tech Stack
- **Vanilla HTML, CSS, JavaScript** (no libraries, no frameworks)
- **Google Fonts**: Inter (400, 600, 800), Outfit (400, 700, 900), JetBrains Mono (400, 600)
- **LocalStorage** for all persistence (auth, user blueprints, feedback, community uploads, admin edits)
- **YouTube embed iframes** for video documentation

---

### 1. AUTHENTICATION SCREEN (shown first)

A full-screen overlay with a centered auth card. Theme: dark radial gradient background (`#1b2129` to `#0d1117`), glassmorphism card with blur.

**Elements:**
- Large emoji header: 📜
- Title: "Forge Member Entry"
- Subtitle: "Entry to the Primitive Brotherhood repository requires the ancient passphrase."
- **Google OAuth button** (simulated): white button with real Google "G" SVG logo (4-color SVG paths: #4285F4, #34A853, #FBBC05, #EA4335). On click: show spinner for 1.5s, then set `forge_authenticated=true` and `forge_user_email='pioneer@gmail.com'` in localStorage, then fade to main app.
- Divider: "or" with horizontal lines
- **Password input**: monospace font, centered text, 4px letter-spacing, placeholder "Passphrase"
- Login button: "🔓 Enter the Forge" — validates uppercase input against `'FORGE'`. On success: set `forge_authenticated=true`, fade auth screen to opacity 0 over 500ms, hide it, remove `auth-hidden` from `#app`. On failure: show red error text with shake animation, clear input.
- Error message: "⚠️ Passphrase Rejected. Access Denied." — hidden by default, shows on wrong input.

**Auth logic:**
- `init()` runs on page load. Checks `localStorage.getItem('forge_authenticated') === 'true'`. If true, skip auth and show app directly.
- `handleLogout()` removes auth keys and reloads page.

---

### 2. MAIN APP LAYOUT

A sidebar + main content layout, GitHub dark theme colors.

**CSS Variables:**
```css
--bg-color: #0d1117;
--sidebar-bg: #161b22;
--blueprint-border: #30363d;
--accent-blue: #58a6ff;
--accent-green: #3fb950;
--text-primary: #c9d1d9;
--text-secondary: #8b949e;
--stage-1: #8b949e; /* Stone Gray */
--stage-2: #8d6e63; /* Wood Brown */
--stage-3: #ff7043; /* Iron Rust */
--stage-4: #4fc3f7; /* Machine Blue */
--stage-5: #fbc02d; /* Electric Yellow */
```

**Sidebar (300px wide, left):**
- Header: 📜 logo icon + "Primitive Blueprints" gradient text (blue to purple)
- Nav section with:
  - Green "📜 Add New Blueprint" button
  - Blue "🗺️ Technology Roadmaps" button
  - Dynamic stage groups (see section 4)
- Footer: "⚙️ Admin Management" button + "🚪 Logout" button

**Main content area:**
- Background: subtle 40px×40px grid pattern (semi-transparent lines)
- 3 views (only one active at a time):
  - `#welcome-view` — hero card shown on first load
  - `#blueprint-view` — where blueprint details, stage hubs, roadmaps render
  - `#admin-view` — admin panel for editing/deleting blueprints

---

### 3. DATA STRUCTURES

**STAGES object** — 5 technological epochs:
```js
const STAGES = {
    1: { id: 1, name: 'Sacred Water & Soil', period: 'The Survival Dawn', icon: '🚰', description: '...' },
    2: { id: 2, name: 'The Foundation of Fire', period: 'The Thermal Age', icon: '🔥', description: '...' },
    3: { id: 3, name: 'The Pyrotechnic Age', period: 'The Dawn of Smelting', icon: '⚒️', description: '...' },
    4: { id: 4, name: 'The Mechanical Bridge', period: 'The Machine Age', icon: '⚙️', description: '...' },
    5: { id: 5, name: 'The Electromagnetic Leap', period: 'The Electric Age', icon: '⚡', description: '...' }
};
```

**CRAFT_ROADMAPS object** — 5 crafts, each with 5 progression stages:
- `water` — Water & Agriculture (💧): Water Source Discovery → Well Construction → Irrigation & Zai Pits → Aqueduct Engineering → Hydraulic Power Systems
- `pottery` — Pottery & Ceramics (🏺): Clay Identification → Coil Pottery & Pit Firing → Kiln Construction → Glazes & Slip Casting → Refractory Ceramics
- `knapping` — Stone Tool Making (🪨): Stone Identification → Bifacial Tools & Axes → Specialized Tool Kits → Microliths & Composites → Quarry Operations
- `basketry` — Basketry & Weaving (🧺): Fiber Identification → Twined Baskets & Rope → Fine Weaving & Textiles → Structural Cordage → Mechanical Components
- `construction` — Construction & Shelter (🏠): Natural Shelter → Tripod Structures → Wattle & Daub → Stone Foundations → Hydraulic Architecture

Each stage has: `level`, `title`, `subtitle`, `icon`, `objective`, `details[]` (6-7 items), `resources[]` (name+value pairs), `techniques[]`, `outputs[]`, `unlocks[]`, `dependencies[]`.

**blueprints array** — 7 core blueprint entries mapped to stages:
- Stage 1: Groundwater Discovery, Percussion Tripod Drill, Zai Pits & Micro-Catchment
- Stage 2: Double-Bearing Bow Drill, Vessel Firing, Flint-Knapped Axe
- Stage 3: Forced-Air Smelter
- Stage 4: Flow-Converter Wheel
- Stage 5: Electromagnetic Stator

Each blueprint has: `id`, `name`, `stage`, `icon`, `objective`, `evolution`, `requirements[]` (name+value), `steps[]` (text+sketch), `videoUrl` (YouTube embed URL).

**materials array** — 5 material discovery cards: Obsidian, Flint/Chert, Basalt, Bog Iron, Native Copper. Each has: `id`, `name`, `category`, `icon`, `habitat`, `properties`, `commonUses[]`, `sketch`, `videoUrl`.

**LocalStorage keys:**
- `forge_authenticated` — bool
- `forge_user_email` — string
- `primitive_user_blueprints` — user-created blueprints array
- `primitive_blueprint_supplements` — { [blueprintId]: { requirements[], steps[] } }
- `primitive_deleted_core_blueprints` — array of hidden core blueprint IDs
- `primitive_core_overrides` — { [blueprintId]: modifiedFields }
- `primitive_community_proof` — { [blueprintId]: [{ url, type }] }
- `primitive_feedback` — { [blueprintId]: 'bad'|'great' }

---

### 4. SIDEBAR RENDERING

`renderSidebar()` populates `#stages-nav`:
- For each of 5 stages, create a `.stage-nav-group` with:
  - `.stage-header` showing stage icon, "Stage N", stage name
  - Click toggles `.active` class which shows/hides the `.stage-items` list
  - On click, also calls `renderStageHub(stageId)` to show stage hub in main content
- Under each stage header, list all blueprints in that stage as `<li>` items
- Clicking a blueprint `<li>` calls `selectBlueprint(bp.id)`

---

### 5. VIEWS & RENDERING FUNCTIONS

**`selectBlueprint(id)`** — renders full blueprint detail card:
- Stage badge, icon, name, PRM-S{stage}-{ID} reference code
- Summary box: "The Objective" + "The Evolution"
- YouTube embed section with:
  - Video header with "Watch on YouTube ↗" external link
  - iframe (100% width, 450px height, 16:9 aspect ratio)
  - Troubleshoot hint about localhost/referrer headers
  - Feedback buttons (❌ bad / ✅ great) — saves to localStorage
- Two-column grid: Technical Requirements (left) + Construction Steps (right)
- Each step has numbered badge, description, and sketch image
- Community Proof section at bottom with upload button and horizontal scroll gallery
- "🛠️ Supplement Specs" button opens contribution modal

**`selectMaterial(id)`** — renders material discovery card:
- Large sketch image area (grayscale + inverted filter)
- Video embed section
- Habitat & Ranging, Material Properties, Crafting Utility sections
- Tags for uses
- Community proof gallery

**`renderStageHub(stageId)`** — renders stage overview:
- Large header with stage icon, name, period, description
- Grid of cards for each blueprint in that stage
- Each card shows icon, name, reference ID

**`renderRoadmapView()`** — renders roadmap overview:
- Header: "🗺️ Technology Roadmaps" with gradient title
- Grid of 5 clickable craft cards, each showing:
  - Icon + craft name
  - Description paragraph
  - 5-stage preview dots (numbered circles with icons) connected by gradient lines
  - "Click to explore →" footer
- Cross-Craft Dependencies section with 5 dependency flow diagrams:
  - Well Drilling: Basketry S2 → Knapping S1-2 → Water S2
  - Pottery Kiln: Construction S2 → Pottery S1 → Fire mastery
  - Irrigation: Knapping S2 → Water S2 → Water S3
  - Metal Smelting: Pottery S4 → Construction S3 → Knapping S3
  - Water Wheel: Water S4 → Metal S3 → Construction S4 → Basketry S4-5

**`renderRoadmapDetail(craftId)`** — renders single craft timeline:
- Back button to return to roadmap overview
- Large header with craft icon, name, description
- Vertical timeline of 5 stage cards, each containing:
  - Level badge (large number + skill level name: Beginner/Apprentice/Journeyman/Master/Expert)
  - Title + subtitle
  - Objective (highlighted box with blue left border)
  - Key Steps (checkmark list)
  - Required Resources (grid of cards)
  - Techniques to Master (pill tags)
  - Outputs (checkmark list)
  - Unlocks (green pill tags)
  - Dependencies (orange pill tags) OR "Starter Craft" green dashed box for stage 1
- Down arrows between stage cards

---

### 6. MODALS

**Add Blueprint Modal** (`openAddCraftModal`):
- Large modal with form fields:
  - Blueprint Name (text)
  - Technological Stage (select 1-5)
  - Icon (text input with emoji default + file upload for image)
  - YouTube Video URL
  - Dynamic Requirements (add/remove rows: material name + value)
  - Dynamic Construction Steps (add/remove textareas)
  - Cancel + "📜 Seal Blueprint" buttons
- Saves to `primitive_user_blueprints` in localStorage

**Contribution Modal** (`openContributionModal`):
- Adds supplemental requirements/steps to existing blueprints
- Saves to `primitive_blueprint_supplements`
- Supplements merge with original data when rendering

**Upload Modal** (`openUploadModal`):
- Drag-and-drop zone for image/video files
- Simulated upload progress bar animation
- Saves to `primitive_community_proof` using `URL.createObjectURL`

**Edit Modal** (`openEditModal`):
- Pre-fills all fields with existing blueprint data
- For core blueprints: saves to `primitive_core_overrides`
- For user blueprints: directly updates `primitive_user_blueprints`

---

### 7. ADMIN PANEL

`showAdminPanel()` + `renderAdminPanel()`:
- Lists all core blueprints with Edit/Hide/Restore buttons
- Lists all user blueprints with Edit/Delete Permanently buttons
- Deleted core blueprints stored in `primitive_deleted_core_blueprints`
- Hidden core blueprints excluded from `getAllBlueprints()`
- Core blueprint edits stored separately as overrides (original data preserved)

**`getAllBlueprints()`** merges:
- Core blueprints (with overrides applied, filtered by deleted list)
- User blueprints

---

### 8. YOUTUBE EMBED HANDLING

`getYoutubeEmbedUrl(originalUrl)`:
- Extracts video ID from any YouTube URL format
- Returns `https://www.youtube.com/embed/{id}?rel=0&modestbranding=1&enablejsapi=1&origin={origin}&widget_referrer={origin}`
- Origin-based embedding to reduce referrer stripping issues
- Always provides external "Watch on YouTube ↗" fallback link

---

### 9. CSS DESIGN SYSTEM

**Typography:**
- Inter for body text
- Outfit for headings and buttons (bold/900 weight)
- JetBrains Mono for code, IDs, technical values

**Color scheme:**
- Dark backgrounds (#0d1117, #161b22)
- Blue accents (#58a6ff)
- Green for success (#3fb950)
- Red for errors/deletions (#f85149, #ff4444)
- Stage-specific colors for badges and borders

**Cards & containers:**
- Rounded corners (8px-20px)
- Subtle borders with #30363d
- Box shadows for depth
- Hover animations: translateY(-2px to -5px), brightness increase

**Responsive:**
- Mobile breakpoint at 900px: stacks sidebar vertically, single-column grids
- Blueprint detail cards stack vertically on narrow screens
- Roadmap dependency flows become vertical on mobile (arrows rotate 90°)

**Animations:**
- Auth fade transition (500ms)
- Card hover lift and glow
- Progress bar fill animation
- Error shake keyframes
- Modal backdrop blur

---

### 10. KEY INTERACTIONS

1. **Page load** → check auth → show login or fade to app
2. **Login** → enter "FORGE" → localStorage → fade to app
3. **Sidebar stage click** → expand stage list + render stage hub in main view
4. **Blueprint click** → render full detail card with video, requirements, steps, community
5. **Roadmap button** → show 5 craft cards + dependency flows → click card → detailed timeline
6. **Add Blueprint** → fill modal form → save → re-render sidebar
7. **Supplement Specs** → add extra requirements/steps → saved separately → merged on display
8. **Upload proof** → select file → simulated upload → gallery updates
9. **Feedback** → click bad/great → saves → active state styling
10. **Admin** → edit/hide/restore blueprints → localStorage persistence

---

### 11. ASSETS REFERENCES

The app references these SVG/PNG files in an `assets/` folder:
- `assets/sketch_tripod.svg` — tripod well illustration
- `assets/sketch_mixing.svg` — generic craft illustration
- `assets/sketch_knapping.svg` — stone tool making
- `assets/sketch_binding.svg` — rope/lashing illustration
- `assets/sketch_forest.svg` — forest/nature
- `assets/sketch_mountain.svg` — mountain/stone habitat
- `assets/sketch_river.svg` — river/water habitat
- `assets/sketch_binding.svg` — construction binding
- `assets/brick.png`, `assets/clay.png`, `assets/water.png` — texture images

Create placeholder SVGs if assets are missing (simple line drawings in grayscale that work with the CSS filters).

---

### 12. IMPLEMENTATION NOTES

- All JS functions should be globally accessible (no modules/IIFEs that hide them from onclick handlers)
- Use template literals extensively for HTML generation
- Map/filter/reduce for data transformation
- Event delegation where possible, direct onclick for simplicity
- localStorage wrappers with JSON parse/stringify and fallback defaults
- The `renderIcon(icon)` function checks if icon is an image URL (starts with `data:image`, `blob:`, contains `.`, or length > 10) — renders as `<img>` if so, otherwise as `<span>` emoji
- Video URLs stored as full embed URLs, converted to external watch URLs for links
- Community uploads use `URL.createObjectURL` (temporary, session-scoped — fine for prototype)

---

### 13. EXPECTED OUTPUT

3 files:
1. **`index.html`** — auth overlay + app shell with sidebar + 3 views
2. **`style.css`** — complete dark theme with all component styles (auth, sidebar, blueprints, modals, roadmaps, admin, responsive)
3. **`script.js`** — all data, rendering functions, auth logic, modal handlers, localStorage management

The final result should be a polished, professional dark-themed application that looks like a GitHub-style technical documentation site but for primitive technology crafts, with full CRUD operations, roadmap visualization, and persistent local storage.

---

End of prompt.
