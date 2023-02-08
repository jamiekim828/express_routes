import { Router, Request, Response } from 'express';

const router = Router();

const users = [
  { id: 1, firstName: 'Jenny' },
  { id: 2, firstName: 'Jisu' },
  { id: 3, firstName: 'Lisa' },
  { id: 4, firstName: 'Rose' },
];

// get method
router.get('/', (req: Request, res: Response) => {
  res.status(200).json(users);
});

// post method
router.post('/:id', (req: Request, res: Response) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(200).json(users);
});

// put method
router.put('/:id', (req: Request, res: Response) => {
  const editUser = req.body;
  const index = users.findIndex((user) => user.id === editUser.id);
  console.log(index);
  if (index !== -1) {
    users[index] = editUser;
    res.status(200).json(users);
  } else {
    res.json('cant find the user by this id');
  }
});

// delete method
router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  const newUserArray = users.filter((user) => user.id.toString() !== id);
  res.status(200).json(newUserArray);
});

export default router;
