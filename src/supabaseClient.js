// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://tsiuypvodwlsaeyrbxsq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzaXV5cHZvZHdsc2FleXJieHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzAzNzUsImV4cCI6MjA4ODgwNjM3NX0.e7ZbHu6M3Kz2RY6dbHKseEdFxkaQfA-zvM5Gmj1JNhM'
)