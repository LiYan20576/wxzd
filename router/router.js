const express = require('express')
const router = express.Router()
const Pro = require('../models/product')
router.get('/product', (req, res) => {
    Pro.find()
        .then(function (data) {
            // console.log(data)
            res.render('product.html', { pro: data })
        })

})

router.get('/index', (req, res) => {
    res.render('index.html')
})
router.get('/about', (req, res) => {
    res.render('about.html')
})
router.get('/call', (req, res) => {
    res.render('call.html')
})
router.get('/pro1', (req, res) => {
    res.render('pro1.html')
})
router.get('/pro2', (req, res) => {
    res.render('pro2.html')
})
router.get('/pro3', (req, res) => {
    res.render('pro3.html')
})
router.get('/pro4', (req, res) => {
    res.render('pro4.html')
})
router.get('/new1', (req, res) => {
    res.render('new1.html')
})
router.get('/new2', (req, res) => {
    res.render('new2.html')
})
router.get('/new3', (req, res) => {
    res.render('new3.html')
})
router.get('/new4', (req, res) => {
    res.render('new4.html')
})
router.get('/news', (req, res) => {
    res.render('news.html')
})
router.get('/equipment', (req, res) => {
    res.render('equipment.html')
})
router.get('/fwal', (req, res) => {
    res.render('fwal.html')
})
router.get('/:id', (req, res) => {
    var id = req.params["id"];
    Pro.findById(id)
        .then(function (data1) {
            var num = data1.class
            // console.log(num)
            Pro.where({ class: num })
                .then(function (data2) {
                    var a = data2.length >= 3 ? 3 : data2.length
                    var data=new Array
                    for(var i=0;i<a;i++){
                        var Rand = Math.floor(Math.random()*(data2.length-i));
                        data[i]=data2[Rand]
                         data2.splice(Rand,1)
                    }
                    res.render('pro.html', { pro: data1, about: data })
                })
        })
})
module.exports = router;