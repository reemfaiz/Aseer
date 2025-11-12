FROM node:18-alpine

# Set working dir
WORKDIR /app

# Install pnpm via corepack (Node 18+ has corepack)
RUN corepack enable && corepack prepare pnpm@latest --activate || npm i -g pnpm

# Copy package manifests first for better caching
COPY package.json pnpm-lock.yaml ./

# Install all deps (including dev) required for build
RUN pnpm install --frozen-lockfile

# Copy rest of the source
COPY . .

# Build the client + server
RUN pnpm run build

# Expose the port used by the dev server integration (vite server uses 8080 by default)
EXPOSE 8080

# Start the production server
CMD ["node", "dist/server/node-build.mjs"]
