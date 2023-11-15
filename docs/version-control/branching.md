---
title: Branching
id: branching
---

# Branching

We recognize that there are many branching strategies.  Ncontracts branching strategy is as followed:

- `main` represents what is in production at all time
- Create a "base" branch when working on a feature. This branch becomes your team's main branch while developing the feature.
- For example, team A is tasked to develop feature xyz.  Team A would create a branch called "feature-xyz-base" from the `main` branch.  Each developer from team A will create their working branch from "feature-xyz-base" branch and any subsequence pull requests will be targeting "feature-xyz-base" branch.  Furthermore, the team will deploy artifacts from "feature-xyz-base" branch to the feature environment for testing purpose 
