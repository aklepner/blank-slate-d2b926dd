import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    let url = import.meta.env.VITE_SUPABASE_URL as string;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
    if (!url || !key) {
      throw new Error("Supabase environment variables are not configured.");
    }
    const dashboardMatch = url.match(/supabase\.com\/dashboard\/project\/([a-z0-9]+)/i);
    if (dashboardMatch) {
      url = `https://${dashboardMatch[1]}.supabase.co`;
    }
    _client = createClient(url, key);
  }
  return _client;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as any)[prop];
  },
});

export interface Vendor {
  id: string;
  title: string;
  description: string;
  logo: string | null;
  website: string | null;
  offerTitle: string | null;
  offerDescription: string | null;
  calendarLink: string | null;
  showCalendarLink: boolean;
  coupon: string | null;
  showCoupon: boolean;
  discount: string | null;
  showDiscount: boolean;
  pricingLink: string | null;
  showPricingLink: boolean;
  categoryIds: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author: string | null;
  published_at: string;
  created_at: string;
  published: boolean;
}
