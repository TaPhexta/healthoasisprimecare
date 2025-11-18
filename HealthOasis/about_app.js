function AboutApp() {
  const teamMembers = [
    { name: 'Zizipho Penelope Bless', role: 'Director, Professional Nurse and IV Drip Administrator', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop' },
    { name: 'Lilitha Burwana', role: 'Junior Manager', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop' },
    ];

 /* const testimonials = [
    { name: 'Jessica Martinez', text: 'Health Oasis changed my life! The staff is incredibly professional and caring.' },
    { name: 'David Kim', text: 'Best decision I made for my health. The treatments are effective and the environment is so welcoming.' },
    { name: 'Amanda Foster', text: 'I come here monthly for my wellness treatments. Highly recommend!' },
    { name: 'Robert Johnson', text: 'The anti-aging IV therapy has made such a difference. I feel younger and more energetic!' },
    { name: 'Lisa Wong', text: 'Professional, clean, and results-driven. Health Oasis is the best!' },
    { name: 'Thomas Anderson', text: 'After trying their recovery IV, I was back to my routine in no time. Amazing service!' }
  ];*/

  try {
    return (
      <div className="min-h-screen bg-white" data-name="about-app" data-file="about_app.js">
        <Header />
        
        <div className="hero-banner">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <div className="flex items-center justify-center space-x-2 text-white">
              <a href="index.html" className="hover:text-[var(--accent-color)]">Home</a>
              <span>/</span>
              <span>About</span>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-[var(--primary-color)]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
               At Health Oasis PrimeCare & Wellness Centre, we specialise in IV hydration therapy and personalised wellness treatments designed to help you feel restored, energised, and balanced. Led by a qualified and registered professional nurse, our practice blends medical expertise with a warm, wellness-focused approach you can trust.
              <br></br>
               We offer a range of intravenous infusions (IV drips) that support hydration, detoxification, immune boosting, improved energy levels, anti-aging, and glowing skin.
              <br></br>
               Life gets busy — that’s why we bring care to you. Whether you visit our centre or prefer a more private experience, you can enjoy our treatments in the comfort of your home, with the same safety, care, and professionalism.
             <br></br>
               At Health Oasis, your wellbeing comes first. We aim to make high-quality wellness therapy accessible, convenient, and relaxing for every client we serve.
             <br></br>
               Our mission is to empower individuals to take control of their health through convenient, evidence-based wellness treatments. We are committed to delivering safe, effective IV therapy that supports your body, boosts vitality, and enhances overall quality of life — wherever you are. </p>
             <br></br>
              <p className="text-lg text-gray-700 mb-4">
               We strive to:
             <br></br>
	            •	Provide personalised IV drips and wellness treatments tailored to your needs.
             <br></br>
              •	Make healthcare convenient through mobile, at-home services.
             <br></br>
              •	Create a calm, supportive environment that promotes relaxation and recovery.
             <br></br>
              •	Offer trusted, professional care backed by medical training and experience.
             <br></br>
               At Health Oasis, we exist to revive, rehydrate, and rejuvenate — bringing wellness directly to you.
              </p>
              <p className="text-lg text-gray-700">
                We serve both local residents and visitors in various areas who want to relax, rejuvenate, and improve their health and wellbeing through safe and professional care. 
                Our business model allows for us to come to you, giving you the best treatment in the comfort of your home. 
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/*<section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} name={testimonial.name} text={testimonial.text} />
              ))}
            </div>
          </div>
        </section>*/}

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);