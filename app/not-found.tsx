import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black flex items-center justify-center">
      <div className="text-center text-white max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-blue-400 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full">
              <i className="fas fa-home mr-2" />
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 w-full">
              <i className="fas fa-envelope mr-2" />
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}