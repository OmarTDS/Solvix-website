import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xgadpsudjrlgrvhofqkd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnYWRwc3VkanJsZ3J2aG9mcWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MzM4MDIsImV4cCI6MjA5MDMwOTgwMn0.ZkjHb1XNa7Svt_sngzVT_uG7KFshoNAOpVV_D-xWJTA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
