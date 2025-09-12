'use client';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({ 
  placeholder = "Search DNA types (e.g., mitochondrial, chloroplast, microbial)",
  onSearch 
}: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <label htmlFor="search" className="sr-only">Search DNA types</label>
      <div className="relative">
        <input
          id="search"
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/70 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 text-lg"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none" />
      </div>
    </div>
  );
}
