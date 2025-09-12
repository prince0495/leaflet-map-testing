import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
          <video
            className="min-w-full min-h-full w-auto h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src="/ocean.webm" type="video/webm" />
            <source src="/ocean.mp4" type="video/mp4" />
          </video>
        </div>
        <header className="w-full static z-50 flex justify-center">
          <div className="mt-4 w-[90%] max-w-6xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/edna-logo.svg"
                    alt="eDNA logo"
                    width={120}
                    height={30}
                    priority
                  />
                  <span className="sr-only">eDNA</span>
                </Link>
              </div>
              <div className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue to-blue-600 drop-shadow-md">
                <h1>
                Team Triton
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/map"
                  className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Map
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="w-full mt-12">
          <div className="w-full rounded-none bg-white/10 backdrop-blur-md border-t border-white/20 shadow-lg px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 text-center text-white">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <span className="text-lg font-semibold">I.I.I.T Bhagalpur</span>
              <span className="text-sm sm:text-base leading-relaxed">
                Smart India Hackathon 2025 <br />
                Team Triton <br />
                All rights reserved © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Wrapper
