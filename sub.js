// name: sub.js
// author: @aaronsdevera
// description: listens to all changes to Supabase table named "countries"

// import the Supabase javascript library
import { createClient } from '@supabase/supabase-js'

// Supabase authorization from project settings > api
const SUPABASE_KEY = '<anon_public_key>'
const SUPABASE_URL = '<url>'

// create this table in Supabase before running this example
// schema should have column "name" as type varchar, text
const TABLE = 'countries'

// initialize our Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


// Listen to all changes in table 
try {
  const mySubscription = supabase
  .from(TABLE)
  .on('*', payload => {
    console.log(payload)
  })
  .subscribe()
} catch (e) {
  console.log(`[!] Error: ${e}`)
}

