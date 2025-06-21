import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { TrendingPage } from '@/pages/TrendingPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
