import { MessageCircle, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import type { Project } from "../data/mockData"

interface ProjectCardProps {
  project: Project
  rank?: number
}

export function ProjectCard({ project, rank }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow p-4">
      <div className="flex items-start space-x-4">
        {/* Project Icon/Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">{project.title.slice(0, 2)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {rank && (
                <span className="text-lg font-bold text-gray-400 mr-2">{rank}.</span>
              )}
              <Link 
                to={`/project/${project.id}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {project.title}
              </Link>
              
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Vote Section */}
            <div className="flex flex-col items-center space-y-1 ml-4">
              <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-orange-500 transition-colors group">
                <ChevronUp className="h-5 w-5" />
                <span className="text-sm font-medium">{project.votes}</span>
              </button>
            </div>
          </div>

          {/* Bottom row with author and stats */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">{project.author}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{Math.floor(project.votes * 0.1)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>{new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
