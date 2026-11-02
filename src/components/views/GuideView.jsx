import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { KaptenKloro } from '../svg/Illustrations';

export default function GuideView() {
return (
    <div className="space-y-8">
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#1B4332]">
        <KaptenKloro
          mood="happy"
          size="md"
          message="Selamat datang di Buku Panduan Penjelajah! Sebelum memulai misi, pelajari dulu cara menggunakan website ini, aturan permainan, dan cara mengumpulkan Lencana Kehormatan."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            num: '01',
            title: 'Cara Mempelajari Materi & Video',
            subtitle: 'Langkah Awal Penjelajah',
            bgHeader: 'bg-[#52B788]',
            items: [
              'Buka menu Materi dan pelajari 5 bagian materi secara berurutan dari Pengertian hingga Manfaat Fotosintesis.',
              'Klik tombol "Tandai Selesai Dibaca (+5 Poin)" di bagian bawah setiap modul untuk menambah poin belajarmu.',
              'Buka menu Video untuk menyimak papan cerita animasi atau menonton video edukasi, lalu jawab pertanyaan kilatnya.'
            ]
          },
          {
            num: '02',
            title: 'Aturan Permainan & Lencana',
            subtitle: '3 Misi Petualangan',
            bgHeader: 'bg-[#F4A261]',
            items: [
              'Terdapat 3 Misi: Misi 1 (+10 Poin), Misi 2 (+20 Poin), dan Misi 3 (+30 Poin).',
              'Jawaban salah tidak langsung dianggap gagal! Kapten Kloro akan memberikan petunjuk (hint) agar kamu bisa memahami konsepnya dan mencoba kembali.',
              'Selesaikan ketiga misi untuk membuka lencana Penjelajah Daun, Pengumpul Energi, dan Ahli Fotosintesis.'
            ]
          },
          {
            num: '03',
            title: 'Cara Mengerjakan Kuis Interaktif',
            subtitle: '10 Soal Latihan Pemahaman',
            bgHeader: 'bg-[#48CAE4]',
            items: [
              'Kuis terdiri atas 10 soal yang mencakup Pilihan Ganda, Benar-Salah, dan Mencocokkan Ilustrasi.',
              'Setiap jawaban yang kamu pilih akan langsung diperiksa otomatis disertai penjelasan sederhana.',
              'Setelah seluruh 10 soal selesai dijawab, klik tombol "Lihat Evaluasi Akhir".'
            ]
          },
          {
            num: '04',
            title: 'Evaluasi Akhir & Umpan Balik',
            subtitle: 'Laporan Hasil Belajar Mandiri',
            bgHeader: 'bg-[#E9C46A]',
            items: [
              'Nilai akhir dihitung otomatis pada skala 0–100 lengkap dengan kategori capaian belajarmu.',
              'Jika masih ada soal yang keliru, website menyediakan tombol "Pelajari Kembali Materi Ini" yang mengarahkanmu langsung ke modul terkait.',
              'Kamu juga dapat mencetak Sertifikat Penjelajah Fotosintesis dengan namamu sendiri.'
            ]
          }
        ].map((box) => (
          <div
            key={box.num}
            className="bg-[#FFFDF9] rounded-3xl border-[2.5px] border-[#1B4332] shadow-[4px_4px_0px_#1B4332] overflow-hidden"
          >
            <div className={`${box.bgHeader} px-6 py-4 border-b-[2.5px] border-[#1B4332] flex items-center gap-3`}>
              <span className="w-10 h-10 rounded-xl bg-[#FFFDF9] border-2 border-[#1B4332] font-heading font-bold text-lg text-[#1B4332] flex items-center justify-center">
                {box.num}
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#1B4332]">{box.title}</h3>
                <p className="text-xs font-bold text-[#1B4332]/80">{box.subtitle}</p>
              </div>
            </div>
            <ul className="p-6 space-y-3 text-sm text-[#2B3A32]">
              {box.items.map((txt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tujuan Pembelajaran Banner */}
      <div className="bg-[#1B4332] text-[#FAF6EE] rounded-3xl p-6 sm:p-8 border-[3px] border-[#1B4332] shadow-[5px_5px_0px_#52B788]">
        <h3 className="font-heading text-xl font-bold mb-4 text-[#E9C46A]">
          Tujuan Pembelajaran (Mata Pelajaran IPAS Kelas IV SD)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {[
            'Menjelaskan pengertian fotosintesis pada tumbuhan.',
            'Mengetahui bahan-bahan yang dibutuhkan dalam proses fotosintesis.',
            'Mengenali fungsi akar, daun, stomata, dan klorofil.',
            'Menjelaskan proses fotosintesis secara sederhana dan berurutan.',
            'Mengetahui hasil dan manfaat fotosintesis bagi kehidupan.'
          ].map((goal, idx) => (
            <div key={idx} className="bg-[#2D6A4F] p-4 rounded-2xl border-2 border-[#52B788]">
              <div className="w-7 h-7 rounded-lg bg-[#E9C46A] text-[#1B4332] font-heading font-bold text-xs flex items-center justify-center mb-2">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#FAF6EE]">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}
