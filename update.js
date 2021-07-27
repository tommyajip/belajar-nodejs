const { Article } = require('./models')

const query = {
    where: { id: 1 }
}

Artcles.update({
    approved: false
}, query).then(() => {
    console.log('Artikel berhasil diupdate')
    process.exit()
}).catch(err => {
    console.log("Gagal update data");
})