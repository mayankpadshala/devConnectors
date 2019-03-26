const express = require('express');

const router = express.Router();

//@route GET api/posts/test
//@desc Test Posts route
//@access Public
router.get('/test', (res, req) => {
    res.json({msg: "Posts works!"})
})

module.exports = router;