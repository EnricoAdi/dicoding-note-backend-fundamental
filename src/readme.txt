Untuk caching -> memurai
buka powershell, ketik memurai-cli (untuk akses cli), lalu ping

untuk nyimpan data di redis
SET <key> <value> [EX expirationInSecond | PX expirationInMilliseconds]
contoh
SET name "enrico"
SET name "enrico" EX 30  --untuk kadaluarsa 30 detik


untuk ambil data 
GET <key>

(nil) artinya null

untuk hapus pakai DEL
DEL <key>
nanti dia return berapa banyak key yang berhasil dihapus


Caching akan dilakukan terutama pada query yang berat(cth pake join). Setiap ada perubahan data (post, put, delete) maka cache akan di delete