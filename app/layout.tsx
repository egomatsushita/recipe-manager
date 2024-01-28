import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/app/globals.css'
import SideNav from '@/app/ui/sidenav'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gotah - Recipe Manager',
  description: 'Recipe manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} antialiased`}>
        <div className='grid sm:grid-cols-3 h-full'>
          {/* Header container */}
          <div className='col-span-1 flex flex-col items-end mt-4'>
            <SideNav />
          </div>
          {/* Body container */}
          <main className='p-8 sm:col-span-2 bg-background'>
            <div className='mb-4 flex gap-2 justify-end'>
              <span className='btn-primary'>Log In</span>
              <span className='btn-primary'>Sign Up</span>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
