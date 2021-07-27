// untuk melakukan import dari module
// const os = require('os');
// console.log('Memory tersedia: ', os.freemem());

// untuk melakukan import module dari file .js lain >> hitungLuas.js
// cara 1
// const { luasSegitiga, luasPersegiPanjang } = require('./hitungLuas');
// cara 2
// const luasSegitiga = require('./hitungLuas').luasSegitiga;
// const luasPersegiPanjang = require('./hitungLuas').luasPersegiPanjang;
// console.log('Luas segitiga adalah: ', luasSegitiga(8, 10));
// console.log('Luas persegi panjang adalah: ', luasPersegiPanjang(8, 10));

// Read File Sync, membaca isi file text.txt
// const fs = require('fs');
// const isi = fs.readFileSync('./text.txt', 'utf-8');
// console.log('Nama saya: ', isi);
// output>> Nama saya: Tommy Aji Prabowo

// Write File Sync, menulis ke dalam file test.txt
// const fs = require('fs');
// fs.writeFileSync('./test.txt', 'I love Me');

// menampilkan data dari person.json
// const fs = require('./person.json');
// console.log(fs);
// output>> { name: 'Sabrina', age: 22, address: 'BSD' }