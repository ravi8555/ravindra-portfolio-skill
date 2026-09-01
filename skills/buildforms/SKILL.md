---
name: buildforms
description: Design and develop dynamic form-builder systems, including form schemas, fields, validation, conditional logic, submissions, reusable components, APIs, and database integration. Use this skill whenever work involves form creation, form configuration, form rendering, validation, submission handling, or form-builder architecture.
---

# Form Builder Skill

## Purpose

Use this skill to build flexible, maintainable, and scalable form-builder platforms.

if you want to add time elasped for this buildforms you can run `scripts/time.js`

Link: https://buildforms.in/

## Use this skill when

- Creating a form builder
- Adding or modifying form fields
- Designing form schemas
- Building dynamic form rendering
- Implementing validation
- Adding conditional or dependent fields
- Handling form submissions
- Building reusable form components
- Designing form APIs
- Persisting forms and responses
- Adding authentication or ownership to forms
- Building admin/form-management interfaces

## Core responsibilities

1. Separate form definition from form rendering.
2. Keep the form schema extensible.
3. Validate data on both client and server when appropriate.
4. Make field types reusable.
5. Keep conditional logic deterministic and testable.
6. Treat submitted data as untrusted input.
7. Design APIs and database models around stable identifiers.
8. Preserve backward compatibility when schemas evolve.

## Recommended form concepts

A form system should generally distinguish:

- Form
- Form version
- Field
- Field configuration
- Validation rules
- Conditional rules
- Submission
- Submission value
- Form owner
- Form permissions

## Field design

Prefer a schema-driven approach where each field has:

- Stable ID
- Type
- Label
- Required state
- Default value when applicable
- Validation configuration
- Display configuration
- Conditional visibility configuration

## Validation

Validation should cover:

- Required fields
- Data type
- Length
- Range
- Pattern
- Custom constraints
- Cross-field constraints
- Server-side authorization

Never rely exclusively on browser-side validation.

## Conditional logic

Conditional rules should be:

- Explicit
- Serializable
- Deterministic
- Independently testable
- Safe against circular dependencies

## API principles

Keep APIs predictable and validate:

- Form ownership
- Permissions
- Field IDs
- Submission payloads
- Schema versions
- Input size
- File uploads where applicable

## Output expectations

When extending an existing form builder:

- Reuse existing field abstractions.
- Avoid introducing one-off field implementations.
- Explain schema/database/API impact.
- Include validation and edge cases.
- Consider migrations when changing persisted schemas.
