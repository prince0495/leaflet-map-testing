'use client';

import SearchBar from '@/components/ui/SearchBar';
import UploadSection from '@/components/ui/UploadSection';
import AboutSection from '@/components/ui/AboutSection';
import Wrapper from '@/components/ui/Wrapper';

export default function DNAExplorer() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Add search functionality here
  };

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
    // Add file upload functionality here

  };
  return (
    <Wrapper>
        <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        {/* Background overlay */}
        <div />
        
        {/* Main Content */}
        <div className="flex justify-center items-center py-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white 
                  drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                  tracking-wider">
            Ocean E-DNA
          </h1>
        </div>

        <div className="relative z-10 space-y-12">
          {/* Search Bar Section */}
          <div className="pt-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Upload Section */}
          <div>
            <UploadSection onFileUpload={handleFileUpload} />
          </div>

          {/* About Section */}
          <div>
            {/* <AboutSection /> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );

}
