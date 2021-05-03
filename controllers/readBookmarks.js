const express = require('express')
const router = express.Router()

const Bookmarks = require('../models').Bookmarks

router.get('/', async(req,res)=>{
    const bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks',{bookmarks:bookmarks})
})

router.post('/', async (req,res)=>{
    let bookmarks = await Bookmarks.create({url: req.body.url})
    bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks', {bookmarks: bookmarks})
})

router.delete('/:bookmarkId', async(req,res)=>{
    let bookmarks = await Bookmarks.destroy({where:{id:req.params.bookmarkId}})
    bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks', {bookmarks: bookmarks})
})

module.exports = router;