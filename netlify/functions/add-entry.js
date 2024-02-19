const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode:  405, body: 'Method Not Allowed' };
  }

  const { name, message } = JSON.parse(event.body);

  const { data, error } = await supabase
    .from('tstest')
    .insert([{ name, message }]);

  if (error) return { statusCode:  500, body: error.message };
  return {
    statusCode:  200,
    body: JSON.stringify(data),
  };
};
