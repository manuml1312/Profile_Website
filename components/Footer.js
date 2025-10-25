function Footer() {
  try {
    const socialLinks = [
      { icon: 'github', label: 'GitHub' },
      { icon: 'linkedin', label: 'LinkedIn' },
      { icon: 'twitter', label: 'Twitter' },
      { icon: 'mail', label: 'Email' }
    ];

    return (
      <footer
        className="bg-black text-white py-12"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-6 text-white">Manu ML</div>
            <div className="flex gap-6 mb-8">
              <a
                href="https://github.com/manuml1312"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <div className="icon-github text-lg text-black"></div>
              </a>
              <a
                href="https://linkedin.com/in/manu-ml"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <div className="icon-linkedin text-lg text-black"></div>
              </a>
              <a
                href="mailto:manumlholalur@gmail.com"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <div className="icon-mail text-lg text-black"></div>
              </a>
            </div>
            <p className="text-gray-400 text-center">
              © 2025 Manu ML. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}