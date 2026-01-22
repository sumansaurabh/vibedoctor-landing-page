# Architecture Reference for Gemini

## Overview
This is a Remix full-stack application with React, TypeScript, Vite, and Tailwind CSS. Comprehensive architecture diagrams are available in `docs/architecture/`.

## Architecture Diagrams

All diagrams are in Mermaid format and located in `docs/architecture/`:

1. **system-overview.mermaid** - Complete system architecture
2. **component-hierarchy.mermaid** - React component tree structure
3. **data-flow.mermaid** - Data flow and state management
4. **routing-structure.mermaid** - Application routing
5. **build-deployment.mermaid** - Build pipeline and deployment
6. **technology-stack.mermaid** - Complete tech stack with versions

### Viewing Diagrams
- Open `.mermaid` files in GitHub (auto-renders)
- Use [Mermaid Live Editor](https://mermaid.live/)
- VS Code with Mermaid extension

## Key Technologies

- **Remix** 2.15.2 - Full-stack React framework
- **React** 18.3.1 - UI library
- **TypeScript** 5.8 - Type safety
- **Vite** 5.4 - Build tool
- **Tailwind CSS** 3.4 - Utility-first CSS
- **TanStack Query** 5.83 - Server state management
- **Radix UI** - Accessible component primitives

## Project Structure

```
app/
├── components/ui/    # Radix UI components (50+)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── routes/           # Remix routes & API
└── root.tsx          # App root with providers

docs/architecture/    # Architecture diagrams
```

## Development Commands

```bash
# Installation (ALWAYS use bun for speed)
bun install
bun add <package>

# Development (use pnpm for scripts)
pnpm run dev          # Start dev server
pnpm run build        # Build for production
pnpm run test         # Run tests
pnpm run lint         # Lint code
pnpm run typecheck    # Type check
```

## Common Patterns

### Component
```tsx
import { cn } from "~/lib/utils";

export function Component({ className }) {
  return <div className={cn("base", className)} />;
}
```

### Data Fetching
```tsx
import { useQuery } from "@tanstack/react-query";

const { data } = useQuery({
  queryKey: ["key"],
  queryFn: fetchData,
});
```

### Routing
- Files in `app/routes/` become routes
- `_index.tsx` → `/`
- `api.*.tsx` → API endpoints

## References

- Architecture docs: `docs/architecture/README.md`
- Package management: `.ai/gemini/package-management.md`
