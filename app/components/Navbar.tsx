import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-10 w-10" /> 
            <span className="text-xl font-bold text-gray-800">Upwards Look Company</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-12 items-center">
            <Link href="/" className="text-gray-700 hover:text-black font-medium transition">Home</Link>
            <Link href="/About" className="text-gray-700 hover:text-black font-medium transition">About</Link>
            <Link href="/Service" className="text-gray-700 hover:text-black font-medium transition">Services</Link>
            <Link href="/Contact" className="text-gray-700 hover:text-black font-medium transition">Contact</Link>
          </nav>

             </div>
      </div>
    </header>
  )
}
