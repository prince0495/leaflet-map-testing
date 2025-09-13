// app/your-page-name/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Helper component for Tech Stack items for a cleaner look
const TechPill = ({ name }: { name: string }) => (
  <div className="bg-slate-700/50 border border-slate-600 text-slate-300 text-sm font-mono px-4 py-1.5 rounded-full hover:bg-slate-700 transition-colors cursor-pointer">
    {name}
  </div>
);

const ResearchPage = () => {
  return (
    <div className="bg-slate-900 text-slate-200 font-sans leading-relaxed">
      {/* ===== Hero Section ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800/40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-sky-300 to-purple-400 mb-4 animate-fade-in-down">
            AI-Powered Genomics
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-6 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            Unlocking Environmental DNA Insights
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 mb-10 text-lg animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
            Our novel deep learning pipeline analyzes complex eDNA samples with unprecedented speed and accuracy, turning raw sequence data into actionable ecological intelligence.
          </p>
          <a href="#pipeline" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.5)] animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Explore The Pipeline
          </a>
        </div>
      </section>

      {/* ===== The Pipeline Section ===== */}
      <section id="pipeline" className="py-20 px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100">A New Architecture for eDNA Analysis</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-full min-h-[400px] animate-fade-in-right">
              <Image 
                src="/architecture-flowchart.jpg" 
                alt="eDNA Analysis Pipeline Flowchart"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl shadow-2xl shadow-teal-500/10"
              />
            </div>
            <div className="space-y-6 animate-fade-in-left">
              <div className="p-4 border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-1 text-teal-400">1. Data Ingestion & Preprocessing</h3>
                <p className="text-slate-400">We start with raw FASTQ sequence data, applying rigorous preprocessing and quality control to ensure a clean foundation for analysis.</p>
              </div>
              <div className="p-4 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-1 text-orange-400">2. Feature Engineering</h3>
                <p className="text-slate-400">DNA sequences are transformed into numerical k-mer vectors, making the biological data readable for our AI models.</p>
              </div>
              <div className="p-4 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-1 text-purple-400">3. Deep Learning Core</h3>
                <p className="text-slate-400">A powerful Autoencoder learns a compressed representation of each sequence, capturing its essential biological features.</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-1 text-blue-400">4. Intelligent Clustering</h3>
                <p className="text-slate-400">Using HDBSCAN, we group the AI-generated embeddings into distinct clusters, each representing a potential species or OTU.</p>
              </div>
               <div className="p-4 border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold mb-1 text-pink-400">5. Biological Annotation</h3>
                <p className="text-slate-400">Finally, we use BLAST annotation to assign a biological identity to each cluster, revealing the ecosystem&apos;s composition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== Results Section ===== */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100">From Data to Discovery</h2>
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">Visualizing the Clusters</h3>
              <div className="relative w-full h-64 mb-4">
                 <Image src="/hdbscan-scatter-plot.jpeg" alt="HDBSCAN Scatter Plot" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
              <p className="text-slate-400 text-sm">This UMAP visualization shows the power of our autoencoder. Each color represents a distinct cluster, demonstrating the model&apos;s ability to separate different biological entities with high precision.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Understanding Abundance</h3>
              <div className="relative w-full h-64 mb-4">
                 <Image src="/cluster-histogram.jpeg" alt="Cluster Abundance Histogram" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
              <p className="text-slate-400 text-sm">Our analysis reveals a typical ecological pattern: a large number of rare species and a few highly dominant ones. This provides a macro-level view of the ecosystem&apos;s structure.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Identifying Dominant Organisms</h3>
              <div className="relative w-full h-64 mb-4">
                 <Image src="/top-20-barchart.jpeg" alt="Top 20 Clusters Bar Chart" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
              <p className="text-slate-400 text-sm">We pinpoint the top 20 most abundant clusters, allowing us to quickly identify the key organisms in the environment through targeted BLAST annotation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tech Stack Section ===== */}
      <section className="py-20 px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100">Powered by Cutting-Edge Technology</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill name="Python" />
            <TechPill name="TensorFlow / PyTorch" />
            <TechPill name="Scikit-learn" />
            <TechPill name="HDBSCAN" />
            <TechPill name="UMAP" />
            <TechPill name="BLAST" />
            <TechPill name="Pandas" />
            <TechPill name="Next.js" />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-slate-900 border-t border-slate-800 text-center p-8">
        <p className="text-slate-400">Team Triton / Organization © 2025</p>
        <div className="flex justify-center space-x-6 mt-4 text-slate-500">
          <Link
            href={'/contact'}
          >
            <span className="hover:text-teal-400 transition-colors">Contact</span>
          </Link>
          <Link
            href={'https://github.com/prince0495/leaflet-map-testing'}
            target='blank'
          >
            <span className="hover:text-teal-400 transition-colors">Github</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default ResearchPage;