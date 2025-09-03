# Use Node.js LTS Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S ansible-vault -u 1001

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy application code
COPY --chown=ansible-vault:nodejs . .

# Remove unnecessary files
RUN rm -rf docker/ .github/ .git/ *.md

# Switch to non-root user
USER ansible-vault

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start application
CMD ["npm", "start"]