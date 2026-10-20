/*
# Create enquiries table (single-tenant lead capture)

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the doctor
  - `qualification` (text, not null) — e.g. MD, DNB, DMRD, DGO, MS
  - `city` (text, not null) — city of the doctor
  - `interest` (text, not null) — one of: training, clinic-setup, both
  - `phone` (text) — optional phone number
  - `email` (text) — optional email
  - `message` (text) — optional free-text message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated to INSERT (public lead-capture form).
- No SELECT/UPDATE/DELETE for anon (enquiries are private to the academy owner).
3. Notes
- Enquiries are intended to be read by the academy owner via Supabase dashboard
  (authenticated role), so no anon SELECT policy is provided.
- This is a no-auth public-facing site; only INSERT is exposed to anon.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  qualification text NOT NULL,
  city text NOT NULL,
  interest text NOT NULL CHECK (interest IN ('training', 'clinic-setup', 'both')),
  phone text,
  email text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries"
ON enquiries FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries"
ON enquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries"
ON enquiries FOR DELETE
TO authenticated
USING (true);
