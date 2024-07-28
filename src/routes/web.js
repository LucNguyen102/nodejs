const express =require('express');
const { getHomepage, getabc, getLucNguyen } = require('../controllers/homeController');
const router = express.Router();
// Các route cơ bản
router.get('/', getHomepage);
  
router.get('/abc', getabc);
  
router.get('/LucNguyen', getLucNguyen);

module.exports = router;