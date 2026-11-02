import React from 'react';
import { CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { CustomIcon, KaptenKloro, BadgeShieldSVG } from '../svg/Illustrations';
import { PLANT_PARTS_GAME1, GAME2_ITEMS, GAME3_STAGES } from '../../data/photosynthesisData';

export default function GameView({
  activeMission,
  setActiveMission,
  g1ClickedParts,
  setG1ClickedParts,
  g1SelectedPart,
  setG1SelectedPart,
  g1Matches,
  setG1Matches,
  g1Feedback,
  setG1Feedback,
  g2Collected,
  setG2Collected,
  g2Feedback,
  setG2Feedback,
  g3Slots,
  setG3Slots,
  g3Feedback,
  setG3Feedback,
  earnedBadges,
  awardBadgeAndPoints,
  navigateToSection,
  playSound
}) {
  const handleG1MatchAttempt = (targetFuncPartId) => {
    if (!g1SelectedPart) {
      playSound('wrong');
      setG1Feedback({
        mood: 'thinking',
        text: 'Klik terlebih dahulu salah satu nama Bagian Tumbuhan di kolom kiri, kemudian klik kotak fungsinya di kolom kanan!'
      });
      return;
    }

    if (g1SelectedPart === targetFuncPartId) {
      playSound('correct');
      const updated = { ...g1Matches, [g1SelectedPart]: true };
      setG1Matches(updated);
      setG1SelectedPart(null);

      if (Object.keys(updated).length === PLANT_PARTS_GAME1.length) {
        setG1Feedback({
          mood: 'excited',
          text: 'Luar biasa! Kamu berhasil memasangkan seluruh bagian tumbuhan dengan fungsinya! Kamu mendapatkan +10 Poin dan Lencana "Penjelajah Daun"!'
        });
        awardBadgeAndPoints('leaf_explorer', 10);
      } else {
        setG1Feedback({
          mood: 'happy',
          text: 'Pasangan tepat! Ayo lanjutkan memasangkan bagian tumbuhan berikutnya.'
        });
      }
    } else {
      playSound('wrong');
      const partObj = PLANT_PARTS_GAME1.find((p) => p.id === g1SelectedPart);
      setG1Feedback({
        mood: 'thinking',
        text: `Petunjuk Kapten Kloro: Fungsi tersebut belum tepat untuk ${partObj?.name}. Ingat: Akar menyerap air di tanah, Klorofil menangkap cahaya, dan Stomata menyerap CO₂. Silakan coba lagi!`
      });
    }
  };

  const handleG2ItemClick = (item) => {
    if (g2Collected.includes(item.id)) return;

    if (item.correct) {
      playSound('correct');
      const next = [...g2Collected, item.id];
      setG2Collected(next);
      if (next.length === 4) {
        setG2Feedback({
          mood: 'excited',
          text: 'Hebat sekali! Keempat komponen fotosintesis sudah terkumpul lengkap! Kamu meraih +20 Poin dan Lencana "Pengumpul Energi"!'
        });
        awardBadgeAndPoints('energy_collector', 20);
      } else {
        setG2Feedback({
          mood: 'happy',
          text: `${item.hint} (${next.length}/4 bahan terkumpul)`
        });
      }
    } else {
      playSound('wrong');
      setG2Feedback({
        mood: 'thinking',
        text: `Petunjuk: ${item.hint}`
      });
    }
  };

  const handleG3CardSelect = (stageObj) => {
    const emptyIdx = g3Slots.findIndex((s) => s === null);
    if (emptyIdx === -1) return;
    if (g3Slots.some((s) => s?.id === stageObj.id)) return;

    if (stageObj.correctOrder === emptyIdx + 1) {
      playSound('correct');
      const nextSlots = [...g3Slots];
      nextSlots[emptyIdx] = stageObj;
      setG3Slots(nextSlots);

      if (emptyIdx + 1 === 4) {
        setG3Feedback({
          mood: 'excited',
          text: 'Sempurna! Urutan proses fotosintesis dari Tahap 1 sampai 4 sudah tepat! Kamu berhak mendapatkan +30 Poin dan Lencana "Ahli Fotosintesis"!'
        });
        awardBadgeAndPoints('photo_master', 30);
      } else {
        setG3Feedback({
          mood: 'happy',
          text: `Tepat! Tahap ${emptyIdx + 1} (${stageObj.title}) sudah terpasang. Sekarang pilih kartu untuk Tahap ${emptyIdx + 2}!`
        });
      }
    } else {
      playSound('wrong');
      const hintsBySlot = [
        'Untuk Tahap 1, cari proses paling awal yang terjadi di dalam tanah (Akar menyerap air)!',
        'Untuk Tahap 2, setelah air naik, daun menyerap gas Karbon Dioksida melalui stomata!',
        'Untuk Tahap 3, setelah air dan CO₂ berkumpul, Klorofil menangkap cahaya matahari untuk memasaknya!',
        'Untuk Tahap 4, pilih hasil akhir dari proses fotosintesis!'
      ];
      setG3Feedback({
        mood: 'thinking',
        text: `Petunjuk Kapten Kloro: Kartu "${stageObj.title}" belum tepat diletakkan di Urutan ke-${emptyIdx + 1}. ${hintsBySlot[emptyIdx]}`
      });
    }
  };


return (
    <div className="space-y-6">
      {/* Mission Selector Header */}
      <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332]">
              Misi Permainan Fotosintesis (3 Tantangan)
            </h2>
            <p className="text-xs sm:text-sm text-[#3A4D43]">
              Selesaikan setiap misi untuk mendapatkan poin dan lencana penghargaan! Jawaban salah akan diberi petunjuk agar kamu bisa mencoba lagi.
            </p>
          </div>
          <div className="bg-[#E9C46A] text-[#1B4332] font-heading font-bold px-4 py-2 rounded-xl border-2 border-[#1B4332] text-xs sm:text-sm">
            Lencana Misi: {earnedBadges.length} / 3 Terbuka
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {[
            { id: 1, title: 'Misi 1: Mengenal Bagian Tumbuhan', reward: '10 Poin & Lencana Penjelajah Daun', badgeId: 'leaf_explorer' },
            { id: 2, title: 'Misi 2: Mengumpulkan Bahan', reward: '20 Poin & Lencana Pengumpul Energi', badgeId: 'energy_collector' },
            { id: 3, title: 'Misi 3: Menyusun Proses Fotosintesis', reward: '30 Poin & Lencana Ahli Fotosintesis', badgeId: 'photo_master' }
          ].map((m) => {
            const isUnlocked = earnedBadges.includes(m.badgeId);
            const isActive = activeMission === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  playSound('click');
                  setActiveMission(m.id);
                }}
                className={`p-4 rounded-2xl border-2 border-[#1B4332] text-left transition-all flex items-center gap-3 ${
                  isActive
                    ? 'bg-[#F4A261] text-[#1B4332] shadow-[0_4px_0_#1B4332] -translate-y-0.5'
                    : isUnlocked
                    ? 'bg-[#D8F3DC] text-[#1B4332]'
                    : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8]'
                }`}
              >
                <BadgeShieldSVG id={m.badgeId} unlocked={isUnlocked} className="w-12 h-12 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-heading font-bold uppercase">MISI 0{m.id}</span>
                    {isUnlocked && (
                      <span className="bg-[#1B4332] text-[#FAF6EE] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Selesai
                      </span>
                    )}
                  </div>
                  <div className="font-heading font-bold text-sm truncate">{m.title}</div>
                  <div className="text-xs opacity-90 truncate mt-0.5">{m.reward}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* GAME 1: MISI MENGENAL BAGIAN TUMBUHAN */}
      {activeMission === 1 && (
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-[#1B4332]/20 pb-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase bg-[#D8F3DC] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
                MISI 1 • PENGHARGAAN: 10 POIN & LENCANA PENJELAJAH DAUN
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
                Mengenal Bagian Tumbuhan & Fungsinya
              </h3>
            </div>
            <button
              onClick={() => {
                playSound('click');
                setG1Matches({});
                setG1SelectedPart(null);
                setG1ClickedParts([]);
              }}
              className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#1B4332] bg-[#F4F1EA] hover:bg-[#E9C46A] px-3.5 py-2 rounded-xl border-2 border-[#1B4332]"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Ulangi Misi 1
            </button>
          </div>

          <KaptenKloro mood={g1Feedback.mood} message={g1Feedback.text} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Interactive Plant Diagram */}
            <div className="lg:col-span-5 bg-[#E8F3EE] p-5 rounded-2xl border-2 border-[#1B4332] text-center space-y-3">
              <h4 className="font-heading font-bold text-[#1B4332] text-sm">
                Klik titik nomor pada gambar tanaman atau pilih tombol di samping:
              </h4>
              <svg viewBox="0 0 280 240" className="w-full h-56 mx-auto bg-[#FFFDF9] rounded-xl border-2 border-[#1B4332]">
                <rect x="0" y="180" width="280" height="60" fill="#D4A373" stroke="#1B4332" strokeWidth="2.5" />
                <path d="M140 180 L140 65" stroke="#2D6A4F" strokeWidth="10" strokeLinecap="round" />
                <path d="M140 180 L100 220 M140 180 L140 225 M140 180 L180 220" stroke="#FAF6EE" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M138 130 C85 130 75 85 115 85 C130 85 135 110 138 130 Z" fill="#52B788" stroke="#1B4332" strokeWidth="3" />
                <path d="M142 110 C195 110 205 65 165 65 C150 65 145 90 142 110 Z" fill="#52B788" stroke="#1B4332" strokeWidth="3" />

                {/* Hotspots */}
                {[
                  { id: 'daun', cx: 105, cy: 105, num: 1, fill: '#E9C46A', msg: 'Kamu memilih DAUN! Sekarang klik fungsi Daun di kolom paling kanan.' },
                  { id: 'klorofil', cx: 175, cy: 88, num: 2, fill: '#52B788', msg: 'Kamu memilih KLOROFIL! Sekarang klik fungsi Klorofil di kolom kanan.' },
                  { id: 'stomata', cx: 140, cy: 65, num: 3, fill: '#48CAE4', msg: 'Kamu memilih STOMATA! Sekarang klik fungsi Stomata di kolom kanan.' },
                  { id: 'akar', cx: 140, cy: 205, num: 4, fill: '#F4A261', msg: 'Kamu memilih AKAR! Sekarang klik fungsi Akar di kolom kanan.' }
                ].map((spot) => (
                  <g
                    key={spot.id}
                    className="cursor-pointer"
                    onClick={() => {
                      playSound('click');
                      if (!g1ClickedParts.includes(spot.id)) setG1ClickedParts([...g1ClickedParts, spot.id]);
                      setG1SelectedPart(spot.id);
                      setG1Feedback({ mood: 'happy', text: spot.msg });
                    }}
                  >
                    <circle cx={spot.cx} cy={spot.cy} r="14" fill={spot.fill} stroke="#1B4332" strokeWidth="2.5" />
                    <text x={spot.cx - 4} y={spot.cy + 4} fontFamily="Fredoka, sans-serif" fontSize="12" fontWeight="700" fill="#1B4332">
                      {spot.num}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Matching Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <div className="text-xs font-heading font-bold uppercase text-[#2D6A4F] px-1">
                  1. Pilih Bagian Tumbuhan:
                </div>
                {PLANT_PARTS_GAME1.map((part, idx) => {
                  const isMatched = g1Matches[part.id];
                  const isSelected = g1SelectedPart === part.id;
                  return (
                    <button
                      key={part.id}
                      disabled={isMatched}
                      onClick={() => {
                        playSound('click');
                        setG1SelectedPart(part.id);
                      }}
                      className={`w-full p-4 rounded-2xl border-2 border-[#1B4332] font-heading font-bold text-left transition-all flex items-center justify-between ${
                        isMatched
                          ? 'bg-[#D8F3DC] text-[#1B4332] opacity-75'
                          : isSelected
                          ? 'bg-[#E9C46A] text-[#1B4332] shadow-[0_3px_0_#1B4332] -translate-y-0.5'
                          : 'bg-[#FFFDF9] text-[#1B4332] hover:bg-[#F4F1EA]'
                      }`}
                    >
                      <span>{idx + 1}. {part.name}</span>
                      {isMatched ? <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-heading font-bold uppercase text-[#2D6A4F] px-1">
                  2. Pasangkan dengan Fungsinya:
                </div>
                {[PLANT_PARTS_GAME1[1], PLANT_PARTS_GAME1[3], PLANT_PARTS_GAME1[0], PLANT_PARTS_GAME1[2]].map((part) => {
                  const isMatched = g1Matches[part.id];
                  return (
                    <button
                      key={part.id}
                      disabled={isMatched}
                      onClick={() => handleG1MatchAttempt(part.id)}
                      className={`w-full p-3.5 rounded-2xl border-2 border-[#1B4332] text-left text-xs sm:text-sm font-medium transition-all ${
                        isMatched
                          ? 'bg-[#D8F3DC] text-[#1B4332]'
                          : 'bg-[#F4F1EA] hover:bg-[#FEF3C7] text-[#1B4332]'
                      }`}
                    >
                      {isMatched && (
                        <div className="text-[11px] font-heading font-bold text-[#2D6A4F] uppercase mb-0.5">
                          ✓ Cocok: {part.name}
                        </div>
                      )}
                      {part.func}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GAME 2: MISI MENGUMPULKAN BAHAN FOTOSINTESIS */}
      {activeMission === 2 && (
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-[#1B4332]/20 pb-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase bg-[#FEF3C7] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
                MISI 2 • PENGHARGAAN: 20 POIN & LENCANA PENGUMPUL ENERGI
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
                Mengumpulkan 4 Bahan Fotosintesis
              </h3>
            </div>
            <button
              onClick={() => {
                playSound('click');
                setG2Collected([]);
                setG2Feedback({
                  mood: 'happy',
                  text: 'Pilih 4 bahan alami yang dibutuhkan tumbuhan untuk fotosintesis!'
                });
              }}
              className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#1B4332] bg-[#F4F1EA] hover:bg-[#E9C46A] px-3.5 py-2 rounded-xl border-2 border-[#1B4332]"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Ulangi Misi 2
            </button>
          </div>

          <KaptenKloro mood={g2Feedback.mood} message={g2Feedback.text} />

          {/* Leaf Kitchen Container */}
          <div className="bg-[#1B4332] text-[#FAF6EE] p-5 rounded-2xl border-2 border-[#1B4332] shadow-[4px_4px_0px_#52B788]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading font-bold text-sm sm:text-base">
                Wadah Pengumpul Bahan Fotosintesis (Dapur Daun)
              </span>
              <span className="bg-[#E9C46A] text-[#1B4332] font-heading font-bold px-3 py-1 rounded-full text-xs">
                {g2Collected.length} / 4 Bahan Terkumpul
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((slotIdx) => {
                const collectedId = g2Collected[slotIdx];
                const itemObj = GAME2_ITEMS.find((i) => i.id === collectedId);
                return (
                  <div
                    key={slotIdx}
                    className={`h-24 rounded-xl border-2 flex flex-col items-center justify-center p-2 transition-all ${
                      itemObj
                        ? 'bg-[#FFFDF9] text-[#1B4332] border-[#E9C46A]'
                        : 'bg-[#2D6A4F] border-dashed border-[#52B788] text-[#FAF6EE]/60'
                    }`}
                  >
                    {itemObj ? (
                      <>
                        <CustomIcon type={itemObj.iconType} className="w-10 h-10" />
                        <span className="text-xs font-heading font-bold text-center mt-1">{itemObj.name}</span>
                      </>
                    ) : (
                      <span className="text-xs font-heading font-semibold">Kotak Bahan #{slotIdx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Item Selection Grid */}
          <div>
            <h4 className="font-heading font-bold text-[#1B4332] text-sm mb-3">
              Klik kartu di bawah ini untuk memasukkannya ke Dapur Daun:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {GAME2_ITEMS.map((item) => {
                const isPicked = g2Collected.includes(item.id);
                return (
                  <button
                    key={item.id}
                    disabled={isPicked}
                    onClick={() => handleG2ItemClick(item)}
                    className={`p-4 rounded-2xl border-2 border-[#1B4332] text-center transition-all flex flex-col items-center gap-2 ${
                      isPicked
                        ? 'bg-[#D8F3DC] text-[#1B4332] opacity-60'
                        : 'bg-[#FFFDF9] hover:bg-[#FEF3C7] text-[#1B4332] shadow-[0_4px_0_#1B4332] active:translate-y-1 active:shadow-none'
                    }`}
                  >
                    <CustomIcon type={item.iconType} className="w-12 h-12" />
                    <span className="font-heading font-bold text-sm">{item.name}</span>
                    {isPicked && <span className="text-[11px] font-bold text-[#2D6A4F]">✓ Terkumpul</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* GAME 3: MISI MENJADI AHLI FOTOSINTESIS */}
      {activeMission === 3 && (
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-[#1B4332]/20 pb-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase bg-[#E0F2FE] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
                MISI 3 • PENGHARGAAN: 30 POIN & LENCANA AHLI FOTOSINTESIS
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
                Menyusun Urutan Proses Fotosintesis
              </h3>
            </div>
            <button
              onClick={() => {
                playSound('click');
                setG3Slots([null, null, null, null]);
                setG3Feedback({
                  mood: 'happy',
                  text: 'Susun kembali kartu tahapan fotosintesis dari Urutan 1 sampai Urutan 4!'
                });
              }}
              className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#1B4332] bg-[#F4F1EA] hover:bg-[#E9C46A] px-3.5 py-2 rounded-xl border-2 border-[#1B4332]"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Urutan
            </button>
          </div>

          <KaptenKloro mood={g3Feedback.mood} message={g3Feedback.text} />

          {/* 4 Target Sequence Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
            {g3Slots.map((slotItem, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 border-[#1B4332] min-h-[150px] flex flex-col justify-between transition-all ${
                  slotItem
                    ? 'bg-[#D8F3DC] text-[#1B4332] shadow-[3px_3px_0px_#1B4332]'
                    : 'bg-[#F4F1EA] border-dashed text-[#3A4D43]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-bold uppercase bg-[#FFFDF9] px-2.5 py-0.5 rounded-full border border-[#1B4332] text-[#1B4332]">
                    Urutan #{idx + 1}
                  </span>
                  {slotItem && <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />}
                </div>
                {slotItem ? (
                  <div className="my-2">
                    <CustomIcon type={slotItem.iconType} className="w-10 h-10 mb-1.5" />
                    <div className="font-heading font-bold text-sm">{slotItem.title}</div>
                    <div className="text-xs text-[#2B3A32] mt-1">{slotItem.text}</div>
                  </div>
                ) : (
                  <div className="text-center my-auto text-xs font-heading font-semibold">
                    Kotak Tahap {idx + 1} <br /> (Klik kartu di bawah)
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Shuffled Cards */}
          <div>
            <h4 className="font-heading font-bold text-[#1B4332] text-sm mb-3">
              Pilihan Kartu Tahapan (Masih Acak — Klik sesuai urutan 1 ➔ 2 ➔ 3 ➔ 4):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[GAME3_STAGES[2], GAME3_STAGES[0], GAME3_STAGES[3], GAME3_STAGES[1]].map((card) => {
                const isPlaced = g3Slots.some((s) => s?.id === card.id);
                return (
                  <button
                    key={card.id}
                    disabled={isPlaced}
                    onClick={() => handleG3CardSelect(card)}
                    className={`p-4 rounded-2xl border-2 border-[#1B4332] text-left transition-all flex items-start gap-3.5 ${
                      isPlaced
                        ? 'bg-[#F4F1EA] text-[#3A4D43] opacity-50'
                        : 'bg-[#FFFDF9] hover:bg-[#E0F2FE] text-[#1B4332] shadow-[0_4px_0_#1B4332] active:translate-y-1 active:shadow-none'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border-2 border-[#1B4332] flex items-center justify-center p-1.5 flex-shrink-0">
                      <CustomIcon type={card.iconType} className="w-9 h-9" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-base">{card.title}</div>
                      <p className="text-xs sm:text-sm text-[#3A4D43] mt-1">{card.text}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

}
