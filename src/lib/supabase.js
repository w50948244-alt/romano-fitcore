import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oaglzyhwyybuihwuxjiw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hZ2x6eWh3eXlidWlod3V4aml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjI4MjIsImV4cCI6MjA5ODQ5ODgyMn0.XqUDylEMz974XDAIp-DVLd9oSVTXk-xlIrL5RMvpKV0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)