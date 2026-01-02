import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/controllers/CategoryController.js';
import ProductsController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserControler.js';
import multerConfig from './config/multer.cjs';
import adminMiddleware from './app/middlewares/admin.js';
import authMiddleware from './app/middlewares/auth.js';
import OrderController from './app/controllers/OrderController.js';

import CreatePaymentIntentControlller from './app/controllers/stripe/CreatePaymentIntentController.js';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductsController.store,
);
routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductsController.update,
);
routes.get('/products', ProductsController.index);

routes.post(
  '/categories',
  adminMiddleware,
  upload.single('file'),
  CategoryController.store,
);
routes.put(
  '/categories/:id',
  adminMiddleware,
  upload.single('file'),
  CategoryController.update,
);
routes.get('/categories', CategoryController.index);

/* rotas para o banco de dados MONGODB */

routes.post('/orders', OrderController.store);

/* rotas de status do pedido */
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', adminMiddleware, OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntentControlller.store);

export default routes;
