import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { slideUpVariants, zoomInVariants } from "./animation";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "", // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_jn3918m";
    const templateID = "template_27l5dh9";
    const publicKey = "oM1qdq9DZH54B0JEY";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setNotification({
          show: true,
          message: "Pesan berhasil dikirim!",
          type: "success",
        });
        setFormData({ fullName: "", email: "", phone: "", message: "" });

        setTimeout(() => setNotification({ show: false }), 3000);
      })
      .catch(() => {
        setNotification({
          show: true,
          message: "Gagal mengirim pesan. Silakan coba lagi.",
          type: "error",
        });
        setTimeout(() => setNotification({ show: false }), 3000);
      });
  };

  return (
    <div id="contact" className="bg-white w-full relative">
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
        {/* Text Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <Motion.h1
            variants={slideUpVariants}
            className="text-blue-600 text-2xl font-semibold tracking-wide"
          >
            HUBUNGI KAMI
          </Motion.h1>
          <Motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[32px] lg:text-[40px] font-bold leading-tight"
          >
            Hubungi Kami Untuk Pertanyaan Apapun
          </Motion.h1>
          <div className="w-[120px] h-[6px] bg-blue-600 rounded-md"></div>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Ardexa siap membantu Anda mewujudkan proyek dengan
            solusi arsitektur, teknik, dan perencanaan terbaik. Hubungi kami
            untuk konsultasi, penawaran, atau pertanyaan terkait layanan kami.
          </p>

          {/* Google Map */}
          <div className="w-full mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.439023376686!2d107.56478467499677!3d-6.9574264930429575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef000223f79d%3A0xe3d0db331934f33!2sPT%20ARSA%20DALU%20KREASI!5e0!3m2!1sen!2sid!4v1756294475296!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ardexa"
            ></iframe>
          </div>
        </Motion.div>

        {/* Form Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full bg-white shadow-xl rounded-2xl p-6 mt- border border-gray-100"
        >
          <Motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <label></label>
            <input
              type="text"
              name="fullName"
              placeholder="Nama Lengkap"
              value={formData.fullName}
              onChange={handleChange}
              className="px-5 py-3 border border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={formData.email}
              onChange={handleChange}
              className="px-5 py-3 border border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none text-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              value={formData.phone}
              onChange={handleChange}
              className="px-5 py-3 border border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none text-sm"
            />
            <textarea
              name="message"
              placeholder="Pesan Kamu"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              className="px-5 py-3 border border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none text-sm "
              required
            />
            <Motion.button
              type="submit"
              variants={zoomInVariants}
              className="bg-blue-600 hover:bg-blue-900 text-white px-8 py-3 font-semibold rounded-lg w-full transition-all duration-300 shadow-md"
            >
              Kirim Pesan
            </Motion.button>
          </Motion.form>
        </Motion.div>
      </div>

      {/* Notification Modal */}
      <AnimatePresence>
        {notification.show && (
          <Motion.div
            key="notification-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-50 bg-black/40"
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`bg-white px-8 py-6 rounded-2xl shadow-2xl text-center w-[90%] max-w-sm border-2
                ${
                  notification.type === "success"
                    ? "border-blue-600"
                    : "border-red-600"
                }`}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">
                {notification.type === "success" ? (
                  <FaCheckCircle className="text-blue-600 mx-auto" />
                ) : (
                  <FaTimesCircle className="text-red-600 mx-auto" />
                )}
              </div>

              {/* Title */}
              <h2
                className={`text-xl font-bold mb-2 ${
                  notification.type === "success"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                {notification.type === "success" ? "Berhasil!" : "Gagal!"}
              </h2>

              {/* Message */}
              <p className="text-gray-700">{notification.message}</p>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
