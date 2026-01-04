---
title: AI Use Cases
layout: page
permalink: /use-cases/ai/
---

# AI Use Cases

This section collects practical AI-driven use cases for QA and engineering teams.

## Test-case generation
- Use a prompt that includes function signatures, docstrings, and examples to produce unit tests.

Prompt example:
```
Given this function signature and docstring, produce 3 unit tests with inputs, expected outputs, and short descriptions...
```

## Test-data synthesis
- Describe schema, constraints, and edge cases; ask the model to produce JSON records that match constraints.

## Flaky-test triage
- Collect rerun logs and stack traces; ask an assistant to rank likely causes and suggest next steps (rerun, isolate, increase timeout).

## QA assistant
- A chat assistant that suggests tests, suggests mutation tests, and generates minimal reproducible cases from logs.
