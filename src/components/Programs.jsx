import { useEffect, useState } from 'react'

export default function Programs() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/programs`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Studi</h2>
        {loading ? (
          <p className="text-gray-500">Memuat...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">Belum ada data. Gunakan tombol "Isi Contoh" di bawah.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <article key={idx} className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.level} • {p.duration_years ? `${p.duration_years} tahun` : 'Durasi fleksibel'}</p>
                {p.overview && <p className="text-gray-600 mt-3 text-sm">{p.overview}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
