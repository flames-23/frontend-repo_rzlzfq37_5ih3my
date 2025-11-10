import { useEffect, useState } from 'react'

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/news`)
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
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Berita Terbaru</h2>
        </div>
        {loading ? (
          <p className="text-gray-500">Memuat...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">Belum ada berita. Tekan "Isi Contoh" untuk melihat demo.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((n) => (
              <article key={n.id} className="rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition">
                {n.cover_image && (
                  <img src={n.cover_image} alt={n.title} className="w-full aspect-[16/9] object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">{n.title}</h3>
                  {n.author && <p className="text-sm text-gray-500 mt-1">Oleh {n.author}</p>}
                  {n.content && <p className="text-gray-600 mt-3 text-sm line-clamp-3">{n.content}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
