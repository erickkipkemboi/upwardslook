import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-auto">
      <Separator />
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
