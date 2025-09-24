import { Users, FileSearch, Layers, BookOpen, School, Star } from "lucide-react";
import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

// ====================== SERVICES ======================
export const allservices = [
  {
    icon: BookOpen,
    title: "Kelas Tahfidz",
    about: "Program menghafal Al-Qur’an dengan metode efektif dan menyenangkan.",
    detail:
      "Siswa diajarkan menghafal Al-Qur’an secara bertahap dengan bimbingan ustadz/ustadzah berpengalaman. Setiap hafalan diperiksa dan dipantau kemajuannya untuk memastikan kualitas penguasaan Al-Qur’an."
  },
  {
    icon: School,
    title: "Kelas Akademik Islami",
    about: "Pembelajaran akademik berbasis nilai-nilai Islami.",
    detail:
      "Kami mengintegrasikan kurikulum umum dengan pendidikan agama, termasuk fiqh, akhlak, sejarah Islam, dan bahasa Arab. Tujuannya untuk membentuk generasi cerdas dan berakhlak mulia."
  },
  {
    icon: Star,
    title: "Program Ekstrakurikuler Islami",
    about: "Beragam kegiatan untuk pengembangan karakter dan kepemimpinan Islami.",
    detail:
      "Siswa dapat mengikuti kegiatan seperti tilawah, tahfidz, debat Islami, dan kepemimpinan berbasis nilai-nilai Islam untuk mengembangkan keterampilan sosial, kepercayaan diri, dan kepedulian."
  },
  {
    icon: Users,
    title: "Bimbingan Spiritual",
    about: "Pendampingan pribadi oleh ustadz/ustadzah berpengalaman.",
    detail:
      "Setiap siswa mendapatkan mentoring secara individu untuk perkembangan spiritual, konseling Islami, serta bimbingan moral dan karakter agar tumbuh menjadi generasi yang bertaqwa."
  },
  {
    icon: FileSearch,
    title: "Workshop & Seminar",
    about: "Kegiatan belajar tambahan untuk memperluas wawasan Islami.",
    detail:
      "Kami menyelenggarakan workshop dan seminar berkaitan dengan pendidikan Al-Qur’an, pengembangan karakter, dakwah digital, dan isu-isu kontemporer agar siswa lebih siap menghadapi tantangan dunia modern."
  },
  {
    icon: Layers,
    title: "Program Boarding",
    about: "Fasilitas asrama untuk siswa dari luar kota dengan pengawasan Islami.",
    detail:
      "Siswa yang tinggal di asrama mendapatkan pengawasan harian, pembinaan akhlak, jadwal belajar dan ibadah terstruktur, serta lingkungan Islami yang kondusif untuk belajar dan berkembang."
  },
];

// ====================== TRUSTED ======================
export const trusted = [
  {
    icon: Users,
    title: "Tenaga Pengajar Berpengalaman",
    about: "Didukung oleh ustadz/ustadzah profesional dan berkompeten.",
    detail:
      "Tim pengajar Maqdis Academy memiliki pengalaman panjang dalam pendidikan Al-Qur’an dan dakwah. Setiap program diawasi dan dibimbing agar siswa meraih prestasi terbaik secara akademik dan spiritual."
  },
  {
    icon: FileSearch,
    title: "Program Terstruktur & Terukur",
    about: "Metode pembelajaran sistematis dan terukur untuk setiap siswa.",
    detail:
      "Setiap kelas memiliki kurikulum jelas dan progres hafalan yang dipantau. Evaluasi berkala dilakukan agar setiap siswa dapat berkembang sesuai kemampuan masing-masing."
  },
  {
    icon: Layers,
    title: "Lingkungan Islami & Nyaman",
    about: "Fasilitas dan lingkungan belajar yang mendukung pembinaan karakter Islami.",
    detail:
      "Sekolah dan asrama dirancang untuk menciptakan suasana Islami yang kondusif, aman, dan nyaman. Siswa dapat belajar, beribadah, dan berinteraksi dalam lingkungan yang positif dan mendukung pengembangan diri."
  },
];

// ====================== CLIENTS ======================
export const clients = [
  {
    image: client1,
    name: "Ahmad Fauzi",
    about: "Maqdis Academy membantu saya memahami Al-Qur’an dengan lebih baik.",
    post: "Alumni",
    rating: 5,
  },
  {
    image: client2,
    name: "Siti Aisyah",
    about: "Lingkungannya nyaman, pengajar ramah, belajar jadi menyenangkan.",
    post: "Alumni",
    rating: 5,
  },
  {
    image: client3,
    name: "Rizky Maulana",
    about: "Program tahfidz sangat terstruktur, saya berhasil menghafal 10 juz!",
    post: "Alumni",
    rating: 5,
  },
];

// ====================== PORTFOLIO ======================
export const portfolio = [
  {
    image: ["/assets/rumahquran1.jpg", "/assets/rumahquran2.jpg", "/assets/rumahquran3.jpg"],
    title: "Rumah Qur’an",
    about: "Fasilitas belajar dan menghafal Al-Qur’an dengan lingkungan Islami.",
    detail:
      "Bangunan dirancang untuk mendukung kegiatan tahfidz dan pembelajaran Al-Qur’an. Tersedia ruang belajar, musholla, dan area pendukung untuk kenyamanan siswa."
  },
  {
    image: ["/assets/masjid1.jpg", "/assets/masjid2.jpg", "/assets/masjid3.jpg"],
    title: "Masjid Maqdis",
    about: "Masjid modern dengan nuansa islami yang nyaman untuk jamaah.",
    detail:
      "Masjid ini menjadi pusat kegiatan ibadah dan pendidikan Islami. Kubah dan menara dirancang ikonik, dengan interior menekankan kenyamanan shalat dan pembelajaran agama."
  },
  {
    image: ["/assets/intcafe1.jpg", "/assets/intcafe2.jpg", "/assets/intcafe3.jpg"],
    title: "Area Belajar & Santai",
    about: "Ruang indoor dan outdoor untuk belajar dan kegiatan sosial.",
    detail:
      "Area ini mendukung aktivitas siswa selain belajar, seperti diskusi kelompok, membaca, dan kegiatan sosial Islami, dengan desain yang nyaman dan ramah anak."
  },
];
