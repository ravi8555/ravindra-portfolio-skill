---
name: poll-platform
description: Build and manage real-time polling and voting platforms, including polls, questions, voting flows, results, analytics, user participation, validation, APIs, and scalable backend architecture. Use this skill whenever work involves polls, surveys, voting, live results, participation tracking, or poll analytics.
---

# Poll Platform Skill

## Purpose

Use this skill to build reliable polling and voting systems with correct participation rules and consistent results.

## Use this skill when

- Creating polls
- Creating questions/options
- Implementing voting
- Preventing duplicate votes
- Showing live results
- Building poll analytics
- Tracking participation
- Designing poll APIs
- Implementing poll permissions
- Handling poll lifecycle states
- Scaling high-volume voting

## Core concepts

A polling platform commonly includes:

- Poll
- Question
- Option
- Participant
- Vote
- Poll status
- Start/end time
- Visibility
- Results
- Analytics

## Voting correctness

Voting must be treated as a consistency-sensitive operation.

Consider:

- Authentication
- Poll eligibility
- Poll status
- Start/end time
- Duplicate vote prevention
- Question/option validity
- Transaction boundaries
- Idempotency
- Concurrency

Database constraints should reinforce application-level checks.

## Poll lifecycle

Use explicit states where useful, for example:

- Draft
- Scheduled
- Active
- Closed
- Archived

Avoid relying only on UI state to determine whether voting is allowed.

## Results

Results should be derived from authoritative vote data.

For live results, consider:

- Efficient aggregation
- Caching
- Event-driven updates
- WebSockets/SSE where appropriate
- Eventual consistency tradeoffs

Clearly distinguish live, cached, and finalized results.

## Security and abuse prevention

Consider:

- Rate limiting
- Authentication
- Authorization
- Duplicate prevention
- Bot/abuse detection
- Input validation
- Audit logging

## Output expectations

When changing the polling system:

- Explain data consistency implications.
- Consider concurrent votes.
- Identify required database constraints.
- Include API validation.
- Consider how existing polls and votes behave after migrations.
