export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="QMclean" className="h-10 mb-4" />
          <p className="text-gray-400 text-sm">
            Quality cleaning services for homes and businesses in Lagos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-brand">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-400">📍 Lagos, Nigeria</p>
          <p className="text-sm text-gray-400 mt-2">📞 +234 800 000 0000</p>
          <p className="text-sm text-gray-400 mt-2">✉ hello@qmclean.com.ng</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} QMclean. All rights reserved.
      </div>
    </footer>
  );
}
