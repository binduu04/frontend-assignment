import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Kasparro
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/platform" className="text-gray-600 hover:text-gray-900 transition-colors">
              Platform
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/app/dashboard">
              <Button variant="default">Launch Dashboard</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
