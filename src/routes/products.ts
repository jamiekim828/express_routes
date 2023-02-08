import { Router, Request, Response } from 'express';

const router = Router();

const products = [
  { id: 1, name: 'shirt' },
  { id: 2, name: 'pants' },
  { id: 3, name: 'bag' },
  { id: 4, name: 'shoes' },
];

// get method
router.get('/', (req: Request, res: Response) => {
  res.status(200).json(products);
});

// post method
router.post('/:id', (req: Request, res: Response) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(200).json(products);
});

// put method
router.put('/:id', (req: Request, res: Response) => {
  const editProduct = req.body;
  const index = products.findIndex((product) => product.id === editProduct.id);
  if (index !== -1) {
    products[index] = editProduct;
    res.status(200).json(products);
  } else {
    res.json('cant find the product by this id');
  }
});

// delete method
router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  const newProductArray = products.filter(
    (product) => product.id.toString() !== id
  );
  res.status(200).json(newProductArray);
});

export default router;
