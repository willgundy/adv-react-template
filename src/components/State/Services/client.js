import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rbbzxmskagprovqccrmk.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_CLIENT_API_KEY;
export const client = createClient(SUPABASE_URL, SUPABASE_KEY);

