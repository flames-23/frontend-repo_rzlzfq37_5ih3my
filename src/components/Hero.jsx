export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-wider text-blue-700 font-semibold mb-3">Selamat datang</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Universitas Nusantara
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Kampus inovasi dengan komunitas belajar yang kolaboratif. Temukan fakultas, program studi, dan berita terbaru.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#programs" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg shadow">
              Lihat Program
            </a>
            <a href="#contact" className="inline-block bg-gray-900 hover:bg-black text-white font-semibold py-3 px-5 rounded-lg rounded shadow">
              Hubungi Kami
            </a>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-xl shadow-xl w-full" src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1400&q=80" alt="Campus" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4">
            <p className="font-semibold text-gray-800">100+ Program Studi</p>
            <p className="text-sm text-gray-500">Sarjana, Magister, dan Doktor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
