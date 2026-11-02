import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function ProfileView({
  teamMembers,
  setTeamMembers,
  setShowAddMemberModal,
  playSound
}) {
return (
    <div className="space-y-6">
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-heading font-bold uppercase bg-[#D8F3DC] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
            IDENTITAS PENGEMBANG MEDIA
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
            Profil Penyusun Media Pembelajaran
          </h2>
          <p className="text-xs sm:text-sm text-[#3A4D43] mt-0.5">
            Proyek Multimedia Pembelajaran Interaktif (MPI) Berbasis Website • IPAS Kelas IV SD
          </p>
        </div>
        <button
          onClick={() => {
            playSound('click');
            setShowAddMemberModal(true);
          }}
          className="flex items-center gap-2 bg-[#E9C46A] hover:bg-[#F4A261] text-[#1B4332] font-heading font-bold px-4 py-2.5 rounded-2xl text-xs sm:text-sm border-2 border-[#1B4332] shadow-[0_3px_0_#1B4332]"
        >
          <Plus className="w-4 h-4" /> Tambah Anggota Penyusun
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((m, idx) => (
          <div
            key={m.id}
            className="bg-[#FFFDF9] rounded-3xl p-6 border-[2.5px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332] flex items-start gap-4 relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#52B788] border-2 border-[#1B4332] text-[#1B4332] flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
              0{idx + 1}
            </div>
            <div className="space-y-1 flex-1">
              <div className="text-xs font-heading font-bold text-[#2D6A4F] uppercase">{m.role}</div>
              <h3 className="font-heading text-lg font-bold text-[#1B4332]">{m.name}</h3>
              <div className="text-xs sm:text-sm font-bold text-[#2B3A32]">NPM / NIM: {m.npm}</div>
              <div className="text-xs text-[#3A4D43]">{m.prodi}</div>
            </div>
            {teamMembers.length > 1 && (
              <button
                onClick={() => {
                  playSound('click');
                  setTeamMembers((prev) => prev.filter((item) => item.id !== m.id));
                }}
                className="text-[#3A4D43] hover:text-[#E76F51] p-1.5"
                title="Hapus anggota"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#F4F1EA] rounded-3xl p-6 border-[2.5px] border-[#1B4332] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border-2 border-[#1B4332]">
          <div className="text-xs font-heading font-bold text-[#2D6A4F] uppercase">Judul Media</div>
          <div className="font-heading font-bold text-[#1B4332] mt-1">Green Mission: Petualangan Rahasia Fotosintesis</div>
        </div>
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border-2 border-[#1B4332]">
          <div className="text-xs font-heading font-bold text-[#2D6A4F] uppercase">Sasaran Pengguna</div>
          <div className="font-heading font-bold text-[#1B4332] mt-1">Siswa Kelas IV Sekolah Dasar (SD)</div>
        </div>
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border-2 border-[#1B4332]">
          <div className="text-xs font-heading font-bold text-[#2D6A4F] uppercase">Mata Pelajaran & Materi</div>
          <div className="font-heading font-bold text-[#1B4332] mt-1">IPAS — Fotosintesis pada Tumbuhan</div>
        </div>
      </div>
    </div>
  );

}
