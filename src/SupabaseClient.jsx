import { createClient } from '@supabase/supabase-js'

const URL = 'https://lbksvmzvtzkrlsrahgjs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxia3N2bXp2dHprcmxzcmFoZ2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY2NTgsImV4cCI6MTk5NjIzMjY1OH0.0ELr_tZan81vo_P3tso2Y5XAZi9iPm9wkFhmdsFb8qk';

export const supabase = createClient(URL, API_KEY);
