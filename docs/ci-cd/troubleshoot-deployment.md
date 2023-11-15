---
title: What to do when things didn't go as planned after releasing
id: troubleshoot-deployment
---

# STAY CALM! DO NOT PANIC!

# What to do when things didn't go as planned after releasing

Rolling back the deployment is very easy to do.  You can simply redeploy the previous release.  The deciding factor will be whether you have database changes in your deployment and, if so, can the previous release functions with the updated database structure.

## Deployment with database (DDM) changes

- Hopefully you back up the database before you deploy
- Figure out if the previous release can still function with new database structure
- If yes, either redeploy the previous deployment or manually update IIS or reinstall Windows service to the previous version
- If no
  - If restoring database is a possible option, then do it
  - If restoring database is not an option, the path forward is to fix the problems rather than trying to roll everything back

## Deployment without database changes

- Redeploy the old deployment or manually update IIS or reinstall Windows service to the previous version 
