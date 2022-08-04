import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://<username>:<password>@cluster0.xb7hz.mongodb.net/?retryWrites=true&w=majority'
    );

    const db = client.db();

    await db.collection('emails').insertOne({ email: email });

    client.close();

    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
