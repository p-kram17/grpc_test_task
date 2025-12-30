# GRPC Filtering Service

NestJS microservices: Producer filters users (age > 18), Consumer displays results via GRPC.

## How to Run

### Option 1: Docker

```bash
docker-compose up --build
```

### Option 2: Local

**Terminal 1:**

```bash
cd producer
npm install
npm run start:dev
```

**Terminal 2:**

```bash
cd consumer
npm install
npm run start:dev
```

> **Note:** For local run, edit `consumer/src/app.module.ts` line 15: change `url: 'producer:5000'` to `url: 'localhost:5000'`

---

**Expected result:** Consumer displays filtered users (age > 18) in JSON format.
