// ==============================================================
// GREEN MISSION: DATA MATERI, SOAL KUIS, DAN MISI GAME EDUKASI
// ==============================================================

// --- LENCANA PENGHARGAAN (BADGES) ---
export const BADGES_DATA = [
  {
    id: 'leaf_explorer',
    title: 'Penjelajah Daun',
    desc: 'Menyelesaikan Misi 1: Mengenali bagian tumbuhan dan fungsinya dalam fotosintesis.',
    points: 10
  },
  {
    id: 'energy_collector',
    title: 'Pengumpul Energi',
    desc: 'Menyelesaikan Misi 2: Mengumpulkan 4 bahan utama fotosintesis ke Dapur Daun.',
    points: 20
  },
  {
    id: 'photo_master',
    title: 'Ahli Fotosintesis',
    desc: 'Menyelesaikan Misi 3: Menyusun tahapan proses fotosintesis secara berurutan.',
    points: 30
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    type: 'multiple_choice',
    aspect: 'Pengertian Fotosintesis',
    relatedModule: 0,
    question: 'Apa yang dimaksud dengan proses fotosintesis pada tumbuhan?',
    options: [
      'Proses tumbuhan beristirahat pada malam hari',
      'Proses tumbuhan memasak makanannya sendiri dengan bantuan cahaya matahari',
      'Proses tumbuhan menggugurkan daunnya saat musim kemarau',
      'Proses akar menggemburkan tanah di sekitar tanaman'
    ],
    correctAnswer: 1,
    explanation: 'Fotosintesis adalah proses tumbuhan hijau membuat makanannya sendiri (glukosa) dari air dan karbon dioksida dengan bantuan energi cahaya matahari.'
  },
  {
    id: 2,
    type: 'true_false',
    aspect: 'Bahan Fotosintesis',
    relatedModule: 1,
    question: 'BENAR atau SALAH: Tumbuhan memerlukan batu kerikil dan plastik untuk melakukan proses fotosintesis.',
    options: ['Benar', 'Salah'],
    correctAnswer: 1,
    explanation: 'SALAH. Empat komponen yang dibutuhkan dalam fotosintesis adalah Cahaya Matahari, Air (H₂O), Karbon Dioksida (CO₂), dan Klorofil.'
  },
  {
    id: 3,
    type: 'visual_match',
    aspect: 'Bahan Fotosintesis',
    relatedModule: 1,
    visualPrompt: {
      iconType: 'chlorophyll',
      label: 'Pigmen atau zat hijau daun yang terdapat pada tumbuhan'
    },
    question: 'Perhatikan ilustrasi di atas! Zat hijau daun yang berfungsi menangkap energi cahaya matahari disebut...',
    options: ['Oksigen', 'Klorofil', 'Stomata', 'Glukosa'],
    correctAnswer: 1,
    explanation: 'Klorofil adalah zat hijau daun yang berfungsi menangkap energi cahaya matahari agar proses fotosintesis dapat berjalan.'
  },
  {
    id: 4,
    type: 'multiple_choice',
    aspect: 'Fungsi Bagian Tumbuhan',
    relatedModule: 2,
    question: 'Bagian tumbuhan manakah yang bertugas menyerap air dan mineral dari dalam tanah?',
    options: ['Kelopak Bunga', 'Buah', 'Akar', 'Pucuk Daun'],
    correctAnswer: 2,
    explanation: 'Akar berada di dalam tanah dan berfungsi menyerap air serta mineral, kemudian mengalirkannya melalui batang menuju daun.'
  },
  {
    id: 5,
    type: 'visual_match',
    aspect: 'Fungsi Bagian Tumbuhan',
    relatedModule: 2,
    visualPrompt: {
      iconType: 'stomata',
      label: 'Pori-pori atau celah mikroskopis pada permukaan daun'
    },
    question: 'Bagian pada daun yang menjadi pintu masuknya gas Karbon Dioksida (CO₂) dari udara adalah...',
    options: ['Stomata (Mulut Daun)', 'Kulit Batang', 'Akar Serabut', 'Biji Tumbuhan'],
    correctAnswer: 0,
    explanation: 'Stomata atau mulut daun adalah pori-pori sangat kecil pada permukaan daun yang menyerap gas Karbon Dioksida (CO₂) dan melepas Oksigen (O₂).'
  },
  {
    id: 6,
    type: 'multiple_choice',
    aspect: 'Proses Fotosintesis',
    relatedModule: 2,
    question: 'Di bagian tumbuhan manakah "dapur" utama tempat berlangsungnya proses fotosintesis?',
    options: ['Di dalam akar tanah', 'Di daun yang mengandung klorofil', 'Di kelopak bunga', 'Di kulit batang yang kering'],
    correctAnswer: 1,
    explanation: 'Daun adalah dapur utama tumbuhan karena di dalam daun terdapat banyak klorofil untuk menangkap cahaya matahari.'
  },
  {
    id: 7,
    type: 'true_false',
    aspect: 'Proses Fotosintesis',
    relatedModule: 2,
    question: 'BENAR atau SALAH: Tahap awal proses fotosintesis dimulai dari akar menyerap air dan daun menyerap karbon dioksida.',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    explanation: 'BENAR. Akar menyerap air dari tanah dan stomata daun menyerap karbon dioksida dari udara sebelum diolah menggunakan energi cahaya matahari.'
  },
  {
    id: 8,
    type: 'multiple_choice',
    aspect: 'Hasil Fotosintesis',
    relatedModule: 3,
    question: 'Apa saja DUA hasil utama yang diperoleh dari proses fotosintesis?',
    options: [
      'Air dan Karbon Dioksida',
      'Tanah subur dan Uap air',
      'Glukosa (Gula/Makanan) dan Oksigen (O₂)',
      'Klorofil dan Cahaya Matahari'
    ],
    correctAnswer: 2,
    explanation: 'Proses fotosintesis menghasilkan Glukosa (gula sebagai energi tumbuh tanaman) dan gas Oksigen (O₂) yang dilepaskan ke udara.'
  },
  {
    id: 9,
    type: 'visual_match',
    aspect: 'Hasil Fotosintesis',
    relatedModule: 3,
    visualPrompt: {
      iconType: 'glucose',
      label: 'Zat makanan hasil olahan daun yang diedarkan ke seluruh bagian tumbuhan'
    },
    question: 'Makanan hasil fotosintesis yang digunakan tumbuhan untuk tumbuh dan disimpan pada buah atau umbi disebut...',
    options: ['Karbon Dioksida', 'Glukosa (Gula)', 'Nitrogen', 'Mineral Tanah'],
    correctAnswer: 1,
    explanation: 'Glukosa adalah zat gula hasil fotosintesis yang memberi energi bagi tumbuhan dan disimpan sebagai cadangan makanan pada buah, biji, atau umbi.'
  },
  {
    id: 10,
    type: 'multiple_choice',
    aspect: 'Manfaat Fotosintesis',
    relatedModule: 4,
    question: 'Mengapa proses fotosintesis sangat penting bagi manusia dan hewan di Bumi?',
    options: [
      'Karena membuat udara menjadi panas di siang hari',
      'Karena menghasilkan Oksigen untuk bernapas dan menyediakan sumber makanan',
      'Karena menghabiskan cadangan air hujan di dalam tanah',
      'Karena membuat batuan menjadi lebih cepat lapuk'
    ],
    correctAnswer: 1,
    explanation: 'Tanpa fotosintesis, tidak akan ada pasokan oksigen segar untuk bernapas dan tidak ada tumbuhan yang menjadi sumber pangan manusia serta hewan.'
  }
];

export const VIDEOS_DATA = [
  {
    id: 1,
    title: 'Bagian 1: Pengenalan Fotosintesis pada Tumbuhan',
    duration: '03:15',
    category: 'Konsep Dasar',
    youtubeId: 'b3k65M2bN2A',
    youtubeUrl: 'https://www.youtube.com/embed/b3k65M2bN2A?hl=id&cc_lang_pref=id&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=b3k65M2bN2A',
    summary: 'Mengenal bagaimana tumbuhan berbeda dengan manusia dan hewan karena tumbuhan mampu memasak makanannya sendiri di daun.',
    storySlides: [
      { icon: 'leaf', title: 'Keunikan Tumbuhan Hijau', text: 'Ketika manusia atau hewan lapar, kita mencari makanan dari luar. Namun tumbuhan hijau tidak berpindah tempat karena mampu membuat makanannya sendiri.' },
      { icon: 'sun', title: 'Arti Kata Fotosintesis', text: 'Kemampuan hebat ini disebut FOTOSINTESIS. Kata "Foto" berarti cahaya, dan "Sintesis" berarti menyusun atau membuat.' },
      { icon: 'glucose', title: 'Dapur Alami di Daun', text: 'Dengan bantuan energi cahaya matahari, tumbuhan mengolah bahan sederhana di sekitarnya menjadi makanan bergizi di dalam daun.' }
    ],
    quickQuestion: {
      q: 'Apa arti kata "Foto" dalam istilah Fotosintesis?',
      options: ['Kamera', 'Cahaya', 'Tanah'],
      answer: 1
    }
  },
  {
    id: 2,
    title: 'Bagian 2: Bahan-Bahan yang Dibutuhkan Tumbuhan',
    duration: '03:45',
    category: 'Komponen Utama',
    youtubeId: 'Mtgl6_127dc',
    youtubeUrl: 'https://www.youtube.com/embed/Mtgl6_127dc?hl=id&cc_lang_pref=id&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=Mtgl6_127dc',
    summary: 'Mempelajari 4 bahan wajib agar dapur fotosintesis tumbuhan dapat bekerja: Cahaya Matahari, Air, Karbon Dioksida, dan Klorofil.',
    storySlides: [
      { icon: 'sun', title: '1. Cahaya Matahari & 2. Klorofil', text: 'Matahari memberikan energi cahaya. Klorofil (zat hijau daun) bertugas menangkap energi cahaya tersebut di permukaan daun.' },
      { icon: 'water', title: '3. Air (H₂O) dari Tanah', text: 'Akar di dalam tanah menghisap air dan mineral, lalu mengirimkannya naik melewati pembuluh batang menuju ke daun.' },
      { icon: 'co2', title: '4. Karbon Dioksida (CO₂)', text: 'Gas Karbon Dioksida di udara yang kita hembuskan saat bernapas diserap oleh daun melalui celah kecil bernama Stomata.' }
    ],
    quickQuestion: {
      q: 'Berapa jumlah komponen utama yang wajib ada dalam fotosintesis?',
      options: ['2 Komponen', '4 Komponen', '8 Komponen'],
      answer: 1
    }
  },
  {
    id: 3,
    title: 'Bagian 3: Proses Fotosintesis Melalui Animasi',
    duration: '04:10',
    category: 'Alur Proses',
    youtubeId: 'vF8u8vK8Z6I',
    youtubeUrl: 'https://www.youtube.com/embed/vF8u8vK8Z6I?hl=id&cc_lang_pref=id&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=vF8u8vK8Z6I',
    summary: 'Melihat perjalanan air dari akar, masuknya CO₂ di stomata, hingga klorofil memasaknya dengan cahaya matahari.',
    storySlides: [
      { icon: 'roots', title: 'Tahap 1 & 2: Pengumpulan Bahan', text: 'Air naik dari akar melewati batang menuju daun. Pada saat bersamaan, mulut daun (stomata) membuka untuk menyerap gas CO₂.' },
      { icon: 'chlorophyll', title: 'Tahap 3: Memasak dengan Cahaya', text: 'Klorofil di daun menangkap sinar matahari. Energi cahaya mengubah air dan karbon dioksida melalui reaksi alami.' },
      { icon: 'oxygen', title: 'Tahap 4: Makanan & Oksigen Siap!', text: 'Terbentuklah Glukosa (gula makanan tumbuhan) yang diedarkan ke seluruh tanaman, serta gas Oksigen segar yang dilepas ke udara.' }
    ],
    quickQuestion: {
      q: 'Melalui bagian apa air diangkut dari akar menuju ke daun?',
      options: ['Melalui Batang', 'Melalui Bunga', 'Melalui Udara'],
      answer: 0
    }
  },
  {
    id: 4,
    title: 'Bagian 4: Hasil dan Manfaat Fotosintesis',
    duration: '03:30',
    category: 'Dampak Kehidupan',
    youtubeId: '8wT5nZ3dE2k',
    youtubeUrl: 'https://www.youtube.com/embed/8wT5nZ3dE2k?hl=id&cc_lang_pref=id&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=8wT5nZ3dE2k',
    summary: 'Mengapa Bumi kita tetap sejuk, kaya oksigen, dan menyediakan pangan berkat fotosintesis tumbuhan hijau.',
    storySlides: [
      { icon: 'glucose', title: 'Sumber Pangan Makhluk Hidup', text: 'Glukosa hasil fotosintesis disimpan tumbuhan menjadi buah, padi, umbi, dan sayuran yang menjadi makanan manusia serta hewan.' },
      { icon: 'oxygen', title: 'Oksigen untuk Bernapas', text: 'Setiap tarikan napas manusia dan hewan membutuhkan Oksigen (O₂) yang dilepaskan oleh pepohonan dan tumbuhan hijau.' },
      { icon: 'leaf', title: 'Menjaga Udara Bumi Tetap Bersih', text: 'Fotosintesis menyerap gas Karbon Dioksida berlebih di udara sehingga mengurangi polusi dan menjaga keseimbangan alam.' }
    ],
    quickQuestion: {
      q: 'Gas apa yang dilepaskan tumbuhan dan dibutuhkan manusia untuk bernapas?',
      options: ['Gas Oksigen (O₂)', 'Gas Nitrogen', 'Gas Karbon Dioksida'],
      answer: 0
    }
  }
];


// --- MATERI PEMBELAJARAN ---
  export const MODULES_LIST = [
    { id: 0, title: 'Materi 1: Pengertian Fotosintesis', short: '1. Pengertian', iconType: 'leaf' },
    { id: 1, title: 'Materi 2: Bahan & Komponen', short: '2. Bahan', iconType: 'sun' },
    { id: 2, title: 'Materi 3: Proses Fotosintesis', short: '3. Proses', iconType: 'roots' },
    { id: 3, title: 'Materi 4: Hasil Fotosintesis', short: '4. Hasil', iconType: 'glucose' },
    { id: 4, title: 'Materi 5: Manfaat bagi Kehidupan', short: '5. Manfaat', iconType: 'oxygen' }
  ];

  export const INGREDIENTS_DETAIL = [
    {
      name: 'Cahaya Matahari',
      iconType: 'sun',
      bgCard: 'bg-[#FEF3C7]',
      badge: 'Sumber Energi Utama',
      desc: 'Cahaya matahari merupakan sumber energi utama yang digunakan tumbuhan untuk mengolah air dan karbon dioksida. Tanpa energi cahaya, proses memasak makanan di daun tidak dapat berlangsung.'
    },
    {
      name: 'Air (H₂O)',
      iconType: 'water',
      bgCard: 'bg-[#E0F2FE]',
      badge: 'Diserap oleh Akar',
      desc: 'Air berada di dalam tanah. Akar tumbuhan menyerap air tersebut lalu mengalirkannya naik melalui pembuluh angkut di dalam batang hingga sampai ke helai daun.'
    },
    {
      name: 'Karbon Dioksida (CO₂)',
      iconType: 'co2',
      bgCard: 'bg-[#E2ECE9]',
      badge: 'Masuk Melalui Stomata',
      desc: 'Karbon dioksida adalah gas di udara yang dihembuskan manusia dan hewan saat bernapas. Gas ini diserap oleh daun melalui celah atau pori-pori sangat kecil bernama Stomata (mulut daun).'
    },
    {
      name: 'Klorofil (Zat Hijau Daun)',
      iconType: 'chlorophyll',
      bgCard: 'bg-[#D8F3DC]',
      badge: 'Penangkap Energi Cahaya',
      desc: 'Klorofil adalah pigmen pemberi warna hijau pada daun. Fungsinya sangat penting, yaitu menangkap energi cahaya matahari agar dapat digunakan untuk mengolah air dan karbon dioksida.'
    }
  ];

  export const PROCESS_STEPS = [
    {
      step: 1,
      title: 'Akar Menyerap Air dari Tanah',
      iconType: 'roots',
      desc: 'Langkah pertama dimulai dari bawah tanah. Akar tumbuhan menyerap air (H₂O) beserta mineral dari dalam tanah, kemudian diangkut naik melewati batang menuju ke daun.'
    },
    {
      step: 2,
      title: 'Daun Menyerap Karbon Dioksida (CO₂)',
      iconType: 'stomata',
      desc: 'Langkah kedua, pada permukaan daun terdapat pori-pori kecil bernama Stomata (mulut daun) yang membuka dan mengambil gas Karbon Dioksida (CO₂) dari udara bebas.'
    },
    {
      step: 3,
      title: 'Klorofil Menangkap Energi Cahaya Matahari',
      iconType: 'sun',
      desc: 'Langkah ketiga, Klorofil (zat hijau daun) menangkap energi cahaya matahari. Energi ini digunakan untuk memasak dan menggabungkan air serta karbon dioksida di dalam daun.'
    },
    {
      step: 4,
      title: 'Menghasilkan Makanan (Glukosa) & Oksigen',
      iconType: 'glucose',
      desc: 'Langkah keempat, proses memasak selesai! Tumbuhan menghasilkan Glukosa (gula sebagai makanan tumbuhan) dan melepaskan gas Oksigen (O₂) ke udara untuk kita hirup.'
    }
  ];

// --- MISI GAME EDUKASI ---
  export const PLANT_PARTS_GAME1 = [
    { id: 'daun', name: 'Daun', func: 'Dapur utama tempat berlangsungnya proses memasak makanan (fotosintesis).' },
    { id: 'akar', name: 'Akar', func: 'Menyerap air dan mineral dari dalam tanah.' },
    { id: 'klorofil', name: 'Klorofil', func: 'Zat hijau daun yang menangkap energi cahaya matahari.' },
    { id: 'stomata', name: 'Stomata', func: 'Pori-pori kecil pada daun tempat masuknya gas Karbon Dioksida (CO₂).' }
  ];

  export const GAME2_ITEMS = [
    { id: 'sun', name: 'Cahaya Matahari', iconType: 'sun', correct: true, hint: 'Tepat! Cahaya matahari adalah sumber energi utama fotosintesis.' },
    { id: 'water', name: 'Air (H₂O)', iconType: 'water', correct: true, hint: 'Benar! Air diserap oleh akar dari dalam tanah.' },
    { id: 'co2', name: 'Karbon Dioksida (CO₂)', iconType: 'co2', correct: true, hint: 'Pintar! Gas CO₂ diserap oleh daun melalui stomata.' },
    { id: 'chloro', name: 'Klorofil', iconType: 'chlorophyll', correct: true, hint: 'Hebat! Klorofil atau zat hijau daun menangkap sinar matahari.' },
    { id: 'rock', name: 'Batu Kerikil', iconType: 'distractor_rock', correct: false, hint: 'Tumbuhan tidak mengolah batu kerikil di dalam daunnya. Ayo pilih bahan alami lainnya!' },
    { id: 'icecream', name: 'Es Krim', iconType: 'distractor_cone', correct: false, hint: 'Es krim adalah makanan kesukaan kita, bukan bahan fotosintesis tumbuhan!' },
    { id: 'plastic', name: 'Botol Plastik', iconType: 'distractor_bottle', correct: false, hint: 'Bukan ya! Plastik tidak dibutuhkan tumbuhan untuk berfotosintesis.' },
    { id: 'toy', name: 'Mobil Mainan', iconType: 'distractor_car', correct: false, hint: 'Mobil mainan tidak dibutuhkan tumbuhan. Cari komponen seperti air, udara, atau cahaya!' }
  ];

  export const GAME3_STAGES = [
    {
      id: 'stage_1',
      correctOrder: 1,
      iconType: 'roots',
      title: 'Akar Menyerap Air',
      text: 'Akar tumbuhan menyerap air dari dalam tanah lalu mengalirkannya naik menuju daun.'
    },
    {
      id: 'stage_2',
      correctOrder: 2,
      iconType: 'stomata',
      title: 'Daun Menyerap Karbon Dioksida',
      text: 'Stomata (mulut daun) membuka dan mengambil gas Karbon Dioksida (CO₂) dari udara.'
    },
    {
      id: 'stage_3',
      correctOrder: 3,
      iconType: 'sun',
      title: 'Klorofil Memasak dengan Cahaya',
      text: 'Klorofil menangkap energi cahaya matahari untuk mengolah air dan karbon dioksida.'
    },
    {
      id: 'stage_4',
      correctOrder: 4,
      iconType: 'glucose',
      title: 'Menghasilkan Makanan & Oksigen',
      text: 'Tumbuhan menghasilkan glukosa (makanan) dan melepaskan gas oksigen ke udara.'
    }
  ];
