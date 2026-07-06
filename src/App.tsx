import PropuestaJudicial1 from '@/pages/PropuestaJudicial1'
import NotFound from '@/pages/NotFound'
import { PROPOSALS } from '@/config/proposals'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      {PROPOSALS.map((proposal) => (
        <Route key={proposal.slug} path={`/${proposal.slug}`} element={<PropuestaJudicial1 proposal={proposal} />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
