import {
  Building2,
  Ruler,
  Wrench,
  Zap,
  Leaf,
  Map,
  LineChart,
  Search,
  ClipboardCheck,
  Layers,
  FileBadge,
  FileCheck,
  MonitorCog,
  PenTool,
  Home,
  Users, 
  FileSearch
} from "lucide-react";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding, FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

import project1 from "../src/assets/project1.jpg";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import project7 from "../src/assets/project7.jpg";
import project8 from "../src/assets/project8.jpg";

// ====================== SERVICES ======================
export const allservices = [
  {
    icon: Building2,
    title: "Arsitektur",
    about: "Layanan desain arsitektur untuk berbagai kebutuhan pembangunan.",
    detail: "Kami menyediakan layanan perencanaan dan desain arsitektur mulai dari rumah tinggal, gedung komersial, hingga fasilitas publik. Proses desain selalu memperhatikan estetika, fungsi, dan regulasi bangunan agar sesuai dengan kebutuhan klien."
  },
  {
    icon: Ruler,
    title: "Sipil",
    about: "Jasa perencanaan dan pengawasan pekerjaan sipil.",
    detail: "Layanan sipil meliputi perencanaan struktur bangunan, jalan, jembatan, drainase, dan infrastruktur lainnya. Kami juga melakukan pengawasan lapangan untuk memastikan kualitas pekerjaan sesuai standar teknis dan spesifikasi yang berlaku."
  },
  {
    icon: Wrench,
    title: "Mekanikal",
    about: "Layanan perencanaan sistem mekanikal pada bangunan.",
    detail: "Jasa mekanikal meliputi perancangan sistem HVAC (Heating, Ventilation, Air Conditioning), instalasi perpipaan, sistem pemadam kebakaran, serta fasilitas mekanis lainnya untuk mendukung kenyamanan dan keamanan bangunan."
  },
  {
    icon: Zap,
    title: "Elektrikal",
    about: "Konsultansi perencanaan sistem kelistrikan dan elektrikal.",
    detail: "Kami menyediakan desain instalasi listrik, penerangan, sistem keamanan, jaringan komunikasi, hingga sistem tenaga listrik skala besar. Perencanaan dilakukan sesuai standar keselamatan dan efisiensi energi."
  },
  {
    icon: Leaf,
    title: "Tata Lingkungan",
    about: "Pengelolaan lingkungan dan kajian tata ruang berkelanjutan.",
    detail: "Layanan mencakup Analisis Mengenai Dampak Lingkungan (AMDAL), pengelolaan limbah, perencanaan tata ruang, serta solusi ramah lingkungan untuk mendukung pembangunan berkelanjutan."
  },
  {
    icon: Map,
    title: "Survey",
    about: "Layanan survey lapangan untuk mendukung perencanaan proyek.",
    detail: "Kami melakukan topografi, geodetik, dan pemetaan detail untuk mendukung keakuratan data dalam perencanaan proyek konstruksi maupun pengembangan lahan."
  },
  {
    icon: LineChart,
    title: "Analisis Engineering",
    about: "Jasa analisis dan perhitungan teknik sesuai standar.",
    detail: "Meliputi analisis struktur, beban, stabilitas tanah, serta berbagai perhitungan teknis untuk memastikan keamanan dan kelayakan proyek sebelum pembangunan."
  },
  {
    icon: Search,
    title: "Inspeksi Teknis",
    about: "Pemeriksaan teknis untuk menjamin kualitas dan keamanan.",
    detail: "Kami melakukan pengecekan kualitas material, metode konstruksi, serta uji kelayakan hasil pekerjaan untuk memastikan proyek sesuai dengan standar mutu yang berlaku."
  },
  {
    icon: ClipboardCheck,
    title: "Manajemen Proyek",
    about: "Perencanaan, koordinasi, dan pengendalian proyek secara profesional.",
    detail: "Jasa manajemen proyek meliputi penyusunan jadwal, alokasi anggaran, pengendalian mutu, hingga koordinasi antar pihak yang terlibat agar proyek berjalan efektif dan tepat waktu."
  },
  {
    icon: Layers,
    title: "Engineering Terpadu",
    about: "Layanan integrasi lintas disiplin teknik dalam satu proyek.",
    detail: "Kami menggabungkan layanan arsitektur, sipil, mekanikal, elektrikal, dan lingkungan menjadi satu paket komprehensif sehingga lebih efisien dan terkoordinasi."
  },
  {
    icon: Home,
    title: "Pengembangan Properti",
    about: "Layanan pengembangan lahan, kawasan, dan properti.",
    detail: "Melayani pengembangan kawasan perumahan, komersial, hingga industri. Kami membantu mulai dari perencanaan masterplan, infrastruktur dasar, hingga pembangunan unit properti."
  },
  {
    icon: PenTool,
    title: "Desain & Engineering",
    about: "Layanan desain interior dan rekayasa teknik.",
    detail: "Layanan meliputi desain interior rumah, kantor, dan ruang publik, serta dukungan engineering detail untuk memastikan kenyamanan dan efisiensi ruang."
  },
  {
    icon: FileBadge,
    title: "Konsultan Perizinan",
    about: "Pendampingan penyusunan dokumen perizinan usaha/proyek.",
    detail: "Kami membantu klien dalam menyiapkan dokumen perizinan sesuai ketentuan hukum yang berlaku agar proses pembangunan atau usaha berjalan lancar tanpa hambatan administrasi."
  },
  {
    icon: FileCheck,
    title: "Pengurusan Perizinan",
    about: "Layanan pengurusan perizinan sesuai instansi berwenang.",
    detail: "Proses pengajuan izin ke instansi berwenang dilakukan oleh tim profesional kami sehingga klien tidak perlu direpotkan dengan birokrasi yang kompleks."
  },
  {
    icon: MonitorCog,
    title: "Monitoring Perizinan",
    about: "Monitoring hingga penertiban izin resmi.",
    detail: "Kami tidak hanya membantu mengurus izin, tetapi juga melakukan monitoring hingga izin resmi terbit, termasuk tindak lanjut bila terdapat kendala dalam proses pengajuan."
  },
];

// ====================== TRUSTED ======================
export const trusted = [
  {
    icon: Users,
    title: "Tenaga Ahli Berpengalaman",
    about: "Didukung oleh tim profesional dengan pengalaman luas di bidang konstruksi dan engineering.",
    detail:
      "Kami memiliki tenaga ahli dari berbagai disiplin, mulai dari arsitektur, sipil, mekanikal, elektrikal, hingga tata lingkungan. Setiap proyek ditangani oleh tim yang berpengalaman agar hasil lebih optimal, berkualitas, dan sesuai harapan klien."
  },
  {
    icon: FileSearch,
    title: "Proses Cepat & Sesuai Regulasi",
    about: "Setiap pekerjaan diselesaikan dengan efisien tanpa mengabaikan aturan.",
    detail:
      "Proses perencanaan, desain, maupun perizinan dilakukan sesuai dengan standar nasional maupun internasional yang berlaku. Kami memastikan proyek berjalan lancar, cepat, dan aman secara hukum maupun teknis."
  },
  {
    icon: Layers,
    title: "Solusi Terintegrasi Untuk Setiap Kebutuhan Klien",
    about: "Layanan one-stop solution untuk kebutuhan konstruksi Anda.",
    detail:
      "Kami menawarkan layanan menyeluruh mulai dari konsultasi, desain, pembangunan, perizinan, hingga pengawasan proyek. Dengan solusi terintegrasi, klien tidak perlu mencari banyak vendor, sehingga lebih hemat waktu, biaya, dan terkoordinasi dengan baik."
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about: "Layanan mereka sangat profesional, hasil proyek memuaskan.",
    post: "Constructor",
    rating: 5,
  },
  {
    image: client2,
    name: "Drew James",
    about: "Desain arsitekturnya modern dan sesuai kebutuhan.",
    post: "Architect",
    rating: 4,
  },
  {
    image: client3,
    name: "Sam Peterson",
    about: "Kerja tim cepat, komunikasi lancar, recommended!",
    post: "Builder",
    rating: 5,
  },
  {
    image: client1,
    name: "Alex Parker",
    about: "Layanan mereka sangat profesional, hasil proyek memuaskan.",
    post: "Constructor",
    rating: 5,
  },
  {
    image: client2,
    name: "Drew James",
    about: "Desain arsitekturnya modern dan sesuai kebutuhan.",
    post: "Architect",
    rating: 4,
  },
  {
    image: client3,
    name: "Sam Peterson",
    about: "Kerja tim cepat, komunikasi lancar, recommended!",
    post: "Builder",
    rating: 5,
  },
];

export const portfolio = [
  {
    image: [project1, project2],
    title: "Gedung Perkantoran Modern",
    about: "Proyek pembangunan gedung perkantoran dengan desain arsitektur minimalis modern.",
    detail:
      "Gedung perkantoran 12 lantai yang dilengkapi dengan sistem mekanikal & elektrikal canggih, ruang kerja fleksibel, dan area hijau. Fokus utama pada efisiensi energi serta kenyamanan penghuni.",
  },
  {
    image:[project3, project4],
    title: "Jembatan Kota",
    about: "Proyek infrastruktur sipil berupa pembangunan jembatan penghubung antar wilayah.",
    detail:
      "Jembatan sepanjang 1,5 km dengan struktur baja berkekuatan tinggi, dirancang untuk menahan beban lalu lintas padat serta kondisi lingkungan ekstrem. Proyek ini meningkatkan konektivitas antar kota.",
  },
  {
    image: [project5, project6],
    title: "Rumah Hunian Premium",
    about: "Desain rumah tinggal dengan interior modern dan ramah lingkungan.",
    detail:
      "Hunian 2 lantai dengan konsep open space, material ramah lingkungan, serta pemanfaatan pencahayaan alami. Dilengkapi sistem smart home untuk kenyamanan penghuni.",
  },
  {
    image: [project7, project8],
    title: "Kawasan Industri",
    about: "Pengembangan kawasan industri dengan fasilitas lengkap.",
    detail:
      "Masterplan kawasan industri seluas 50 hektar yang dilengkapi dengan infrastruktur jalan, sistem drainase, jaringan listrik, serta area hijau untuk menjaga keseimbangan lingkungan.",
  },
  // {
  //   image: [project1, project2, project3],
  //   title: "Mall & Pusat Perbelanjaan",
  //   about: "Proyek pembangunan pusat perbelanjaan modern.",
  //   detail:
  //     "Mall 5 lantai dengan area retail, foodcourt, bioskop, dan ruang hiburan keluarga. Desain interior mengutamakan kenyamanan pengunjung dan pengalaman belanja yang menyenangkan.",
  // },
  // {
  //   image: [project1, project2, project3],
  //   title: "Hotel & Resort",
  //   about: "Pembangunan hotel bintang 5 dengan konsep resort mewah.",
  //   detail:
  //     "Resort mewah dengan 200 kamar, villa eksklusif, restoran, spa, serta fasilitas rekreasi. Konsep desain menggabungkan modern architecture dengan sentuhan lokal.",
  // },
  // {
  //   image: [project1, project2, project3],
  //   title: "Sekolah & Fasilitas Pendidikan",
  //   about: "Desain dan pembangunan gedung sekolah modern.",
  //   detail:
  //     "Sekolah menengah dengan ruang kelas nyaman, laboratorium sains, perpustakaan digital, serta area olahraga. Konsep ramah anak dan lingkungan hijau.",
  // },
  // {
  //   image: [project1, project2, project3],
  //   title: "Pusat Kesehatan",
  //   about: "Proyek pembangunan rumah sakit dengan fasilitas lengkap.",
  //   detail:
  //     "Rumah sakit dengan kapasitas 300 tempat tidur, ruang operasi modern, unit gawat darurat, serta sistem manajemen digital. Dirancang untuk pelayanan kesehatan yang cepat dan efektif.",
  // },
];
