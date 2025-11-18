const BLOG_POSTS = [
  {
    id: 1,
    title: "Boost Your Immunity Naturally",
    image: "https://images.unsplash.com/photo-1588776814546-d3a3a6b1a53c?w=800&h=600&fit=crop",
    excerpt: "Learn natural ways to strengthen your immune system with vitamins, minerals, and lifestyle tips.",
    author: "Dr. Sarah Johnson",
    date: "Nov 10, 2025"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Hydration",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&h=600&fit=crop",
    excerpt: "Discover how to stay hydrated effectively, the benefits of IV hydration, and tips for daily water intake.",
    author: "Michael Chen",
    date: "Nov 8, 2025"
  },
  {
    id: 3,
    title: "IV Therapy for Beauty and Wellness",
    image: "https://images.unsplash.com/photo-1618354690239-7f5b71f146b6?w=800&h=600&fit=crop",
    excerpt: "Explore how IV treatments enhance your skin, hair, and overall vitality with targeted nutrients.",
    author: "Emily Rodriguez",
    date: "Nov 5, 2025"
  }
];

function BlogApp() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="hero-banner py-16 text-center">
        <h1 className="text-5xl font-bold text-white">Wellness Blog</h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[var(--primary-color)]">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-gray-500 text-sm">{post.author} - {post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('blog-root'));
root.render(<BlogApp />);
