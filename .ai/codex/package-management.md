# Package Management Guidelines for Codex

## Installation Commands
**ALWAYS use `bun` for package installation** - it's significantly faster than npm or pnpm:
```bash
bun install
bun add <package-name>
bun add -d <dev-package-name>
bun remove <package-name>
```

## Other Package Management Tasks
**Use `pnpm` for all other package management operations**:
```bash
pnpm run dev
pnpm run build
pnpm run test
pnpm run lint
pnpm run typecheck
```

## Why This Setup?
- **bun**: Fastest package installation (up to 25x faster than npm)
- **pnpm**: Efficient disk space usage and fast script execution for development tasks

## Available Scripts
- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `typecheck` - Run TypeScript compiler
- `test` - Run tests with Vitest
- `test:watch` - Run tests in watch mode

## Architecture Documentation
Refer to `docs/architecture/` for detailed architecture diagrams and documentation.
