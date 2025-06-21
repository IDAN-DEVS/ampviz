import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { mockProjects } from "@/data/mockData"
import { Search, X } from "lucide-react"

export function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"today" | "week" | "month" | "all">("today")

  const filteredProjects = mockProjects
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => b.votes - a.votes)

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Welcome Banner */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-orange-600">🚀</span>
          </div>
          <div>
            <p className="text-gray-900 font-medium">Welcome to AMP VIZ!</p>
            <p className="text-gray-600 text-sm">The place to launch and discover new tech projects.</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Top Projects Launching Today</h1>
        <p className="text-gray-600">Discover the latest and greatest projects from our community</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600 mr-2">Filter by:</span>
          {["today", "week", "month", "all"].map((filter) => (
            <Button
              key={filter}
              variant={sortBy === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy(filter as any)}
              className={`capitalize ${
                sortBy === filter 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {filter === "today" ? "Today" : filter === "week" ? "This Week" : filter === "month" ? "This Month" : "All Time"}
            </Button>
          ))}
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} rank={index + 1} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search terms or filters.</p>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Load More */}
      {filteredProjects.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Projects
          </Button>
        </div>
      )}
    </div>
  )
}
