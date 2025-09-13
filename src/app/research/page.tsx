import ResearchPage from '@/components/ui/ResearchPage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <header className="w-full static z-50 flex justify-center bg-slate-900">
        <div className="mt-4 w-[90%] max-w-6xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
            <Link    href="/" className="flex items-center gap-2">
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
                href="/research"
                className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition"
            >
                AI Research
            </Link>
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
        <ResearchPage/>
    </>
  )
}

export default page
