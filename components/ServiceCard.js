function ServiceCard({ service }) {
  try {
    return (
      <div className="service-card bg-[var(--accent-color)] rounded-lg p-6 shadow-md hover:shadow-xl transition" data-name="service-card" data-file="components/ServiceCard.js">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white">
          <div className={`icon-${service.icon} text-3xl text-[var(--primary-color)]`}></div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[var(--primary-color)]">{service.name}</h3>
        <p className="text-2xl font-bold mb-3 text-[var(--secondary-color)]">R{service.price}</p>
        <p className="text-sm text-gray-700">{service.description}</p>
      </div>
    );
  } catch (error) {
    console.error('ServiceCard component error:', error);
    return null;
  }
}