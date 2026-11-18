# GSD + Ralph Development Workflow Guide

> **Architecture:** Macro-Planning via GSD (Get Shit Done) + Micro-Execution via Ralph Wiggum.
> **Repository:** `project root`
> **Status:** Reusable Project Specification & Operational Protocol.

---

## 1. Global vs. Repository-Local Boundary

To ensure zero lock-in and seamless reusability across projects, the development harness is split cleanly:

| Layer | Location | Components | Responsibility |
| :--- | :--- | :--- | :--- |
| **Global Tools** (Host Environment) | `~/.gemini/config/skills/`<br>`~/.gemini/antigravity/` | • 62 GSD Skills (`gsd-plan-phase`, `gsd-verify-work`, etc.)<br>• Ralph Skills (`ralph-loop`, `cancel-ralph`, `ralph-loop-help`)<br>• Antigravity Stop Hook (`stop-hook.sh`) | Agent capabilities, background orchestration, stop interception. *Never modified by project code.* |
| **Repository-Local** (This Project) | `.planning/` | • `config.json` (Local rules & verification command)<br>• `PROJECT.md` (Constraints & vision)<br>• `ROADMAP.md` (Milestones & phases)<br>• `REQUIREMENTS.md` (Acceptance criteria)<br>• `STATE.md` (Position memory)<br>• `codebase/` (Architectural mapping) | Single source of truth for planning, progress, requirements, and conventions. |
| **Transient Runtime** (Execution Only) | `.ralph/` *(temporary)* | • `state.env` (Iteration counter, promise, test command)<br>• `fix_plan.md` (Living 1-task queue) | Ephemeral runtime state created only during active loops; deleted immediately upon completion or cancellation. |

---

## 2. Roles & Separation of Concerns

```text
 ┌─────────────────────────────────────────────────────────────┐
 │ GSD: Master Planning & Architectural Authority (Macro)       │
 │  1. Scopes milestones & releases in ROADMAP.md              │
 │  2. Decomposes phases into atomic, reviewable tasks         │
 │  3. Sets rigid acceptance criteria & boundary fences        │
 │  4. Evaluates completed work with UAT & verification loops  │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Handoff: exactly ONE atomic task)
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ RALPH WIGGUM: Autonomous Test-Driven Execution (Micro)       │
 │  1. Executes exactly ONE approved task at a time            │
 │  2. Enforces hard backpressure via deterministic build cmd  │
 │  3. Iterates up to 5 turns with self-correcting feedback    │
 │  4. Cannot escape or stop until promise + tests pass        │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Promise satisfied & .ralph cleaned)
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ HUMAN & GSD VERIFICATION (Gatekeeper)                       │
 │  1. Multi-viewport responsive audit (360px – 1882px)        │
 │  2. Manual or conversational UAT review                     │
 │  3. Human approval to commit or advance to next phase       │
 └─────────────────────────────────────────────────────────────┘
```

---

## 3. Ralph Execution Protocol

### 3.1 Hard Rules for Ralph
1. **Single-Task Isolation:** Ralph must NEVER receive a full roadmap or multi-feature backlog. It operates on exactly ONE atomic task with clear completion boundaries.
2. **Deterministic Build Command:** Every invocation must pass the verified project test command:
   ```bash
   --test-cmd "npm --prefix frontend run build"
   ```
3. **Conservative Turn Limit:** Always set `--max-iterations 5` (never exceed 10 in interactive chat).
4. **Verifiable Completion Promise:** Always provide an explicit, unique promise token:
   ```bash
   --completion-promise "TASK_TOKEN_VERIFIED"
   ```
5. **Zero Test Weakening:** Ralph is strictly forbidden from deleting test assertions, commenting out checks, or altering verification thresholds to pass a build.

### 3.2 Standard Ralph Task Invocation Template

When launching an approved task into Ralph, use this prompt structure:

```markdown
Run a ralph loop to execute Task [ID]: "[TASK TITLE]"

SPECIFICATION:
- [Clear description of what to implement or refactor]
- Respect existing project rules in AGENTS.md / GEMINI.md:
  * Responsive-first: Zero horizontal overflow on 360px–1882px viewports.
  * Ponytail Lazy Dev: Minimum diffs, zero unused abstractions, no speculative wrappers.
- Target Files: [Exact list of allowed files to modify]
- Scope Fence: Do NOT touch [unrelated components/files].

FLAGS:
--max-iterations 5
--test-cmd "npm --prefix frontend run build"
--completion-promise "TASK_[ID]_COMPLETE"
```

### 3.3 Stop & Safety Controls
- **If Ralph succeeds:** Ralph emits `<promise>TASK_[ID]_COMPLETE</promise>`, the stop hook verifies the zero exit code of `npm run build`, deletes `.ralph/`, and exits.
- **If Ralph gets stuck or loops unproductively:** Run `/cancel-ralph`. This immediately invokes `cancel-ralph.sh`, unlocks the directory, and deletes `.ralph/`.
- **If changes need to be discarded:** Run `git checkout -- <modified_files>` (never use destructive hard resets without confirmation).

---

## 4. Safety & Governance Policies

1. **No Automatic Git Commits:**
   Neither GSD nor Ralph should commit to git automatically in this repository. All commits must be explicitly requested and reviewed by the user.
2. **No Automatic Deployments:**
   Build outputs in `frontend/dist/` are for validation only. No command may trigger production pushes or cloud deploys.
3. **No Nested Orchestrators:**
   NEVER run a GSD phase orchestrator (`gsd-execute-phase`, `gsd-plan-phase`) while a `.ralph/` session is active. Ralph intercepts the turn exit; nesting them will cause execution deadlocks.
4. **Human Gatekeeper Checkpoints:**
   - Milestone creation → Requires user approval.
   - Phase plan generation → Requires user approval.
   - Ralph task completion → Requires visual/build review before advancing.
   - Any expansion of project scope → Must be rejected unless approved.

---

## 5. Verification Checklist (Before Marking Any Task Done)

Before advancing `ROADMAP.md` or declaring any task complete:

- [ ] **Deterministic Build Check:** `npm --prefix frontend run build` passes with code `0`.
- [ ] **Zero Horizontal Overflow:** Document body and sections have `width: 100%` with zero horizontal scrollbar across all viewports.
- [ ] **Mandatory Viewport Audit:**
  - `360px` (Compact Android)
  - `390px` (Modern iOS)
  - `540px` (Foldable / large phone)
  - `768px` (Tablet portrait)
  - `1024px` (Tablet landscape / small laptop)
  - `1440px` (Desktop)
  - `1882px` (Ultra-wide)
- [ ] **Touch & Accessibility:** Min 44px touch targets on mobile; visible focus outlines (`focus-visible`).
- [ ] **Truth in Advertising:** Zero fabricated metrics, fake user stats, or unverified claims.
- [ ] **Git Scope Cleanliness:** `git status` reveals changes ONLY in approved task files.

---

## 6. How to Replicate in Future Projects

To establish this exact workflow in any new or existing repository:

1. **Verify Global Installation:** Confirm `gsd-*` and `ralph-loop` skills are listed in your agent environment.
2. **Map the Existing Code:** Run codebase mapping (`/gsd-map-codebase --fast`) to generate `.planning/codebase/`.
3. **Initialize Local Planning State:** Create `.planning/config.json`, `.planning/PROJECT.md`, and `.planning/ROADMAP.md` tailored to the project's stack and verification command.
4. **Copy this Workflow Guide:** Copy `.planning/WORKFLOW.md` into the project's `.planning/` folder.
5. **Execute via Micro-Ralph:** Plan phases in GSD, then dispatch single bounded tasks to Ralph with the local project's test command (`npm test`, `pytest`, `cargo test`, etc.).
