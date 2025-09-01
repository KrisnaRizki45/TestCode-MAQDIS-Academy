import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Privacy Policy Section */}
      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Kami menghargai privasi pengguna. Kebijakan privasi ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                  1
                </span>
                Informasi yang Kami Kumpulkan
              </h2>
              <p className="text-gray-600 mt-2 ml-11">
                Kami dapat mengumpulkan informasi pribadi seperti nama, email,
                nomor telepon, serta data penggunaan aplikasi.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                  2
                </span>
                Bagaimana Kami Menggunakan Informasi
              </h2>
              <p className="text-gray-600 mt-2 ml-11">
                Data yang dikumpulkan digunakan untuk meningkatkan layanan,
                menghubungi pengguna, serta menyediakan fitur aplikasi yang lebih baik.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                  3
                </span>
                Keamanan Data
              </h2>
              <p className="text-gray-600 mt-2 ml-11">
                Kami berkomitmen untuk melindungi informasi pribadi Anda dengan
                teknologi keamanan yang memadai.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                  4
                </span>
                Perubahan Kebijakan
              </h2>
              <p className="text-gray-600 mt-2 ml-11">
                Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu.
                Perubahan akan diumumkan melalui aplikasi atau website kami.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
