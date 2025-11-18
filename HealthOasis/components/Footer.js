function Footer() {
  try {
    return (
      <footer className="bg-[var(--secondary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--accent-color)]">Health Oasis</h3>
              <p className="text-gray-300 text-sm">Your premier destination for IV drip therapy and wellness treatments.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-[var(--accent-color)]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="index.html" className="text-gray-300 hover:text-white transition">Home</a></li>
                <li><a href="about.html" className="text-gray-300 hover:text-white transition">About Us</a></li>
                <li><a href="services.html" className="text-gray-300 hover:text-white transition">Services</a></li>
                <li><a href="contact.html" className="text-gray-300 hover:text-white transition">Contact</a></li>
                <li><a href="trickle/notes/medical_disclaimer.pdf" target="_blank" className="text-gray-300 hover:text-white transition">Medical Disclaimer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[var(--accent-color)]">Contact Info</h4>
              <p className="text-gray-300 text-sm mb-2">33 Saffery Street</p>
              <p className="text-gray-300 text-sm mb-2">Villa Nadia, Humansdorp 6300</p>
              <p className="text-gray-300 text-sm">Phone: (042) 291-0034</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[var(--accent-color)]">Operating Hours</h4>
              <p className="text-gray-300 text-sm mb-2">Monday - Friday:9am - 5pm</p>
              <p className="text-gray-300 text-sm mb-2">Saturday: 9am - 5pm</p>
              <p className="text-gray-300 text-sm">Sunday:      CLOSED</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col items-center text-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Health Oasis. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61583377271716&sk=about_contact_and_basic_info" target="_blank" className="text-gray-400 hover:text-white transition">
                <div className="icon-facebook text-xl"></div>
                  </a>
                  <a href="https://instagram.com/healthoasis_ivdrips?igsh=MWhhdmdzNGwyZ3dp/" target="_blank" className="text-gray-400 hover:text-white transition">
                <div className="icon-instagram text-xl"></div>
                  </a>
                  <a href="https://wa.me/27849700201" target="_blank" className="text-gray-400 hover:text-white transition">
                <div className="icon-message-circle text-xl"></div>
                  </a>
                </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}