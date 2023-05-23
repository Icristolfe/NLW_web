import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Baijamjuree,
} from 'next/font/google'
import { cookies } from 'next/headers'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Hero } from '@/components/Hero'
import { Copyright } from '@/components/Copyright'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Baijamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW  Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, Tailwind, Typescript e Expo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}
      >
        <main className='grid grid-cols-2 min-h-screen'>
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
