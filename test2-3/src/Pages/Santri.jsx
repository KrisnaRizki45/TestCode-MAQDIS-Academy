import React, { useState } from 'react';
import { Users, Search, Eye, DollarSign, CheckCircle, Trophy, Award, X, Plus, Edit, Trash2 } from 'lucide-react';

export default function HamimUserSantri() {
  const [selectedUser, setSelectedUser] = useState(null); // untuk detail view
  const [activeTab, setActiveTab] = useState('Profil');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [modalType, setModalType] = useState(null); // 'add' | 'edit'
  const [formData, setFormData] = useState({ name: '', email: '', status: 'active', hafalanCompleted: 0, hafalanTotal: 30, sumbanganTotal: 0, sumbanganFrequency: 'Bulanan', avatar: '' });

  const [santriData, setSantriData] = useState([
    { id: 1, name: 'Ahmad', email: 'ahmad@email.com', avatar: 'A', status: 'active',
      hafalan: { completed: 10, total: 30 }, sumbangan: { total: 50000, frequency: 'Bulanan' }, lastActive: '2025-09-24' },
    { id: 2, name: 'Budi', email: 'budi@email.com', avatar: 'B', status: 'inactive',
      hafalan: { completed: 30, total: 30 }, sumbangan: { total: 75000, frequency: 'Mingguan' }, lastActive: '2025-09-23' },
  ]);

  const filteredSantri = santriData.filter(s =>
    (s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     s.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === 'all' || s.status === filterStatus)
  );

  const formatRupiah = amount => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

  const getStatusColor = status => status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  const getProgressColor = pct => pct >= 80 ? 'bg-green-600' : pct >= 60 ? 'bg-yellow-600' : 'bg-red-600';

  const handleSave = () => {
    if(modalType === 'add'){
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        avatar: formData.avatar || formData.name.charAt(0).toUpperCase(),
        status: formData.status,
        hafalan: { completed: formData.hafalanCompleted, total: formData.hafalanTotal },
        sumbangan: { total: formData.sumbanganTotal, frequency: formData.sumbanganFrequency },
        lastActive: new Date().toISOString().slice(0,10)
      };
      setSantriData([...santriData, newUser]);
    } else if(modalType === 'edit'){
      setSantriData(santriData.map(s => s.id === selectedUser.id ? {
        ...s,
        name: formData.name,
        email: formData.email,
        avatar: formData.avatar || formData.name.charAt(0).toUpperCase(),
        status: formData.status,
        hafalan: { completed: formData.hafalanCompleted, total: formData.hafalanTotal },
        sumbangan: { total: formData.sumbanganTotal, frequency: formData.sumbanganFrequency },
      } : s));
    }
    setModalType(null);
    setFormData({ name: '', email: '', status: 'active', hafalanCompleted: 0, hafalanTotal: 30, sumbanganTotal: 0, sumbanganFrequency: 'Bulanan', avatar: '' });
  }

  const handleDelete = (id) => {
    if(window.confirm('Apakah Anda yakin ingin menghapus santri ini?')){
      setSantriData(santriData.filter(s=>s.id !== id));
    }
  }

  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      status: user.status,
      hafalanCompleted: user.hafalan.completed,
      hafalanTotal: user.hafalan.total,
      sumbanganTotal: user.sumbangan.total,
      sumbanganFrequency: user.sumbangan.frequency
    });
    setModalType('edit');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-500"/> Data Santri
        </h1>
        <button onClick={()=>setModalType('add')} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          <Plus className="w-4 h-4"/> Tambah Santri
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Cari nama atau email..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <select 
          value={filterStatus} 
          onChange={e => setFilterStatus(e.target.value)} 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="all">Semua Status</option>
          <option value="active">Aktif</option>
          <option value="inactive">Tidak Aktif</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-100 rounded-t-xl">
            <tr>
              {['Santri','Status','Progress Hafalan','Sumbangan','Terakhir Aktif','Aksi'].map(h => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-200">
            {filteredSantri.map(s => (
              <tr key={s.id} className="hover:bg-orange-50">
                <td className="px-6 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-semibold">{s.avatar}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(s.status)}`}>
                    {s.status==='active'?'Aktif':'Tidak Aktif'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-orange-200 rounded-full h-2 mb-1">
                    <div className={`h-2 rounded-full ${getProgressColor((s.hafalan.completed/s.hafalan.total)*100)}`} style={{width:`${(s.hafalan.completed/s.hafalan.total)*100}%`}}></div>
                  </div>
                  <div className="text-xs text-gray-500">{s.hafalan.completed}/{s.hafalan.total} ({Math.round((s.hafalan.completed/s.hafalan.total)*100)}%)</div>
                </td>
                <td className="px-6 py-4 text-gray-800">{formatRupiah(s.sumbangan.total)}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{s.lastActive}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button onClick={()=>setSelectedUser(s)} className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center justify-center"><Eye className="w-4 h-4"/></button>
                  <button onClick={()=>openEditModal(s)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm flex items-center justify-center"><Edit className="w-4 h-4"/></button>
                  <button onClick={()=>handleDelete(s.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center justify-center"><Trash2 className="w-4 h-4"/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="flex justify-between p-6 border-b border-orange-200">
              <h2 className="text-xl font-bold text-gray-800">Detail Santri</h2>
              <button onClick={()=>setSelectedUser(null)} className="p-2 hover:bg-orange-100 rounded-full"><X className="w-5 h-5 text-gray-800"/></button>
            </div>
            <div className="p-6">
              <nav className="border-b mb-4 flex gap-4">
                {['Profil','Hafalan','Sumbangan','Performance'].map(tab => (
                  <button key={tab} onClick={()=>setActiveTab(tab)} className={`py-2 px-3 border-b-2 text-sm font-medium ${activeTab===tab?'border-orange-500 text-orange-800':'border-transparent text-gray-500'}`}>
                    {tab}
                  </button>
                ))}
              </nav>

              {activeTab==='Profil' && (
                <div className="text-gray-800 space-y-2">
                  <p><strong>Nama:</strong> {selectedUser.name}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Status:</strong> {selectedUser.status==='active'?'Aktif':'Tidak Aktif'}</p>
                </div>
              )}
              {activeTab==='Hafalan' && (
                <div className="text-gray-800 space-y-2">
                  <p>{selectedUser.hafalan.completed} dari {selectedUser.hafalan.total} juz</p>
                  <div className="w-full bg-orange-200 rounded-full h-2 mb-1">
                    <div className={`h-2 rounded-full ${getProgressColor((selectedUser.hafalan.completed/selectedUser.hafalan.total)*100)}`} style={{width:`${(selectedUser.hafalan.completed/selectedUser.hafalan.total)*100}%`}}></div>
                  </div>
                </div>
              )}
              {activeTab==='Sumbangan' && (
                <div className="text-gray-800 space-y-1">
                  <p><strong>Total:</strong> {formatRupiah(selectedUser.sumbangan.total)}</p>
                  <p><strong>Frekuensi:</strong> {selectedUser.sumbangan.frequency}</p>
                </div>
              )}
              {activeTab==='Performance' && (
                <div className="text-gray-800 space-y-1">
                  <p><strong>Last Active:</strong> {selectedUser.lastActive}</p>
                  <p><strong>Hafalan Selesai:</strong> {selectedUser.hafalan.completed}/{selectedUser.hafalan.total}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{modalType==='add'?'Tambah Santri':'Edit Santri'}</h2>
              <button onClick={()=>setModalType(null)} className="p-2 hover:bg-orange-100 rounded-full"><X className="w-5 h-5 text-gray-800"/></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Nama" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} className="w-full px-4 py-2 border rounded"/>
              <input type="email" placeholder="Email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} className="w-full px-4 py-2 border rounded"/>
              <input type="text" placeholder="Avatar (opsional)" value={formData.avatar} onChange={e=>setFormData({...formData,avatar:e.target.value})} className="w-full px-4 py-2 border rounded"/>
              <select value={formData.status} onChange={e=>setFormData({...formData,status:e.target.value})} className="w-full px-4 py-2 border rounded">
                <option value="active">Aktif</option>
                <option value="inactive">Tidak Aktif</option>
              </select>
              <div className="flex gap-2">
                <input type="number" placeholder="Hafalan Selesai" value={formData.hafalanCompleted} onChange={e=>setFormData({...formData,hafalanCompleted:Number(e.target.value)})} className="w-1/2 px-4 py-2 border rounded"/>
                <input type="number" placeholder="Hafalan Total" value={formData.hafalanTotal} onChange={e=>setFormData({...formData,hafalanTotal:Number(e.target.value)})} className="w-1/2 px-4 py-2 border rounded"/>
              </div>
              <div className="flex gap-2">
                <input type="number" placeholder="Sumbangan Total" value={formData.sumbanganTotal} onChange={e=>setFormData({...formData,sumbanganTotal:Number(e.target.value)})} className="w-1/2 px-4 py-2 border rounded"/>
                <input type="text" placeholder="Frekuensi Sumbangan" value={formData.sumbanganFrequency} onChange={e=>setFormData({...formData,sumbanganFrequency:e.target.value})} className="w-1/2 px-4 py-2 border rounded"/>
              </div>
              <button onClick={handleSave} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">{modalType==='add'?'Tambah':'Simpan'}</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
