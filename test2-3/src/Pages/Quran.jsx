import React, { useState } from 'react';
import { Book, Calendar, Award, Play, CheckCircle, Trophy, Star } from 'lucide-react';

const Quran = () => {
  const [activeStreak, setActiveStreak] = useState(12);
  const [totalXP, setTotalXP] = useState(120);
  const [selectedSurah, setSelectedSurah] = useState(null);

  const surahs = [
    { id: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', totalAyat: 7, memorized: 7, completed: true,
      ayats: [
        { id: 1, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang' },
        { id: 2, arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'Segala puji bagi Allah, Tuhan seluruh alam' }
      ] 
    },
    { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', totalAyat: 286, memorized: 45, completed: false,
      ayats: [
        { id: 1, arabic: 'الم', translation: 'Alif Laam Miim' },
        { id: 2, arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ', translation: 'Kitab ini tidak ada keraguan padanya' }
      ] 
    },
    { id: 3, name: 'Al-Imran', arabicName: 'آل عمران', totalAyat: 200, memorized: 30, completed: false,
      ayats: [
        { id: 1, arabic: 'الم', translation: 'Alif Laam Miim' },
        { id: 2, arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ', translation: 'Allah, tidak ada tuhan selain Dia' }
      ] 
    }
    // Tambahkan surah lainnya sesuai kebutuhan
  ];

  const getProgressPercentage = (memorized, total) => Math.round((memorized / total) * 100);

  const SurahCard = ({ surah, index }) => (
    <div
      className={`bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${selectedSurah?.id === surah.id ? 'ring-4 ring-orange-300' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setSelectedSurah(selectedSurah?.id === surah.id ? null : surah)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-bold text-lg">{surah.name}</h3>
          <p className="text-orange-100 text-sm">{surah.arabicName}</p>
        </div>
        {surah.completed && <CheckCircle className="text-white w-6 h-6" />}
      </div>

      <div className="mb-4">
        <p className="text-white text-sm mb-2">
          Total Ayat: {surah.totalAyat} • Hafalan: {surah.memorized}
        </p>
        <div className="w-full bg-orange-300 bg-opacity-30 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${getProgressPercentage(surah.memorized, surah.totalAyat)}%` }}
          ></div>
        </div>
        <p className="text-orange-100 text-xs mt-1">
          {getProgressPercentage(surah.memorized, surah.totalAyat)}% selesai
        </p>
      </div>

      <button
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
        onClick={(e) => { e.stopPropagation(); setSelectedSurah(surah); }}
      >
        <Play className="w-4 h-4" />
        MULAI HAFALAN
      </button>
    </div>
  );

  const AyatDisplay = ({ ayat, index }) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100" style={{ animationDelay: `${index * 150}ms` }}>
      <div className="text-right mb-4">
        <p className="text-2xl leading-relaxed font-arabic text-gray-800 mb-2">{ayat.arabic}</p>
        <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full text-sm font-bold">{ayat.id}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{ayat.translation}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-orange-100 text-sm">Hari Aktif</p>
              <p className="text-2xl font-bold">{activeStreak} Hari</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-orange-100 text-sm">XP</p>
              <p className="text-2xl font-bold">{totalXP} XP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Surah List */}
      {!selectedSurah && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-orange-500" /> Pilih Surah untuk Dihafal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surahs.map((surah, index) => (
              <SurahCard key={surah.id} surah={surah} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Surah Detail */}
      {selectedSurah && (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{selectedSurah.name}</h2>
              <p className="text-lg text-gray-600 mt-1">{selectedSurah.arabicName}</p>
              <p className="text-sm text-gray-500 mt-2">
                {selectedSurah.memorized} dari {selectedSurah.totalAyat} ayat ({getProgressPercentage(selectedSurah.memorized, selectedSurah.totalAyat)}%)
              </p>
            </div>
            <button
              onClick={() => setSelectedSurah(null)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Kembali
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-gray-700">Progress Hafalan</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${getProgressPercentage(selectedSurah.memorized, selectedSurah.totalAyat)}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ayat-ayat:</h3>
            {selectedSurah.ayats.map((ayat, index) => (
              <AyatDisplay key={ayat.id} ayat={ayat} index={index} />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .font-arabic { font-family: 'Amiri', serif; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .bg-gradient-to-br { background-attachment: fixed; }
      `}</style>
    </div>
  );
};

export default Quran;
