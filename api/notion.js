export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const token = process.env.NOTION_TOKEN;
  if (!token) return res.status(500).json({ error: 'NOTION_TOKEN not set' });
  const path = req.query.path;
  if (!path) return res.status(400).json({ error: 'missing path' });
  const url = `https://api.notion.com/v1/${path}`;
  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: ['POST', 'PATCH'].includes(req.method) ? JSON.stringify(req.body) : undefined,
    });
    const data = await response.json();
    if (!response.ok) console.error('Notion error:', JSON.stringify(data));
    res.status(response.status).json(data);
  } catch (e) {
    console.error('Fetch error:', e.message);
    res.status(500).json({ error: e.message });
  }
}
