const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1588776814546-d3a3a6b1a53c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1618354690239-7f5b71f146b6?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1579758629931-3b2bca03d9b6?w=800&h=600&fit=crop"
];

function GalleryApp() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="hero-banner py-16 text-center">
        <h1 className="text-5xl font-bold text-white">Gallery</h1>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transform hover:scale-105 transition" />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('gallery-root'));
root.render(<GalleryApp />);
