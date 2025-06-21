import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white w-full">
      <header className="border-b border-gray-200 w-full">
        <div className="w-full px-6 h-16 flex items-center justify-between max-w-none mx-auto">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-medium text-lg text-gray-900">AMP VIZ</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Explore
            </Link>
            <Link to="/projects" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link to="/trending" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Trending
            </Link>
            <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              Submit Project
            </span>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>
      
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}
