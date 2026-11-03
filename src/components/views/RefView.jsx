import React from 'react';

export default function RefView() {
return (
    <div className="space-y-6">
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332]">
        <span className="text-xs font-heading font-bold uppercase bg-[#E9C46A] text-[#1B4332] px-3 py-1 rounded-full border-2 border-[#1B4332]">
          SUMBER PUSTAKA & MEDIA
        </span>
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1B4332] mt-1.5">
          Daftar Referensi Materi, Ilustrasi, dan Video
        </h2>
        <p className="text-xs sm:text-sm text-[#3A4D43] mt-0.5">
          Seluruh materi pembelajaran dalam website ini disusun mengacu pada buku teks utama Kurikulum Merdeka SD/MI Kelas IV.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[2.5px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332] space-y-3">
          <h3 className="font-heading font-bold text-[#1B4332] text-base">
            Sumber Buku & Kurikulum
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#2B3A32] leading-relaxed">
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Fitri, Amalia, dkk. (2021).</strong> <em>Buku Panduan Siswa Ilmu Pengetahuan Alam dan Sosial (IPAS) untuk SD Kelas IV.</em> Jakarta: Pusat Kurikulum dan Perbukuan, Kemendikbudristek RI.
            </li>
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Fitri, Amalia, dkk. (2021).</strong> <em>Buku Panduan Guru Ilmu Pengetahuan Alam dan Sosial (IPAS) untuk SD Kelas IV.</em> Jakarta: Kemendikbudristek RI.
            </li>
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Capaian Pembelajaran (CP) IPAS Fase B (Kelas III dan IV SD)</strong> — Bab 1: Tumbuhan, Sumber Kehidupan di Bumi (Topik B: Fotosintesis, Proses Paling Penting di Bumi).
            </li>
          </ul>
        </div>

        <div className="bg-[#FFFDF9] rounded-3xl p-6 border-[2.5px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332] space-y-3">
          <h3 className="font-heading font-bold text-[#1B4332] text-base">
            Sumber Ilustrasi, Tipografi & Video Edukasi
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#2B3A32] leading-relaxed">
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Ilustrasi Vektor Botani, Lencana & Maskot "Kapten Kloro":</strong> Ilustrasi SVG orisinal yang dirancang khusus untuk media pembelajaran <em>Green Mission</em>.
            </li>
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Tipografi Ramah Anak:</strong> Google Fonts <em>Fredoka</em> & <em>Plus Jakarta Sans</em>, dikombinasikan dengan ikon antarmuka Lucide Icons.
            </li>
            <li className="p-3.5 bg-[#F4F1EA] rounded-xl border-2 border-[#1B4332]">
              <strong>Video Pembelajaran IPAS SD (Bahasa Indonesia):</strong>
              <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-[#1B4332]">
                <li><em>Bimbel Online - IPAS Kelas 4 SD</em> ("1. Mengenal Apa Itu Fotosintesis")</li>
                <li><em>Everyday Learning - Kurikulum Merdeka</em> ("2. Empat Bahan Utama Fotosintesis")</li>
                <li><em>Ratih Setyaningrum - Sains SD</em> ("3. Animasi Proses Terjadinya Fotosintesis")</li>
                <li><em>Mashindra Prisma - IPAS Kelas 4</em> ("4. Hasil dan Manfaat Fotosintesis bagi Kehidupan")</li>
              </ul>
              <div className="mt-1.5 text-xs text-[#3A4D43]">
                Dilengkapi mode <strong>Papan Cerita Visual Interaktif</strong> terintegrasi (hemat kuota & ramah siswa).
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
