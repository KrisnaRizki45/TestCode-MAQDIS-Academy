import React, { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu Arsa Dalu Kreasi?",
    answer:
      "Arsa Dalu Kreasi adalah perusahaan konsultan yang bergerak di bidang proyek, konstruksi, desain & interior, serta perizinan, dengan fokus pada solusi yang inovatif dan profesional.",
  },
  {
    question: "Layanan apa saja yang tersedia?",
    answer:
      "Kami menyediakan jasa perencanaan dan manajemen proyek, pembangunan konstruksi, desain arsitektur & interior, serta pengurusan berbagai jenis perizinan usaha maupun bangunan.",
  },
  {
    question: "Apakah Arsa Dalu Kreasi melayani proyek skala besar maupun kecil?",
    answer:
      "Ya, kami menangani berbagai jenis proyek, mulai dari rumah tinggal, kantor, kafe, hingga proyek infrastruktur berskala besar sesuai kebutuhan klien.",
  },
  {
    question: "Bagaimana cara konsultasi atau menghubungi tim kami?",
    answer:
      "Anda dapat menghubungi kami melalui halaman Kontak di website, mengisi form konsultasi, atau langsung melalui nomor telepon dan email resmi perusahaan.",
  },
  {
    question: "Apakah perusahaan juga membantu dalam pengurusan perizinan?",
    answer:
      "Benar, kami membantu klien dalam pengurusan perizinan bangunan maupun perizinan usaha agar proses proyek berjalan lancar dan sesuai regulasi.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Frequently Asked Questions (FAQ)
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
              >
                {/* Pertanyaan */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      {index + 1}
                    </span>
                    <span className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon dengan background */}
                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
                      openIndex === index
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-gray-100 text-gray-600 hover:bg-blue-50"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Jawaban */}
                <div
                  className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-gray-50 rounded-xl p-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FAQ;
