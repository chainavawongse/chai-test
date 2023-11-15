---
title: Continuous Integration
id: ci
---

# TeamCity

TeamCity is build platform.  We use it to build and generate deployable artifacts.

## Setting up new build pipeline for a new project

- Create build configurations using Templates
  - For each project, there should be a minimum of 3 build configurations
    - Main
      - Targeting the main/default branch
      - Build applicable projects and run tests
      - Build artifacts are created after the build
    - Base branches  
      - Targeting *-base branch
      - Build applicable projects and run tests
      - Build artifacts are created after the build
      - A release is created with Octopus Deploy
    - Pull Requests
      - Target refs/pull/*/merge
      - Build applicable projects and run tests
      - Setup "Commit Status Pusher" in Build Features. This will require pull request on the repo to check for the build status before it can be merged
      - No artifacts
      - No release
- If the project fails to compile or a test fails, the build fails
- When the build fails, you should get an email from TeamCity.   
  - If you don't get the email, make sure you configure Git properly with your email
  - Pay attention to fail build.


## Hotfixes

There are a few options.

1. Given the project is set up properly for the basic build configurations, just treat hotfix branches the same way you do the base branches.  The goal is to get the hotfix out to the feature environment to be tested and release the hotfix to production as fast as possible

2. Create a Hotfix build configuration that targets "*hotfix*".  Build, create the artifacts, deploy to feat and prod.  This is literally the same process as the base branch build but with the "Hotfix" name to it. 