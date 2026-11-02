import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Printer } from 'lucide-react';
import { CustomIcon, KaptenKloro, BadgeShieldSVG } from '../svg/Illustrations';
import { QUIZ_QUESTIONS, MODULES_LIST, BADGES_DATA } from '../../data/photosynthesisData';

export default function EvalView({
  studentName,
  quizAnswers,
  points,
  earnedBadges,
  navigateToSection,
  playSound
}) {

    const correctCount = QUIZ_QUESTIONS.filter((q) => quizAnswers[q.id] === q.correctAnswer).length;
    const answeredCount = Object.keys(quizAnswers).length;
    const wrongCount = answeredCount - correctCount;
    const finalScore = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);

    let category = {
      label: 'Perlu Bimbingan',
      bgPanel: 'bg-[#E76F51] text-white',
      motivation: 'Jangan menyerah! Belajar adalah proses petualangan. Ayo buka kembali modul materi yang direkomendasikan di bawah ini lalu coba kuisnya kembali!'
    };
    if (finalScore >= 90) {
      category = {
        label: 'Sangat Baik',
        bgPanel: 'bg-[#52B788] text-[#1B4332]',
        motivation: 'Luar biasa! Kamu telah menguasai materi fotosintesis dengan sangat baik. Pertahankan semangat belajarmu!'
      };
    } else if (finalScore >= 80) {
      category = {
        label: 'Baik',
        bgPanel: 'bg-[#48CAE4] text-[#1B4332]',
        motivation: 'Kerja bagus! Pemahamanmu tentang proses fotosintesis sudah baik. Sedikit lagi menuju nilai sempurna!'
      };
    } else if (finalScore >= 70) {
      category = {
        label: 'Cukup',
        bgPanel: 'bg-[#E9C46A] text-[#1B4332]',
        motivation: 'Bagus! Kamu sudah memahami dasar-dasar fotosintesis. Ayo pelajari kembali beberapa materi yang masih keliru agar nilaimu makin optimal.'
      };
    }

    const wrongQuestions = QUIZ_QUESTIONS.filter(
      (q) => quizAnswers[q.id] !== undefined && quizAnswers[q.id] !== q.correctAnswer
    );
    const recommendedModuleIds = [...new Set(wrongQuestions.map((q) => q.relatedModule))];

    const aspects = [
      'Pengertian Fotosintesis',
      'Bahan Fotosintesis',
      'Fungsi Bagian Tumbuhan',
      'Proses Fotosintesis',
      'Hasil Fotosintesis',
      'Manfaat Fotosintesis'
    ];

    return (
      <div className="space-y-8">
        {answeredCount === 0 && (
          <div className="bg-[#FEF3C7] border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <AlertCircle className="w-10 h-10 text-[#1B4332] flex-shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-[#1B4332] text-lg">Kamu Belum Mengerjakan Kuis Interaktif</h3>
                <p className="text-sm text-[#2B3A32]">
                  Kerjakan 10 soal di menu Kuis terlebih dahulu agar nilai evaluasi dan rekomendasi materi muncul secara otomatis.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigateToSection('kuis')}
              className="bg-[#F4A261] hover:bg-[#E76F51] text-[#1B4332] font-heading font-bold px-5 py-3 rounded-2xl text-sm border-2 border-[#1B4332] shadow-[0_4px_0_#1B4332] flex-shrink-0"
            >
              Kerjakan Kuis Sekarang
            </button>
          </div>
        )}

        {/* Score & Aspect Mastery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-5 rounded-3xl ${category.bgPanel} p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] flex flex-col justify-between`}>
            <div className="flex items-center justify-between">
              <span className="bg-[#FFFDF9] text-[#1B4332] px-3 py-1 rounded-full text-xs font-heading font-bold border-2 border-[#1B4332]">
                HASIL EVALUASI AKHIR
              </span>
              <span className="font-heading font-bold text-xs uppercase">Skala 0–100</span>
            </div>

            <div className="my-6 text-center">
              <div className="text-xs font-heading font-bold uppercase tracking-widest">NILAI AKHIR KAMU</div>
              <div className="font-heading text-7xl font-bold my-2">{finalScore}</div>
              <div className="inline-block bg-[#FFFDF9] text-[#1B4332] font-heading font-bold px-5 py-1.5 rounded-full text-sm border-2 border-[#1B4332]">
                Kategori: {category.label}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-[#FFFDF9] text-[#1B4332] p-3.5 rounded-2xl border-2 border-[#1B4332] text-center text-xs font-heading font-bold">
              <div>
                <div className="text-lg text-[#2D6A4F]">{correctCount}</div>
                <div>Benar</div>
              </div>
              <div>
                <div className="text-lg text-[#E76F51]">{wrongCount}</div>
                <div>Salah</div>
              </div>
              <div>
                <div className="text-lg text-[#1B4332]">{points} Poin</div>
                <div>Total Skor</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] flex flex-col justify-between space-y-5">
            <KaptenKloro mood={finalScore >= 70 ? 'excited' : 'happy'} size="sm" message={category.motivation} />

            <div className="space-y-3">
              <h4 className="font-heading font-bold text-[#1B4332] text-base">
                Capaian Pemahaman Berdasarkan Aspek Materi:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aspects.map((asp) => {
                  const qs = QUIZ_QUESTIONS.filter((q) => q.aspect === asp);
                  const right = qs.filter((q) => quizAnswers[q.id] === q.correctAnswer).length;
                  const pct = Math.round((right / qs.length) * 100);
                  return (
                    <div key={asp} className="bg-[#F4F1EA] p-3 rounded-xl border-2 border-[#1B4332]">
                      <div className="flex justify-between text-xs font-heading font-bold text-[#1B4332] mb-1.5">
                        <span>{asp}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full h-3 bg-[#FFFDF9] rounded-full border border-[#1B4332] overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            pct === 100 ? 'bg-[#52B788]' : pct >= 50 ? 'bg-[#E9C46A]' : 'bg-[#E76F51]'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations for Materi to Re-study */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332] space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1B4332]">
            Rekomendasi Materi yang Perlu Dipelajari Kembali
          </h3>
          {recommendedModuleIds.length === 0 && answeredCount === 10 ? (
            <div className="bg-[#D8F3DC] border-2 border-[#1B4332] p-4 rounded-2xl text-[#1B4332] font-heading font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />
              Hebat! Tidak ada jawaban yang salah. Kamu telah menguasai seluruh bagian materi dengan sangat baik.
            </div>
          ) : recommendedModuleIds.length > 0 ? (
            <div className="space-y-3">
              <p className="text-sm text-[#2B3A32]">
                Berdasarkan hasil evaluasi, kamu disarankan membuka kembali bagian materi berikut untuk memperbaiki pemahamanmu:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {recommendedModuleIds.map((modIdx) => {
                  const mod = MODULES_LIST[modIdx];
                  return (
                    <div key={modIdx} className="bg-[#FEF3C7] border-2 border-[#1B4332] p-4 rounded-2xl flex flex-col justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <CustomIcon type={mod.iconType} className="w-8 h-8" />
                        <div className="font-heading font-bold text-[#1B4332] text-sm">{mod.title}</div>
                      </div>
                      <button
                        onClick={() => navigateToSection('materi', modIdx)}
                        className="w-full bg-[#F4A261] hover:bg-[#E76F51] text-[#1B4332] font-heading font-bold py-2 px-3 rounded-xl text-xs border-2 border-[#1B4332] flex items-center justify-center gap-1 shadow-[0_2px_0_#1B4332]"
                      >
                        Buka Kembali Materi Ini <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#3A4D43]">
              Selesaikan seluruh soal kuis untuk melihat rekomendasi materi yang perlu dipelajari kembali.
            </p>
          )}
        </div>

        {/* Printable Certificate */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] text-center space-y-4">
          <div className="inline-block bg-[#E9C46A] text-[#1B4332] font-heading font-bold px-4 py-1 rounded-full text-xs border-2 border-[#1B4332]">
            PIAGAM PENGHARGAAN PENJELAJAH CILIK
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
            Sertifikat Petualangan Fotosintesis
          </h3>
          <p className="text-sm text-[#3A4D43]">Diberikan kepada:</p>
          <div className="font-heading text-2xl sm:text-4xl font-bold text-[#2D6A4F] underline decoration-[#F4A261] decoration-4 underline-offset-8 py-1">
            {studentName}
          </div>
          <p className="text-xs sm:text-sm text-[#2B3A32] max-w-xl mx-auto leading-relaxed">
            Telah menyelesaikan pembelajaran interaktif <strong>"Green Mission: Petualangan Rahasia Fotosintesis"</strong> Mata Pelajaran IPAS Kelas IV SD dengan Nilai Evaluasi <strong>{finalScore}/100 ({category.label})</strong>, Total Poin <strong>{points} Poin</strong>, dan <strong>{earnedBadges.length}/3 Lencana Kehormatan</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {BADGES_DATA.map((b) => {
              const unlocked = earnedBadges.includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`px-3.5 py-2 rounded-2xl border-2 border-[#1B4332] text-xs font-heading font-bold flex items-center gap-2 ${
                    unlocked ? 'bg-[#FEF3C7] text-[#1B4332]' : 'bg-[#F4F1EA] text-[#3A4D43] opacity-60'
                  }`}
                >
                  <BadgeShieldSVG id={b.id} unlocked={unlocked} className="w-7 h-7" />
                  <span>{b.title}</span>
                </div>
              );
            })}
          </div>
          <div className="pt-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-[#52B788] hover:bg-[#40916C] text-[#1B4332] font-heading font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332]"
            >
              <Printer className="w-4 h-4" /> Cetak Sertifikat / Evaluasi
            </button>
          </div>
        </div>

        {/* Item-by-Item Question Review */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332] space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1B4332]">
            Rincian Jawaban & Pembahasan Soal (10 Soal)
          </h3>
          <div className="space-y-3">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const userAns = quizAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border-2 border-[#1B4332] ${
                    userAns === undefined
                      ? 'bg-[#F4F1EA]'
                      : isCorrect
                      ? 'bg-[#D8F3DC]'
                      : 'bg-[#FFE5D9]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-heading font-bold uppercase text-[#1B4332]">
                      Soal #{idx + 1} • {q.aspect}
                    </span>
                    <span className="text-xs font-heading font-bold px-2.5 py-0.5 rounded-full bg-[#FFFDF9] border border-[#1B4332] text-[#1B4332]">
                      {userAns === undefined ? 'Belum Dijawab' : isCorrect ? '✓ Jawaban Benar' : '✗ Jawaban Salah'}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-[#1B4332] text-sm sm:text-base">{q.question}</p>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#1B4332]">
                      <span className="font-bold text-[#3A4D43]">Jawabanmu: </span>
                      <span className="font-bold text-[#1B4332]">
                        {userAns !== undefined ? q.options[userAns] : '-'}
                      </span>
                    </div>
                    <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#1B4332]">
                      <span className="font-bold text-[#2D6A4F]">Kunci Jawaban: </span>
                      <span className="font-bold text-[#1B4332]">{q.options[q.correctAnswer]}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-[#1B4332] bg-[#FFFDF9] p-2.5 rounded-xl border border-[#1B4332]">
                    <strong>Pembahasan:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}
