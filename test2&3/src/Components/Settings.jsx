import React, { useState } from 'react';
import { ChevronLeft, User, Bell, Shield, Moon, Globe, HelpCircle, LogOut, Settings } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('id');
  const [autoPlay, setAutoPlay] = useState(true);

  const settingsCategories = [
    {
      title: 'Akun',
      items: [
        { icon: User, label: 'Profil Pengguna', description: 'Kelola informasi akun Anda' },
        { icon: Shield, label: 'Keamanan', description: 'Password dan keamanan akun' },
      ]
    },
    {
      title: 'Preferensi',
      items: [
        { 
          icon: Bell, 
          label: 'Notifikasi', 
          description: 'Pengaturan pemberitahuan',
          toggle: true,
          value: notifications,
          onChange: setNotifications
        },
        { 
          icon: Moon, 
          label: 'Mode Gelap', 
          description: 'Ubah tampilan aplikasi',
          toggle: true,
          value: darkMode,
          onChange: setDarkMode
        },
        { 
          icon: Globe, 
          label: 'Bahasa', 
          description: language === 'id' ? 'Indonesia' : 'English',
          hasArrow: true
        },
      ]
    },
    {
      title: 'Pembelajaran',
      items: [
        { 
          icon: Settings, 
          label: 'Auto Play Audio', 
          description: 'Putar otomatis audio ayat',
          toggle: true,
          value: autoPlay,
          onChange: setAutoPlay
        },
      ]
    },
    {
      title: 'Dukungan',
      items: [
        { icon: HelpCircle, label: 'Bantuan & FAQ', description: 'Dapatkan bantuan dan informasi' },
      ]
    }
  ];

  const ToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-orange-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-full bg-orange-50 p-6 md:p-10 lg:p-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Pengaturan</h1>
        <p className="text-gray-500 text-sm mt-1">Kelola akun dan preferensi Anda</p>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">HA</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 text-lg md:text-xl">Hafalan Abrian</h3>
          <p className="text-gray-500 text-sm md:text-base">hafalan.abrian@email.com</p>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <div className="bg-orange-100 px-3 py-1 rounded-full">
              <span className="text-orange-600 text-xs md:text-sm font-medium">12 Hari Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Categories */}
      <div className="space-y-6">
        {settingsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
              {category.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={itemIndex}
                    className={`flex items-center justify-between p-4 hover:bg-orange-50 transition-colors ${
                      itemIndex < category.items.length - 1 ? 'border-b border-orange-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.label}</h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {item.toggle && <ToggleSwitch checked={item.value} onChange={item.onChange} />}
                      {item.hasArrow && <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="pt-6">
        <button className="w-full bg-white border border-red-200 hover:bg-red-50 transition-colors rounded-2xl p-4 flex items-center justify-center space-x-3">
          <LogOut className="w-5 h-5 text-red-500" />
          <span className="font-medium text-red-500">Keluar dari Akun</span>
        </button>
      </div>

      {/* App Version */}
      <div className="text-center py-6">
        <p className="text-gray-400 text-sm md:text-base">Maqdis Academy v2.1.0</p>
      </div>
    </div>
  );
};

export default SettingsPage;
