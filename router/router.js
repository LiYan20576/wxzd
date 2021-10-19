const express = require('express')
const router = express.Router()
const Pro = require('../models/product')
const Serve = require('../models/serve')
const About = require('../models/about')
router.get('/product', (req, res) => {
    Pro.find()
        .then(function (data) {
            // console.log(data)
            res.render('product.html', { pro: data })
        })

})
router.get('/product/:id', (req, res) => {
    var id = req.params["id"];
    Pro.findById(id)
        .then(function (data1) {
            var num = data1.class
            // console.log(num)
            Pro.where({ class: num })
                .then(function (data2) {
                    var a = data2.length >= 3 ? 3 : data2.length
                    var data = new Array
                    for (var i = 0; i < a; i++) {
                        var Rand = Math.floor(Math.random() * (data2.length - i));
                        data[i] = data2[Rand]
                        data2.splice(Rand, 1)
                    }
                    res.render('pro.html', { pro: data1, about: data })
                })
        })
})
router.get('/index', async(req, res) => {
    var result = await About.find()
    Pro.find()
    .then(function (data) {
        res.render('index.html', { about: result,pro:data })
    })
})
router.get('/about', async(req, res) => {
    var result = await About.find()

    res.render('about.html', { about: result })
})
router.get('/about', (req, res) => {
    res.render('about.html')
})
router.get('/call', (req, res) => {
    res.render('call.html')
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
    Serve.find({page:'1'})
        .then(function (data) {
            // console.log(data)
            res.render('fwal.html', { serve: data ,page:'1'})
        })

})
router.get('/fwal/:id', (req, res) => {
    var id = req.params["id"];
    Serve.find({page:id})
        .then(function (data) {
            // console.log(data)
            res.render('fwal.html', { serve: data ,page:id})
        })

})

module.exports = router;