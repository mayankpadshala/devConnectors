const express = require('express');

const router = express.Router();

//@route GET api/users/test
//@desc Test Users route
//@access Public
router.get('/test', (res, req) => {
    res.json({msg: "User works!"})
})

module.exports = router;