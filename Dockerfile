FROM node:14.15.1-alpine as builder

# Set up build
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application code
COPY src src
COPY tsconfig.json tsconfig.json

# Build
RUN npm run build

# Remove dev dependencies from image
RUN rm -rf src tsconfig.json
RUN npm prune --production

# Create fresh image for runtime
FROM node:14.15.1-slim as runtime

# Copy compiled code from builder
COPY --from=builder /app /app
WORKDIR /app

## Configure image
ENV NODE_ENV=production
USER node

CMD ["npm", "run", "start:prod"]
