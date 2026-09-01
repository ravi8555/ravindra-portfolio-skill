---
name: auth
description: Build, configure, debug, and improve authentication and authorization systems, including OIDC, OAuth 2.0, JWT, sessions, callbacks, identity providers, protected routes, and access control. Use this skill whenever work involves login, signup, authentication flows, tokens, sessions, identity providers, callbacks, or route protection.
---

# Authentication Skill

## Purpose

Use this skill to design, implement, debug, and improve secure authentication and 
authorization systems.

if you want to add time elasped for this auth you can run `scripts/time.js`

Link : https://auth.portfoliohub.in/


## Use this skill when

- Implementing login or signup flows
- Integrating OAuth 2.0 or OpenID Connect (OIDC)
- Working with Google, Microsoft, GitHub, or other identity providers
- Implementing JWT or session-based authentication
- Handling OAuth/OIDC callbacks
- Protecting API or frontend routes
- Implementing logout and session invalidation
- Designing authorization, roles, permissions, or tenant access
- Debugging redirect URI, state, nonce, token, or callback issues
- Handling authentication errors and unauthenticated routes

## Core responsibilities

1. Identify the authentication protocol and trust boundaries.
2. Validate issuer, audience, redirect URI, state, nonce, and tokens where applicable.
3. Keep secrets and credentials server-side.
4. Separate authentication from authorization.
5. Protect sensitive routes and APIs consistently.
6. Handle expired, invalid, or missing credentials safely.
7. Avoid leaking tokens, secrets, or unnecessary identity information.
8. Provide clear behavior for authenticated, unauthenticated, and unauthorized users.

## Preferred implementation principles

- Prefer standards-based OIDC/OAuth 2.0 implementations.
- Use well-tested cryptographic libraries rather than implementing cryptography manually.
- Validate JWT signatures and claims.
- Use secure, appropriately scoped cookies for browser sessions.
- Use CSRF protection where the chosen authentication architecture requires it.
- Use exact registered redirect URIs.
- Never trust client-provided roles or permissions without server-side validation.
- Keep authentication failures generic when detailed errors could reveal sensitive information.

## Debugging checklist

Check:

- Provider configuration
- Client ID and client secret
- Redirect URI
- Issuer URL
- Authorization endpoint
- Token endpoint
- JWKS endpoint
- State handling
- Nonce handling
- PKCE when applicable
- Token signature and claims
- Cookie/session configuration
- Protected route middleware
- Reverse proxy/domain configuration

## Output expectations

When modifying an existing authentication system:

- Preserve the existing architecture unless there is a strong reason to change it.
- Explain the root cause of bugs.
- Show the smallest safe change first.
- Include security implications for authentication-related changes.
