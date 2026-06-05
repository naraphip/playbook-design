# UX/UI Lead Playbook Website Spec

## Project

Build a UX/UI Lead Playbook website from the old single-file HTML prototype.

This project is a practical UX/UI glossary and prompt library for founders, developers, PMs, junior designers, and AI builders.

The goal is not just to explain UX/UI terms. The product must help users copy better prompts for designers, developers, Claude Code, Codex, and AI image tools.

## Stack

- Next.js 15+ App Router
- TypeScript
- Tailwind CSS
- src directory
- Static TypeScript data
- No backend
- No database
- No auth
- No payment
- No external API
- Use lucide-react for icons where appropriate

## Main Pages

### `/`

Main playbook page.

Required:
- Sticky topbar
- Search input
- Total term count
- Desktop sidebar category navigation
- Mobile category chips
- Hero panel
- Responsive glossary card grid
- Expandable term cards
- Copy prompt button
- Empty state
- Bookmark terms using localStorage

### `/terms/[slug]`

Term detail page.

Required:
- Term title
- Category
- Level
- Definition
- Why it matters
- Examples
- Prompt examples
- Tags
- Related terms
- Visual demo
- Copy prompt button
- Back button

### `/prompts`

Prompt library page.

Group prompts by:
- For Designer
- For Developer
- For Claude Code
- For UX Review
- For Accessibility
- For Conversion
- For AI Image Generation

Each prompt card:
- Title
- Use case
- Prompt text
- Copy button
- Tags
- Level

### `/techniques`

UX/UI techniques page.

Include:
- 5-Second Test
- Usability Testing
- A/B Testing
- Heuristic Evaluation
- Design Critique
- Accessibility Audit
- Mobile-First Review
- Conversion Review
- Design Handoff Checklist
- UX Metrics Review

Each technique:
- What it is
- When to use it
- How to do it
- Example prompt
- Common mistakes

## Data Files

Create:

```txt
src/data/categories.ts
src/data/terms.ts
src/data/prompts.ts
src/data/techniques.ts