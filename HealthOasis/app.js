class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    React.useEffect(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1 });

      revealElements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, []);

    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Header />
        
        <section className="hero-section">
          <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold mb-6 text-[var(--primary-color)]">Welcome to Health Oasis</h1>
              <p className="text-xl text-gray-700 mb-8">Welcome to Health Oasis, Humansdorp's premium IV rehydration and wellness clinic where clinical safety meets instant results. Whether you’re chasing energy for a long week, fast recovery after training, or a confidence-boosting glow, our personalised IV drips are formulated to deliver rapid, measurable benefits so you feel and perform — at your best, faster.</p>
              <a href="services.html" className="inline-block px-8 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-opacity-90 transition">Explore Our Services</a>
              <br />
              <br />
              <a href="contact.html" class="px-6 py-3 bg-[var(--primary-color)] text-white text-lg rounded-lg hover:bg-opacity-90">Book Now</a>
            </div>
            <div className="lg:w-1/2 w-full">
              <HeroCarousel />
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[var(--primary-color)]">Our Core Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">At Health Oasis we specialise in medically supervised IV Drip infusions that deliver hydration, vitamins, minerals and targeted therapeutics directly into the bloodstream for maximum absorption. Each product is administered by a registered nurse to match your goals — energy, immunity, beauty or recovery — so you get faster outcomes than pills or drinks alone. Our mobile service even brings the clinic to your home or hotel. </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-color)]">
                  <div className="icon-zap text-3xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">Energy Boost Drips</h3>
                <p className="text-gray-600">Need clarity and sustained energy without the crash? Our Energy Boost drips combine B-complex vitamins, high-dose vitamin C and carefully measured electrolytes to restore cellular energy and sharpen focus. Perfect before big meetings, flights, or when life’s demands leave you drained — you’ll notice improved alertness, less brain fog, and the stamina to push through your day.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-color)]">
                  <div className="icon-heart-pulse text-3xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">Health & Immunity Drips</h3>
                <p className="text-gray-600">Designed to strengthen your defences, these blends pack immune-supporting doses of vitamin C, zinc, glutathione and key antioxidants. Ideal for seasonal protection, travel prep, or post-illness recovery — they speed cellular repair and reduce downtime so you can get back to living with confidence and fewer sick days.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-color)]">
                  <div className="icon-sparkles text-3xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">Beauty & Glow Drips</h3>
                <p className="text-gray-600">Targeted for skin, hair and hair follicle health, our Beauty & Glow drips combine hydration, amino acids, collagen precursors and antioxidants to brighten skin, boost hydration from the inside out, and reduce signs of oxidative damage. Think of it as a vitality infusion — clearer skin, a smoother complexion and that dewy, healthy glow people notice.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-color)]">
                  <div className="icon-sparkles text-3xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--primary-color)]">Sports Recovery & Performance Drips</h3>
                <p className="text-gray-600">For athletes and active lifestyles: rapid rehydration plus electrolytes, anti-inflammatories, amino acids and targeted nutrients that reduce muscle soreness, replenish glycogen support and accelerate recovery between sessions. Use them for pre-event optimization, post-game recovery, or when training intensity spikes — get back to peak performance sooner.</p>
              </div>
            </div>
          </div>
        </section>

       <section class="reveal-on-scroll py-16">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">Where to find us</h2>

    <div class="map-wrap" aria-label="Health Oasis map">
      <iframe
        title="Health Oasis - 33 Saffery Street, Humansdorp"
        src="https://www.google.com/maps?q=33%20Saffery%20Street%2C%20Villa%20Nadia%2C%20Humansdorp%206306%2C%20Eastern%20Cape%2C%20South%20Africa&output=embed"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
      ></iframe>
      <div class="map-action">
        <a href="https://www.google.com/maps?q=33%20Saffery%20Street%2C%20Villa%20Nadia%2C%20Humansdorp%206306%2C%20Eastern%20Cape%2C%20South%20Africa&output=embed" 
          target="_blank" class="map-open-btn" rel="noopener noreferrer">Open in Google Maps</a>
      </div>
    </div>

    <div class="house-call mt-8">
      <h2>House Call Fees</h2>
      <p>We offer convenient home visits in the following areas:</p>
      <ul>
        <li><strong>Humansdorp:</strong> R40</li>
        <li><strong>St Francis Bay:</strong> R80</li>
        <li><strong>Cape St Francis:</strong> R80</li>
        <li><strong>Oyster Bay:</strong> R80</li>
        <li><strong>Jeffreys Bay:</strong> R80</li>
        <li><strong>Hankey:</strong> R80</li>
        <li><strong>Port Elizabeth:</strong> R150</li>
      </ul>
      <p>Call out fees are per visit. Book your house call now!</p>
    </div>

  </div>
</section>


        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);