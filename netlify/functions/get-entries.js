const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
  const { data, error } = await supabase
    .from('tstest')
    .select('*')
    // .order('created_at', { ascending: false });
	console.log('Data from Supabase:', data); // Add this line to log the data


  if (error) return { statusCode:  500, body: error.message };
  return {
    statusCode:  200,
    body: JSON.stringify(data),
  };
};
