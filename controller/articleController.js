const { Article } = require('../models')
const article = require('../models/article')

module.exports = {
    index: (req, res) => {
        Article.findAll({})
            .then(article => {
                if (articles !== 0) {
                    res.json({
                        'status': 200,
                        'message': 'berhasil',
                        'data': articles
                    })
                } else {
                    res.json({
                        'status': 400,
                        'message': 'data tidak ditemukan'
                    })
                }
            })
            .catch(err => {
                res.json({
                    'status': 500,
                    'message': 'kesalahan server'
                })
            })
    },

    // localhost:3000/articles/1
    // localhost:3000 == alamat API
    // articles == endpoint
    // 1 == parameter

    show: (req, res) => {
        Article.findOne({
            where: { id: req.params.id }
        })
            .then(article => {
                res.render('articles/show', {
                    id: article.id,
                    title: article.title,
                    body: article.body
                })
            })
            .catch(err => res.status(404).send('Tidak dapat menemukan artikel'))
    },

    create: (req, res) => {
        const { title, body, approved } = req.body;
        Article.create({
            title,
            body,
            approved
        })
            .then(article => {
                res.redirect(`/articles/ ${article.id}`)
            })
            .catch(err => {
                res.send(`Gagal membuat artikel, karena
${JSON.stringify(err.message, null, 2)}`)
            })
    },

    update: (req, res) => {

    },

    delete: (req, res) => {

    }
}