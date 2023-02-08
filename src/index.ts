import Express from 'express';

import userRouter from './routes/user';
import productsRouter from './routes/products';

const app = Express();

app.use(Express.json());
app.use('/users', userRouter);
app.use('/products', productsRouter);

// port adress
const port = 8000;
app.listen(port, () => {
  console.log('yes! server is running');
});
