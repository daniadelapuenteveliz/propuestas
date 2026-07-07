export const PROPOSAL_ROUTES = [
  {
    slug: 'ekk6033teeig6btp7dw2kppuimvf1wtafpe3viy5461v5e1gm5kwmmqci166ycg2kdjw39ketgkigukj1cx47a2y23ji2qi6ypke',
    pdfOutput: 'propuestaJudicial.pdf',
  },
  {
    slug: 'ra047n7x8vch04mtpd88nke2ft6cpvwwbi9zigxarrcby8efu4pmepxwd6t8a4nmfei11xk6n0w1uuecmm7iwyi4hvty69bxabjd',
    pdfOutput: 'propuestaIndare.pdf',
  },
  {
    slug: 'imw3hhrrbw2xami5wcci45ag9jc2q5u4gicu34bci71k2wiiezk7h0g4zdabipntktb7y5wvawgdj5xc2zffmjtfz1nm5xvp5r8y',
    pdfOutput: 'propuestaComercialJuridica.pdf',
  },
  {
    slug: 'xknn032dx8idq5m6amxvtcwqzemgmmyriev9gyn8rv2rk0n0vhrvk4w2k5g8jkx8t2mtv67v3cbbf16ub9viarebg792cnmeqd0v',
    pdfOutput: 'propuestaComercialJuridicaMolinaMatta.pdf',
  },
] as const;

export type ProposalRouteSlug = (typeof PROPOSAL_ROUTES)[number]['slug'];

export function getProposalRouteBySlug(slug: string) {
  return PROPOSAL_ROUTES.find((route) => route.slug === slug);
}
