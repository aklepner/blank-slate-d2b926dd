---
name: Public vendor access
description: External Supabase permissions intentionally separate public vendor details from member-only data.
---

Public vendor queries must request only permitted, necessary columns, not every column.

**Why:** The connected Supabase database uses column-level anonymous grants and a visibility policy to keep some vendor data private. A wildcard request fails even when the public fields are readable. Do not solve this by granting public access to the whole table.

**How to apply:** When changing vendor queries, inspect current column grants and row policies through Supabase, and keep public cards separate from member-only offer data.