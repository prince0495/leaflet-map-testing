'use client';

export default function AboutSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-white/20 p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          About Ocean DNA Explorer
        </h2>
        
        <div className="space-y-6 text-white/90">
          <p className="text-lg leading-relaxed">
            This platform helps categorize and explore environmental DNA (eDNA)
            across different organisms and sample types. Use the search functionality to
            quickly find DNA categories and upload files to begin comprehensive analysis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Advanced DNA sequence analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Multi-format file support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Real-time search and filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Interactive data visualization</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Supported DNA Types</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">•</span>
                  <span>Mitochondrial DNA (mtDNA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">•</span>
                  <span>Chloroplast DNA (cpDNA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">•</span>
                  <span>Microbial markers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">•</span>
                  <span>Nuclear DNA sequences</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-white/80 leading-relaxed">
              Start by searching common categories like mitochondrial DNA,
              chloroplast DNA, or microbial markers. Upload your eDNA files
              to begin comprehensive analysis and explore the rich biodiversity
              data contained within environmental samples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
