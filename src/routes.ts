import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'caiovmborba@gmail.com',
    password: '123',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return res.json({ message: 'Hello World!' });
}
