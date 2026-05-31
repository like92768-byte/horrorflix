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
        videoUrl: "https://www.cineby.sc/movie/1355140?play=true"
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
        judul: "Alas Roban",
        tahun: 2026,
        rating: "⭐ 6.6",
        durasi: "150 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/ihFgCKVnucRZ0blLnrhihISxj8S.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1000_and_h563_face/tTdzpseAzAuOEoRjeLOTBkTcLTH.jpg",
        deskripsi: "kawasan hutan legendaris di Kabupaten Batang, Jawa Tengah. Terkenal sebagai jalur ekstrem, minim penerangan, dan rawan kecelakaan, hutan ini memiliki reputasi mistis yang kuat dan sering dikaitkan dengan kisah-kisah gaib.",
        sinopsis: "Film ini mengikuti perjalanan Sita (Michelle Ziudith), seorang ibu tunggal asal Pekalongan yang mendapat pekerjaan di sebuah rumah sakit di Semarang demi mengubah nasib. Namun, kehidupannya berubah menjadi teror ketika ia dan putrinya, Gendis (Fara Shakila), diincar oleh roh jahat bernama Dewi Raras akibat sebuah perjanjian atau ritual masa lalu yang telah dilupakan.",
        trailerUrl: "https://youtu.be/b23r0XvWW_Q?si=qQB9gYU_OyLuQ8U0",
        videoUrl: "https://www.cineby.sc/movie/1497348?play=true"
    },

    {
        id: 4,
        judul: "Pabrik Gula",
        tahun: 2025,
        rating: "⭐ 5.9",
        durasi: "212 min",
        kategori: ["supernatural", "thriler"],  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/zd0X3QvyoO9qVezlGmXnSdew9A5.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1000_and_h563_face/hbs4hMYkcUsmV95i1z1NncUINWC.jpg",
        deskripsi: "film horor supranatural Indonesia garapan sutradara Awi Suryadi, yang diadaptasi dari kisah viral karya SimpleMan. Film ini mengisahkan teror mistis yang dialami oleh sekelompok buruh musiman di sebuah pabrik gula tua di pedesaan selama masa panen (musim giling tebu).",
        sinopsis: "Cerita bermula pada tahun 2003 di sebuah pabrik gula tua di Jawa Timur. Wati menyusul tunangannya, Hendra, untuk bekerja sebagai buruh musiman demi mengumpulkan modal pernikahan. Di sana, mereka tinggal di loji bersama pekerja lainnya seperti Fadhil, Endah, dan Naning.",
        trailerUrl: "https://youtu.be/nzDT9N1Ud_U?si=9ShRNlLnXIs5RsKr",
        videoUrl: "https://www.cineby.sc/movie/1355126?play=true"
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
        videoUrl: "https://www.cineby.sc/movie/467012?play=true"
    },

    {
        id: 6,
        judul: "Pengabdi Setan 2: Communion",
        tahun: 2022,
        rating: "⭐ 6.7",
        durasi: "118 min",
        kategori: ["supernatural", "thriler"], // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/59QlVZJZI29CdFHxQIJRUS66FWT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/eW7k7XvPb1f39cdMR4mxrOLTlEq.jpg",
        deskripsi: "film horor Indonesia karya Joko Anwar yang melanjutkan kisah keluarga Bapak. Setelah selamat dari teror di rumah lama, mereka pindah ke rumah susun (rusun). Mereka percaya rusun akan lebih aman karena banyak penghuni, namun ternyata ancaman sekte pemuja setan dan sosok Ibu jauh lebih berbahaya dan mengintai di antara para tetangga",
        sinopsis: "Beberapa tahun setelah berhasil menyelamatkan diri dari kejadian mengerikan yang membuat mereka kehilangan ibu dan si bungsu Ian, Rini dan adik-adiknya, Toni dan Bondi, serta Bapak tinggal di rumah susun karena percaya tinggal di rumah susun aman jika terjadi sesuatu karena ada banyak orang. Namun, mereka segera menyadari bahwa tinggal bersama banyak orang mungkin juga sangat berbahaya, jika mereka tidak sangat mengenali siapa saja yang menjadi tetangga mereka. Pada sebuah malam penuh teror, Rini dan Keluarganya harus kembali menyelamatkan diri. Tapi kali ini, mungkin sudah terlambat untuk lari.",
        trailerUrl: "https://youtu.be/8LIHcd7WfWI?si=y5NWD-os31Bzb5fd",
        videoUrl: "https://www.cineby.sc/movie/925786?play=true"
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
        kategori: "demon",  // pilihan: supernatural, thriler, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/hqLQJ3ee8yKRoQbMPQT11JhlYCe.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/jqUTROL3MnUUY0qwU95gBsSTVRP.jpg",
        deskripsi: "Berlatar dua tahun setelah kejadian film pertama, sekuel ini melanjutkan kisah Alfie (Chelsea Islan) dan adik tirinya, Nara, yang harus menghadapi teror iblis jauh lebih kelam dari sosok kegelapan yang bangkit untuk merenggut nyawa mereka",
        sinopsis: "Setelah lolos dari teror sebelumnya, Alfie dihantui oleh bayangan dan mimpi buruk. Masalah semakin memuncak saat sekelompok anak muda dari panti asuhan masa lalu yang kelam, tempat ayah asuh mereka ternyata seorang pemuja iblis, juga menjadi target entitas haus darah.",
        trailerUrl: "https://youtu.be/yCQNva20XTM?si=eAgN4nYqfP54D-xW",
        videoUrl: "https://www.bilibili.tv/id/video/2048056242?bstar_from=bstar-web.homepage.recommend.all"
    },

    {
        id: 9,
        judul: "Ratu Ilmu Hitam",
        tahun: 2019,
        rating: "⭐ 6.5",
        durasi: " 139 min",
        kategori: ["demon", "thriler"],  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/6ccXFawnYknVMYkcCL30QhEm73j.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/YNecU1qZ5kMbAEQ6KmBSI7PCMo.jpg",
        deskripsi: "Ratu Ilmu Hitam merupakan film horror legendaris asli Indonesia pada tahun 1981 yang dibintangi mendiang Suzanna. Dan, digarap ulang oleh rumah produksi Rapi Film pada tahun 2019 dengan menggandeng dua sineas kondang yaitu Kimo Stamboel di kursi sutradara dan Joko Anwar sebagai penulis naskah.",
        sinopsis: "Hanif membawa Nadya istrinya dan ketiga anak mereka ke panti asuhan tempat Hanif dulu dibesarkan. Pengasuh panti itu, Pak Bandi, sudah sangat tua dan sakit keras, Hanif datang untuk menjenguk setelah bertahun-tahun tidak bertemu. Bukan cuma Hanif yang datang berkunjung, tapi juga dua sahabat Hanif saat tinggal di panti, Anton dan Jefri yang membawa istri-istri mereka. Malam itu mereka semua tiba di panti asuhan yang terletak di luar kota dan jauh dari pemukiman penduduk itu. Mereka bermaksud bermalam di sana untuk memberikan penghormatan terakhir buat orang yang telah mengasuh mereka sejak kecil. Mereka menyangka malam itu akan jadi malam yang penuh kedamaian. Mereka segera memahami bahwa mereka salah.",
        trailerUrl: "https://youtu.be/594PxKASQfg?si=rxxhehnHIjeuiBfu",
        videoUrl: "https://www.cineby.sc/movie/590593?play=true"
    },

    {
        id: 10,
        judul: "Rumah Dara",
        tahun: 2009,
        rating: "⭐ 6.4",
        durasi: " 135 min",
        kategori: "thriler",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/original/m0q8PvIN6UFr7vbW1HxKZHOsk4W.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1066_and_h600_face/8yIPeGnWzJZxYimyDCwLc2MGfY3.jpg",
        deskripsi: "Rumah Dara (dikenal secara internasional dengan judul Macabre) bergenre Horor Slasher dan Gore. Film karya sutradara Mo Brothers (Kimo Stamboel dan Timo Tjahjanto) ini menyajikan ketegangan ekstrem melalui aksi pembantaian, pertumpahan darah, dan teror psikologis dari sebuah keluarga kanibal.",
        sinopsis: "bercerita tentang Dara, seorang wanita yang sudah hidup sejak zaman Belanda. Ia punya tiga orang anak, Maya (Imelda Therinne), Adam (Arifin Putra) dan Armand (Ruli Lubis). Dara yang tak pernah menua ternyata suka mencincang tubuh manusia, dan aksinya itu didukung penuh oleh ketiga anaknya.",
        trailerUrl: "https://youtu.be/gh9bmTwo9-I?si=paU5tZLVFIdWrO5I",
        videoUrl: "https://www.cineby.sc/movie/39067?play=true"
    },

    {
        id: 11,
        judul: "Dusun Mayit",
        tahun: 2025,
        rating: "⭐ 4.3",
        durasi: "134 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/zlKdRrgDkMnnENPK2VRBLdlnteF.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1000_and_h563_face/rgC6Vz3PZPEepbas7gCZRLxWMYD.jpg",
        deskripsi: "mengisahkan empat mahasiswa—Aryo, Nita, Yuni, dan Raka—yang mendaki Gunung Welirang. Petualangan mereka berubah menjadi teror mematikan setelah Nita tidak sengaja melanggar pantangan dan tersesat di sebuah desa gaib penuntut tumbal yang haus nyawa",
        sinopsis: "Empat sahabat—Aryo, Nita, Yuni (Amanda Manopo), dan Raka—memanfaatkan waktu libur untuk mendaki Gunung Welirang. Situasi berubah menjadi mimpi buruk setelah Nita secara tidak sengaja menemukan sesajen dan jatuh ke sebuah telaga.",
        trailerUrl: "https://www.imdb.com/video/vi1895549721/?playlistId=tt37501704&ref_=tt_ov_pr_ov_vi",
        videoUrl: "https://www.cineby.sc/movie/1505183?play=true"
    },

    {
        id: 12,
        judul: "Sosok Ketiga: Lintrik",
        tahun: 2025,
        rating: "⭐ 5.4",
        durasi: "159 min",
        kategori: ["supernatural","thriler"],  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/4JIlWFhWFBYu5HNp7Y2FQOvrKcR.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1066_and_h600_face/uUAdoNl5uPtjFP8APmFHaZ59HVY.jpg",
        deskripsi: "film horor-drama Indonesia yang menggabungkan konflik rumah tangga dengan klenik mistis Jawa. Film ini dibintangi oleh Adinda Thomas, Wafda Saifan Lubis, dan Aulia Sarah.",
        sinopsis: "Cerita berfokus pada pasangan muda, Andin dan Ario, yang baru menikah selama enam bulan. Keharmonisan rumah tangga mereka mulai retak ketika Andin merasakan berbagai keanehan dan teror gaib.",
        trailerUrl: "https://youtu.be/FWVykcqS2d0?si=XNcM9R6UzV9-LUO7",
        videoUrl: "https://www.cineby.sc/movie/1440100?play=true"
    },

    {
        id: 13,
        judul: "Muslihat",
        tahun: 2025,
        rating: "⭐ 7.2",
        durasi: " min",
        kategori: "supernatural",  // pilihan: supernatural, thriler, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/l65DDH2WKHKXnc5FJTGHvYrrJkS.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w1000_and_h563_face/v0fcOIGdL7iA6nVfNxV67D9ne9z.jpg",
        deskripsi: "film horor religi Indonesia yang disutradarai oleh Chairun Nissa dan dirilis pada 17 April 2025.",
        sinopsis: "Cerita berfokus pada kakak-beradik, Jihan (Asmara Abigail) dan Syafa (Ajeng Giona), yang pindah ke sebuah panti asuhan tua di tengah hutan setelah orang tua mereka tewas kecelakaan. Di sana, mereka justru menghadapi teror iblis penunggu panti. Syafa kemudian mengalami kesurupan hebat.",
        trailerUrl: "https://youtu.be/Se_bk_AXnZE?si=gIIa81Sagm8ZFhcz",
        videoUrl: "https://www.cineby.sc/movie/1293227?play=true"
    },







];