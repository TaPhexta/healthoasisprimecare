function TestimonialCard({ name, text }) {
  try {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--primary-color)]" data-name="testimonial-card" data-file="components/TestimonialCard.js">
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map(star => (
            <div key={star} className="icon-star text-[var(--gold-accent)] text-lg"></div>
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
        <p className="font-bold text-[var(--primary-color)]">- {name}</p>
      </div>
    );
  } catch (error) {
    console.error('TestimonialCard component error:', error);
    return null;
  }
}