import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { mockProjects } from "@/data/mockData"
import { ProjectCard } from "@/components/ProjectCard"
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react"

export function HomePage() {
  const featuredProjects = mockProjects.slice(0, 6)

  return (
    <div>
      {/* Hero Section - Enhanced Design */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large floating elements */}
          <div className="absolute top-20 left-10 w-32 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl transform rotate-12 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-36 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl transform -rotate-6"></div>
          <div className="absolute bottom-40 left-20 w-40 h-32 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl transform rotate-6"></div>
          <div className="absolute bottom-20 right-16 w-24 h-36 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl transform -rotate-12"></div>
          
          {/* Medium floating elements */}
          <div className="absolute top-1/2 left-1/4 w-20 h-24 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-xl transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-20 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-xl transform -rotate-30"></div>
          
          {/* Small decorative dots */}
          <div className="absolute top-40 left-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
          <div className="absolute top-60 left-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to the future of project discovery</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-8">
            The World's
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Best Creators
            </span>
            <br />
            <span className="text-5xl md:text-7xl">Are Building Here</span>
          </h1>
          
          <p className="text-2xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover, showcase, and get inspired by amazing projects built by the 
            <span className="font-semibold text-gray-800"> AMP community</span>. 
            Join thousands of developers sharing their creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all" asChild>
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all">
              Submit Your Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.2k+</div>
              <div className="text-sm text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">850+</div>
              <div className="text-sm text-gray-600 font-medium">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25k+</div>
              <div className="text-sm text-gray-600 font-medium">Votes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your projects discovered by thousands of developers and potential collaborators instantly.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded developers, get feedback, and collaborate on exciting projects.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Inspired</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover cutting-edge projects and innovative solutions from the global developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - List Style */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🚀</span>
              <span>Trending Now</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most innovative and popular projects from our amazing community of creators
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="border-b border-gray-100 last:border-b-0">
                  <ProjectCard project={project} rank={index + 1} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="px-8 py-3 font-semibold">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to showcase your next big idea?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of developers who are already sharing their projects and building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold">
              Submit Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
