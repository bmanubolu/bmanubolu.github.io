---
title: AI Use Cases
---

Overview
- Applying AI to accelerate testing, generate data, triage issues, and assist triage.

Selected use cases

1) Test-case generation
- Idea: Generate unit / integration test scaffolding from function signatures + docstrings.
- Prompt example:
  - "Given this function signature and docstring, produce 3 unit tests with clear inputs, expected outputs, and brief test descriptions."

2) Test-data synthesis
- Idea: Create realistic synthetic datasets that match schemas, edge cases, and privacy constraints.
- Example approach: Describe schema + constraints then ask model to produce N JSON records.

3) Automated test flakiness triage
- Idea: Analyse failing test logs and suggest probable causes (timing, resources, ordering).
- What to capture: recent commits, rerun logs, environment, stack traces.

4) QA assistant (chat)
- Idea: Provide a conversational assistant for test authors:
  - Generate test ideas given a feature description.
  - Suggest mutation, boundary, and negative tests.
- Example prompt:
  - "You are a QA assistant. For feature X (describe), suggest 10 tests covering functional, edge, and negative cases."

Integration notes
- Keep prompt templates in the repo (version them).
- Run models in ephemeral environments; log inputs and outputs for reproducibility and safety.