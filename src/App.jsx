import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faculties from './components/Faculties'
import Programs from './components/Programs'
import News from './components/News'
import Contact from './components/Contact'
import { useState } from 'react'

export default function App() {
  const [seeding, setSeeding] = useState(false)
  const [seeded, setSeeded] = useState(false)

  const handleSeed = async () => {
    setSeeding(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/seed`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ include_samples: true }) })
      if (!res.ok) throw new Error('Gagal mengisi data contoh')
      setSeeded(true)
      // Small delay to allow DB to commit
      setTimeout(() => window.location.reload(), 600)
    } catch (e) {
      alert(e.message)
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Faculties />
      <Programs />
      <News />
      <Contact />
      <footer className="border-t border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">© {new Date().getFullYear()} Universitas Nusantara. Semua hak dilindungi.</p>
          <div className="flex items-center gap-3">
            <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">Tes Koneksi</a>
            <button onClick={handleSeed} disabled={seeding} className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded disabled:opacity-60">
              {seeding ? 'Mengisi...' : (seeded ? 'Data Terisi' : 'Isi Contoh')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
