import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false },
});

export type EnquiryInput = {
  name: string;
  qualification: string;
  city: string;
  interest: 'training' | 'clinic-setup' | 'both';
  phone?: string;
  email?: string;
  message?: string;
};

export async function submitEnquiry(input: EnquiryInput) {
  const { data, error } = await supabase
    .from('enquiries')
    .insert({
      name: input.name,
      qualification: input.qualification,
      city: input.city,
      interest: input.interest,
      phone: input.phone || null,
      email: input.email || null,
      message: input.message || null,
    })
    .select('id')
    .maybeSingle();
  if (error) throw error;
  return data;
}
