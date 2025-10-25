function Skills() {
  try {
    const skillCategories = [
      {
        title: 'AI & ML Frameworks',
        icon: 'cpu',
        skills: ['Transformers', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'NLTK']
      },
      {
        title: 'Generative AI',
        icon: 'sparkles',
        skills: ['LangChain', 'CrewAI', 'RAG', 'Graph-RAG', 'Agentic AI', 'Prompt Engineering']
      },
      {
        title: 'NLP & LLMs',
        icon: 'message-square',
        skills: ['BERT', 'RoBERTa', 'GPT-3.5', 'Bloom 7B', 'LoRA Fine-tuning']
      },
      {
        title: 'Cloud & DevOps',
        icon: 'cloud',
        skills: ['Azure', 'GCP', 'AWS', 'Docker', 'GitLab CI/CD']
      },
      {
        title: 'Programming & Tools',
        icon: 'code',
        skills: ['Python', 'MySQL', 'MongoDB', 'Streamlit', 'Flask']
      },
      {
        title: 'Data & Analytics',
        icon: 'database',
        skills: ['Pandas', 'Statistical Analysis', 'FAISS', 'ChromaDB', 'Pinecone']
      }
    ];

    return (
      <section 
        id="skills" 
        className="py-20 bg-white"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <div className={`icon-${category.icon} text-lg text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--bg-gray)] text-black rounded-lg text-sm border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}