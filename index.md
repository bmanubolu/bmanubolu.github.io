---
layout: home
title: "AI & QA Playbook"
hero:
  title: "AI & QA Playbook"
  text: "Personal blog by B. Manubolu — experiments, tutorials, and playbooks for applying AI in software quality assurance."
  actions:
    - label: "Read the Blog"
      url: /blog/
    - label: "Browse Use Cases"
      url: /use-cases/
---

## Latest from the blog

{%- for post in site.posts limit:3 -%}
- [{{ post.title }}]({{ post.url }}) — {{ post.excerpt | strip_html | truncate: 120 }}
{%- endfor -%}

## Focus areas

- AI-assisted test generation & test-data synthesis  
- Flaky-test detection and triage playbooks  
- Practical prompts & templates for QA workflows  
- Tools, scripts, and short reproducible experiments

## Quick links
- [Use Cases](/use-cases/)
- [Prompts](/prompts/)
- [Tools & Scripts](/tools/)
- [About](/about/)