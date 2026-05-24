/* ========================================================
   🎬 DATABASE FILM - HORRORFLIX
   ✏️ CARA TAMBAH FILM BARU:
   1. Copy template di bawah (dari { sampai },)
   2. Paste tepat di atas baris penutup:  ];
   3. Isi data sesuai film kamu
   ======================================================== */

const MOVIES = [

    // === TEMPLATE TAMBAH FILM (COPY DARI SINI) ===
    {
        id: 1,
        judul: "Janur Ireng: Sewu Dino the Prequel",
        tahun: 2025,
        rating: "⭐ 6.1",
        durasi: "134 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://www.themoviedb.org/t/p/w1280/f0bnWrwAmx7su492TxIcpBmdfVv.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1066_and_h600_face/aKpCYwibh3QVnXOoPiNQHosggt2.jpg",
        deskripsi: "Janur Ireng adalah sebuah film horor Indonesia tahun 2025 yang disutradarai oleh Kimo Stamboel. Film tersebut merupakan prekuel dari film Sewu Dino yang juga diadaptasi dari utas viral karya SimpleMan",
        sinopsis: "Sabdo dan Intan hidup bahagia meskipun miskin secara materi, tetapi tragedi menimpa mereka ketika rumah orang tua mereka hangus terbakar. Dalam kebingungan mereka tentang tempat tinggal, mereka didekati oleh Arjo Kuncoro, seorang pria yang mengaku sebagai paman mereka—seorang pedagang kaya yang memiliki segalanya. Mereka dibawa ke rumah keluarga Kuncoro, tetapi ternyata Arjo memiliki rencana jahat untuk mengeksploitasi mereka berdua.",
        trailerUrl: "https://youtu.be/Fb2N0CVc9sQ?si=jBJ67DB2RCzNWv_v",
        videoUrl: "https://www.bilibili.tv/id/video/4799415255309312?bstar_from=bstar-web.homepage.recommend.all"
    },
    // === AKHIR TEMPLATE (SAMPAI SINI) ===

    {
        id: 2,
        judul: "Dia Bukan Ibu.",
        tahun: 2025,
        rating: "⭐ 6.1",
        durasi: "119 min",
        kategori: "psikologis",
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/52N5rBuHGGUR7MDfMoEb1PH9Ddo.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1066_and_h600_face/lDXfA44dV324HBYaxcsbPKDR2mO.jpg",
        deskripsi: "Dia Bukan Ibu adalah sebuah film horor Indonesia tahun 2025 yang disutradarai oleh Randolph Zaini dan ditulis oleh Titien Wattimena, Randolph Zaini dan Beta Inggrid Ayu Ningtyas, berdasarkan sebuah thread viral karya Jeropoint di X.",
        sinopsis: "Setelah kematian ayahnya, ibu Vira mengalami gangguan mental. Untuk memulai hidup baru, keluarga tersebut pindah ke kota baru dan membuka salon rambut bersama. Saat keluarga tersebut berusaha menyesuaikan diri dengan kehidupan baru mereka, ibu Vira, Yanti, mulai menunjukkan perilaku aneh dan kasar yang mengingatkan pada gangguan mentalnya dan menjadi sangat terobsesi dengan kehidupan seksual putranya. Vira mulai menyelidiki kejadian-kejadian aneh tersebut dan menemukan bahwa ritual berbahaya dan kerasukan setan hanyalah puncak gunung es.",
        trailerUrl: "https://youtu.be/qKt7XFeSmRs?si=GSxGyej_3XBl74KR",
        videoUrl: "https://www.bilibili.tv/id/video/4798604181116928?bstar_from=bstar-web.ugc-video-detail.playlist.all"
    },

    {
        id: 3,
        judul: "Keramat",
        tahun: 2009,
        rating: "⭐ 6.8",
        durasi: "123 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/g0aWd2Nsbe7fdrsj9TjzitCF24a.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/nP5KtRVQDUoQMSkZJGaxpR9nmNn.jpg",
        deskripsi: "Sebuah tim produksi film, berangkat dari Jakarta ke daerah Bantul Yogyakarta dalam rangka persiapan shooting film. Mereka membawa style kota besar, memasuki daerah yang disucikan dan keramat. Mengusik tabu, sehingga kejadian demi kejadian aneh mereka alami, sampai ke titik dimana calon pemeran utama wanita dirasuki roh halus, hingga hilang tanpa jejak.",
        sinopsis: "Sekelompok pembuat film muda dari Jakarta tiba di Bantul, Yogyakarta untuk mempersiapkan pengambilan gambar. Semuanya berjalan normal hingga hari kedua ketika mereka mulai mengalami fenomena yang tidak dapat dijelaskan.",
        trailerUrl: " ",
        videoUrl: "https://www.bilibili.tv/id/video/2008942795?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 4,
        judul: "Keramat 2: Caruban Larang",
        tahun: 2022,
        rating: "⭐ 6.1",
        durasi: "131 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/A8dWcUw0clsWARfUn6x8xzQbPKU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/5FlYu17fSSR59rn33xZEB0UBqas.jpg",
        deskripsi: "Keramat 2: Caruban Larang (2022) adalah film horor mokumenter (found footage) Indonesia garapan sutradara Monty Tiwa yang menjadi sekuel dari film Keramat (2009). Film ini memadukan atmosfer mencekam dengan sentuhan komedi natural khas generasi muda",
        sinopsis: "Sekelompok anak muda dari Jakarta berangkat ke Cirebon dengan tujuan berbeda. Arla, Jojo, dan Maura ingin melakukan riset untuk tugas akhir mereka, yang dibantu oleh seorang pembuat film dokumenter bernama Umay. Sementara itu, Ajil dan Keanu adalah YouTuber horor yang membuat konten untuk mempertahankan hidup mereka. Perjalanan mereka menjadi liar dan tak terkendali setelah bertemu Ute, seorang anak indigo yang memiliki agenda rahasia.",
        trailerUrl: "https://youtu.be/Zk5x99UyR5M?si=Bulq5AySnJkA-cBy",
        videoUrl: "https://www.bilibili.tv/id/video/4796615149622784?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 5,
        judul: "Pengabdi Setan",
        tahun: 2017,
        rating: "⭐ 6.5",
        durasi: "146 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/xTWgncjZOrMmSjaEwA3DLOxaqf0.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1066_and_h600_face/5PD7GeOq9Npk7wz7QPz1MoK09Mh.jpg",
        deskripsi: "Film Pengabdi Setan secara garis besar bercerita tentang ancaman dan teror yang dialami sebuah keluarga akibat perjanjian gaib dengan sekte pemuja setan. Sang ibu yang sakit-sakitan awalnya melakukan ritual terlarang demi mendapatkan keturunan dan kekayaan, yang berujung pada malapetaka setelah ia meninggal dunia.",
        sinopsis: "Setelah sakit aneh selama tiga tahun, Ibu akhirnya meninggal dunia. Bapak lalu memutuskan untuk bekerja di luar kota meninggalkan anak-anak. Tak lama kemudian, anak-anak merasa bahwa Ibu kembali berada di rumah. Situasi menjadi mencekam ketika mereka mengetahui bahwa Ibu datang bukan sekadar untuk menjenguk, melainkan untuk menjemput mereka.",
        trailerUrl: "https://youtu.be/0hSptYxWB3E?si=OFLh_5x7NVxKIrE2",
        videoUrl: "https://www.bilibili.tv/id/video/2044191831?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 6,
        judul: "Pengabdi Setan 2: Communion",
        tahun: 2022,
        rating: "⭐ 6.7",
        durasi: "118 min",
        kategori: "supernatural, slasher",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/59QlVZJZI29CdFHxQIJRUS66FWT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/eW7k7XvPb1f39cdMR4mxrOLTlEq.jpg",
        deskripsi: "film horor Indonesia karya Joko Anwar yang melanjutkan kisah keluarga Bapak. Setelah selamat dari teror di rumah lama, mereka pindah ke rumah susun (rusun). Mereka percaya rusun akan lebih aman karena banyak penghuni, namun ternyata ancaman sekte pemuja setan dan sosok Ibu jauh lebih berbahaya dan mengintai di antara para tetangga",
        sinopsis: "Beberapa tahun setelah berhasil menyelamatkan diri dari kejadian mengerikan yang membuat mereka kehilangan ibu dan si bungsu Ian, Rini dan adik-adiknya, Toni dan Bondi, serta Bapak tinggal di rumah susun karena percaya tinggal di rumah susun aman jika terjadi sesuatu karena ada banyak orang. Namun, mereka segera menyadari bahwa tinggal bersama banyak orang mungkin juga sangat berbahaya, jika mereka tidak sangat mengenali siapa saja yang menjadi tetangga mereka. Pada sebuah malam penuh teror, Rini dan Keluarganya harus kembali menyelamatkan diri. Tapi kali ini, mungkin sudah terlambat untuk lari.",
        trailerUrl: "https://youtu.be/8LIHcd7WfWI?si=y5NWD-os31Bzb5fd",
        videoUrl: "https://www.bilibili.tv/id/video/2048779003?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 7,
        judul: "Sebelum Iblis Menjemput",
        tahun: 2018,
        rating: "⭐ 5.9",
        durasi: "110 min",
        kategori: "demon",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/hnSkCSVvqAxnCTY5jGnRPOOS1yc.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/aJvn6fVHLdfoEoMWw7IsnsoutIr.jpg",
        deskripsi: "film horor thriller Indonesia yang dirilis pada Agustus 2018, disutradarai oleh Timo Tjahjanto. Film ini mengikuti kisah kelam Alfie (Chelsea Islan) yang menyelidiki masa lalu ayahnya dan harus menghadapi teror mematikan akibat perjanjian gaib dengan iblis",
        sinopsis: "Ketika ayahnya yang terasing jatuh ke dalam koma misterius, seorang wanita muda mencari jawaban di vila lamanya, di mana dia dan saudara tirinya mengungkap kebenaran yang kelam.",
        trailerUrl: "https://youtu.be/BVxLzUwAOPI?si=l20Xkf49iTQLa9lZ",
        videoUrl: "https://www.bilibili.tv/id/video/2043731366?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 8,
        judul: "Sebelum Iblis Menjemput: Ayat 2",
        tahun: 2020,
        rating: "⭐ 6.0",
        durasi: "109 min",
        kategori: "demon",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/hqLQJ3ee8yKRoQbMPQT11JhlYCe.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/jqUTROL3MnUUY0qwU95gBsSTVRP.jpg",
        deskripsi: "Berlatar dua tahun setelah kejadian film pertama, sekuel ini melanjutkan kisah Alfie (Chelsea Islan) dan adik tirinya, Nara, yang harus menghadapi teror iblis jauh lebih kelam dari sosok kegelapan yang bangkit untuk merenggut nyawa mereka",
        sinopsis: "Setelah lolos dari teror sebelumnya, Alfie dihantui oleh bayangan dan mimpi buruk. Masalah semakin memuncak saat sekelompok anak muda dari panti asuhan masa lalu yang kelam, tempat ayah asuh mereka ternyata seorang pemuja iblis, juga menjadi target entitas haus darah.",
        trailerUrl: "https://youtu.be/yCQNva20XTM?si=eAgN4nYqfP54D-xW",
        videoUrl: "https://www.bilibili.tv/id/video/2048056242?bstar_from=bstar-web.homepage.recommend.all"
    },



];