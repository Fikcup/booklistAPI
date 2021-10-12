const router = require('express').Router();
const {
    getAllBookInfo,
    getOneBookInfo,
} = require('../../controllers/bookauthor-controller');

// route /api/bookinfo
router.route('/').get(getAllBookInfo);

// route /api/bookinfo/bookinfoId
router.route('/:bookinfoId').get(getOneBookInfo);

module.exports = router;