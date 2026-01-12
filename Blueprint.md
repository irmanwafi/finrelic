You are to generate a clean, realistic Node.js backend application designed specifically for observability learning.

Context:
- This app will later be instrumented with New Relic APM
- For now, do NOT include New Relic, Docker, or database
- The goal is to have an app that can:
  - run locally with `npm run dev`
  - generate fast responses, slow responses, and errors
  - be easy to monitor later with APM

Environment:
- Windows 11
- Git Bash
- Node v24+
- No TypeScript
- Use CommonJS (require/module.exports)
- Use Express only (no frameworks, no extra libraries)

Project requirements:

1. Project name: observe-app

2. Folder structure must be:

observe-app/
  package.json
  server.js
  routes/
    health.js
    test.js

3. package.json must include:
   - name, version, description
   - script: "dev" -> node server.js
   - dependency: express

4. server.js must:
   - create Express app
   - use JSON middleware
   - register /health and /api routes
   - include a global error handler
   - listen on port 3000
   - log a startup message with the URL

5. routes/health.js must:
   - expose GET /
   - return JSON with status: "ok" and current timestamp

6. routes/test.js must include these routes:

   - GET /fast
     -> returns immediately with JSON message and timestamp

   - GET /slow
     -> simulate slowness using 3 second delay before responding

   - GET /error
     -> throw an intentional error to simulate failure

   - GET /random
     -> randomly fail 50% of the time, otherwise return success JSON

7. The code must be:
   - clean
   - readable
   - realistic (no tutorial tone)
   - structured like a real backend service

8. Output requirements:
   - Output ALL files in full
   - Do NOT skip any file
   - Do NOT explain before generating code
   - Do NOT include Docker, New Relic, or database
   - Just generate the project exactly as specified

The purpose of this app is to be used later for:
- APM instrumentation
- error analysis
- latency analysis
- throughput testing

This is not a demo app. It is a learning foundation for observability.
