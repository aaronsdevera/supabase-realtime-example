# supabase-realtime-example
Code example for using the Supabase realtime feature

1. Install Supabase: `npm install @supabase/supabase-js`
2. Configure the authorization constants in `pub.js` and `sub.js`
3. Run `node sub.js`
4. In a new terminal window, run `node pub.js`

## Getting your authorization tokens
Once you have created a Supabase project, authorization tokens will be generated for you to connect to the Supabase database. 

Go to **Project Settings > API**. The URL is like this: `https://app.supabase.io/project/<project_id>/settings/api`.

You will need the `URL` and the `anon public` API key for the examples in this repo. In `pub.js` and `sub.js` they are cited as `SUPABASE_URL` and `SUPABASE_KEY`, respectively.

## References
- [Installing the Javascript Library](https://supabase.com/docs/reference/javascript/subscribe)
- [Subscribing to realtime events](https://supabase.com/docs/reference/javascript/subscribe)