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
        judul: "The Conjuring",
        tahun: 2013,
        rating: "⭐ 7.5",
        durasi: "112 min",
        kategori: "supernatural",  // pilihan: supernatural, slasher, psikologis, zombie, demon
        kualitas: "HD",
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjQYkuXb34YnQzYq3S.jpg",
        deskripsi: "Pasangan suami istri Ed dan Lorraine Warren menyelidiki kasus supernatural yang meneror keluarga di rumah terpencil.",
        sinopsis: "Pada tahun 1971, keluarga Perron pindah ke rumah pertanian di Rhode Island. Kejadian aneh mulai terjadi hingga mereka meminta bantuan paranormal Ed & Lorraine Warren.",
        trailerUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o",
        videoUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o"
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