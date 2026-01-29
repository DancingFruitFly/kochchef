FROM node:alpine

# Update container:
#RUN apk update
#RUN apk upgrade

WORKDIR /app

# Install node modules:
COPY package.json package-lock.json ./
COPY client/package.json client/package-lock.json ./client/
COPY server/package.json server/package-lock.json ./server/
RUN npm ci

# Build app:
COPY ./client ./client/
COPY ./server ./server/
RUN npm run build

# Run app:
USER 1000
CMD npm run start