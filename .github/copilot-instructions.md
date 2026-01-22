# GitHub Copilot Instructions

## Package Management Guidelines

### Installation Commands
**ALWAYS use `bun` for package installation** - it's significantly faster than npm or pnpm:
```bash
bun install
bun add <package-name>
bun add -d <dev-package-name>
bun remove <package-name>
```

### Other Package Management Tasks
**Use `pnpm` for all other package management operations**:
```bash
pnpm run dev
pnpm run build
pnpm run test
pnpm run lint
pnpm run typecheck
```

### Why This Setup?
- **bun**: Fastest package installation (up to 25x faster than npm)
- **pnpm**: Efficient disk space usage and fast script execution for development tasks

## Architecture Documentation

### Architecture Diagrams
Comprehensive architecture diagrams are available in `docs/architecture/`:

- **system-overview.mermaid** - Complete system architecture
- **component-hierarchy.mermaid** - React component tree structure
- **data-flow.mermaid** - Data flow and state management
- **routing-structure.mermaid** - Application routing
- **build-deployment.mermaid** - Build pipeline and deployment
- **technology-stack.mermaid** - Complete tech stack with versions

See `docs/architecture/README.md` for detailed documentation on each diagram.

### When to Consult Diagrams

| Task | Diagram to Consult |
|------|-------------------|
| Understanding the project structure | `system-overview.mermaid` |
| Adding new components | `component-hierarchy.mermaid` |
| Implementing data fetching | `data-flow.mermaid` |
| Adding new routes | `routing-structure.mermaid` |
| Setting up CI/CD | `build-deployment.mermaid` |
| Checking library versions | `technology-stack.mermaid` |

## Project Structure
- **Framework**: Remix 2.15.2 with React 18.3.1
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI (50+ accessible components)
- **Type Safety**: TypeScript 5.8
- **State Management**: TanStack Query 5.83
- **Forms**: React Hook Form 7.61 with Zod validation

## Development Patterns

### Component Pattern
```tsx
import { cn } from "~/lib/utils";

export function MyComponent({ className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

### Data Fetching Pattern
```tsx
import { useQuery } from "@tanstack/react-query";

export function DataComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["key"],
    queryFn: () => fetch("/api/data").then(r => r.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{data}</div>;
}
```
