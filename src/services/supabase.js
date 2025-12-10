import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://othllpnxxlxumjssnxdg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aGxscG54eGx4dW1qc3NueGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTQ0NzgsImV4cCI6MjA3ODA5MDQ3OH0.2D-DHD5uGq6WmeTrCMQTxYMKI9LVwzewol5h1H06Tb0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
