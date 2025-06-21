import { ProjectCard } from "@/components/ProjectCard"
import { mockProjects } from "@/data/mockData"
import { TrendingUp, Calendar, Award } from "lucide-react"

export function TrendingPage() {
  const trendingProjects = mockProjects
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 6)
  
  const recentProjects = mockProjects
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Trending Projects</h1>
        <p className="text-muted-foreground">
          Discover the most popular and recently launched projects
        </p>
      </div>

      {/* Top Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Top Projects This Week</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProjects.map((project, index) => (
            <div key={project.id} className="relative">
              {index < 3 && (
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
              )}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Recently Added</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Weekly Stats */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">This Week's Stats</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{mockProjects.length}</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          
          <div className="bg-card border rounded-lg p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">
              {mockProjects.reduce((sum, p) => sum + p.votes, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Votes</div>
          </div>
          
          <div className="bg-card border rounded-lg p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Active Contributors</div>
          </div>
        </div>
      </section>
    </div>
  )
}
