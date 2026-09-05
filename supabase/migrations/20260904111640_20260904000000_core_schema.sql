CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'super_admin')) DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.current_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('EVENT', 'COLLABORATION', 'ANNOUNCEMENT', 'ACHIEVEMENT', 'COMMUNITY', 'INITIATIVE')),
  poster_url TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  date TEXT,
  status TEXT NOT NULL CHECK (status IN ('UPCOMING', 'LIVE NOW', 'NEW', 'COMING SOON', 'IN DISCUSSION', 'COMPLETED')),
  link TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.moments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  date TEXT,
  link TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.collaborations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  date TEXT,
  status TEXT NOT NULL CHECK (status IN ('ACTIVE', 'IN DISCUSSION', 'UPCOMING', 'COMPLETED')),
  link TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  type TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  start_date DATE,
  end_date DATE,
  status TEXT NOT NULL CHECK (status IN ('UPCOMING', 'ACTIVE', 'ONGOING', 'COMPLETED', 'CLOSED')),
  registration_link TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.initiatives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  date TEXT,
  status TEXT NOT NULL CHECK (status IN ('UPCOMING', 'ONGOING', 'COMPLETED')),
  link TEXT NOT NULL DEFAULT '',
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  project_details TEXT,
  status TEXT NOT NULL CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')) DEFAULT 'NEW',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT NOT NULL CHECK (category IN ('Business / Project', 'Community Collaboration', 'Hackathon / Event', 'General Enquiry')),
  message TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('NEW', 'READ', 'REPLIED', 'ARCHIVED')) DEFAULT 'NEW',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.is_authenticated_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admins a
    WHERE a.id = auth.uid()
      AND a.role IN ('admin', 'super_admin')
  );
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admins a
    WHERE a.id = auth.uid()
      AND a.role = 'super_admin'
  );
$$;

ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.current_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.moments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.initiatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admins_select_own_profile_or_super_admin"
ON public.admins
FOR SELECT
USING (auth.uid() = id OR public.is_super_admin());

CREATE POLICY "admins_insert_super_admin_only"
ON public.admins
FOR INSERT
WITH CHECK (public.is_super_admin());

CREATE POLICY "admins_update_super_admin_or_self"
ON public.admins
FOR UPDATE
USING (public.is_super_admin() OR auth.uid() = id)
WITH CHECK (public.is_super_admin() OR auth.uid() = id);

CREATE POLICY "admins_delete_super_admin_only"
ON public.admins
FOR DELETE
USING (public.is_super_admin());

CREATE POLICY "public_current_updates_read"
ON public.current_updates
FOR SELECT
USING (published = true);

CREATE POLICY "public_moments_read"
ON public.moments
FOR SELECT
USING (published = true);

CREATE POLICY "public_collaborations_read"
ON public.collaborations
FOR SELECT
USING (published = true);

CREATE POLICY "public_challenges_read"
ON public.challenges
FOR SELECT
USING (published = true);

CREATE POLICY "public_initiatives_read"
ON public.initiatives
FOR SELECT
USING (published = true);

CREATE POLICY "admin_manage_current_updates"
ON public.current_updates
FOR ALL
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "admin_manage_moments"
ON public.moments
FOR ALL
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "admin_manage_collaborations"
ON public.collaborations
FOR ALL
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "admin_manage_challenges"
ON public.challenges
FOR ALL
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "admin_manage_initiatives"
ON public.initiatives
FOR ALL
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "service_requests_admin_read"
ON public.service_requests
FOR SELECT
USING (public.is_authenticated_admin());

CREATE POLICY "service_requests_admin_update"
ON public.service_requests
FOR UPDATE
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "service_requests_admin_delete"
ON public.service_requests
FOR DELETE
USING (public.is_authenticated_admin());

CREATE POLICY "service_requests_public_insert"
ON public.service_requests
FOR INSERT
WITH CHECK (true);

CREATE POLICY "contact_messages_admin_read"
ON public.contact_messages
FOR SELECT
USING (public.is_authenticated_admin());

CREATE POLICY "contact_messages_admin_update"
ON public.contact_messages
FOR UPDATE
USING (public.is_authenticated_admin())
WITH CHECK (public.is_authenticated_admin());

CREATE POLICY "contact_messages_admin_delete"
ON public.contact_messages
FOR DELETE
USING (public.is_authenticated_admin());

CREATE POLICY "contact_messages_public_insert"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_current_updates_published_order
ON public.current_updates (published, display_order);

CREATE INDEX IF NOT EXISTS idx_moments_published_order
ON public.moments (published, display_order);

CREATE INDEX IF NOT EXISTS idx_collaborations_published_status
ON public.collaborations (published, status);

CREATE INDEX IF NOT EXISTS idx_challenges_published_featured
ON public.challenges (published, featured, start_date);

CREATE INDEX IF NOT EXISTS idx_initiatives_published_featured_order
ON public.initiatives (published, featured, display_order);

CREATE INDEX IF NOT EXISTS idx_service_requests_status_created
ON public.service_requests (status, created_at);

CREATE INDEX IF NOT EXISTS idx_contact_messages_status_created
ON public.contact_messages (status, created_at);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_admins_updated_at') THEN
    CREATE TRIGGER update_admins_updated_at
    BEFORE UPDATE ON public.admins
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_current_updates_updated_at') THEN
    CREATE TRIGGER update_current_updates_updated_at
    BEFORE UPDATE ON public.current_updates
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_moments_updated_at') THEN
    CREATE TRIGGER update_moments_updated_at
    BEFORE UPDATE ON public.moments
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_collaborations_updated_at') THEN
    CREATE TRIGGER update_collaborations_updated_at
    BEFORE UPDATE ON public.collaborations
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_challenges_updated_at') THEN
    CREATE TRIGGER update_challenges_updated_at
    BEFORE UPDATE ON public.challenges
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_initiatives_updated_at') THEN
    CREATE TRIGGER update_initiatives_updated_at
    BEFORE UPDATE ON public.initiatives
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_service_requests_updated_at') THEN
    CREATE TRIGGER update_service_requests_updated_at
    BEFORE UPDATE ON public.service_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_contact_messages_updated_at') THEN
    CREATE TRIGGER update_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('current-updates', 'current-updates', false, 52428800, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'application/pdf'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('moments', 'moments', false, 52428800, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('collaborations', 'collaborations', false, 52428800, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('challenges', 'challenges', false, 52428800, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('initiatives', 'initiatives', false, 52428800, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "admin_manage_current_updates_bucket"
ON storage.objects
FOR ALL
USING (bucket_id = 'current-updates' AND public.is_authenticated_admin())
WITH CHECK (bucket_id = 'current-updates' AND public.is_authenticated_admin());

CREATE POLICY "admin_manage_moments_bucket"
ON storage.objects
FOR ALL
USING (bucket_id = 'moments' AND public.is_authenticated_admin())
WITH CHECK (bucket_id = 'moments' AND public.is_authenticated_admin());

CREATE POLICY "admin_manage_collaborations_bucket"
ON storage.objects
FOR ALL
USING (bucket_id = 'collaborations' AND public.is_authenticated_admin())
WITH CHECK (bucket_id = 'collaborations' AND public.is_authenticated_admin());

CREATE POLICY "admin_manage_challenges_bucket"
ON storage.objects
FOR ALL
USING (bucket_id = 'challenges' AND public.is_authenticated_admin())
WITH CHECK (bucket_id = 'challenges' AND public.is_authenticated_admin());

CREATE POLICY "admin_manage_initiatives_bucket"
ON storage.objects
FOR ALL
USING (bucket_id = 'initiatives' AND public.is_authenticated_admin())
WITH CHECK (bucket_id = 'initiatives' AND public.is_authenticated_admin());
