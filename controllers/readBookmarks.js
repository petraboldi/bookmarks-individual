const express = require('express')
const router = express.Router()

const Bookmarks = require('../models').Bookmarks

router.get('/', async(req,res)=>{
    const bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks',{bookmarks:bookmarks})
})
router.get('/:bookmarkId/edit', async(req,res)=>{
    const bookmark =  await Bookmarks.findOne({where: { id:req.params.bookmarkId}})
    res.render('./edit', {bookmark:bookmark})
})

router.post('/', async (req,res)=>{
    let bookmarks = await Bookmarks.create({url: req.body.url})
    bookmarks = await Bookmarks.create({comment: req.body.comment})
    bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks', {bookmarks: bookmarks})
})


router.delete('/:bookmarkId', async(req,res)=>{
    let bookmarks = await Bookmarks.destroy({where:{id:req.params.bookmarkId}})
    bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks', {bookmarks: bookmarks})
})


router.put('/:bookmarkId', async(req,res)=>{
   await Bookmarks.update({url:req.body.updatedUrl},{where:{id:req.params.bookmarkId}})
     const bookmarks = await Bookmarks.findAll()
    res.render('./bookmarks', {bookmarks: bookmarks})
})

module.exports = router;