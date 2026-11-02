import React from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { CustomIcon } from '../svg/Illustrations';
import { QUIZ_QUESTIONS } from '../../data/photosynthesisData';

export default function QuizView({
  quizIndex,
  setQuizIndex,
  quizAnswers,
  setQuizAnswers,
  quizLocked,
  setQuizLocked,
  quizSubmitted,
  setQuizSubmitted,
  setPoints,
  navigateToSection,
  playSound
}) {
  const currentQ = QUIZ_QUESTIONS[quizIndex];
  const currentAnswer = quizAnswers[currentQ.id];
  const isCurrentLocked = quizLocked[currentQ.id];
  const totalAnswered = Object.keys(quizAnswers).length;

  const handleSelectQuizOption = (optionIdx) => {
    if (isCurrentLocked) return;
    const isCorrect = optionIdx === currentQ.correctAnswer;
    setQuizAnswers((prev) => ({ ...prev, [currentQ.id]: optionIdx }));
    setQuizLocked((prev) => ({ ...prev, [currentQ.id]: true }));

    if (isCorrect) {
      playSound('correct');
      setPoints((prev) => prev + 5);
    } else {
      playSound('wrong');
    }
  };

  const handleResetQuiz = () => {
    playSound('click');
    setQuizAnswers({});
    setQuizLocked({});
    setQuizIndex(0);
    setQuizSubmitted(false);
  };


return (
    <div className="space-y-6">
      {/* Top Quiz Header */}
      <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-heading font-bold uppercase bg-[#E9C46A] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
              LATIHAN PEMAHAMAN • 10 SOAL INTERAKTIF
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
              Kuis Interaktif Fotosintesis
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-heading font-bold bg-[#F4F1EA] text-[#1B4332] px-4 py-2 rounded-xl border-2 border-[#1B4332]">
              Terjawab: {totalAnswered} / 10 Soal
            </span>
            <button
              onClick={handleResetQuiz}
              className="text-xs font-heading font-bold text-[#1B4332] bg-[#FFFDF9] hover:bg-[#E76F51] hover:text-white px-3.5 py-2 rounded-xl border-2 border-[#1B4332] flex items-center gap-1 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Ulangi Kuis
            </button>
          </div>
        </div>

        {/* Question Number Pills */}
        <div className="flex flex-wrap gap-2">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const ans = quizAnswers[q.id];
            const answered = ans !== undefined;
            const right = ans === q.correctAnswer;
            return (
              <button
                key={q.id}
                onClick={() => {
                  playSound('click');
                  setQuizIndex(idx);
                }}
                className={`w-10 h-10 rounded-xl font-heading font-bold text-xs transition-all border-2 border-[#1B4332] ${
                  quizIndex === idx
                    ? 'bg-[#1B4332] text-[#FAF6EE] -translate-y-0.5 shadow-[0_3px_0_#52B788]'
                    : answered
                    ? right
                      ? 'bg-[#52B788] text-[#1B4332]'
                      : 'bg-[#E76F51] text-white'
                    : 'bg-[#F4F1EA] text-[#1B4332] hover:bg-[#E9E4D8]'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-heading font-bold uppercase bg-[#D8F3DC] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
            Soal {quizIndex + 1} dari 10 • Aspek: {currentQ.aspect}
          </span>
          <span className="text-xs font-heading font-bold text-[#2D6A4F]">
            Tipe Soal: {currentQ.type === 'multiple_choice' ? 'Pilihan Ganda' : currentQ.type === 'true_false' ? 'Benar / Salah' : 'Mencocokkan Gambar'}
          </span>
        </div>

        {currentQ.visualPrompt && (
          <div className="bg-[#F4F1EA] p-5 rounded-2xl border-2 border-[#1B4332] flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FFFDF9] p-2.5 rounded-2xl border-2 border-[#1B4332] flex items-center justify-center flex-shrink-0">
              <CustomIcon type={currentQ.visualPrompt.iconType} className="w-12 h-12" />
            </div>
            <div>
              <div className="text-xs font-heading font-bold uppercase text-[#2D6A4F]">Petunjuk Ilustrasi:</div>
              <div className="font-heading font-bold text-[#1B4332] text-sm sm:text-base">{currentQ.visualPrompt.label}</div>
            </div>
          </div>
        )}

        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1B4332] leading-snug">
          {currentQ.question}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {currentQ.options.map((opt, idx) => {
            const isSelected = currentAnswer === idx;
            const isCorrectOption = idx === currentQ.correctAnswer;

            let btnStyle = 'bg-[#F4F1EA] hover:bg-[#FEF3C7] text-[#1B4332] shadow-[0_4px_0_#1B4332] active:translate-y-1 active:shadow-none';
            if (isCurrentLocked) {
              if (isCorrectOption) {
                btnStyle = 'bg-[#D8F3DC] text-[#1B4332] font-bold';
              } else if (isSelected && !isCorrectOption) {
                btnStyle = 'bg-[#E76F51] text-white';
              } else {
                btnStyle = 'bg-[#F4F1EA] text-[#3A4D43] opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isCurrentLocked}
                onClick={() => handleSelectQuizOption(idx)}
                className={`p-4 rounded-2xl border-2 border-[#1B4332] text-left font-medium text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#FFFDF9] border-2 border-[#1B4332] flex items-center justify-center font-heading font-bold text-xs text-[#1B4332] flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </div>
                {isCurrentLocked && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-[#1B4332] flex-shrink-0" />}
                {isCurrentLocked && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-white flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {isCurrentLocked && (
          <div className={`p-5 rounded-2xl border-2 border-[#1B4332] ${
            currentAnswer === currentQ.correctAnswer ? 'bg-[#D8F3DC]' : 'bg-[#FEF3C7]'
          }`}>
            <div className="font-heading font-bold text-base text-[#1B4332] mb-1">
              {currentAnswer === currentQ.correctAnswer
                ? 'Jawabanmu BENAR! (+5 Poin)'
                : 'Jawabanmu Kurang Tepat — Simak Penjelasan Berikut:'}
            </div>
            <p className="text-sm text-[#1B4332] leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}

        <div className="pt-4 border-t-2 border-dashed border-[#1B4332]/20 flex flex-wrap items-center justify-between gap-3">
          <button
            disabled={quizIndex === 0}
            onClick={() => {
              playSound('click');
              setQuizIndex((i) => Math.max(0, i - 1));
            }}
            className="px-4 py-2.5 rounded-xl font-heading font-bold text-sm bg-[#F4F1EA] text-[#1B4332] border-2 border-[#1B4332] disabled:opacity-40"
          >
            Soal Sebelumnya
          </button>

          {quizIndex < QUIZ_QUESTIONS.length - 1 ? (
            <button
              onClick={() => {
                playSound('click');
                setQuizIndex((i) => Math.min(QUIZ_QUESTIONS.length - 1, i + 1));
              }}
              className="px-5 py-2.5 rounded-xl font-heading font-bold text-sm bg-[#E9C46A] hover:bg-[#F4A261] text-[#1B4332] border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332]"
            >
              Soal Selanjutnya
            </button>
          ) : (
            <button
              onClick={() => {
                playSound('badge');
                setQuizSubmitted(true);
                navigateToSection('evaluasi');
              }}
              className="px-6 py-3 rounded-2xl font-heading font-bold text-sm bg-[#52B788] hover:bg-[#40916C] text-[#1B4332] border-2 border-[#1B4332] shadow-[0_4px_0_#1B4332]"
            >
              Selesai & Lihat Evaluasi Akhir
            </button>
          )}
        </div>
      </div>
    </div>
  );

}
