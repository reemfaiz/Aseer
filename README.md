# Fusion Starter with AboutProduct Integration

Full-stack React application with integrated Express server and AboutProduct module. Built with React Router 6, TypeScript, Vite, and modern tooling.

## Features

- **Frontend**: React 18 + React Router 6 (SPA mode) + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Radix UI Components
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest support
- **AboutProduct Integration**: Embedded product showcase module

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run TypeScript checks
pnpm typecheck
```

## Project Structure

```
client/                   # React SPA frontend
├── pages/               # Route components
│   ├── Index.tsx       # Home page
│   └── AboutProduct/   # Product showcase module
├── components/          # Reusable components
└── global.css          # Global styles & Tailwind

server/                  # Express API backend
└── routes/             # API handlers

public/                 # Static assets
```

## Development

- Development server runs on http://localhost:8080
- Hot reload enabled for both client and server
- API endpoints are prefixed with `/api/`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details