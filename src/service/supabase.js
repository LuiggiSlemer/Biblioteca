import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://vpltsrxlmpfmahtcsdbc.supabase.co';
const supabaseKey = 'sb_publishable_SwASM7wJYImt6zPyASMRVw_nZPT20E2';
export const supabase = createClient(supabaseUrl, supabaseKey);