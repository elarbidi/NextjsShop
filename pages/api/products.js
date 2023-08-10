import getData from '@/logic/getData';

export default async function GET (req, res) {
try {
    const products = await getData();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error reading the file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
