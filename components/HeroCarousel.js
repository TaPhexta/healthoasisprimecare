function HeroCarousel() {
  // Tracking section of page visible
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // Carousel images
  const images = [
    'trickle/assets/plain_drip.jpg',
    'trickle/assets/glow_drip.jpg',
    'trickle/assets/hydr_drip.jpg',
    'trickle/assets/energy_drip.jpg',
    'trickle/assets/immune_drip.jpg',
    'trickle/assets/brain_drip.jpg',
  ];
  // Autorotate images every 3 secs 
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // Manual nav for images
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  try {
    return (
      // main carousel wrapper
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl" data-name="hero-carousel" data-file="components/HeroCarousel.js">
        {/* Image slides */}
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        {/* Navigation buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {/* previous button */}
          <button onClick={goToPrevious} className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition">
            <div className="icon-chevron-left text-lg text-[var(--primary-color)]"></div>
          </button>
          {/* next button */}
          <button onClick={goToNext} className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition">
            <div className="icon-chevron-right text-lg text-[var(--primary-color)]"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    // error handling
    console.error('HeroCarousel component error:', error);
    return null;
  }
}
