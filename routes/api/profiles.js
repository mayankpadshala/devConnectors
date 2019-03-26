const express = require('express');

const router = express.Router();

//@route GET api/profiles/test
//@desc Test Profiles route
//@access Public
router.get('/test', (res, req) => {
    res.json({msg: "Profile works!"})
})

module.exports = router;