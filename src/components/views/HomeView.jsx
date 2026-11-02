import React from 'react';
import { HelpCircle, ChevronRight, ArrowRight, Compass } from 'lucide-react';
import { CustomIcon, KaptenKloro } from '../svg/Illustrations';
import { MODULES_LIST } from '../../data/photosynthesisData';

export default function HomeView({
  studentName,
  setStudentName,
  nameInput,
  setNameInput,
  earnedBadges,
  completedModules,
  setShowObjectivesModal,
  navigateToSection,
  playSound,
  quizAnswers = {},
  quizSubmitted = false
}) {
return (
    <div className="space-y-10">
      {/* Storybook Hero Cover Card */}
      <div className="bg-[#FFFDF9] rounded-3xl border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] overflow-hidden">
        {/* Top Field Journal Strip */}
        <div className="bg-[#1B4332] text-[#FAF6EE] px-6 py-3 flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-[#1B4332]">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-semibold tracking-wide">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E9C46A]" />
            BUKU CATATAN PENJELAJAH ALAM • IPAS KELAS IV SD
          </div>
          <div className="text-xs font-semibold text-[#A3E635]">
            Topik: Fotosintesis pada Tumbuhan
          </div>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title, Intro, Name Input, Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#E9C46A] text-[#1B4332] font-heading font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-[#1B4332] shadow-[2px_2px_0px_#1B4332]">
              EDISI PETUALANGAN INTERAKTIF
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#1B4332] leading-[1.15]">
              Green Mission: <br />
              <span className="text-[#2D6A4F] underline decoration-[#F4A261] decoration-4 underline-offset-4">
                Petualangan Rahasia Fotosintesis
              </span>
            </h1>

            <p className="text-[#2B3A32] text-base sm:text-lg leading-relaxed">
              Halo, <strong className="text-[#1B4332] underline decoration-[#E9C46A] decoration-2">{studentName}</strong>! Pernahkah kamu bertanya-tanya bagaimana pohon mangga atau bunga matahari bisa tumbuh besar tanpa pergi ke dapur? Ayo selidiki rahasia tumbuhan memasak makanannya sendiri bersama <strong>Kapten Kloro</strong>!
            </p>

            {/* Student Explorer Card Input */}
            <div className="bg-[#F4F1EA] p-4 rounded-2xl border-2 border-[#1B4332] max-w-md">
              <label className="block font-heading font-bold text-xs uppercase tracking-wider text-[#1B4332] mb-2">
                Tulis Nama Penjelajahmu di Kartu Ini:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ketik namamu di sini..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white text-[#1B4332] font-semibold text-sm border-2 border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                />
                <button
                  onClick={() => {
                    if (nameInput.trim()) {
                      setStudentName(nameInput.trim());
                      setNameInput('');
                      playSound('correct');
                    }
                  }}
                  className="bg-[#52B788] hover:bg-[#40916C] text-[#1B4332] font-heading font-bold px-4 py-2 rounded-xl text-sm border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332] active:translate-y-[3px] active:shadow-none transition-all"
                >
                  Simpan
                </button>
              </div>
            </div>

            {/* Tactile Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <button
                onClick={() => navigateToSection('materi')}
                className="flex items-center gap-2 bg-[#F4A261] hover:bg-[#E76F51] hover:text-white text-[#1B4332] font-heading font-bold px-6 py-3.5 rounded-2xl text-base sm:text-lg border-[2.5px] border-[#1B4332] shadow-[0_5px_0_#1B4332] active:translate-y-[5px] active:shadow-none transition-all"
              >
                Mulai Petualangan <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  playSound('click');
                  setShowObjectivesModal(true);
                }}
                className="flex items-center gap-2 bg-[#E9C46A] hover:bg-[#F4A261] text-[#1B4332] font-heading font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base border-[2.5px] border-[#1B4332] shadow-[0_5px_0_#1B4332] active:translate-y-[5px] active:shadow-none transition-all"
              >
                <Compass className="w-5 h-5" /> Tujuan Pembelajaran
              </button>

              <button
                onClick={() => navigateToSection('petunjuk')}
                className="flex items-center gap-2 bg-white hover:bg-[#F4F1EA] text-[#1B4332] font-heading font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base border-[2.5px] border-[#1B4332] shadow-[0_5px_0_#1B4332] active:translate-y-[5px] active:shadow-none transition-all"
              >
                <HelpCircle className="w-5 h-5 text-[#2D6A4F]" /> Petunjuk Penggunaan
              </button>
            </div>
          </div>

          {/* Right Column: Rich Illustrated Botanical Diagram */}
          <div className="lg:col-span-5">
            <div className="bg-[#E8F3EE] rounded-3xl p-5 border-[3px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332]">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#FFFDF9] text-[#1B4332] font-heading font-bold text-xs px-3 py-1 rounded-full border-2 border-[#1B4332]">
                  Ilustrasi Dapur Tumbuhan
                </span>
                <span className="text-xs font-bold text-[#2D6A4F]">
                  IPAS Kelas 4 SD
                </span>
              </div>

              <svg viewBox="0 0 340 260" className="w-full h-auto rounded-2xl bg-[#FFFDF9] border-2 border-[#1B4332]">
                {/* Sky Background */}
                <rect x="0" y="0" width="340" height="190" fill="#F0F7F4" />
                {/* Sun */}
                <g transform="translate(48, 46)">
                  <circle cx="0" cy="0" r="24" fill="#F4A261" stroke="#1B4332" strokeWidth="3" />
                  <circle cx="0" cy="0" r="15" fill="#E9C46A" />
                  <line x1="28" y1="16" x2="78" y2="45" stroke="#F4A261" strokeWidth="3" strokeDasharray="6,4" />
                  <line x1="22" y1="26" x2="68" y2="56" stroke="#F4A261" strokeWidth="3" strokeDasharray="6,4" />
                </g>

                {/* Soil Cross Section */}
                <path d="M0 188 Q170 176 340 188 L340 260 L0 260 Z" fill="#D4A373" stroke="#1B4332" strokeWidth="3" />
                <path d="M0 208 Q170 198 340 208 L340 260 L0 260 Z" fill="#BC8A5F" />

                {/* Plant Roots */}
                <g stroke="#FAF6EE" strokeWidth="3.5" strokeLinecap="round" fill="none">
                  <path d="M170 188 Q145 212 115 232" />
                  <path d="M170 188 Q170 218 166 244" />
                  <path d="M170 188 Q195 212 225 232" />
                  <path d="M150 206 L132 238" />
                  <path d="M190 206 L206 238" />
                </g>

                {/* Stem */}
                <path d="M170 188 L170 72" stroke="#2D6A4F" strokeWidth="12" strokeLinecap="round" />
                <path d="M170 188 L170 72" stroke="#1B4332" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.15" />

                {/* Left Leaf */}
                <path d="M166 142 C110 142 96 98 134 98 C154 98 162 122 166 142 Z" fill="#52B788" stroke="#1B4332" strokeWidth="3" />
                <path d="M166 142 Q140 120 120 110" stroke="#1B4332" strokeWidth="2.5" fill="none" />

                {/* Right Leaf */}
                <path d="M174 120 C230 120 244 76 206 76 C186 76 178 100 174 120 Z" fill="#52B788" stroke="#1B4332" strokeWidth="3" />
                <path d="M174 120 Q200 98 220 88" stroke="#1B4332" strokeWidth="2.5" fill="none" />

                {/* Sunflower Top */}
                <circle cx="170" cy="60" r="22" fill="#E9C46A" stroke="#1B4332" strokeWidth="3" />
                <circle cx="170" cy="60" r="11" fill="#8D5B4C" stroke="#1B4332" strokeWidth="2.5" />

                {/* Callout Labels */}
                <g transform="translate(12, 102)">
                  <rect x="0" y="0" width="84" height="24" rx="8" fill="#FFFDF9" stroke="#1B4332" strokeWidth="2" />
                  <text x="10" y="16" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                    CO₂ Masuk
                  </text>
                </g>

                <g transform="translate(226, 32)">
                  <rect x="0" y="0" width="98" height="24" rx="8" fill="#90E0EF" stroke="#1B4332" strokeWidth="2" />
                  <text x="10" y="16" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                    Oksigen (O₂)
                  </text>
                </g>

                <g transform="translate(226, 134)">
                  <rect x="0" y="0" width="98" height="24" rx="8" fill="#E9C46A" stroke="#1B4332" strokeWidth="2" />
                  <text x="12" y="16" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                    Glukosa
                  </text>
                </g>

                <g transform="translate(22, 220)">
                  <rect x="0" y="0" width="86" height="24" rx="8" fill="#48CAE4" stroke="#1B4332" strokeWidth="2" />
                  <text x="10" y="16" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                    Air (H₂O)
                  </text>
                </g>
              </svg>

              <div className="mt-4">
                <KaptenKloro
                  size="sm"
                  message="Ayo jelajahi setiap pos petualangan di bawah ini untuk mengumpulkan poin dan membuka ketiga lencana kehormatan!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Peta Pos Petualangan (6 Main Stations) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-heading text-2xl font-bold text-[#1B4332]">
            Peta Pos Petualangan
          </h2>
          <span className="text-xs font-bold text-[#1B4332] bg-[#E9C46A] px-3.5 py-1 rounded-full border-2 border-[#1B4332]">
            Klik pos mana saja untuk mulai belajar
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              id: 'materi',
              step: 'POS 01',
              title: 'Materi Pembelajaran',
              desc: 'Pelajari 5 modul bertahap: pengertian, bahan, proses, hasil, hingga manfaat fotosintesis.',
              status: `${completedModules.length}/5 Modul Selesai`,
              bgBadge: 'bg-[#52B788]',
              iconType: 'leaf'
            },
            {
              id: 'video',
              step: 'POS 02',
              title: 'Video & Cerita Visual',
              desc: 'Simak 4 topik animasi papan cerita interaktif atau tonton video edukasi beserta kuis kilat.',
              status: '4 Topik Tersedia',
              bgBadge: 'bg-[#48CAE4]',
              iconType: 'sun'
            },
            {
              id: 'game',
              step: 'POS 03',
              title: 'Misi Permainan (3 Game)',
              desc: 'Selesaikan 3 misi interaktif untuk mengumpulkan hingga 60 Poin dan 3 Lencana Kehormatan.',
              status: `${earnedBadges.length}/3 Lencana Diraih`,
              bgBadge: 'bg-[#F4A261]',
              iconType: 'chlorophyll'
            },
            {
              id: 'kuis',
              step: 'POS 04',
              title: 'Kuis Interaktif (10 Soal)',
              desc: 'Uji pemahamanmu melalui soal Pilihan Ganda, Benar-Salah, dan Mencocokkan Ilustrasi.',
              status: `${Object.keys(quizAnswers).length}/10 Soal Dijawab`,
              bgBadge: 'bg-[#E9C46A]',
              iconType: 'glucose'
            },
            {
              id: 'evaluasi',
              step: 'POS 05',
              title: 'Evaluasi & Sertifikat',
              desc: 'Lihat nilai akhir otomatis, pembahasan lengkap, rekomendasi materi, dan cetak sertifikat.',
              status: quizSubmitted ? 'Nilai Siap Dilihat' : 'Menunggu Kuis',
              bgBadge: 'bg-[#E76F51] text-white',
              iconType: 'oxygen'
            },
            {
              id: 'petunjuk',
              step: 'POS 06',
              title: 'Panduan & Profil',
              desc: 'Baca petunjuk penggunaan media, aturan permainan, profil penyusun, dan daftar referensi.',
              status: 'Buku Panduan',
              bgBadge: 'bg-[#A8DADC]',
              iconType: 'roots'
            }
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => navigateToSection(card.id)}
              className="group text-left bg-[#FFFDF9] hover:bg-[#F4F1EA] p-5 rounded-3xl border-[2.5px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F1EA] border-2 border-[#1B4332] flex items-center justify-center p-2">
                    <CustomIcon type={card.iconType} className="w-10 h-10" />
                  </div>
                  <div className="text-right">
                    <span className="block font-heading font-bold text-[11px] text-[#2D6A4F]">
                      {card.step}
                    </span>
                    <span className={`inline-block mt-0.5 text-xs font-heading font-bold px-3 py-0.5 rounded-full border-2 border-[#1B4332] ${card.bgBadge}`}>
                      {card.status}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#3A4D43] mt-1.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-dashed border-[#1B4332]/20 flex items-center justify-between text-xs font-heading font-bold text-[#1B4332]">
                <span>Buka Pos Petualangan</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

}
