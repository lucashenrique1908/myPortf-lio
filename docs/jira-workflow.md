# Jira Workflow

This document defines the Jira workflow used in the Lucas Portfolio V2 project.

## Workflow

```text
TO DO
↓
IN PROGRESS
↓
IN REVIEW
↓
DONE
```

## Status Definitions

### TO DO

The task has been planned but development has not started.

### IN PROGRESS

Development has started and a feature branch has been created from `develop`.

### IN REVIEW

Implementation is complete, validation has been performed, and a Pull Request has been opened targeting `develop`.

### DONE

The Pull Request has been reviewed and merged into `develop`, and the local `develop` branch has been synchronized.

## Jira and Git Integration

Each development task follows this flow:

```text
Jira Task
↓
feature/LPORT-XX-task-name
↓
development
↓
commit
↓
push
↓
Pull Request
↓
review
↓
merge into develop
↓
Done
```

## Sprint Usage

Tasks are organized into sprints.

A task is only considered complete when all acceptance criteria and the Definition of Done are satisfied.

## Definition of Done

- Acceptance criteria completed
- Code or documentation reviewed
- Build passes when applicable
- Lint passes when applicable
- No console errors
- Correct commit created
- Feature branch pushed
- Pull Request opened to `develop`
- Pull Request reviewed
- Merge completed
- Local `develop` synchronized
