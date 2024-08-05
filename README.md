
# wbdv yh

## **EmpTracky** 
EmpTracky, sebuah website employee tracker yang dirancangdengan tujuan untuk mempermudah manager/administrator dalam mengelola karyawannya. Untuk menggunakan EmpTracky pengguna diharapkan untuk mendaftarkan account terlebih dahulu, dan data employee yang muncul adalah data yang telah dimasukkan oleh pengguna di halaman add employee page pada account tersebut.

## **Landing Page**
- Pada landing page pengguna dapat mendaftarkan dirinya sebagai administrator/manager dengan menekan toogle Sign Up, setelah menekan tombol Sign Up Pengguna akan diarahkan menuju Register page. 
- Apabila pengguna sudah pernah melakukan pendaftaran maka pengguna dapat masuk ke halaman website dengan menekan toogle Sign In, setelah menekan tombol Sign In pengguna akan diarahkan menuju login page
- Pengguna juga dapat melihat logo, nama dan tagline website kami pada halaman Landing Page

## **Register Page**
- Pada register page pengguna diharuskan untuk mengisi username yang diinginkan, email, password, dan confirm password  untuk membuat akun
- Setelah selesai memasukkan data yang diperlukan pengguna akan diarahkan ke login page
- Apabila pengguna sudah mempunyai akun, pengguna dapat menekan toogle login here pada text "Already have an account? Login here." Nantinya pengguna akan diarahkan kembali ke login page.

## **Login Page**
- Pada Login page pengguna dapat memasukkan username dan password yang telah dibuat pada register page, dengan menekan toogle sign in pengguna akan diarahkan ke page selanjutnya yaitu Home page.
- Apabila pengguna belum mempunyai akun, pengguna dapat menekan toogle register here pada text "Don't have an account? Register here." Nantinya pengguna akan diarahkan kembali ke Register page.

## **Dashboard**
- Dashboard dibuat untuk mempermudah navigasi pengguna ke halaman website yang diinginkan, pada dashboard terdapat empat button yang apabila ditekan akan mengarahkan pengguna ke halaman website yang diinginkan.
- Empat button tersebuit adalah My Info, Home, Add Employee dan Sign Out.

## **Home Page**
- Terdapat search bar dibagian atas yang dapat mencari nama dari karyawan berdasarkan huruf yang dimasukkan 
- Terdapat tombol add employee di sebelah kiri search bar
- Bagian bawah kanan search bar terdapat fitur sortir yang dapat mengurutkan berdasarkan nama, divisi, dan tahun masa habis jabatan dari huruf paling awal dan angka paling kecil

## **My Info Page**
- Berisi data-data dari user. Terdapat toggle eye yang berfungsi untuk menyembunyika dan membuka data User
- Tombol edit profile yang jika ditekan akan memunculkan pop up untuk mengedit tanggal lahir, nama perusahaan, divisi, jabatan, nomor HP, dan jenis kelamin 
- Gambar pada My Info Page akan berubah tergantung dari jenis kelamin yang dimasukkan

## **Employee Info Page**
- Pengguna akan diarahkan menuju employee info page saat pengguna menekan salah satu nama dari employee yang berada di homepage
- Setelah menekan nama salah satu karyawan pengguna dapat melihat kembali informasi terkait employee tersebut, yang telah di daftarkan melalui add employee page 
- Pengguna juga dapat memilih untuk mengubah informasi employee dan menghapus employee.

## **Add Employee Page**
- setelah menekan tombol add employee, pengguna akan mengisi informasi yang diperlukan untuk mendaftarkan employee yang baru.

## **Eror Page**
- pengguna akan diarahkan ke error page apabila terdapat kesalahan dalam pengetikan domain website

## **Fitur Tambahan**
- Apabila username dan/atau password yang dimasukkan salah akan muncul pemeberitahuan kepada pengguna.
- Apabila pengguna Sign In ke website maka cookies akan muncul, dan akan hilang setelah pengguna Sign out
- setiap input field digunakan method .trim() untuk mencegah data yang masuk ke database memiliki spasi di awal/akhir kata
- input field yg tipenya number dilimit minimalnya dari 0 biar user gabisa input -, selain dilimit, kboard minusnya juga di apa yak nmnya pkonya ga difungsiin
