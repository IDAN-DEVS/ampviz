import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { mockProjects } from "@/data/mockData"
import { ArrowLeft, ChevronUp, ExternalLink, Github, Calendar, User, MessageCircle, Share, Heart, Bookmark, Flag } from "lucide-react"

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = mockProjects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="text-center space-y-4 py-16">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Header */}
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">{project.title.slice(0, 2)}</span>
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{project.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(project.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600">{project.title.slice(0, 2)}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {project.title}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This project showcases innovative solutions and demonstrates the power of modern web technologies. 
                  Built with attention to detail and user experience, it represents the cutting-edge of what's possible 
                  in today's development landscape.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The implementation focuses on performance, accessibility, and maintainability. Every feature has been 
                  carefully crafted to provide maximum value to users while maintaining clean, readable code.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Responsive design that works on all devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Modern UI/UX with smooth animations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Optimized performance and fast loading times</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Accessible design following WCAG guidelines</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Launching Today Badge */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-orange-600 font-semibold">🚀 Launching Today</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">#1</div>
            <div className="text-sm text-gray-600">Day Rank</div>
          </div>

          {/* Vote Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <button className="w-full mb-4">
              <div className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 px-4 transition-colors">
                <ChevronUp className="h-5 w-5" />
                <span className="font-semibold">Upvote • {project.votes} points</span>
              </div>
            </button>
            
            <div className="grid grid-cols-4 gap-2 text-sm">
              <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-50 transition-colors">
                <Heart className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Follow</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-50 transition-colors">
                <Bookmark className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Add to collection</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-50 transition-colors">
                <Share className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Share</span>
              </button>
              <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-50 transition-colors">
                <Flag className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Analytics</span>
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {project.liveUrl && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>

          {/* Company Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Creator Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-medium text-gray-900">{project.author}</div>
                  <div className="text-sm text-gray-600">Developer</div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Joined</span>
                  <span className="text-gray-900">2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects</span>
                  <span className="text-gray-900">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Project Stats</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Votes</span>
                <span className="font-medium text-gray-900">{project.votes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Views</span>
                <span className="font-medium text-gray-900">{Math.floor(project.votes * 5.2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Comments</span>
                <span className="font-medium text-gray-900">{Math.floor(project.votes * 0.1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
