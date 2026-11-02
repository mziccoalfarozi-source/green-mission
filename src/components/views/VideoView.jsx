import React from 'react';
import { Check } from 'lucide-react';
import { CustomIcon, KaptenKloro } from '../svg/Illustrations';
import { VIDEOS_DATA } from '../../data/photosynthesisData';

export default function VideoView({
  selectedVideo,
  setSelectedVideo,
  videoMode,
  setVideoMode,
  storySlideIdx,
  setStorySlideIdx,
  videoQuizAnswered,
  setVideoQuizAnswered,
  awardBadgeAndPoints,
  playSound
}) {

    const vid = VIDEOS_DATA[selectedVideo];
    const currentSlide = vid.storySlides[storySlideIdx] || vid.storySlides[0];
    const answeredChoice = videoQuizAnswered[vid.id];

    return (
      <div className="space-y-6">
        <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332]">
          <KaptenKloro
            mood="happy"
            message="Pilih 4 topik video pembelajaran di bawah ini! Kamu dapat menggunakan mode 'Papan Cerita Visual' (interaktif & hemat kuota) atau 'Putar Video YouTube'."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Playlist */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-heading font-bold text-[#1B4332] text-lg px-1">
              Daftar Topik Video (4 Materi)
            </h3>
            {VIDEOS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  playSound('click');
                  setSelectedVideo(idx);
                  setStorySlideIdx(0);
                }}
                className={`w-full text-left p-4 rounded-2xl border-2 border-[#1B4332] transition-all flex items-start gap-3 ${
                  selectedVideo === idx
                    ? 'bg-[#1B4332] text-[#FAF6EE] shadow-[0_4px_0_#52B788]'
                    : 'bg-[#FFFDF9] text-[#1B4332] hover:bg-[#F4F1EA] shadow-[0_3px_0_#1B4332]'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold flex-shrink-0 border-2 border-[#1B4332] ${
                  selectedVideo === idx ? 'bg-[#E9C46A] text-[#1B4332]' : 'bg-[#F4F1EA] text-[#1B4332]'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className={`text-xs font-bold uppercase ${selectedVideo === idx ? 'text-[#E9C46A]' : 'text-[#2D6A4F]'}`}>
                    {item.category} • {item.duration}
                  </div>
                  <div className="font-heading font-bold text-sm mt-0.5 leading-snug">{item.title}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Player & Reflection */}
          <div className="lg:col-span-8">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[3px] border-[#1B4332] shadow-[6px_6px_0px_#1B4332] space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-heading font-bold uppercase bg-[#E0F2FE] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
                    {vid.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1B4332] mt-1.5">{vid.title}</h3>
                </div>

                <div className="flex bg-[#F4F1EA] p-1 rounded-xl border-2 border-[#1B4332]">
                  <button
                    onClick={() => {
                      playSound('click');
                      setVideoMode('story');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition ${
                      videoMode === 'story' ? 'bg-[#52B788] text-[#1B4332] border border-[#1B4332]' : 'text-[#3A4D43]'
                    }`}
                  >
                    Papan Cerita Visual
                  </button>
                  <button
                    onClick={() => {
                      playSound('click');
                      setVideoMode('youtube');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition ${
                      videoMode === 'youtube' ? 'bg-[#E76F51] text-white border border-[#1B4332]' : 'text-[#3A4D43]'
                    }`}
                  >
                    Putar YouTube
                  </button>
                </div>
              </div>

              {videoMode === 'story' ? (
                <div className="bg-[#E8F3EE] rounded-2xl p-6 sm:p-8 min-h-[260px] flex flex-col justify-between border-2 border-[#1B4332]">
                  <div className="flex justify-between items-center text-xs font-heading font-bold text-[#2D6A4F]">
                    <span>PAPAN CERITA VISUAL INTERAKTIF</span>
                    <span>Bagian {storySlideIdx + 1} / {vid.storySlides.length}</span>
                  </div>

                  <div className="my-6 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[#FFFDF9] border-2 border-[#1B4332] shadow-[3px_3px_0px_#1B4332] flex items-center justify-center p-3">
                      <CustomIcon type={currentSlide.icon} className="w-14 h-14" />
                    </div>
                    <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332]">{currentSlide.title}</h4>
                    <p className="text-sm sm:text-base text-[#1B4332] max-w-xl mx-auto leading-relaxed">
                      {currentSlide.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-[#1B4332]/20">
                    <button
                      disabled={storySlideIdx === 0}
                      onClick={() => {
                        playSound('click');
                        setStorySlideIdx((s) => Math.max(0, s - 1));
                      }}
                      className="px-4 py-2 rounded-xl bg-[#FFFDF9] border-2 border-[#1B4332] disabled:opacity-40 text-xs font-heading font-bold text-[#1B4332]"
                    >
                      Sebelumnya
                    </button>
                    <div className="flex gap-1.5">
                      {vid.storySlides.map((_, i) => (
                        <span
                          key={i}
                          className={`h-2.5 rounded-full border border-[#1B4332] transition-all ${
                            i === storySlideIdx ? 'bg-[#F4A261] w-6' : 'bg-[#FFFDF9] w-2.5'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      disabled={storySlideIdx === vid.storySlides.length - 1}
                      onClick={() => {
                        playSound('click');
                        setStorySlideIdx((s) => Math.min(vid.storySlides.length - 1, s + 1));
                      }}
                      className="px-4 py-2 rounded-xl bg-[#E9C46A] border-2 border-[#1B4332] disabled:opacity-40 text-xs font-heading font-bold text-[#1B4332]"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden border-2 border-[#1B4332] bg-black aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <p className="text-sm text-[#1B4332] bg-[#F4F1EA] p-4 rounded-xl border-2 border-[#1B4332]">
                <strong>Ringkasan Materi Video:</strong> {vid.summary}
              </p>

              {/* Quick Reflection Check */}
              <div className="bg-[#FEF3C7] p-5 rounded-2xl border-2 border-[#1B4332] space-y-3">
                <div className="text-xs font-heading font-bold uppercase text-[#1B4332]">
                  Pertanyaan Kilat Setelah Menonton:
                </div>
                <p className="font-heading font-bold text-[#1B4332] text-sm sm:text-base">{vid.quickQuestion.q}</p>
                <div className="flex flex-wrap gap-2.5">
                  {vid.quickQuestion.options.map((opt, oIdx) => {
                    const isSelected = answeredChoice === oIdx;
                    const isRight = oIdx === vid.quickQuestion.answer;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => {
                          setVideoQuizAnswered((prev) => ({ ...prev, [vid.id]: oIdx }));
                          playSound(isRight ? 'correct' : 'wrong');
                        }}
                        className={`px-4 py-2 rounded-xl font-heading font-bold text-xs sm:text-sm border-2 border-[#1B4332] transition ${
                          isSelected
                            ? isRight
                              ? 'bg-[#52B788] text-[#1B4332]'
                              : 'bg-[#E76F51] text-white'
                            : 'bg-[#FFFDF9] text-[#1B4332] hover:bg-[#F4F1EA]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answeredChoice !== undefined && (
                  <div className="text-xs font-bold text-[#1B4332]">
                    {answeredChoice === vid.quickQuestion.answer
                      ? 'Tepat sekali! Kamu memahami isi materi video ini.'
                      : 'Belum tepat, ayo coba pilih jawaban lainnya!'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
