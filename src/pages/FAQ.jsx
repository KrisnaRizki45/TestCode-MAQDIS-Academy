import React, { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu aplikasi ini?",
    answer:
      "Aplikasi ini adalah platform untuk mempermudah manajemen data, reservasi, dan informasi secara online.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Kamu bisa mendaftar melalui menu Sign Up di halaman utama dengan mengisi data yang diperlukan.",
  },
  {
    question: "Apakah aplikasi ini gratis?",
    answer:
      "Ya, aplikasi ini dapat digunakan secara gratis. Namun, beberapa fitur premium akan tersedia di masa depan.",
  },
  {
    question: "Bagaimana jika saya lupa password?",
    answer:
      "Kamu bisa klik Lupa Password di halaman login, lalu ikuti instruksi untuk mereset password.",
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
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Pertanyaan */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      {index + 1}
                    </span>
                    <span className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Jawaban */}
                <div
                  className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
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
