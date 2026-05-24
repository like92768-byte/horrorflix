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

    // 👇 Tambahkan film baru di bawah ini (copy template & paste)
    // {
    //     id: 3,
    //     judul: "Judul Film",
    //     tahun: 2024,
    //     rating: "⭐ 7.0",
    //     durasi: "100 min",
    //     kategori: "supernatural",
    //     kualitas: "HD",
    //     poster: "https://link-gambar.jpg",
    //     backdrop: "https://link-banner.jpg",
    //     deskripsi: "Deskripsi singkat 1 kalimat.",
    //     sinopsis: "Sinopsis lengkap film.",
    //     trailerUrl: "https://youtube.com/xxx",
    //     videoUrl: "https://link-video.com/xxx"
    // },

];