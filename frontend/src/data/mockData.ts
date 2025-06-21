export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  author: string
  authorAvatar: string
  votes: number
  tags: string[]
  createdAt: string
  githubUrl?: string
  liveUrl?: string
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "AI Code Review Assistant",
    description: "An intelligent tool that reviews your code and provides actionable feedback using advanced AI models.",
    imageUrl: "/api/placeholder/400/200",
    author: "Sarah Chen",
    authorAvatar: "/api/placeholder/40/40",
    votes: 247,
    tags: ["AI", "DevTools", "Productivity"],
    createdAt: "2024-12-15",
    githubUrl: "https://github.com/example/ai-review",
    liveUrl: "https://ai-review.demo.com"
  },
  {
    id: "2", 
    title: "Visual Database Designer",
    description: "Design and visualize your database schemas with an intuitive drag-and-drop interface.",
    imageUrl: "/api/placeholder/400/200",
    author: "Mike Rodriguez",
    authorAvatar: "/api/placeholder/40/40",
    votes: 189,
    tags: ["Database", "Design", "Visualization"],
    createdAt: "2024-12-14",
    githubUrl: "https://github.com/example/db-designer"
  },
  {
    id: "3",
    title: "Real-time Collaboration Whiteboard",
    description: "A minimalist whiteboard app for teams to brainstorm and collaborate in real-time.",
    imageUrl: "/api/placeholder/400/200", 
    author: "Emily Park",
    authorAvatar: "/api/placeholder/40/40",
    votes: 156,
    tags: ["Collaboration", "Whiteboard", "Real-time"],
    createdAt: "2024-12-13",
    liveUrl: "https://collab-board.demo.com"
  },
  {
    id: "4",
    title: "API Documentation Generator",
    description: "Generate beautiful, interactive API documentation from your OpenAPI specifications automatically.",
    imageUrl: "/api/placeholder/400/200",
    author: "David Kim",
    authorAvatar: "/api/placeholder/40/40", 
    votes: 134,
    tags: ["API", "Documentation", "OpenAPI"],
    createdAt: "2024-12-12",
    githubUrl: "https://github.com/example/api-docs"
  },
  {
    id: "5",
    title: "Smart Task Scheduler", 
    description: "An intelligent task scheduler that optimizes your daily workflow using machine learning algorithms.",
    imageUrl: "/api/placeholder/400/200",
    author: "Alex Thompson",
    authorAvatar: "/api/placeholder/40/40",
    votes: 98,
    tags: ["Productivity", "ML", "Scheduling"],
    createdAt: "2024-12-11",
    liveUrl: "https://smart-scheduler.demo.com"
  },
  {
    id: "6",
    title: "Code Snippet Manager",
    description: "Organize, search, and share your code snippets across different programming languages.",
    imageUrl: "/api/placeholder/400/200",
    author: "Lisa Wang",
    authorAvatar: "/api/placeholder/40/40",
    votes: 87,
    tags: ["DevTools", "Snippets", "Organization"],
    createdAt: "2024-12-10",
    githubUrl: "https://github.com/example/snippet-manager"
  }
]
