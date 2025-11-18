const SERVICES_DATA = [
  { id: 1, name: 'Jetfuel Drip', price: 1000, category : 'energy', icon: 'zap', description: 'All in one. Improves mood, skin, detox and boosts energy.' },
  { id: 2, name: 'Immune Boost Drip', price:600, category: 'health', icon: 'activity', description: 'Strengthens your immune system.' },
  { id: 3, name: 'Skin Glow Drip', price: 800, category: 'beauty', icon: 'sparkles', description: 'Improves fine lines and wrinkles. Reduces dark marks, has a skin whitening effect and even tone.' },
  { id: 4, name: 'Sports Recovery Drip', price: 650, category: 'fitness', icon: 'activity', description: 'Speed up post-activity recovery.' },
  { id: 5, name: 'Detox Drip', price: 640, category: 'recovery', icon: 'leaf', description: 'Reduces fatigue and detoxes your body.' },
  { id: 6, name: 'Anti-Inflammatory Drip', price: 850, category: 'health', icon: 'activity', description: 'Reduces joint pain and inflammation.' },
  { id: 7, name: 'Hangover Drip', price: 680, category: 'recovery', icon: 'leaf', description: 'Hydrates and helps you recover faster.' },
  { id: 8, name: 'Brain Power Drip', price: 650, category:'energy', icon: 'brain', description: 'Helps with memory boost, focus and enery.' },
  { id: 9, name: 'Fertility Drip', price: 700, category: 'health', icon: 'heart', description: 'Helps with producing better quality sperms and eggs.' },
  { id: 10, name: 'Anti-Aging Drip', price: 850, category: 'beauty', icon: 'clock', description: 'Improves fine lines and wrinkles.' },
  { id: 11, name: 'Sports Performance Drip', price: 700, category: 'fitness', icon: 'dumbbell', description: 'Optimize athletic performance.' },
  { id: 12, name: 'Energy Boost Drip', price: 600, category: 'energy', icon: 'zap', description: 'Boosts energy levels, mood and reduces stress.' },
  { id: 13, name: 'Dehydration Drip', price: 200, category: 'health', icon: 'droplets', description: 'Saline only, helps with dehydration.' },
];

function ServicesApp() {
  const [filteredServices, setFilteredServices] = React.useState(SERVICES_DATA);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [priceRange, setPriceRange] = React.useState([100, 1500]);

  const categories = ['all', 'energy', 'health', 'beauty', 'recovery', 'fitness'];

  React.useEffect(() => {
    let filtered = SERVICES_DATA;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    filtered = filtered.filter(service => service.price >= priceRange[0] && service.price <= priceRange[1]);
    
    setFilteredServices(filtered);
  }, [selectedCategory, priceRange]);

  const handleMinPriceChange = (e) => {
    const newMin = parseInt(e.target.value);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([priceRange[0], newMax]);
  };

  try {
    return (
      <div className="min-h-screen bg-white" data-name="services-app" data-file="services_app.js">
        <Header />
        
        <div className="hero-banner">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
            <div className="flex items-center justify-center space-x-2 text-white">
              <a href="index.html" className="hover:text-[var(--accent-color)]">Home</a>
              <span>/</span>
              <span>Services</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">Filter Services</h2>
            
            <div className="mb-6">
              <h3 className="font-bold mb-3 text-gray-700">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg transition R{
                      selectedCategory === cat
                        ? 'bg-[var(--primary-color)] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-gray-700">
                  Price Range: R{priceRange[0]} - R{priceRange[1]}
                </h3>
              <div className="relative w-full h-6">
                  <div className="absolute h-[6px] rounded bg-gray-300 w-full top-1/2 transform -translate-y-1/2"></div>
                  <div className="absolute h-[6px] rounded bg-[var(--primary-color)] top-1/2 transform -translate-y-1/2"
                      style={{
                      left: `R{((priceRange[0] - 100) / 300) * 100}%`,
                      right: `R{100 - ((priceRange[1] - 100) / 300) * 100}%`
                      }}
                  ></div>
                    <input
                      type="range"
                      min="100"
                      max="1500"
                      value={priceRange[0]}
                      onChange={handleMinPriceChange}
                      className="absolute w-full bg-transparent pointer-events-none"
                      style={{ zIndex: priceRange[0] > 350 ? 5 : 3 }}
                   />
                  <input
                      type="range"
                      min="100"
                      max="1500"
                      value={priceRange[1]}
                      onChange={handleMaxPriceChange}
                      className="absolute w-full bg-transparent pointer-events-none"
                   />
              </div>
             </div>
            </div>
          </div>

          <div class="promo-message">
            All prices include our limited 6-month promotional discount.
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">No services found matching your filters</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ServicesApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ServicesApp />);
