import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-items-center font-bold">U</div>
            <span className="font-bold text-gray-800 text-lg">Universitas Nusantara</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#faculties" className="hover:text-blue-600">Fakultas</a>
            <a href="#programs" className="hover:text-blue-600">Program Studi</a>
            <a href="#news" className="hover:text-blue-600">Berita</a>
            <a href="#contact" className="hover:text-blue-600">Kontak</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#faculties" className="block py-2">Fakultas</a>
            <a href="#programs" className="block py-2">Program Studi</a>
            <a href="#news" className="block py-2">Berita</a>
            <a href="#contact" className="block py-2">Kontak</a>
          </div>
        )}
      </div>
    </header>
  )
}
