---
name: Deployment secret staleness
description: Published Replit deployments can serve builds with stale secret values baked in; how to diagnose and defend.
---

Replit deployments keep their own copy of secrets. Updating a workspace secret does NOT guarantee the next published build uses the new value — the live site can keep serving a bundle with the old value baked in (especially Vite `VITE_*` vars, which are inlined at build time).

**Why:** DSO Pricing's live site kept failing with "TypeError: Failed to fetch" after the workspace `VITE_SUPABASE_URL` was corrected and the app was republished; inspecting the served JS bundle showed the old wrong URL still baked in.

**How to apply:**
- When prod misbehaves but dev works, curl the live bundle and grep for the baked value instead of trusting workspace secrets.
- Prefer runtime normalization/validation of user-provided config (e.g. auto-convert a Supabase dashboard link `supabase.com/dashboard/project/<ref>` to `https://<ref>.supabase.co`) so a stale/wrong secret can't take down the live site.
- Users commonly paste the Supabase dashboard URL instead of the Project API URL — validate the format when requesting it.
