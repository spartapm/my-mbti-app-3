import { createClient } from "@supabase/supabase-js";

// docs/supabase-info.md 에 기재된 프로젝트 자격 증명 (publishable key는 RLS로 보호되는 공개 키입니다)
const SUPABASE_URL = "https://bqsatdrelqzlwchkzruy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_b_0WRiL78ORqgVnvAJ1IFw_R85-GK-3";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const RESULTS_TABLE = "mbti_results";
