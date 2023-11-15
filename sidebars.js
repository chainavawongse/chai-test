/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  handbookSidebar: [{
    type:'category',
    label: 'Handbook',
    collapsed: false,
    collapsible: false,
    items:[
      {
        type: "category",
        label: "Engineering Team Overview",
        link: {
          type: 'doc',
          id: "engineering-team-overview/overview"
        },
        items: [
          {
            type: "doc",
            id: "engineering-team-overview/overview",
            label: "Overview"
          },
          {
            type: "doc",
            id: "engineering-team-overview/values",
            label: "Values"
          },
          {
            type: "doc",
            id: "engineering-team-overview/structure",
            label: "Structure"
          },
          {
            type: "doc",
            id: "engineering-team-overview/expectations",
            label: "Expectations"
          },
          {
            type: "doc",
            id: "engineering-team-overview/growth",
            label: "Growth"
          },
        ]
      },
      {
        type: "category",
        label: "Communication",
        link: {
          type: 'doc',
          id: "communication/overview"
        },
        items: [
          {
            type: "doc",
            id: "communication/overview",
            label: "Effective Communications"
          },
          {
            type: "doc",
            id: "communication/out-of-office",
            label: "Out-of-Office"
          },
          {
            type: "doc",
            id: "communication/time-off-guidelines",
            label: "Time-off Guideline"
          },
        ]
      },
    ]
  }],

  processAndPracticeSidebar: [{
    type:'category',
    label: 'Process & Practice',
    collapsed: false,
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Coding Practice",
        link: {
          type: 'doc',
          id: "coding-practice/ai-assisted"
        },
        items: [
          {
            type: "doc",
            id: "coding-practice/ai-assisted",
            label: "AI-Assisted Coding"
          },
          {
            type: "doc",
            id: "coding-practice/documentation",
            label: "Documentation"
          },
          {
            type: "doc",
            id: "coding-practice/code-review",
            label: "Code Review"
          },
          {
            type: "doc",
            id: "coding-practice/security",
            label: "Security"
          },
        ]
      },
      {
        type: "category",
        label: "Version Control",
        link: {
          type: 'doc',
          id: "version-control/setting-up-new-repo"
        },
        items:[
          {
            type: "doc",
            id: "version-control/setting-up-new-repo",
            label: "Setting up new GitHub repository"
          },
          {
            type: "doc",
            id: "version-control/readme",
            label: "README"
          },
          {
            type: "doc",
            id: "version-control/branching",
            label: "Branching"
          },
          {
            type: "doc",
            id: "version-control/pull-request",
            label: "Pull Request"
          },
          {
            type: "doc",
            id: "version-control/repo-ownership",
            label: "Repo Ownership & Responsibility"
          },
          {
            type: "doc",
            id: "version-control/working-in-other-teams-repo",
            label: "Working in other team's repo"
          },
        ]
      },
      {
        type: "category",
        label: "CI/CD",
        link: {
          type: 'doc',
          id: "ci-cd/ci"
        },
        items: [
          {
            type: "doc",
            id: "ci-cd/ci",
            label: "TeamCity (CI)"
          },
          {
            type: "doc",
            id: "ci-cd/cd",
            label: "Octopus Deploy (CD)"
          },
          {
            type: "doc",
            id: "ci-cd/release-checklist",
            label: "Release Checklist"
          },
          {
            type: "doc",
            id: "ci-cd/troubleshoot-deployment",
            label: "Troubleshoot Deployment"
          },
        ]
      }
    ]
  }

  ]
};

module.exports = sidebars;
