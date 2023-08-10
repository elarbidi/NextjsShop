import getData from '@/logic/getData';

export default async function GET(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const products = await getData();
      const product = products.find((item) => item.id === Number(id));
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error('Error reading the file:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
