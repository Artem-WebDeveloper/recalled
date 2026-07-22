const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/words`;

export async function getWords() {
  const res = await fetch(url, {
    headers: {
      apikey: import.meta.env.VITE_SUPABASE_API_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
    },
  });
  const data = await res.json();

  console.log(data);
}

export async function addWord(word: {
  word: string;
  translation: string;
  examples: { en: string; ru: string }[];
}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: import.meta.env.VITE_SUPABASE_API_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(word),
  });

  const data = await res.json();

  console.log(data);
}
