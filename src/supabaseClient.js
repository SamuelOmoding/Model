const SUPABASE_URL     = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
```

**Create `.env` in your project root:**
```
VITE_SUPABASE_URL=https://tsiuypvodwlsaeyrbxsq.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzaXV5cHZvZHdsc2FleXJieHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzAzNzUsImV4cCI6MjA4ODgwNjM3NX0.e7ZbHu6M3Kz2RY6dbHKseEdFxkaQfA-zvM5Gmj1JNhM
```

**Add to `.gitignore`:**
```
.env