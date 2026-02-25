FROM node:20-alpine AS frontend-build
WORKDIR /client
COPY client/package*.json ./
RUN npm ci
COPY client ./
RUN npm run build

FROM node:20-alpine AS backend-build
WORKDIR /server
COPY server/package*.json ./
RUN npm ci
COPY server ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY --from=backend-build /server/dist ./dist
COPY --from=frontend-build /client/dist ./public

EXPOSE 3000
CMD ["node", "dist/main.js"]