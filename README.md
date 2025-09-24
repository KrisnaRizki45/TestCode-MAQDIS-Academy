# MAQDIS Academy Test Projects

Repository ini berisi **3 project test** yang digabung menjadi satu repository.  
Setiap project dapat dijalankan atau dibuild secara **terpisah**.

## Struktur Folder

/test1
/test2-3

## Menjalankan Project

Masuk ke folder project yang diinginkan, install dependencies, lalu jalankan server:

cd test1       # ganti dengan test2-3 atau sesuai kebutuhan
npm install
npm run dev
Build / Production
Untuk membuat build production tiap project:

cd test1
npm run build
Hasil build akan berada di folder default (biasanya build atau dist).
Ulangi langkah ini untuk project lain (test2-3)

Deploy
Untuk deploy, pisahkan tiap project dan build masing-masing folder sebelum deploy.

Catatan
Setiap project independen, memiliki node_modules sendiri.

Pastikan versi Node.js dan npm sesuai tiap project.
