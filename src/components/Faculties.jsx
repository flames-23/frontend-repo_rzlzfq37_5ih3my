import { useEffect, useState } from 'react'

export default function Faculties() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/faculties`)
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
    <section id="faculties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Fakultas</h2>
        {loading ? (
          <p className="text-gray-500">Memuat...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">Belum ada data. Klik tombol "Isi Contoh" di bagian bawah untuk mengisi data demo.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((f) => (
              <article key={f.id} className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition bg-white">
                {f.featured_image && (
                  <img src={f.featured_image} alt={f.name} className="rounded-lg mb-4 aspect-[16/9] object-cover" />
                )}
                <h3 className="text-xl font-semibold text-gray-800">{f.name}</h3>
                {f.dean && <p className="text-sm text-gray-500 mt-1">Dekan: {f.dean}</p>}
                {f.description && <p className="text-gray-600 mt-3 text-sm">{f.description}</p>}
                {f.website && <a href={f.website} className="inline-block mt-4 text-blue-600 font-medium">Kunjungi</a>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
