import React from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Check } from 'lucide-react';
import { CustomIcon, KaptenKloro } from '../svg/Illustrations';
import { MODULES_LIST, INGREDIENTS_DETAIL, PROCESS_STEPS } from '../../data/photosynthesisData';

export default function MateriView({
  currentModuleIndex,
  setCurrentModuleIndex,
  completedModules,
  markModuleCompleted,
  processStep,
  setProcessStep,
  selectedIngredient,
  setSelectedIngredient,
  selectedBenefitTab,
  setSelectedBenefitTab,
  navigateToSection,
  playSound
}) {
return (
    <div className="space-y-6">
      {/* Module Navigation Header */}
      <div className="bg-[#FFFDF9] rounded-3xl p-5 sm:p-6 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332]">
              Materi Pembelajaran Fotosintesis
            </h2>
            <p className="text-xs sm:text-sm text-[#3A4D43]">
              Pelajari 5 bagian materi secara bertahap. Tandai selesai setiap modul untuk memperoleh <strong>+5 Poin</strong>.
            </p>
          </div>
          <div className="bg-[#D8F3DC] text-[#1B4332] font-heading font-bold px-4 py-2 rounded-xl border-2 border-[#1B4332] text-xs sm:text-sm self-start">
            Progres Materi: {completedModules.length} / 5 Bagian
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {MODULES_LIST.map((mod) => {
            const isDone = completedModules.includes(mod.id);
            const isActive = currentModuleIndex === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  playSound('click');
                  setCurrentModuleIndex(mod.id);
                }}
                className={`p-3 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center justify-between border-2 border-[#1B4332] transition-all ${
                  isActive
                    ? 'bg-[#1B4332] text-[#FAF6EE] shadow-[0_3px_0_#52B788]'
                    : isDone
                    ? 'bg-[#D8F3DC] text-[#1B4332] hover:bg-[#B7E4C7]'
                    : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8]'
                }`}
              >
                <span className="truncate">{mod.short}</span>
                {isDone && (
                  <Check className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#E9C46A]' : 'text-[#1B4332]'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Module Content Card */}
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#1B4332]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] border-2 border-[#1B4332] flex items-center justify-center p-2">
              <CustomIcon type={MODULES_LIST[currentModuleIndex].iconType} className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332]">
              {MODULES_LIST[currentModuleIndex].title}
            </h3>
          </div>
          <span className="font-heading font-bold text-xs px-3.5 py-1 rounded-full bg-[#E9C46A] text-[#1B4332] border-2 border-[#1B4332]">
            Bagian {currentModuleIndex + 1} dari 5
          </span>
        </div>

        {/* MATERI 1: PENGERTIAN FOTOSINTESIS */}
        {currentModuleIndex === 0 && (
          <div className="space-y-6">
            <KaptenKloro
              mood="happy"
              message="Berbeda dengan manusia dan hewan yang harus mencari makanan, tumbuhan hijau mampu membuat makanannya sendiri. Yuk kita pelajari pengertiannya!"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="bg-[#D8F3DC] border-2 border-[#1B4332] p-5 rounded-2xl shadow-[3px_3px_0px_#1B4332]">
                  <h4 className="font-heading font-bold text-[#1B4332] text-lg mb-2">
                    Pengertian Fotosintesis
                  </h4>
                  <p className="text-sm sm:text-base text-[#1B4332] leading-relaxed">
                    <strong>Fotosintesis</strong> adalah proses tumbuhan hijau membuat makanannya sendiri di dalam daun dengan bantuan energi <strong>cahaya matahari</strong>.
                  </p>
                </div>

                <div className="bg-[#F4F1EA] p-5 rounded-2xl border-2 border-[#1B4332] space-y-3">
                  <h4 className="font-heading font-bold text-[#1B4332] text-base">
                    Asal Kata Fotosintesis:
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-[#FFFDF9] p-3.5 rounded-xl border-2 border-[#1B4332]">
                      <div className="font-heading text-lg font-bold text-[#E76F51]">FOTO</div>
                      <div className="text-xs font-semibold text-[#2B3A32] mt-0.5">Artinya: Cahaya</div>
                    </div>
                    <div className="bg-[#FFFDF9] p-3.5 rounded-xl border-2 border-[#1B4332]">
                      <div className="font-heading text-lg font-bold text-[#2D6A4F]">SINTESIS</div>
                      <div className="text-xs font-semibold text-[#2B3A32] mt-0.5">Artinya: Membuat / Menyusun</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analogi Dapur Tumbuhan */}
              <div className="bg-[#FEF3C7] p-6 rounded-2xl border-2 border-[#1B4332] shadow-[3px_3px_0px_#1B4332] space-y-4">
                <h4 className="font-heading font-bold text-[#1B4332] text-lg">
                  Analogi Sederhana: Daun Bagaikan Dapur Tumbuhan
                </h4>
                <p className="text-sm text-[#1B4332] leading-relaxed">
                  Saat memasak di rumah, kita memerlukan dapur, kompor, dan bahan mentah. Pada tumbuhan, peran tersebut dijalankan oleh:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-[#FFFDF9] p-3 rounded-xl border-2 border-[#1B4332]">
                    <div className="font-heading font-bold text-[#2D6A4F]">Daun Hijau</div>
                    <div className="text-[#3A4D43] mt-0.5">Berperan sebagai Dapur tempat memasak</div>
                  </div>
                  <div className="bg-[#FFFDF9] p-3 rounded-xl border-2 border-[#1B4332]">
                    <div className="font-heading font-bold text-[#E76F51]">Cahaya Matahari</div>
                    <div className="text-[#3A4D43] mt-0.5">Berperan sebagai Energi Panas Kompor</div>
                  </div>
                  <div className="bg-[#FFFDF9] p-3 rounded-xl border-2 border-[#1B4332]">
                    <div className="font-heading font-bold text-[#0077B6]">Air & CO₂</div>
                    <div className="text-[#3A4D43] mt-0.5">Berperan sebagai Bahan Baku Masakan</div>
                  </div>
                  <div className="bg-[#FFFDF9] p-3 rounded-xl border-2 border-[#1B4332]">
                    <div className="font-heading font-bold text-[#1B4332]">Glukosa & Oksigen</div>
                    <div className="text-[#3A4D43] mt-0.5">Hasil Masakan yang siap dimanfaatkan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MATERI 2: BAHAN & KOMPONEN FOTOSINTESIS */}
        {currentModuleIndex === 1 && (
          <div className="space-y-6">
            <KaptenKloro
              mood="excited"
              message="Ada 4 bahan dan komponen penting yang wajib dimiliki tumbuhan untuk berfotosintesis. Klik masing-masing kartu di bawah ini untuk membaca penjelasannya!"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {INGREDIENTS_DETAIL.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playSound('click');
                    setSelectedIngredient(idx);
                  }}
                  className={`p-4 rounded-2xl border-2 border-[#1B4332] text-left transition-all flex flex-col justify-between ${
                    selectedIngredient === idx
                      ? 'bg-[#1B4332] text-[#FAF6EE] shadow-[0_4px_0_#52B788] -translate-y-0.5'
                      : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8] shadow-[0_3px_0_#1B4332]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border-2 border-[#1B4332] flex items-center justify-center p-1.5 mb-3">
                    <CustomIcon type={item.iconType} className="w-9 h-9" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm sm:text-base">{item.name}</div>
                    <div className={`text-xs mt-1 ${selectedIngredient === idx ? 'text-[#E9C46A]' : 'text-[#3A4D43]'}`}>
                      Klik untuk detail
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Ingredient Detail Card */}
            <div className={`p-6 rounded-2xl border-2 border-[#1B4332] shadow-[4px_4px_0px_#1B4332] ${INGREDIENTS_DETAIL[selectedIngredient].bgCard}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <CustomIcon type={INGREDIENTS_DETAIL[selectedIngredient].iconType} className="w-10 h-10" />
                  <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                    {INGREDIENTS_DETAIL[selectedIngredient].name}
                  </h4>
                </div>
                <span className="bg-[#FFFDF9] border-2 border-[#1B4332] px-3 py-1 rounded-full text-xs font-heading font-bold text-[#1B4332]">
                  {INGREDIENTS_DETAIL[selectedIngredient].badge}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#1B4332] leading-relaxed font-medium">
                {INGREDIENTS_DETAIL[selectedIngredient].desc}
              </p>
            </div>

            {/* Bagian Tumbuhan yang Berperan */}
            <div className="bg-[#F4F1EA] p-5 rounded-2xl border-2 border-[#1B4332]">
              <h4 className="font-heading font-bold text-[#1B4332] mb-3 text-base sm:text-lg">
                Mengenal Fungsi Bagian Tumbuhan dalam Mengumpulkan Bahan:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-[#FFFDF9] p-4 rounded-xl border-2 border-[#1B4332]">
                  <div className="font-heading font-bold text-[#1B4332] mb-1">1. Akar Tumbuhan</div>
                  <p className="text-[#3A4D43]">Berfungsi menyerap air dan mineral dari dalam tanah.</p>
                </div>
                <div className="bg-[#FFFDF9] p-4 rounded-xl border-2 border-[#1B4332]">
                  <div className="font-heading font-bold text-[#1B4332] mb-1">2. Batang Tumbuhan</div>
                  <p className="text-[#3A4D43]">Berfungsi mengangkut air dari akar menuju ke helai daun.</p>
                </div>
                <div className="bg-[#FFFDF9] p-4 rounded-xl border-2 border-[#1B4332]">
                  <div className="font-heading font-bold text-[#1B4332] mb-1">3. Daun (Klorofil & Stomata)</div>
                  <p className="text-[#3A4D43]">Stomata mengambil gas CO₂ dari udara, dan Klorofil menangkap cahaya matahari.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MATERI 3: PROSES TERJADINYA FOTOSINTESIS */}
        {currentModuleIndex === 2 && (
          <div className="space-y-6">
            <KaptenKloro
              mood="happy"
              message="Bagaimana urutan terjadinya fotosintesis dari awal hingga akhir? Klik tombol Tahap 1 sampai Tahap 4 pada peraga interaktif di bawah ini!"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PROCESS_STEPS.map((s) => (
                <button
                  key={s.step}
                  onClick={() => {
                    playSound('click');
                    setProcessStep(s.step);
                  }}
                  className={`p-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm border-2 border-[#1B4332] transition-all flex items-center gap-2.5 ${
                    processStep === s.step
                      ? 'bg-[#52B788] text-[#1B4332] shadow-[0_4px_0_#1B4332] -translate-y-0.5'
                      : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8]'
                  }`}
                >
                  <span className="w-7 h-7 rounded-lg bg-[#FFFDF9] border-2 border-[#1B4332] text-[#1B4332] flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </span>
                  <span className="text-left line-clamp-2">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Interactive Visual Diagram for Current Step */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#F4F1EA] p-6 rounded-3xl border-2 border-[#1B4332]">
              <div className="lg:col-span-6 flex justify-center">
                <svg viewBox="0 0 320 230" className="w-full max-w-sm h-56 bg-[#FFFDF9] rounded-2xl border-2 border-[#1B4332]">
                  <rect x="0" y="0" width="320" height="175" fill="#F0F7F4" />
                  <rect x="0" y="175" width="320" height="55" fill="#D4A373" stroke="#1B4332" strokeWidth="2.5" />

                  {/* Sun */}
                  <g opacity={processStep === 3 ? '1' : '0.35'}>
                    <circle cx="50" cy="45" r="22" fill="#F4A261" stroke="#1B4332" strokeWidth="2.5" />
                    {processStep === 3 && (
                      <line x1="76" y1="58" x2="138" y2="95" stroke="#E76F51" strokeWidth="3.5" strokeDasharray="5,4" />
                    )}
                  </g>

                  {/* Stem & Roots */}
                  <path d="M160 175 L160 80" stroke="#2D6A4F" strokeWidth="10" strokeLinecap="round" />
                  <path d="M160 175 L125 215 M160 175 L160 220 M160 175 L195 215" stroke="#FAF6EE" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Leaves */}
                  <path d="M158 130 C105 130 95 90 135 90 C150 90 155 115 158 130 Z" fill="#52B788" stroke="#1B4332" strokeWidth="2.5" />
                  <path d="M162 115 C215 115 225 75 185 75 C170 75 165 100 162 115 Z" fill="#52B788" stroke="#1B4332" strokeWidth="2.5" />

                  {/* Step Highlights */}
                  {processStep === 1 && (
                    <g>
                      <circle cx="125" cy="205" r="6" fill="#48CAE4" stroke="#1B4332" strokeWidth="2" />
                      <circle cx="160" cy="195" r="6" fill="#48CAE4" stroke="#1B4332" strokeWidth="2" />
                      <circle cx="160" cy="145" r="6" fill="#48CAE4" stroke="#1B4332" strokeWidth="2" />
                      <rect x="174" y="142" width="132" height="24" rx="6" fill="#FFFDF9" stroke="#1B4332" strokeWidth="2" />
                      <text x="182" y="158" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                        Air Naik dari Akar
                      </text>
                    </g>
                  )}

                  {processStep === 2 && (
                    <g>
                      <rect x="16" y="102" width="92" height="26" rx="8" fill="#E2ECE9" stroke="#1B4332" strokeWidth="2" />
                      <text x="26" y="119" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                        Gas CO₂ Masuk
                      </text>
                    </g>
                  )}

                  {processStep === 3 && (
                    <g>
                      <circle cx="135" cy="108" r="12" fill="#E9C46A" stroke="#1B4332" strokeWidth="2" />
                      <circle cx="185" cy="95" r="12" fill="#E9C46A" stroke="#1B4332" strokeWidth="2" />
                      <rect x="172" y="132" width="136" height="24" rx="6" fill="#E9C46A" stroke="#1B4332" strokeWidth="2" />
                      <text x="180" y="148" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                        Klorofil Memasak
                      </text>
                    </g>
                  )}

                  {processStep === 4 && (
                    <g>
                      <rect x="195" y="30" width="110" height="26" rx="8" fill="#90E0EF" stroke="#1B4332" strokeWidth="2" />
                      <text x="208" y="47" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                        Oksigen (O₂)
                      </text>
                      <rect x="195" y="125" width="110" height="26" rx="8" fill="#E9C46A" stroke="#1B4332" strokeWidth="2" />
                      <text x="208" y="142" fontFamily="Fredoka, sans-serif" fontSize="11" fontWeight="700" fill="#1B4332">
                        Glukosa (Gula)
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="inline-block bg-[#1B4332] text-[#FAF6EE] font-heading font-bold text-xs px-3.5 py-1 rounded-full">
                  TAHAP {PROCESS_STEPS[processStep - 1].step} DARI 4
                </div>
                <div className="flex items-center gap-3">
                  <CustomIcon type={PROCESS_STEPS[processStep - 1].iconType} className="w-10 h-10" />
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332]">
                    {PROCESS_STEPS[processStep - 1].title}
                  </h4>
                </div>
                <p className="text-[#1B4332] text-sm sm:text-base leading-relaxed bg-[#FFFDF9] p-4 rounded-2xl border-2 border-[#1B4332]">
                  {PROCESS_STEPS[processStep - 1].desc}
                </p>

                <div className="bg-[#E9C46A] border-2 border-[#1B4332] p-4 rounded-2xl">
                  <div className="font-heading font-bold text-xs uppercase text-[#1B4332] mb-1.5">
                    Bagan Ringkas Proses Fotosintesis:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#1B4332] flex flex-wrap items-center gap-1.5">
                    <span className="bg-[#FFFDF9] px-2.5 py-1 rounded-lg border border-[#1B4332]">Air</span> +
                    <span className="bg-[#FFFDF9] px-2.5 py-1 rounded-lg border border-[#1B4332]">Karbon Dioksida</span>
                    <span className="font-heading font-bold px-1">➔ (Cahaya + Klorofil) ➔</span>
                    <span className="bg-[#D8F3DC] px-2.5 py-1 rounded-lg border border-[#1B4332]">Glukosa</span> +
                    <span className="bg-[#E0F2FE] px-2.5 py-1 rounded-lg border border-[#1B4332]">Oksigen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MATERI 4: HASIL FOTOSINTESIS */}
        {currentModuleIndex === 3 && (
          <div className="space-y-6">
            <KaptenKloro
              mood="happy"
              message="Dari proses memasak di daun, tumbuhan menghasilkan 2 produk utama yang sangat penting bagi tumbuhan itu sendiri maupun makhluk hidup lainnya."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FEF3C7] p-6 rounded-2xl border-2 border-[#1B4332] shadow-[4px_4px_0px_#1B4332] space-y-3">
                <div className="flex items-center justify-between">
                  <CustomIcon type="glucose" className="w-14 h-14" />
                  <span className="bg-[#FFFDF9] border-2 border-[#1B4332] text-[#1B4332] text-xs font-heading font-bold px-3 py-1 rounded-full">
                    HASIL 1: SUMBER ENERGI
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                  1. Glukosa (Gula / Makanan)
                </h4>
                <p className="text-sm sm:text-base text-[#1B4332] leading-relaxed">
                  <strong>Glukosa</strong> adalah zat gula yang menjadi makanan dan sumber energi bagi tumbuhan untuk tumbuh besar, membentuk daun baru, berbunga, serta berbuah.
                </p>
                <div className="bg-[#FFFDF9] p-3.5 rounded-xl text-xs sm:text-sm text-[#2B3A32] border-2 border-[#1B4332]">
                  <strong>Tahukah kamu?</strong> Cadangan glukosa disimpan tumbuhan pada buah (seperti apel dan mangga), umbi (singkong dan kentang), serta biji-bijian (padi dan jagung).
                </div>
              </div>

              <div className="bg-[#E0F2FE] p-6 rounded-2xl border-2 border-[#1B4332] shadow-[4px_4px_0px_#1B4332] space-y-3">
                <div className="flex items-center justify-between">
                  <CustomIcon type="oxygen" className="w-14 h-14" />
                  <span className="bg-[#FFFDF9] border-2 border-[#1B4332] text-[#1B4332] text-xs font-heading font-bold px-3 py-1 rounded-full">
                    HASIL 2: DILEPAS KE UDARA
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                  2. Oksigen (O₂)
                </h4>
                <p className="text-sm sm:text-base text-[#1B4332] leading-relaxed">
                  <strong>Oksigen</strong> adalah gas segar yang dilepaskan oleh daun melalui stomata ke udara bebas. Gas ini sangat dibutuhkan oleh manusia dan hewan untuk bernapas.
                </p>
                <div className="bg-[#FFFDF9] p-3.5 rounded-xl text-xs sm:text-sm text-[#2B3A32] border-2 border-[#1B4332]">
                  <strong>Tahukah kamu?</strong> Saat kita duduk di bawah pohon rindang pada siang hari, udara terasa sangat sejuk karena pohon tersebut sedang melepaskan oksigen.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MATERI 5: MANFAAT FOTOSINTESIS BAGI KEHIDUPAN */}
        {currentModuleIndex === 4 && (
          <div className="space-y-6">
            <KaptenKloro
              mood="excited"
              message="Fotosintesis memberikan manfaat besar bagi seluruh kehidupan di Bumi. Klik keempat kategori di bawah ini untuk melihat manfaatnya!"
            />

            <div className="flex flex-wrap gap-2.5">
              {[
                { id: 'tumbuhan', label: '1. Bagi Tumbuhan' },
                { id: 'manusia', label: '2. Bagi Manusia' },
                { id: 'hewan', label: '3. Bagi Hewan' },
                { id: 'lingkungan', label: '4. Bagi Lingkungan Alam' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedBenefitTab(t.id);
                  }}
                  className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm border-2 border-[#1B4332] transition-all ${
                    selectedBenefitTab === t.id
                      ? 'bg-[#52B788] text-[#1B4332] shadow-[0_3px_0_#1B4332] -translate-y-0.5'
                      : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-[#D8F3DC] p-6 rounded-2xl border-2 border-[#1B4332] shadow-[4px_4px_0px_#1B4332]">
              {selectedBenefitTab === 'tumbuhan' && (
                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                    Manfaat Fotosintesis bagi Tumbuhan
                  </h4>
                  <p className="text-[#1B4332] text-sm sm:text-base leading-relaxed">
                    Menghasilkan makanan (glukosa) sebagai sumber energi utama agar tumbuhan tidak layu, dapat tumbuh tinggi, memperbanyak cabang dan daun, serta menghasilkan bunga dan buah.
                  </p>
                </div>
              )}
              {selectedBenefitTab === 'manusia' && (
                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                    Manfaat Fotosintesis bagi Manusia
                  </h4>
                  <p className="text-[#1B4332] text-sm sm:text-base leading-relaxed">
                    Menghasilkan gas <strong>Oksigen (O₂)</strong> yang kita hirup setiap saat untuk bernapas, sekaligus menyediakan sumber makanan pokok seperti beras, sayuran, umbi-umbian, dan buah-buahan.
                  </p>
                </div>
              )}
              {selectedBenefitTab === 'hewan' && (
                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                    Manfaat Fotosintesis bagi Hewan
                  </h4>
                  <p className="text-[#1B4332] text-sm sm:text-base leading-relaxed">
                    Menjadi sumber makanan utama bagi hewan pemakan tumbuhan (herbivora) seperti sapi, kambing, dan kelinci, serta menyediakan oksigen bagi seluruh hewan untuk bernapas.
                  </p>
                </div>
              )}
              {selectedBenefitTab === 'lingkungan' && (
                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-bold text-[#1B4332]">
                    Manfaat Fotosintesis bagi Lingkungan Alam
                  </h4>
                  <p className="text-[#1B4332] text-sm sm:text-base leading-relaxed">
                    Menyerap gas Karbon Dioksida (CO₂) berlebih dari udara sehingga membantu mengurangi polusi udara, menjaga keseimbangan oksigen, dan membuat lingkungan Bumi tetap sejuk.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Module Navigation & Mark Complete */}
        <div className="pt-5 border-t-2 border-dashed border-[#1B4332]/20 flex flex-wrap items-center justify-between gap-4">
          <button
            disabled={currentModuleIndex === 0}
            onClick={() => {
              playSound('click');
              setCurrentModuleIndex((prev) => Math.max(0, prev - 1));
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-heading font-bold text-sm bg-[#F4F1EA] text-[#1B4332] border-2 border-[#1B4332] disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" /> Materi Sebelumnya
          </button>

          <button
            onClick={() => markModuleCompleted(currentModuleIndex)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-heading font-bold text-sm border-2 border-[#1B4332] transition-all ${
              completedModules.includes(currentModuleIndex)
                ? 'bg-[#D8F3DC] text-[#1B4332]'
                : 'bg-[#E9C46A] hover:bg-[#F4A261] text-[#1B4332] shadow-[0_4px_0_#1B4332] active:translate-y-1 active:shadow-none'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            {completedModules.includes(currentModuleIndex)
              ? 'Materi Selesai Dipelajari (+5 Poin Diraih)'
              : 'Tandai Selesai Dibaca (+5 Poin)'}
          </button>

          {currentModuleIndex < 4 ? (
            <button
              onClick={() => {
                playSound('click');
                setCurrentModuleIndex((prev) => Math.min(4, prev + 1));
              }}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-heading font-bold text-sm bg-[#52B788] text-[#1B4332] border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332] active:translate-y-0.5 active:shadow-none"
            >
              Materi Berikutnya <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => navigateToSection('video')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-heading font-bold text-sm bg-[#48CAE4] text-[#1B4332] border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332] active:translate-y-0.5 active:shadow-none"
            >
              Lanjut ke Video Pembelajaran <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

}
