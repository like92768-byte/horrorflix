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
        durasi: "112 min",
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
        judul: "Insidious",
        tahun: 2010,
        rating: "⭐ 6.8",
        durasi: "103 min",
        kategori: "supernatural",
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/w500/dL3HMSNaHMOU7xHbpbxYFJm7M1H.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/mwD5hHWmKQXbGzXmFqJqNqNqJqK.jpg",
        deskripsi: "Seorang anak jatuh ke dalam koma misterius, dan roh jahat mulai mengincar tubuhnya yang tak berdaya.",
        sinopsis: "Keluarga Lambert pindah ke rumah baru. Putra mereka, Dalton, koma dan roh jahat mencoba mengambil alih tubuhnya melalui dunia astral.",
        trailerUrl: "https://www.youtube.com/watch?v=zuZlROpNKHs",
        videoUrl: "https://www.youtube.com/watch?v=zuZlROpNKHs"
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