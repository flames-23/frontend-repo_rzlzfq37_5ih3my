import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      setStatus({ type: 'success', message: 'Terima kasih! Kami akan menghubungi Anda.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ type: 'error', message: e.message || 'Terjadi kesalahan' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600">Tanyakan tentang pendaftaran, program, atau kerja sama.</p>
            {status && (
              <div className={`mt-4 p-3 rounded ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {status.message}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nama Lengkap</label>
              <input name="full_name" required className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama Anda" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Telepon</label>
                <input name="phone" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="08xxxxxxxxxx" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Minat Program</label>
              <input name="interest_program" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contoh: Informatika" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Pesan</label>
              <textarea name="message" rows="4" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesan Anda..." />
            </div>
            <button disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg disabled:opacity-60">
              {loading ? 'Mengirim...' : 'Kirim'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
