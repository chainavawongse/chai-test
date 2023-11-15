---
title: Setting up new GitHub repository
id: setting-up-new-repo
---

GitHub is our version control provider.  When setting a new Ncontracts repo, please follow the guideline below

- Private repo
- `main` is the default branch
- Assign a proper GitHub team to the repo   
- Create CODEOWNERS file at the root. This is the team that "owns" the repo.  Owning the repo means the team is responsible for the health and well-being of the code base.  
- Leverage the README file to provide basic info about the project
- Setup branch protection for `main` and `*-base`
- Require a pull request before merging
- Require at least one approval
- Require review from Code Owner
- Require status checking (PR build) from TeamCity
- DO NOT allow force push
- On `main`, do not allow deletion
- Turn on dependabot

GitHub is constantly adding new features to the repo.  Use it as you see fit. 
