# Sumeet Basfore — Portfolio

A five-route personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site uses an editorial aubergine-and-porcelain design and presents project details with evidence and limitations clearly distinguished.

## Routes

- `/` — introduction and featured projects
- `/projects` — selected public-repository projects
- `/about` — introduction and interests
- `/stack` — profile-listed languages and separately labeled repository evidence
- `/contact` — email, LinkedIn, and GitHub

Project content is provisional where noted in the site. Repository documentation is not represented as independently verified behavior. The deployment domain and host have not been selected.

## Run locally

Requirements: Node.js and npm. Install the locked dependencies and start Next.js:

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

There is currently no automated test script or test suite in the repository.

## Deployment

No hosting target or canonical domain is configured. Review [`docs/deployment-checklist.md`](docs/deployment-checklist.md), approve a host and domain, and complete the checklist before publishing. Do not deploy without explicit approval.
