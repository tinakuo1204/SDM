# Parathyroid Precision MDT PROMs integration — staging preview

Source: user-provided NTUH Parathyroid PROMs 20260602 paper and REDCap draft PDFs.

- SF-36 Taiwan version: **not copied** pending license and validated scoring rules; no fabricated SF-36 score.
- EQ VAS: 0–100, today’s overall health.
- PAS-Q: 13 user-provided symptom labels, 0–100 in steps of 10. Preview mean is explicitly **not** validated official PAS-Q scoring.
- Patient feedback: open comment and 0–10 recommendation likelihood.
- Disease and follow-up stage are demo-only metadata.
- No PHI collection, persistence, API submission, production integration, or OIDC authentication for this module.

Before clinical use: confirm instrument copyright/licensing, review SF-36 scoring, define missing-value rules, consent, identifiers via protected backend, longitudinal visit linkage, case-level authorization, audit logs, encryption and restore tests, IRB and hospital approval. Do not use on actual patients.