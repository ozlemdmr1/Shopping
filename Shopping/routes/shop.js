//kullanıcı sayfaları

const express = require('express');
const router = express.Router();

const shopContoller =require('../controllers/shop');

router.get('/',shopContoller.getIndex);

router.get('/products',shopContoller.getProducts);

router.get('/products/:productid',shopContoller.getProduct);

router.get('/categories/:categoryid',shopContoller.getProductsByCategoryId)

router.get('/cart',shopContoller.getCart);

router.post('/cart',shopContoller.postCart);

router.post('/delete-cartitem',shopContoller.postCartItemDelete);

router.get('/orders',shopContoller.getOrders);

router.post('/create-order',shopContoller.postOrder);
    
module.exports= router;