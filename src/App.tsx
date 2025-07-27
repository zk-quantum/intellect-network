import { useState } from 'react'
import NetworkGraph from './components/NetworkGraph'
import IntellectualCard from './components/IntellectualCard'
import { intellectuals, connections } from './data/intellectuals'
import type { GraphNode } from './types'
import './App.css'

function App() {
  const [selectedIntellectual, setSelectedIntellectual] = useState<GraphNode | null>(null)

  const handleNodeClick = (node: GraphNode) => {
    setSelectedIntellectual(node)
  }

  const handleCloseCard = () => {
    setSelectedIntellectual(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Intellect Network</h1>
        <p>Discover the connections between great minds throughout history</p>
      </header>
      
      <main className="app-main">
        <div className="graph-container">
          <NetworkGraph 
            intellectuals={intellectuals}
            connections={connections}
            onNodeClick={handleNodeClick}
          />
        </div>
        
        {selectedIntellectual && (
          <div className="card-overlay">
            <IntellectualCard 
              intellectual={selectedIntellectual}
              onClose={handleCloseCard}
            />
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Click on a node to learn more about each intellectual</p>
      </footer>
    </div>
  )
}

export default App
