import NotFound from '@/pages/NotFound';
import IntakeJuridicoClarkProposalPage from '@/proposals/intake-juridico-clark/ProposalPage';
import IndareProposalPage from '@/proposals/indare/ProposalPage';
import PropuestaComercialJuridicaProposalPage from '@/proposals/propuesta-comercial-juridica/ProposalPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      <Route
        path="/ekk6033teeig6btp7dw2kppuimvf1wtafpe3viy5461v5e1gm5kwmmqci166ycg2kdjw39ketgkigukj1cx47a2y23ji2qi6ypke"
        element={<IntakeJuridicoClarkProposalPage />}
      />
      <Route
        path="/ra047n7x8vch04mtpd88nke2ft6cpvwwbi9zigxarrcby8efu4pmepxwd6t8a4nmfei11xk6n0w1uuecmm7iwyi4hvty69bxabjd"
        element={<IndareProposalPage />}
      />
      <Route path="/propuesta-comercial-juridica" element={<PropuestaComercialJuridicaProposalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
