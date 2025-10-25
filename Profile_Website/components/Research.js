function Research() {
  try {
    const researchPapers = [
      {
        title: 'Transfer Learning on Small Datasets',
        description: 'Comparative analysis of few-shot prompting, fine-tuning, and head transfer learning techniques for resource-constrained machine learning applications',
        image: 'transfer_learning.jpg',
        type: 'Journal Presentation'
      },
      {
        title: 'DeepSeek V2 Architecture Analysis',
        description: 'In-depth technical breakdown of Multi-Head Latent Attention (MLA) mechanism and architectural design from the official research paper',
        image: 'deepseek.png',
        type: 'Journal Presentation'
      }
    ];

    return (
      <section
        id="research"
        className="py-20 bg-[var(--bg-gray)]"
        data-name="research"
        data-file="components/Research.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Research <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg">
            Journal Presentations
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => (
              <div key={index} className="card bg-white">
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                    {paper.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{paper.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {paper.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Research component error:', error);
    return null;
  }
}
