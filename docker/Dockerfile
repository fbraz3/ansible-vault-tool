FROM node:18-alpine

WORKDIR /usr/src/app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S ansible-vault -u 1001

COPY package*.json ./

RUN npm ci --only=production && \
    npm cache clean --force

COPY --chown=ansible-vault:nodejs . .
RUN rm -rf docker/ .github/ .git/ *.md

USER ansible-vault

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npm", "start"]