const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    text: "The energy boost IV drip completely transformed my daily routine. I feel more vibrant and focused than ever before!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Michael Chen",
    text: "Professional staff and amazing results! The hydration therapy helped me recover quickly after my marathon.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Rodriguez",
    text: "Health Oasis is my go-to for wellness. The beauty IV drip gave me the glow I've been looking for!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

function TestimonialsApp() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="hero-banner py-16 text-center">
        <h1 className="text-5xl font-bold text-white">Testimonials</h1>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
            <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <p className="text-gray-600 mb-4">"{t.text}"</p>
            <h3 className="text-lg font-bold text-[var(--primary-color)]">{t.name}</h3>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('testimonials-root'));
root.render(<TestimonialsApp />);
