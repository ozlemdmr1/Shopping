//admin işlemleri

const express=require('express');
const router = express.Router();

const adminContoller=require('../controllers/admin');

router.get('/products',adminContoller.getProducts);

router.get('/add-product',adminContoller.getAddProduct);

router.post('/add-product',adminContoller.postAddProduct);

router.get('/products/:productid',adminContoller.getEditProduct);

router.post('/products',adminContoller.postEditProduct);

router.post('/delete-product',adminContoller.postDeleteProduct)

module.exports=router;