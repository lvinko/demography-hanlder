import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello! I am in vercel.com');
});

app.get('/api/v1/users', (req: Request, res: Response) => {
  res.json({ users: ['user1', 'user2', 'user3'] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});