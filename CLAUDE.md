# Agent Instructions

## Summary

This file defines how Claude operates inside this project. It outlines a 3-layer architecture that separates *what to do*, *how to decide*, and *how to execute*. All operations are organized by domain — each domain folder is self-contained with its own directives and execution scripts.

---

## 3-Layer Architecture

### Layer 1: Directive (What to do)
- Essentially SOPs written in Markdown, living in `<domain>/directives/`
- They define objectives, inputs, tools/scripts to use, outputs, and edge cases
- Natural-language instructions, like you'd give to a mid-level employee

### Layer 2: Orchestration (Decisions)
- Your job: intelligent routing.
- Read the directives, call execution tools in the right order, handle errors, ask clarifying questions, update directives with what you learn
- You are the glue between intent and execution
  - Example: you don't try to scrape websites yourself—you read `backend/directives/scrape_website.md`, define inputs/outputs, then run `backend/execution/scrape_single_site.py`

### Layer 3: Execution (Doing the work)
- Deterministic Python scripts in `<domain>/execution/`
- Environment variables, API tokens, etc. are stored in `.env`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast
- Use scripts instead of manual work
- Well-commented

**Why it works:**
If you do everything yourself, errors compound.
90% accuracy per step = ~59% success over 5 steps.
The solution is to push complexity into deterministic code so you focus only on decision-making.

---

## Folder Structure

Each domain is fully self-contained. Directives and execution scripts live inside the domain they belong to.

```
/
├── CLAUDE.md                        ← You are here (agent instructions)
├── .env                             ← API keys, tokens, secrets (never commit)
├── .env.example                     ← Template for required env vars
├── .gitignore
│
├── backend/                         ← Backend domain
│   ├── directives/                  ← SOPs for backend tasks
│   │   └── example_backend_task.md
│   └── execution/                   ← Scripts for backend tasks
│       └── example_backend_script.py
│
├── frontend/                        ← Frontend domain
│   ├── directives/                  ← SOPs for frontend tasks
│   │   └── example_frontend_task.md
│   └── execution/                   ← Scripts for frontend tasks
│       └── example_frontend_script.py
│
├── directives/                      ← Cross-domain / project-level SOPs
│   └── example_global_task.md
│
└── execution/                       ← Cross-domain / shared scripts
    └── example_global_script.py
```

> **Rule:** If a task belongs to a domain, its directive and script live inside that domain's folder. Only truly cross-domain tasks go in the root `directives/` and `execution/` folders.

---

## Operating Principles

### 1. Check existing tools first
Before writing a script:
- Identify the domain the task belongs to
- Check `<domain>/execution/` for existing scripts
- Check `<domain>/directives/` for existing SOPs
- Create new files only if none exist

### 2. Self-correct when something breaks
- Read the error message and stack trace
- Fix the script and test again
  - If it uses paid tokens/credits, ask the user first
- Update the directive with what you learned:
  - API limits
  - Unexpected response formats
  - Edge cases discovered

### 3. Keep directives up to date
- After completing a task, update the relevant directive
- Add edge cases, gotchas, and improvements
- Directives are living documents

### 4. Ask before assuming
- If inputs are ambiguous, ask one clarifying question
- Don't guess at intent—confirm before executing irreversible actions
- Prefer doing less and confirming over doing more and breaking things

### 5. Be transparent about what you're doing
- State which domain you're working in
- State which directive you're reading
- State which script you're running and why
- Surface errors clearly with context

---

## Domain Reference

| Domain | Directives | Execution | Responsibility |
|--------|-----------|-----------|----------------|
| `backend/` | `backend/directives/` | `backend/execution/` | APIs, DB, server logic |
| `frontend/` | `frontend/directives/` | `frontend/execution/` | UI, components, styles |
| `root` | `directives/` | `execution/` | Shared / cross-domain tasks |
