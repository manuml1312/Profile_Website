function About() {
  try {
    const experiences = [
      { icon: 'briefcase', title: '3+ Years', desc: 'Industry Experience' },
      { icon: 'rocket', title: '5+ Projects', desc: 'Delivered Successfully' },
      { icon: 'users', title: '10+ Teams', desc: 'Collaborated With' },
      { icon: 'trophy', title: '4+ Hackathons', desc: 'Participated & Won' }
    ];

    return (
      <section 
        id="about" 
        className="py-20 bg-white"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                AI Engineer with 3+ years of experience delivering scalable, 
                production-grade machine learning solutions across enterprise and 
                healthcare domains. Led a team of 5 to develop and deploy a RAG-based 
                chatbot achieving 0.97 context precision for 2000+ users, while 
                optimizing data pipelines to reduce processing time by 70% 
                and memory utilization by 50% on 135GB datasets.
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                As Founder and CTO of Arogyan, architected and deployed an
                AI Health Assistant using Agentic RAG on GCP, demonstrating end-to-end
                ownership from conception to production. Proven expertise in fine-tuning 
                Large Language Models (BERT, RoBERTa, Bloom 7b achieving 0.65 BLEU score),
                building ensemble ML systems, and implementing robust CI/CD pipelines 
                across AWS, Azure, and GCP. Track record of translating complex business 
                requirements into measurable AI solutions, with hands-on experience in MLOps, 
                cross-functional collaboration, and delivering systems that drive tangible business impact. 
                Currently pursuing MSc in Data Science at MAHE Manipal (CGPA: 8.09/10).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-black flex items-center justify-center">
                    <div className={`icon-${exp.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-[var(--text-secondary)]">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Random <span className="gradient-text">Thoughts</span>
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="card bg-white border-2 border-black">
                <div className="h-24 flex items-center justify-center">
                  <TypingEffect
                    texts={[
                      "I love hiking in the mountains",
                      "Coffee frees up my brain cache",
                      "The ML in my name stands for Machine Learning"
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
