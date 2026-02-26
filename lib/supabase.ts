import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wxdwpnuxxcpsfgjfmxax.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZHdwbnV4eGNwc2ZnamZteGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY3NTUwNywiZXhwIjoyMDg3MjUxNTA3fQ.CumPpLi_-YGK6CzOXMELc6bA9LlG0flKHh_wLrdnHJw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export type Lawyer = {
    id: string;
    name: string;
    bezoekadres: string | null;
    rechtsgebieden: string | null;
    telefoon: string | null;
    email: string | null;
    website: string | null;
    arrondissement: string | null;
    profile_url: string | null;
    foto_url: string | null;
    bio_text: string | null;
    extra_specializations: string | null;
    lawyer_type: string | null;
};
