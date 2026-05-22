import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'NovaTech.AI | Building the Future with AI & Automation',
  description:
    'NovaTech.AI is a cutting-edge AI startup building futuristic AI systems, robotics solutions, automation platforms, and next-generation smart technologies that transform industries.',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Robotics',
    'Automation',
    'Machine Learning',
    'Computer Vision',
    'NovaTech',
  ],
  authors: [{ name: 'NovaTech.AI' }],
  creator: 'NovaTech.AI',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'NovaTech.AI | Building the Future with AI & Automation',
    description:
      'Cutting-edge AI startup building futuristic AI systems, robotics solutions, and automation platforms.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased overflow-x-hidden bg-background text-white">

        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-50 bg-[#050816]" />

        {/* LOTTIE PLAYER SCRIPT */}
        <script
          type="module"
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js"
        ></script>

        {children}

        {/* AI ASSISTANT ORB */}
        <div className="fixed bottom-6 right-6 z-[999] group cursor-pointer">

          {/* OUTER GLOW */}
          <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl animate-pulse" />

          {/* OUTER RING */}
          <div className="absolute inset-[-10px] border border-cyan-400/30 rounded-full animate-[spin_8s_linear_infinite]" />

          {/* MAIN ORB */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(34,211,238,0.8)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">

            {/* INNER CORE */}
            <div className="absolute inset-2 rounded-full border border-white/20" />

            {/* CENTER LIGHT */}
            <div className="w-4 h-4 rounded-full bg-white blur-sm" />

          </div>

        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}