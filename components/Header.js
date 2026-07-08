function Header() {
  // shadow effect scroll, dropdown menu open, mobile navigation menu control, timeout delay for dropdown
  const [headerVisible, setHeaderVisible] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const dropdownTimeout = React.useRef(null);

  // detect scroll for header styling
  React.useEffect(() => {
  let lastScrollY = window.scrollY;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);
    if (currentScrollY < lastScrollY || currentScrollY < 20) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }lastScrollY = currentScrollY;
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  try {
    return (
      <>
    {/* Fixed header*/}
        <header
  style={{ padding: "10px 0" }}
  className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
    headerVisible ? "translate-y-0" : "-translate-y-full"
  } ${scrolled ? "header-visible" : ""}`}
>
          {/* Header inner container*/}
          <div className="container mx-auto px-4 py-1 flex items-center justify-between">
            {/* Logo*/}
            <a href="index.html" className="flex items-center">
              <img src="trickle/assets/logo_new_2.png" alt="Health Oasis Logo" style={{ height: "50px" }} className="w-auto object-contain" /> 
              </a>
            {/*Nav Links-desktop*/}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="index.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Home</a>
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">About Us</a>
              <a href="services.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Services</a>
              {/*Future nav items*/}
              {/* <a href="blog.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Wellness Blog</a>
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Gallery</a> 
              <a href="about.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Testimonials</a> */}
              <a href="contact.html" className="text-gray-700 hover:text-[var(--primary-color)] transition">Contact Us</a>
            </nav>
            {/*Social media links-desktop*/}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61583377271716&sk=about_contact_and_basic_info" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-facebook text-sm"></div>
              </a>
              <a href="https://instagram.com/healthoasis_ivdrips?igsh=MWhhdmdzNGwyZ3dp/m" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-instagram text-sm"></div>
              </a>
              <a href="https://wa.me/27624827497" target="_blank" className="w-9 h-9 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition">
                <div className="icon-message-circle text-sm"></div>
              </a>
            </div>
            {/*Nav button-mobile*/}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              <div className="icon-menu text-2xl"></div>
            </button>
          </div>
          {/*dropdown-mobile*/}
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
          {/*Book now button*/}
        <a href="contact.html" className="fixed bottom-6 right-6 bg-[var(--primary-color)] text-white py-3 px-5 rounded-full shadow-lg hover:bg-opacity-90 transition z-50">Book Now</a>
      </>
    );
  } catch (error) {
    // Error handling for interface, in future, add a page instead of null
    console.error('Header component error:', error);
    return null;
  }
}
