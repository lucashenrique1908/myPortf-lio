# Git Workflow

This document defines the Git workflow used in the Lucas Portfolio V2 project.

## Branch Strategy

### main

Production branch.

The `main` branch contains the stable version of the portfolio that is deployed publicly.

Feature branches must not be merged directly into `main`.

### develop

Integration branch.

The `develop` branch contains the next version of the application and receives completed feature branches.

### feature branches

Each Jira task should be developed in its own feature branch.

Format:

```text
feature/LPORT-XX-task-name
```

Examples:

```
feature/LPORT-08-git-workflow
feature/LPORT-09-jira-workflow
feature/LPORT-10-environment-validation
```

## Feature Development Flow

1. Switch to `develop`.
2. Pull the latest changes.
3. Create a feature branch from `develop`.
4. Implement the task.
5. Test the changes.
6. Commit the work.
7. Push the feature branch.
8. Open a Pull Request targeting `develop`.
9. Review the changes.
10. Merge the Pull Request.
11. Update the local `develop` branch.

Example:

```
git switch develop
git pull origin develop

git switch -c feature/LPORT-XX-task-name

git add .
git commit -m "type: description"

git push -u origin feature/LPORT-XX-task-name
```

## Pull Request Rules

During development:

```
feature/* → develop
```

For production releases:

```
develop → main
```

Feature branches should not target `main` directly.

## Commit Convention

Use clear and descriptive commit messages.

Examples:

```
feat: add visitor selection experience
fix: resolve project route issue
style: setup global styling architecture
chore: configure GitHub Pages deployment
docs: document Git workflow
refactor: reorganize project data
```

## Merge Strategy

Feature branches are merged into `develop` through Pull Requests.

The `main` branch should only receive stable releases from `develop`.

## Production Flow

```
feature branch
      ↓
   develop
      ↓
 Pull Request
      ↓
     main
      ↓
   deployment
```

## General Rule

Before creating a new feature branch, always make sure `develop` is updated.

```
git switch develop
git pull origin develop
git switch -c feature/LPORT-XX-task-name
```
