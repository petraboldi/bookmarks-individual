const express = require('express')
const router = express.Router()

const Bookmark = require('../models').Bookmarks

router.get('/', async (req,res)=>{
    const bookmarks = await Bookmark.findAll()
    res.render('./bookmarks',{bookmarks:bookmarks})
})

module.exports = router;