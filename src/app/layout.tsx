'use client'
import { Sidebar } from '@/components/Sidebar'
import * as Switch from '@radix-ui/react-switch'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind',
  description: 'Learning about tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('')

  const themeSwitcher = () => {
    theme === '' ? setTheme('dark') : setTheme('')
  }
  return (
    <html lang="en" className={`${theme} antialiased`}>
      <body>
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="flex flex-col px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            <div className="flex items-center gap-2 self-end">
              <SunIcon size={14} className="text-zinc-500 dark:text-zinc-200" />
              <Switch.Root
                onCheckedChange={themeSwitcher}
                id="mode"
                className='relative flex h-5 w-9 items-center rounded-full border-2 border-solid border-zinc-300 bg-violet-500 data-[state="checked"]:bg-black dark:border-2 dark:border-solid dark:border-violet-400'
              >
                <Switch.Thumb className='block h-3 w-3 -translate-y-px translate-x-1 rounded-full bg-white transition-transform data-[state="checked"]:translate-x-4' />
              </Switch.Root>
              <MoonIcon
                size={14}
                className="text-zinc-500 dark:text-zinc-200"
              />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
