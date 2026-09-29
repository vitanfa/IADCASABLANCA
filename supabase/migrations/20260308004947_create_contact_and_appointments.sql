/*
  # Create appointments table — home nursing service

  Schema synchronized with live DB on 2026-04-29.

  Note: this file replaces an earlier draft that also created a `contact_requests`
  table and used NOT NULL on optional fields. The actual production DB never had
  `contact_requests`, and the optional fields are nullable. This file now mirrors
  the live schema so a fresh `supabase db push` reproduces production exactly.

  ## Table: appointments
  - `id` (uuid, primary key, auto-generated)
  - `patient_name` (text, required)
  - `phone` (text, required)
  - `email` (text, optional — nullable)
  - `service_type` (text, required)
  - `preferred_date` (date, optional — nullable)
  - `preferred_time` (text, optional — nullable, kept for backwards compatibility)
  - `address` (text, required)
  - `notes` (text, optional — nullable)
  - `created_at` (timestamptz, auto-set to now())

  ## Security
  - RLS enabled
  - Single policy `insert_only` allows anonymous inserts (public form submissions)
  - No public read access (admin uses Supabase dashboard / service role)
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text,
  service_type text NOT NULL,
  preferred_date date,
  preferred_time text,
  address text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_only"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);
