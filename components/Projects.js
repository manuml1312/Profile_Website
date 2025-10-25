function Projects() {
  try {
    const projects = [
      {
        title: 'RAG-Based Enterprise Chatbot',
        desc: 'Led team of 5 to develop chatbot with Azure AI Search and GPT-3.5, achieving Context Precision 0.97 for 2000+ users on 300+ instruction documents',
        tags: ['RAG', 'Azure', 'GPT-3.5'],
        icon: 'message-circle'
      },
      {
        title: 'GenAI Agentic Document Editor',
        desc: 'Designed GenAI-powered document editor with Streamlit orchestrating RAG workflows for automated drafting and editing. Achieved 99% word retention and 100x reduction in editing time using sentence-transformers and NLTK',
        tags: ['GenAI', 'RAG', 'Streamlit'],
        icon: 'file-edit'
      },
      {
        title: 'Video Transcription Q&A Bot',
        desc: 'Built end-to-end RAG pipeline converting meeting videos to searchable knowledge base. Integrated Azure Speech SDK, OpenAI embeddings, and FAISS for fast semantic retrieval with chat interface',
        tags: ['RAG', 'FAISS', 'Azure Speech'],
        icon: 'video'
      },
      {
        title: 'Arogyan: AI Health Assistant',
        desc: 'Agentic RAG system using ICD-11, NLM Library and Google Knowledge Graph for validated health information, hosted on GCP',
        tags: ['Agentic AI', 'RAG', 'GCP'],
        icon: 'heart-pulse'
      },
      {
        title: 'Health Misinformation Classifier',
        desc: 'Fine-tuned BERT and RoBERTa models on 25M words dataset with T-SNE visualization, achieving 84% accuracy in health misinformation detection',
        tags: ['BERT', 'NLP', 'Classification'],
        icon: 'shield-check'
      },
      {
        title: 'Containerized ML Application',
        desc: 'Dockerized and deployed production ML application on AWS with optimized container orchestration, CI/CD pipelines, and scalable cloud infrastructure',
        tags: ['Docker', 'AWS', 'DevOps'],
        icon: 'container'
      },
      {
        title: 'Agentic Coder Assistant',
        desc: 'Advanced code generator and editor using CrewAI for identifying and fixing programming errors, enhancing development productivity',
        tags: ['CrewAI', 'LangChain', 'Flask'],
        icon: 'code'
      },
      {
        title: 'ML Pipeline Optimization',
        desc: 'Reduced processing time by 70% and memory utilization by 50% for 135GB dataset preprocessing on AWS S3',
        tags: ['AWS', 'Optimization', 'Python'],
        icon: 'trending-up'
      },
      {
        title: 'Insurance Fraud Detection',
        desc: 'Ranked 1st in INSOFE hackathon using XGBoost with feature engineering and hyperparameter tuning, achieving F1 score of 0.94',
        tags: ['XGBoost', 'ML', 'Feature Engineering'],
        icon: 'trophy'
      }
    ];

    return (
      <section
        id="projects"
        className="py-20 bg-[var(--bg-gray)]"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                    <div className={`icon-${project.icon} text-xl text-white`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}