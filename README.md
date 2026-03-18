# Kochchef

## Stack

- Typescript
- Vite + Vue: `./client/`
- NestJS: `./server/`
- MongoDB
- Docker + Docker Compose

## Verwendung

Alle benötigten Skripts sollten im Rootordner des Projekts (`./package.json`) verfügbar sein:

```bash
# Alle Abhängigkeiten runterladen (Client und Server):
npm install
# Server im Entwicklungmodus starten (+ Vite mit Hotreload):
# (sollte die Seite automatisch im Browser starten)
npm run dev
# Frontend und Backend bauen:
npm run build
# Server (NestJS) starten:
npm run start
```

## Bereitstellung

Am einfachsten mit Docker Compose:

```bash
docker-compose build
docker-compose up -d
```

## Datenbank

MongoDB sollte vor dem Starten des Servers im Entwicklungsmodus bereits auf Port 27017 laufen.
Am einfachsten geht auch das mit Docker:

```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

Oder mit Docker Compose:

```yaml
name: mongodb
services:
  mongodb-community-server:
    container_name: mongodb
    image: mongodb/mongodb-community-server:latest
    ports:
      - 27017:27017
```

Die Umgebungsvariable `MONGO_URI` kann mit einer `.env`-Datei gesetzt werden.
Siehe `./server/.env.example`.
