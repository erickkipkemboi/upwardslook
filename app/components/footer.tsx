import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-auto">
      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <span className="font-semibold text-base">&copy; {new Date().getFullYear()} Your Company</span>
          <span className="text-gray-400">All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          <div className="flex space-x-3 ml-2">
            <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4 hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-4 h-4 hover:text-sky-400 transition" /></a>
            <a href="mailto:contact@example.com" aria-label="Email"><Mail className="w-4 h-4 hover:text-rose-400 transition" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
