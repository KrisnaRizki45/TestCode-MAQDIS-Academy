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
            <span className="font-semibold">Ardexa</span> berkomitmen untuk melindungi privasi setiap klien dan mitra kerja. 
            Kebijakan privasi ini menjelaskan bagaimana data pribadi dan informasi proyek 
            dikelola dengan aman, profesional, dan sesuai peraturan yang berlaku.
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
                Kami dapat mengumpulkan informasi seperti nama, email, nomor telepon, 
                alamat, serta data proyek yang relevan dengan kebutuhan layanan konsultasi, 
                konstruksi, desain, maupun perizinan.
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
                Informasi digunakan untuk memberikan layanan terbaik, memastikan kelancaran 
                proses konsultasi dan proyek, menghubungi klien terkait kebutuhan proyek, serta 
                mendukung pengurusan perizinan yang sesuai regulasi.
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
                Data klien dan mitra dijaga kerahasiaannya dengan sistem pengamanan internal. 
                Kami memastikan informasi proyek maupun data pribadi tidak disalahgunakan 
                dan hanya digunakan sesuai tujuan layanan.
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
                Kebijakan privasi ini dapat diperbarui sesuai perkembangan layanan dan regulasi. 
                Setiap perubahan akan diinformasikan melalui website atau komunikasi resmi kami.
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
