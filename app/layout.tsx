import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuvoke AI',
  description: 'Text to human like voice creation',
  other: {
    monetag: '066174eb07b4edb7426579e51e625abc'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="066174eb07b4edb7426579e51e625abc" />
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',8816765,document.createElement('script'))",
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
