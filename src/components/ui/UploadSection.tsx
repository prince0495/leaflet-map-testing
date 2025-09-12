'use client';

import { useState } from 'react';

interface UploadSectionProps {
  onFileUpload?: (file: File) => void;
}

export default function UploadSection({ onFileUpload }: UploadSectionProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      if (onFileUpload) {
        onFileUpload(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      if (onFileUpload) {
        onFileUpload(file);
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const removeFile = () => {
    setUploadedFile(null);
    // Reset the file input
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Upload Area */}
      <div
        className={`relative rounded-xl border-2 border-dashed transition-all duration-300 ${
          isDragOver 
            ? 'border-white/60 bg-white/20' 
            : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/15'
        } backdrop-blur-md shadow-lg p-8 text-center cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          id="file-upload"
          onChange={handleFileChange}
          accept=".fastq.gz"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div className="text-white">
              <p className="text-lg font-semibold mb-2">
                {isDragOver ? 'Drop your file here' : 'Upload eDNA File'}
              </p>
              <p className="text-white/70 text-sm">
                Drag and drop your file here, or click to browse
              </p>
              <p className="text-white/50 text-xs mt-2">
                Supports: .fastq.gz file types 
              </p>
            </div>
          </div>
        </label>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none" />
      </div>

      {/* Uploaded File Display */}
      {uploadedFile && (
        <div className="rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-sm">{uploadedFile.name}</p>
                <p className="text-white/70 text-xs">{formatFileSize(uploadedFile.size)}</p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="text-white/70 hover:text-white transition-colors p-1"
              title="Remove file"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
