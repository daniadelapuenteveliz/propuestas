import { Bot } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProposalsNav() {
  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Kheprion AI</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
