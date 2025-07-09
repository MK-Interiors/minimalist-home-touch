import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL.startsWith("https://")
  ? import.meta.env.VITE_SUPABASE_URL
  : `https://${import.meta.env.VITE_SUPABASE_URL}.supabase.co`;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
