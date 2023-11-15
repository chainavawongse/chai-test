---
title: Release Checklist
id: release-checklist
---

## Pre-Release

- Make sure your deployment includes all the commits from the `main` branch
- Make sure your team has tested thoroughly
    - "No enough data for testing" cannot be an excuse
- Post a message to the Release channel
- Tag Ops if you are deploying a new website or Windows service, so they can set up monitoring
- Gain access from IT to the production environments and DBs
- Backup databases if needed

## Post-Release

- Create a PR for merging your code back into `main` and tag the repo owners 
