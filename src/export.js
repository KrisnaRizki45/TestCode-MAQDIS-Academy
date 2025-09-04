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

// import dgria1 from "../src/assets/dgria1.jpg"
// import dgria2 from "../src/assets/dgria2.jpg"
// import dgria3 from "../src/assets/dgria3.jpg"

// import kai1 from "../src/assets/kai1.jpg"
// import kai2 from "../src/assets/kai2.jpg"
// import kai3 from "../src/assets/kai3.jpg"
// import kai4 from "../src/assets/kai4.jpg"
// import kai5 from "../src/assets/kai5.jpg"
// import kai6 from "../src/assets/kai6.jpg"

// import reasuransi1 from "../src/assets/reasuransi1.jpg"
// import reasuransi2 from "../src/assets/reasuransi2.jpg"
// import reasuransi3 from "../src/assets/reasuransi3.jpg"
// import reasuransi4 from "../src/assets/reasuransi4.jpg"
// import reasuransi5 from "../src/assets/reasuransi5.jpg"

// import rswalagiri1 from "../src/assets/rswalagiri1.jpg"
// import rswalagiri2 from "../src/assets/rswalagiri2.jpg"
// import rswalagiri3 from "../src/assets/rswalagiri3.jpg"
// import rswalagiri4 from "../src/assets/rswalagiri4.jpg"
// import rswalagiri5 from "../src/assets/rswalagiri5.jpg"
// import rswalagiri6 from "../src/assets/rswalagiri6.jpg"
// import rswalagiri7 from "../src/assets/rswalagiri7.jpg"

// import harver1 from "../src/assets/harver1.jpg"
// import harver2 from "../src/assets/harver2.jpg"
// import harver3 from "../src/assets/harver3.jpg"

// import cafe1 from "../src/assets/cafe1.jpg"
// import cafe2 from "../src/assets/cafe2.jpg"
// import cafe3 from "../src/assets/cafe3.jpg"
// import cafe4 from "../src/assets/cafe4.jpg"
// import cafe5 from "../src/assets/cafe5.jpg"
// import cafe6 from "../src/assets/cafe6.jpg"
// import cafe7 from "../src/assets/cafe7.jpg"
// import cafe8 from "../src/assets/cafe8.jpg"
// import cafe9 from "../src/assets/cafe9.jpg"
// import cafe10 from "../src/assets/cafe10.jpg"

// import stasiun1 from "../src/assets/stasiun1.jpg"
// import stasiun2 from "../src/assets/stasiun2.jpg"
// import stasiun3 from "../src/assets/stasiun3.jpg"
// import stasiun4 from "../src/assets/stasiun4.jpg"
// import stasiun5 from "../src/assets/stasiun5.jpg"
// import stasiun6 from "../src/assets/stasiun6.jpg"
// import stasiun7 from "../src/assets/stasiun7.jpg"
// import stasiun8 from "../src/assets/stasiun8.jpg"

// import minimarket1 from "../src/assets/minimarket1.jpg"
// import minimarket2 from "../src/assets/minimarket2.jpg"
// import minimarket3 from "../src/assets/minimarket3.jpg"
// import minimarket4 from "../src/assets/minimarket4.jpg"
// import minimarket5 from "../src/assets/minimarket5.jpg"

// import intwalagiri1 from "../src/assets/intwalagiri1.jpg"
// import intwalagiri2 from "../src/assets/intwalagiri1.jpg"
// import intwalagiri3 from "../src/assets/intwalagiri1.jpg"
// import intwalagiri4 from "../src/assets/intwalagiri1.jpg"
// import intwalagiri5 from "../src/assets/intwalagiri1.jpg"
// import intwalagiri6 from "../src/assets/intwalagiri1.jpg"

// import rumahquran1 from "../src/assets/rumahquran1.jpg"
// import rumahquran2 from "../src/assets/rumahquran2.jpg"
// import rumahquran3 from "../src/assets/rumahquran3.jpg"
// import rumahquran4 from "../src/assets/rumahquran4.jpg"
// import rumahquran5 from "../src/assets/rumahquran5.jpg"

// import masjid1 from "../src/assets/masjid1.jpg"
// import masjid2 from "../src/assets/masjid2.jpg"
// import masjid3 from "../src/assets/masjid3.jpg"
// import masjid4 from "../src/assets/masjid4.jpg"
// import masjid5 from "../src/assets/masjid5.jpg"

// import intcafe1 from "../src/assets/intcafe1.jpg"
// import intcafe2 from "../src/assets/intcafe2.jpg"
// import intcafe3 from "../src/assets/intcafe3.jpg"
// import intcafe4 from "../src/assets/intcafe4.jpg"
// import intcafe5 from "../src/assets/intcafe5.jpg"
// import intcafe6 from "../src/assets/intcafe6.jpg"

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
    image: [
      "/assets/dgria1.jpg",
      "/assets/dgria2.jpg",
      "/assets/dgria3.jpg"
    ],
    title: "D'Gria Hotel",
    about: "Hotel modern dengan desain arsitektur kontemporer",
    detail:
      "D'Gria Hotel menampilkan arsitektur modern dengan garis bersih dan fasad kaca yang elegan. Hotel ini memiliki 4 lantai, kamar yang nyaman, area lobi yang luas, dan banyak fasilitas lainnya. Desain interior memadukan kenyamanan dan estetika, dengan pencahayaan alami yang optimal, serta fokus pada efisiensi energi dan pengalaman tamu yang menyenangkan."
  },
  {
    image: [
      "/assets/kai2.jpg",
      "/assets/kai1.jpg",
      "/assets/kai3.jpg",
      "/assets/kai4.jpg",
      "/assets/kai5.jpg",
      "/assets/kai6.jpg"
    ],
    title: "Stasiun KAI",
    about: "Proyek pembangunan fasilitas kantor dan stasiun modern untuk PT KAI.",
    detail:
      "Proyek ini mencakup pembangunan kantor dan stasiun KAI dengan desain modern dan fungsional. Bangunan dirancang untuk menampung aktivitas operasional yang padat, memudahkan mobilitas pegawai dan penumpang, serta dilengkapi fasilitas publik yang nyaman. Struktur bangunan menggunakan material berkualitas tinggi untuk memastikan keamanan, efisiensi energi, dan daya tahan terhadap kondisi lingkungan."
  },
  {
    image: [
      "/assets/reasuransi5.jpg",
      "/assets/reasuransi2.jpg",
      "/assets/reasuransi3.jpg",
      "/assets/reasuransi4.jpg",
      "/assets/reasuransi1.jpg"
    ],
    title: "Kantor PT Reasuransi",
    about: "Desain interior kantor modern dan fungsional.",
    detail:
      "Kantor PT Reasuransi dirancang dengan interior modern yang nyaman dan profesional. Ruang kerja terbuka dan fleksibel mendukung kolaborasi tim, dilengkapi pencahayaan alami optimal, area meeting, serta fasilitas pendukung lain untuk efisiensi operasional. Desain menekankan estetika minimalis sekaligus kenyamanan bagi karyawan dan pengunjung."
  },
  {
    image: [
      "/assets/rswalagiri5.jpg",
      "/assets/rswalagiri2.jpg",
      "/assets/rswalagiri3.jpg",
      "/assets/rswalagiri4.jpg",
      "/assets/rswalagiri1.jpg",
      "/assets/rswalagiri6.jpg",
      "/assets/rswalagiri7.jpg"
    ],
    title: "RS Walagiri",
    about: "Rumah sakit modern dengan fasilitas lengkap dan bangunan 7 lantai.",
    detail:
      "RS Walagiri terdiri dari 7 lantai dengan desain modern yang efisien dan fungsional. Dilengkapi area parkir luas, ruang perawatan, ruang operasi, dan fasilitas medis lainnya untuk mendukung pelayanan kesehatan yang optimal. Infrastruktur dirancang untuk kenyamanan pasien, staf, dan pengunjung, serta memperhatikan efisiensi energi dan keamanan bangunan."
  },
  {
    image: [
      "/assets/harver2.jpg",
      "/assets/harver1.jpg",
      "/assets/harver3.jpg"
    ],
    title: "Hotel Harver",
    about: "Desain hotel modern dengan fasilitas lengkap untuk kenyamanan tamu.",
    detail:
      "Hotel Harver dirancang dengan tampilan bangunan modern yang elegan, mengedepankan kenyamanan serta pengalaman tamu yang berkesan. Bangunan terdiri dari beberapa lantai dengan penataan ruang kamar yang efisien, lobby yang luas, serta area publik seperti restoran, ruang meeting, dan lounge. Fasilitas pendukung seperti area parkir yang memadai, sistem keamanan, serta desain interior yang hangat dan profesional semakin menambah nilai eksklusif hotel ini."
  },
  {
    image: [
      "/assets/cafe6.jpg",
      "/assets/cafe2.jpg",
      "/assets/cafe3.jpg",
      "/assets/cafe4.jpg",
      "/assets/cafe5.jpg",
      "/assets/cafe1.jpg",
      "/assets/cafe7.jpg",
      "/assets/cafe8.jpg",
      "/assets/cafe9.jpg",
      "/assets/cafe10.jpg"
    ],
    title: "Cafe",
    about: "Konsep cafe modern dengan sentuhan minimalis dan area pendukung yang nyaman.",
    detail:
      "Cafe ini dirancang dengan tampilan bangunan modern minimalis yang memadukan elemen kayu, kaca, dan pencahayaan alami untuk menciptakan suasana hangat. Interior ditata dengan ruang duduk indoor dan outdoor, serta tata letak meja kursi yang mendukung kenyamanan pelanggan. Area parkir disediakan cukup luas untuk kendaraan roda dua maupun roda empat. Selain itu, detail interior meliputi penataan barista bar, dekorasi dinding, hingga pencahayaan artistik yang menambah nilai estetika dan menghadirkan pengalaman bersantai yang menyenangkan."
  },
  {
    image: [
      "/assets/stasiun2.jpg",
      "/assets/stasiun1.jpg",
      "/assets/stasiun3.jpg",
      "/assets/stasiun4.jpg",
      "/assets/stasiun5.jpg",
      "/assets/stasiun6.jpg",
      "/assets/stasiun7.jpg",
      "/assets/stasiun8.jpg"
    ],
    title: "Stasiun",
    about: "Konsep stasiun modern dengan fasilitas publik yang nyaman dan fungsional.",
    detail:
      "Stasiun ini dirancang dengan arsitektur modern yang mengedepankan kenyamanan pengguna transportasi. Ruang tunggu dibuat luas dengan pencahayaan alami yang maksimal, dilengkapi area tiket, loket informasi, serta fasilitas akses difabel. Material kaca dan baja digunakan untuk memperkuat kesan futuristik, sementara area sirkulasi penumpang ditata rapi agar mobilitas lebih lancar dan aman."
  },
  {
    image: [
      "/assets/minimarket4.jpg",
      "/assets/minimarket1.jpg",
      "/assets/minimarket2.jpg",
      "/assets/minimarket3.jpg",
      "/assets/minimarket5.jpg"
    ],
    title: "Amandamart",
    about: "Konsep minimarket dengan tata letak efisien dan interior yang ramah pelanggan.",
    detail:
      "Minimarket ini dirancang dengan fokus pada tata ruang yang memudahkan pelanggan dalam menemukan produk. Interior menggunakan rak modular, pencahayaan terang, serta jalur sirkulasi yang lebar untuk kenyamanan berbelanja. Area kasir ditempatkan strategis dekat pintu keluar, sementara desain fasad menampilkan nuansa modern dengan kombinasi kaca dan panel kayu."
  },
  {
    image: [
      "/assets/intwalagiri1.jpg",
      "/assets/intwalagiri2.jpg",
      "/assets/intwalagiri3.jpg",
      "/assets/intwalagiri4.jpg",
      "/assets/intwalagiri5.jpg",
      "/assets/intwalagiri6.jpg"
    ],
    title: "Interior RS Walagiri",
    about: "Konsep interior bangunan dengan sentuhan modern dan fungsional.",
    detail:
      "Interior Walagiri dirancang dengan suasana hangat dan modern. Penataan ruang difokuskan pada kenyamanan dengan furnitur minimalis, dekorasi dinding artistik, serta pencahayaan yang menonjolkan elemen kayu. Area ruang utama dikombinasikan dengan sentuhan modern agar tetap fungsional namun menghadirkan kesan elegan dan profesional."
  },
  {
    image: [
      "/assets/rumahquran4.jpg",
      "/assets/rumahquran1.jpg",
      "/assets/rumahquran2.jpg",
      "/assets/rumahquran3.jpg",
      "/assets/rumahquran5.jpg"
    ],
    title: "Rumah Qur’an",
    about: "Bangunan rumah Qur’an Sahabat Tuli dengan suasana religius dan nuansa islami yang kuat.",
    detail:
      "Rumah Qur’an ini dirancang untuk menunjang kegiatan belajar dan menghafal Al-Qur’an. Interiornya sederhana namun menenangkan, dengan pencahayaan alami dan sirkulasi udara yang baik. Ruang utama dilengkapi area belajar berjamaah, ruang pengajar, serta fasilitas pendukung lain. Eksterior menampilkan ornamen islami dengan dominasi warna netral agar tetap khidmat dan nyaman."
  },
  {
    image: [
      "/assets/masjid3.jpg",
      "/assets/masjid1.jpg",
      "/assets/masjid2.jpg",
      "/assets/masjid4.jpg",
      "/assets/masjid5.jpg"
    ],
    title: "Masjid",
    about: "Konsep masjid modern dengan nuansa islami dan kenyamanan jamaah.",
    detail:
      "Masjid ini menggabungkan arsitektur tradisional islami dengan elemen modern. Kubah dan menara didesain ikonik, sementara area dalam menonjolkan ruang shalat yang luas dengan pencahayaan alami. Area wudhu dan toilet ditempatkan strategis, serta tersedia area parkir yang memadai. Interior masjid dibuat sederhana namun penuh makna dengan kaligrafi dan ornamen islami."
  },
  {
    image: [
      "/assets/intcafe1.jpg",
      "/assets/intcafe2.jpg",
      "/assets/intcafe3.jpg",
      "/assets/intcafe4.jpg",
      "/assets/intcafe5.jpg",
      "/assets/intcafe6.jpg"
    ],
    title: "Interior Cafe",
    about: "Konsep interior cafe modern minimalis dengan suasana hangat.",
    detail:
      "Interior cafe ini dirancang untuk memberikan kenyamanan maksimal kepada pelanggan. Penataan kursi dan meja dibuat fleksibel untuk kebutuhan individu maupun kelompok. Material kayu dipadukan dengan pencahayaan hangat untuk menghadirkan nuansa homey. Area barista bar dibuat sebagai focal point, dengan dekorasi artistik yang memperkuat identitas cafe."
  }
];
