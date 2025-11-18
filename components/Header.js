function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const dropdownTimeout = React.useRef(null);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
  };

  try {
    return (
      <>
        <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${scrolled ? 'header-visible' : ''}`} data-name="header" data-file="components/Header.js">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="index.html" className="flex items-center">
              <img src="trickle/assets/logo_new_2.png" alt="Health Oasis Logo" className="h-20 w-auto object-contain" /> 
              </a>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="index.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Home</a>
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">About Us</a>
              <a href="services.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Services</a>
              {/* <a href="blog.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Wellness Blog</a>
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Gallery</a> 
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Testimonials</a> */}
              <a href="contact.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Contact Us</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61583377271716&sk=about_contact_and_basic_info" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-facebook text-sm"></div>
              </a>
              <a href="https://instagram.com/healthoasis_ivdrips?igsh=MWhhdmdzNGwyZ3dp/m" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-instagram text-sm"></div>
              </a>
              <a href="https://wa.me/27849700201" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-message-circle text-sm"></div>
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              <div className="icon-menu text-2xl"></div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
                <a href="index.html" className="text-gray-700">Home</a>
                <a href="about.html" className="text-gray-700">About</a>
                <a href="services.html" className="text-gray-700">Services</a>
                <a href="contact.html" className="text-gray-700">Contact Us</a>
              </nav>
            </div>
          )}
        </header>
        <a href="contact.html" className="fixed bottom-6 right-6 bg-[var(--primary-color)] text-white py-3 px-5 rounded-full shadow-lg hover:bg-opacity-90 transition z-50">Book Now</a>
      </>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}