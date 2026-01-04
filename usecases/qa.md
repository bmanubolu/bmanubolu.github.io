---
title: QA Ideas
---

High-level QA ideas and experiments

1) Test prioritization
- Use signal (recent changes, test runtime, failure history) to rank tests for CI runs.

2) Flaky test detection & labeling
- Automate reruns + mark as flaky if pass/fail variance exceeds threshold. Add annotations to test issues.

3) Visual regression with AI
- Combine screenshot diffs with an ML model that filters irrelevant UI noise (timestamps, animations).

4) Auto-generated issue templates from failures
- Convert failing error logs into a starter issue description with steps to reproduce, environment, and suggested labels.

5) Small reproducible experiments
- For each idea, add a short script + README describing how to run it and expected results.