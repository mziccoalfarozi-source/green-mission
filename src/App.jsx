import React, { useState } from 'react';
import {
  Home, BookOpen, HelpCircle, PlayCircle, Gamepad2, CheckSquare,
  Award, User, Bookmark, Volume2, VolumeX,
  Star, Plus, Menu, X, CheckCircle2
} from 'lucide-react';

import { BADGES_DATA } from './data/photosynthesisData';
import { useSoundEffects } from './utils/sound';
import { CustomIcon, BadgeShieldSVG } from './components/svg/Illustrations';

import HomeView from './components/views/HomeView';
import GuideView from './components/views/GuideView';
import MateriView from './components/views/MateriView';
import VideoView from './components/views/VideoView';
import GameView from './components/views/GameView';
import QuizView from './components/views/QuizView';
import EvalView from './components/views/EvalView';
import ProfileView from './components/views/ProfileView';
import RefView from './components/views/RefView';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [studentName, setStudentName] = useState('Penjelajah Cilik');
  const [nameInput, setNameInput] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gamification State
  const [points, setPoints] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [completedModules, setCompletedModules] = useState([]);
  const [badgeModal, setBadgeModal] = useState(null);
  const [showBadgeDrawer, setShowBadgeDrawer] = useState(false);
  const [showObjectivesModal, setShowObjectivesModal] = useState(false);

  // Materi Sub-navigation
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [processStep, setProcessStep] = useState(1);
  const [selectedIngredient, setSelectedIngredient] = useState(0);
  const [selectedBenefitTab, setSelectedBenefitTab] = useState('tumbuhan');

  // Video State
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [videoMode, setVideoMode] = useState('story');
  const [storySlideIdx, setStorySlideIdx] = useState(0);
  const [videoQuizAnswered, setVideoQuizAnswered] = useState({});

  // Game Edukasi State (3 Missions)
  const [activeMission, setActiveMission] = useState(1);

  // Game 1 State
  const [g1ClickedParts, setG1ClickedParts] = useState([]);
  const [g1SelectedPart, setG1SelectedPart] = useState(null);
  const [g1Matches, setG1Matches] = useState({});
  const [g1Feedback, setG1Feedback] = useState({
    mood: 'happy',
    text: 'Klik bagian tumbuhan pada ilustrasi di sebelah kiri, lalu pasangkan setiap bagian dengan fungsinya di sebelah kanan!'
  });

  // Game 2 State
  const [g2Collected, setG2Collected] = useState([]);
  const [g2Feedback, setG2Feedback] = useState({
    mood: 'happy',
    text: 'Pilih 4 bahan alami yang benar-benar dibutuhkan tumbuhan untuk memasak makanannya! Hati-hati ada benda pengecoh.'
  });

  // Game 3 State
  const [g3Slots, setG3Slots] = useState([null, null, null, null]);
  const [g3Feedback, setG3Feedback] = useState({
    mood: 'happy',
    text: 'Klik kartu tahapan di bawah untuk menyusunnya ke Kotak Urutan 1 sampai 4 secara runtut!'
  });

  // Kuis Interaktif State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizLocked, setQuizLocked] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Profil Penyusun State
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Muhammad Zicco Alfarozi',
      npm: '247006111113',
      role: 'Ketua & Pengembang Media Pembelajaran',
      prodi: 'Teknik Informatika - Universitas Siliwangi'
    }
  ]);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    npm: '',
    role: '',
    prodi: 'Teknik Informatika - Universitas Siliwangi'
  });

  const { muted, setMuted, playSound } = useSoundEffects();

  const awardBadgeAndPoints = (badgeId, bonusPoints) => {
    if (!earnedBadges.includes(badgeId)) {
      const badgeObj = BADGES_DATA.find((b) => b.id === badgeId);
      setEarnedBadges((prev) => [...prev, badgeId]);
      setPoints((prev) => prev + bonusPoints);
      playSound('badge');
      if (badgeObj) setBadgeModal(badgeObj);
    }
  };

  const markModuleCompleted = (modIdx) => {
    if (!completedModules.includes(modIdx)) {
      setCompletedModules((prev) => [...prev, modIdx]);
      setPoints((prev) => prev + 5);
      playSound('correct');
    } else {
      playSound('click');
    }
  };


  const navigateToSection = (tabId, optionalModuleIdx = null) => {
    playSound('click');
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (optionalModuleIdx !== null) setCurrentModuleIndex(optionalModuleIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NAV_ITEMS = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'petunjuk', label: 'Petunjuk', icon: HelpCircle },
    { id: 'materi', label: 'Materi', icon: BookOpen },
    { id: 'video', label: 'Video', icon: PlayCircle },
    { id: 'game', label: 'Misi Game', icon: Gamepad2 },
    { id: 'kuis', label: 'Kuis', icon: CheckSquare },
    { id: 'evaluasi', label: 'Evaluasi', icon: Award },
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'referensi', label: 'Referensi', icon: Bookmark }
  ];


  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name.trim()) return;
    playSound('correct');
    setTeamMembers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newMember.name.trim(),
        npm: newMember.npm.trim() || '-',
        role: newMember.role.trim() || 'Anggota Penyusun Media',
        prodi: newMember.prodi.trim() || 'Universitas Siliwangi'
      }
    ]);
    setNewMember({ name: '', npm: '', role: '', prodi: 'Teknik Informatika - Universitas Siliwangi' });
    setShowAddMemberModal(false);
  };


  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#1B4332] selection:bg-[#E9C46A] selection:text-[#1B4332]"
      style={{
        backgroundImage: 'radial-gradient(#1B4332 0.75px, transparent 0.75px)',
        backgroundSize: '24px 24px',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
    >
      {/* Inject Authentic Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        .font-heading {
          font-family: 'Fredoka', sans-serif;
        }
      `}</style>

      {/* ========================================== */}
      {/* TOP FIELD JOURNAL HUD & NAVIGATION BAR     */}
      {/* ========================================== */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9] border-b-[3px] border-[#1B4332]">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => navigateToSection('beranda')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#52B788] border-2 border-[#1B4332] shadow-[2px_2px_0px_#1B4332] flex items-center justify-center p-1.5 group-hover:bg-[#E9C46A] transition">
              <CustomIcon type="leaf" className="w-8 h-8" />
            </div>
            <div>
              <div className="font-heading font-bold text-[#1B4332] text-base sm:text-lg leading-none flex items-center gap-1.5">
                Green Mission
                <span className="hidden md:inline-block text-[10px] bg-[#E9C46A] text-[#1B4332] px-2 py-0.5 rounded-md border border-[#1B4332]">
                  IPAS IV SD
                </span>
              </div>
              <div className="text-[11px] text-[#3A4D43] font-semibold hidden sm:block mt-0.5">
                Petualangan Rahasia Fotosintesis
              </div>
            </div>
          </button>

          {/* Gamification Stats Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#F4F1EA] border-2 border-[#1B4332] px-3 py-1 rounded-xl text-xs font-heading font-bold text-[#1B4332]">
              <User className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span className="truncate max-w-[130px]">{studentName}</span>
            </div>

            {/* Points Counter */}
            <div className="flex items-center gap-1.5 bg-[#E9C46A] border-2 border-[#1B4332] shadow-[2px_2px_0px_#1B4332] px-3 py-1 rounded-xl text-xs sm:text-sm font-heading font-bold text-[#1B4332]">
              <Star className="w-4 h-4 fill-[#1B4332] text-[#1B4332]" />
              <span>{points} Poin</span>
            </div>

            {/* Badges Button */}
            <button
              onClick={() => {
                playSound('click');
                setShowBadgeDrawer(true);
              }}
              className="flex items-center gap-1.5 bg-[#48CAE4] hover:bg-[#90E0EF] border-2 border-[#1B4332] shadow-[2px_2px_0px_#1B4332] px-3 py-1 rounded-xl text-xs sm:text-sm font-heading font-bold text-[#1B4332] transition"
              title="Lihat Koleksi Lencana"
            >
              <Award className="w-4 h-4" />
              <span>{earnedBadges.length}/3</span>
              <span className="hidden sm:inline">Lencana</span>
            </button>

            {/* Sound Mute Toggle */}
            <button
              onClick={() => setMuted(!muted)}
              className={`p-2 rounded-xl border-2 border-[#1B4332] shadow-[2px_2px_0px_#1B4332] transition ${
                muted ? 'bg-[#F4F1EA] text-[#3A4D43]' : 'bg-[#D8F3DC] text-[#1B4332]'
              }`}
              title={muted ? 'Aktifkan Suara' : 'Matikan Suara'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-[#1B4332] text-[#FAF6EE] border-2 border-[#1B4332]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Bar (9 Sections) */}
        <nav className="hidden xl:block border-t-2 border-[#1B4332] bg-[#F4F1EA]">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs border-2 transition-all ${
                    isActive
                      ? 'bg-[#1B4332] text-[#FAF6EE] border-[#1B4332] shadow-[0_2px_0_#52B788]'
                      : 'border-transparent text-[#1B4332] hover:bg-[#E9C46A]/60 hover:border-[#1B4332]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FFFDF9] border-t-2 border-[#1B4332] px-4 py-3 grid grid-cols-3 gap-2 shadow-lg">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl font-heading font-bold text-xs gap-1 border-2 border-[#1B4332] ${
                    isActive ? 'bg-[#1B4332] text-[#FAF6EE]' : 'bg-[#F4F1EA] text-[#1B4332]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* ========================================== */}
      {/* MAIN CONTENT CONTAINER                     */}
      {/* ========================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8">
        {activeTab === 'beranda' && (
          <HomeView
            studentName={studentName}
            setStudentName={setStudentName}
            nameInput={nameInput}
            setNameInput={setNameInput}
            earnedBadges={earnedBadges}
            completedModules={completedModules}
            setShowObjectivesModal={setShowObjectivesModal}
            navigateToSection={navigateToSection}
            playSound={playSound}
            quizAnswers={quizAnswers}
            quizSubmitted={quizSubmitted}
          />
        )}
        {activeTab === 'petunjuk' && (
          <GuideView />
        )}
        {activeTab === 'materi' && (
          <MateriView
            currentModuleIndex={currentModuleIndex}
            setCurrentModuleIndex={setCurrentModuleIndex}
            completedModules={completedModules}
            markModuleCompleted={markModuleCompleted}
            processStep={processStep}
            setProcessStep={setProcessStep}
            selectedIngredient={selectedIngredient}
            setSelectedIngredient={setSelectedIngredient}
            selectedBenefitTab={selectedBenefitTab}
            setSelectedBenefitTab={setSelectedBenefitTab}
            navigateToSection={navigateToSection}
            playSound={playSound}
          />
        )}
        {activeTab === 'video' && (
          <VideoView
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            videoMode={videoMode}
            setVideoMode={setVideoMode}
            storySlideIdx={storySlideIdx}
            setStorySlideIdx={setStorySlideIdx}
            videoQuizAnswered={videoQuizAnswered}
            setVideoQuizAnswered={setVideoQuizAnswered}
            awardBadgeAndPoints={awardBadgeAndPoints}
            playSound={playSound}
          />
        )}
        {activeTab === 'game' && (
          <GameView
            activeMission={activeMission}
            setActiveMission={setActiveMission}
            g1ClickedParts={g1ClickedParts}
            setG1ClickedParts={setG1ClickedParts}
            g1SelectedPart={g1SelectedPart}
            setG1SelectedPart={setG1SelectedPart}
            g1Matches={g1Matches}
            setG1Matches={setG1Matches}
            g1Feedback={g1Feedback}
            setG1Feedback={setG1Feedback}
            g2Collected={g2Collected}
            setG2Collected={setG2Collected}
            g2Feedback={g2Feedback}
            setG2Feedback={setG2Feedback}
            g3Slots={g3Slots}
            setG3Slots={setG3Slots}
            g3Feedback={g3Feedback}
            setG3Feedback={setG3Feedback}
            earnedBadges={earnedBadges}
            awardBadgeAndPoints={awardBadgeAndPoints}
            navigateToSection={navigateToSection}
            playSound={playSound}
          />
        )}
        {activeTab === 'kuis' && (
          <QuizView
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
            quizLocked={quizLocked}
            setQuizLocked={setQuizLocked}
            quizSubmitted={quizSubmitted}
            setQuizSubmitted={setQuizSubmitted}
            setPoints={setPoints}
            navigateToSection={navigateToSection}
            playSound={playSound}
          />
        )}
        {activeTab === 'evaluasi' && (
          <EvalView
            studentName={studentName}
            quizAnswers={quizAnswers}
            points={points}
            earnedBadges={earnedBadges}
            navigateToSection={navigateToSection}
            playSound={playSound}
          />
        )}
        {activeTab === 'profil' && (
          <ProfileView
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            setShowAddMemberModal={setShowAddMemberModal}
            playSound={playSound}
          />
        )}
        {activeTab === 'referensi' && (
          <RefView />
        )}
      </main>

      {/* ========================================== */}
      {/* FOOTER                                     */}
      {/* ========================================== */}
      <footer className="bg-[#1B4332] text-[#FAF6EE] py-6 px-4 border-t-[3px] border-[#1B4332] mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="font-heading font-bold flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#52B788]" />
            <span>Green Mission: Petualangan Rahasia Fotosintesis — Media Pembelajaran IPAS Kelas IV SD</span>
          </div>
          <div className="flex flex-wrap gap-3 font-semibold">
            <button onClick={() => navigateToSection('profil')} className="hover:text-[#E9C46A] underline">
              Profil Penyusun
            </button>
            <span>•</span>
            <button onClick={() => navigateToSection('referensi')} className="hover:text-[#E9C46A] underline">
              Referensi
            </button>
            <span>•</span>
            <button onClick={() => navigateToSection('evaluasi')} className="hover:text-[#E9C46A] underline">
              Evaluasi Akhir
            </button>
          </div>
        </div>
      </footer>

      {/* ========================================== */}
      {/* MODAL 1: KOLEKSI LENCANA                   */}
      {/* ========================================== */}
      {showBadgeDrawer && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-lg w-full p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[8px_8px_0px_#1B4332] space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-[#1B4332]">
                Koleksi Lencana Kehormatan
              </h3>
              <button
                onClick={() => setShowBadgeDrawer(false)}
                className="p-1.5 rounded-xl bg-[#F4F1EA] border-2 border-[#1B4332] text-[#1B4332]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {BADGES_DATA.map((b) => {
                const isUnlocked = earnedBadges.includes(b.id);
                return (
                  <div
                    key={b.id}
                    className={`p-4 rounded-2xl border-2 border-[#1B4332] flex items-center gap-4 ${
                      isUnlocked ? 'bg-[#FEF3C7]' : 'bg-[#F4F1EA] opacity-70'
                    }`}
                  >
                    <BadgeShieldSVG id={b.id} unlocked={isUnlocked} className="w-14 h-14 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-[#1B4332]">{b.title}</h4>
                        <span className="text-xs font-heading font-bold px-2.5 py-0.5 rounded-full bg-[#FFFDF9] border border-[#1B4332]">
                          +{b.points} Poin
                        </span>
                      </div>
                      <p className="text-xs text-[#2B3A32] mt-1">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowBadgeDrawer(false);
                  navigateToSection('game');
                }}
                className="bg-[#52B788] hover:bg-[#40916C] text-[#1B4332] font-heading font-bold px-5 py-2.5 rounded-xl text-sm border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332]"
              >
                Buka Misi Permainan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 2: NEW BADGE UNLOCKED CELEBRATION    */}
      {/* ========================================== */}
      {badgeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-md w-full p-8 border-[3px] border-[#1B4332] shadow-[8px_8px_0px_#1B4332] text-center space-y-4">
            <div className="text-xs font-heading font-bold uppercase tracking-widest text-[#E76F51]">
              PENGHARGAAN BARU TERBUKA!
            </div>
            <div className="flex justify-center">
              <BadgeShieldSVG id={badgeModal.id} unlocked={true} className="w-24 h-24" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#1B4332]">{badgeModal.title}</h3>
            <p className="text-sm text-[#2B3A32] leading-relaxed">{badgeModal.desc}</p>
            <div className="inline-block bg-[#E9C46A] text-[#1B4332] font-heading font-bold px-4 py-1.5 rounded-full text-sm border-2 border-[#1B4332]">
              +{badgeModal.points} Poin Ditambahkan!
            </div>
            <div className="pt-2">
              <button
                onClick={() => setBadgeModal(null)}
                className="w-full bg-[#52B788] hover:bg-[#40916C] text-[#1B4332] font-heading font-bold py-3 rounded-2xl border-2 border-[#1B4332] shadow-[0_4px_0_#1B4332]"
              >
                Lanjutkan Petualangan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 3: TUJUAN PEMBELAJARAN               */}
      {/* ========================================== */}
      {showObjectivesModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-lg w-full p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[8px_8px_0px_#1B4332] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-[#1B4332]">
                Tujuan Pembelajaran IPAS Kelas IV SD
              </h3>
              <button
                onClick={() => setShowObjectivesModal(false)}
                className="p-1.5 rounded-xl bg-[#F4F1EA] border-2 border-[#1B4332] text-[#1B4332]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#2B3A32]">
              Setelah menggunakan media pembelajaran <strong>Green Mission</strong>, siswa diharapkan mampu:
            </p>
            <ul className="space-y-2.5 text-sm text-[#1B4332] font-medium">
              {[
                'Menjelaskan pengertian fotosintesis.',
                'Mengetahui bahan-bahan yang dibutuhkan dalam proses fotosintesis.',
                'Mengenali fungsi akar, daun, stomata, dan klorofil.',
                'Menjelaskan proses fotosintesis secara sederhana.',
                'Mengetahui hasil dan manfaat fotosintesis bagi kehidupan.'
              ].map((goal, i) => (
                <li key={i} className="flex items-center gap-2.5 bg-[#D8F3DC] p-3 rounded-xl border-2 border-[#1B4332]">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowObjectivesModal(false)}
              className="w-full bg-[#F4A261] hover:bg-[#E9C46A] text-[#1B4332] font-heading font-bold py-3 rounded-2xl border-2 border-[#1B4332] shadow-[0_4px_0_#1B4332]"
            >
              Siap Belajar!
            </button>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 4: TAMBAH ANGGOTA PENYUSUN           */}
      {/* ========================================== */}
      {showAddMemberModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <form
            onSubmit={handleAddMember}
            className="bg-[#FFFDF9] rounded-3xl max-w-md w-full p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[8px_8px_0px_#1B4332] space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-[#1B4332]">Tambah Anggota Penyusun</h3>
              <button
                type="button"
                onClick={() => setShowAddMemberModal(false)}
                className="p-1.5 rounded-xl bg-[#F4F1EA] border-2 border-[#1B4332] text-[#1B4332]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <label className="block font-heading font-bold text-[#1B4332] mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Nama lengkap mahasiswa..."
                  className="w-full px-3.5 py-2 rounded-xl border-2 border-[#1B4332] bg-white"
                />
              </div>
              <div>
                <label className="block font-heading font-bold text-[#1B4332] mb-1">NPM / NIM</label>
                <input
                  type="text"
                  value={newMember.npm}
                  onChange={(e) => setNewMember({ ...newMember, npm: e.target.value })}
                  placeholder="Nomor Induk Mahasiswa..."
                  className="w-full px-3.5 py-2 rounded-xl border-2 border-[#1B4332] bg-white"
                />
              </div>
              <div>
                <label className="block font-heading font-bold text-[#1B4332] mb-1">Peran dalam Proyek</label>
                <input
                  type="text"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  placeholder="Contoh: Penyusun Materi / Desainer"
                  className="w-full px-3.5 py-2 rounded-xl border-2 border-[#1B4332] bg-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddMemberModal(false)}
                className="px-4 py-2 rounded-xl bg-[#F4F1EA] font-heading font-bold text-sm text-[#1B4332] border-2 border-[#1B4332]"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#52B788] text-[#1B4332] font-heading font-bold text-sm border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332]"
              >
                Simpan Anggota
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
