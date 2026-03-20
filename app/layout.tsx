import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Listing AI — Professional Real Estate Descriptions',
  description: 'Stop writing listing descriptions. Let AI write them for you in 24 hours. $25 per listing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-[#a0a0a0] overflow-x-hidden`}>
        {/* Subtle star particles background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}