function ContactApp() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  };

  try {
    return (
      <div className="min-h-screen bg-white" data-name="contact-app" data-file="contact_app.js">
        <Header />
        
        <div className="hero-banner">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="flex items-center justify-center space-x-2 text-white">
              <a href="index.html" className="hover:text-[var(--accent-color)]">Home</a>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[var(--primary-color)]">Book and Get In Touch</h2>
                <p className="text-gray-700 mb-8">We'd love to hear from you! Send us your booking on whatsapp or form, and we'll respond as soon as possible.</p>
                
                <div class="whatsapp-booking">
                  <p>Book your IV drip session instantly via WhatsApp:</p>
                    <a href="https://wa.me/27849700201" target="_blank" class="whatsapp-btn">
                       WhatsApp Booking
                    </a>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--accent-color)]">
                      <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-gray-600">33 Saffery Street<br/>Villa Nadia, Humansdorp 6300</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--accent-color)]">
                      <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">(042) 291-0034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--accent-color)]">
                      <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">lilithaburwana99@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <form action="https://formsubmit.co/oysmbatani@gmail.com" method="POST" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                    <p className="text-xs text-gray-600 mb-3">
                      By submitting, you confirm you have read our <a href="trickle/notes/disclaimer.pdf" target="_blank" className="underline">Medical Disclaimer</a>.
                    </p>

                  <button type="submit" className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg hover:bg-opacity-90 transition font-bold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ContactApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactApp />);