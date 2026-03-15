import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Blogs, contact, and showcases',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-neutral-950 text-white min-h-screen'>
        {/* Global background gradients — fixed so they never clip */}
        <div className='fixed inset-0 z-0 pointer-events-none overflow-hidden'>
          <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[120px]' />
          <div className='absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-blue-700/15 rounded-full blur-[100px]' />
          <div className='absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[120px]' />
        </div>

        <Navbar />
        <main className='relative z-10 max-w-6xl mx-auto px-6 pt-6 pb-6'>
          {children}
        </main>
      </body>
    </html>
  );
}
