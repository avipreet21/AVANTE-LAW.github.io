# AVANTE LAW Website

Static multi-page website for AVANTE LAW with:

- `index.html` homepage inspired by the provided reference
- `practice.html`, `about.html`, `contact.html`, `appointment.html`, and `blog.html`
- local-only assets in `assets/`
- restrictive front-end security defaults

## Security choices included

- No third-party libraries, analytics, fonts, or scripts
- Local assets only
- Per-page Content Security Policy via meta tag
- `form-action 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, and `connect-src 'none'`
- Accessible forms with length limits, pattern checks, consent checkboxes, and honeypot fields
- Client-side updates use `textContent`, not `innerHTML`
- Successful demo submissions reset the form to reduce retained on-screen data
- Security disclosure file at `.well-known/security.txt`

## Before going live

This project is intentionally front-end only. For a real law firm deployment, connect forms to a protected server-side intake flow and add server headers.

Recommended production headers:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- `Cross-Origin-Resource-Policy`

Recommended backend protections:

- server-side validation and sanitization
- CSRF protection
- rate limiting and bot protection
- encrypted storage and TLS everywhere
- file upload scanning if documents are accepted
- audit logging for intake access
- conflict-check and privilege review before collecting detailed confidential material
