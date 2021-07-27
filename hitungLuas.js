function luasSegitiga(alas, tinggi) {
    return alas * tinggi / 2;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
// cara module.export 1
// module.exports = { luasSegitiga, luasPersegiPanjang };

// cara module.exports 2
module.exports.luasSegitiga = luasSegitiga;
module.exports.luasPersegiPanjang = luasPersegiPanjang;