import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#DAA520] text-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between space-y-8 md:space-y-0">
          
          {/* LOGO + SOCIAL ICONS */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" aria-label="Home">
              <div className="w-20 h-20">
                <Image
                  src="/icons/logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xl font-semibold text-white">
                Upwards Look Company
              </p>
            </Link>

            <div className="flex space-x-3">
              {[
                { href: "https://facebook.com", icon: "/icons/facebook.svg", label: "Facebook" },
                { href: "https://tiktok.com", icon: "/icons/tiktok.svg", label: "Tiktok" },
                { href: "https://instagram.com", icon: "/icons/instagram.svg", label: "Instagram" },
                { href: "https://X.com", icon: "/icons/X.svg", label: "X" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={icon}
                    alt={`${label} Icon`}
                    width={28}
                    height={28}
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* LINK SECTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-base">
            {[
              {
                title: "OUR SERVICES",
                links: ["Reed Roof Construction", "Roof Repair & Maintenance", "Roof Inspection"],
              },
              {
                title: "COMPANY",
                links: ["Home", "About Us","Contact Us"],
              },
              {
                title: "LEARNING & RESOURCES",
                links: ["Roofing Guides", "Materials & Techniques", "Safety Standards", "Videos & Tutorials"],
              },
              {
                title: "SUPPORT",
                links: ["Customer Support", "Warranty Information", "Terms & Conditions", "Privacy Policy"],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                
                {/* Updated heading color */}
                <h3 className="font-bold text-[#3B2F2F]">
                  {title}
                </h3>

                <ul className="mt-2 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white hover:text-[#014421] transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-10 text-center text-[#1A1A1A] text-sm font-medium">
          © 2025 Upwards Look Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
