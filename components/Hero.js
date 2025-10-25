function Hero() {
  try {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
      >
        {/* Falling stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="profile.jpeg"
                  alt="Manu ML Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-white">Manu ML</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              AI Engineer
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              AI Engineer with 3+ years of experience developing and deploying scalable AI solutions across enterprise and healthcare domains.
              Specialized in Generative AI, NLP model development, and end-to-end ML pipeline optimization.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-black"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}