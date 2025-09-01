import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  Send,
  FileDown,
  Info,
  CheckCircle,
} from "lucide-react";
import { FaXmark } from "react-icons/fa6"; // import icon close
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const careers = [
  {
    id: 1,
    title: "Project Manager",
    location: "Bandung, Jawa Barat",
    type: "Full-time",
    deadline: "30 September 2025",
    description:
      "Bertanggung jawab dalam perencanaan, pelaksanaan, dan pengawasan proyek konstruksi hingga selesai sesuai target.",
    brochure: "/brosur_project_manager.pdf", // file brosur khusus PM
    details: [
      "Pendidikan minimal S1 Teknik Sipil/Arsitektur",
      "Pengalaman 3+ tahun dalam manajemen proyek konstruksi",
      "Memiliki kemampuan leadership dan komunikasi yang baik",
      "Mampu membaca gambar teknik dan dokumen kontrak",
      "Bersedia ditempatkan di lokasi proyek sesuai kebutuhan",
    ],
  },
  {
    id: 2,
    title: "Drafter / Desainer Interior",
    location: "Bandung, Jawa Barat",
    type: "Full-time",
    deadline: "15 Oktober 2025",
    description:
      "Membuat gambar kerja, desain interior, dan rendering 3D untuk mendukung kebutuhan proyek.",
    brochure: "/brosur_drafter.pdf", // file brosur khusus Drafter
    details: [
      "Pendidikan minimal D3/S1 Desain Interior/Arsitektur",
      "Menguasai AutoCAD, SketchUp, dan software rendering (Lumion/3dsMax)",
      "Kreatif, detail-oriented, dan mampu bekerja sesuai deadline",
      "Memiliki portofolio desain menjadi nilai tambah",
    ],
  },
  {
    id: 3,
    title: "Staf Administrasi Proyek",
    location: "Bandung, Jawa Barat",
    type: "Full-time",
    deadline: "10 Oktober 2025",
    description:
      "Mengelola dokumen, laporan, serta mendukung kebutuhan administrasi proyek.",
    brochure: "/brosur_admin.pdf", // file brosur khusus admin
    details: [
      "Pendidikan minimal D3 Administrasi / Akuntansi",
      "Menguasai Microsoft Office (Word, Excel, PowerPoint)",
      "Teliti, komunikatif, dan mampu bekerja dalam tim",
      "Pengalaman di bidang administrasi proyek menjadi nilai tambah",
    ],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-20">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Careers at PT Arsa Dalu Kreasi
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Temukan peluang karir bersama kami dan jadilah bagian dari tim yang
          inovatif, profesional, serta berdedikasi dalam bidang konstruksi,
          desain, dan perizinan.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" /> {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-500" /> {job.type}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" /> Deadline:{" "}
                    {job.deadline}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                  <Send className="w-4 h-4" /> Lamar Sekarang
                </button>

                <a
                href={job.brochure}
                download
                className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-300 transition"
                >
                <FileDown className="w-4 h-4" /> Unduh Brosur
                </a>



                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-xl hover:bg-blue-50 transition"
                >
                  <Info className="w-4 h-4" /> Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 rounded-full bg-white p-2 hover:bg-blue-600 transition-colors duration-200"
            >
              <FaXmark className="w-5 h-5 text-blue-600 hover:text-white" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedJob.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedJob.description}</p>

            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> {selectedJob.location}
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" /> {selectedJob.type}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" /> Deadline: {selectedJob.deadline}
              </p>
            </div>

            {selectedJob.details && (
              <div className="bg-gray-50 p-5 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  Kualifikasi
                </h3>
                <ul className="space-y-2">
                  {selectedJob.details.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                <Send className="w-4 h-4" /> Lamar Sekarang
              </button>
              <a
                href={selectedJob.brochure}
                download
                className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-300 transition"
                >
                <FileDown className="w-4 h-4" /> Unduh Brosur
                </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
