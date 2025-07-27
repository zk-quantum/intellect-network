import { Intellectual, Connection, ConnectionType } from '../types';

export const intellectuals: Intellectual[] = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    birth: 1879,
    death: 1955,
    nationality: 'German/Swiss/American',
    fields: ['Physics', 'Mathematics'],
    achievements: [
      'Theory of Relativity',
      'Mass-energy equivalence (E=mc²)',
      'Photoelectric effect',
      'Nobel Prize in Physics (1921)'
    ],
    biography: 'German-born theoretical physicist who developed the theory of relativity.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    id: 'newton',
    name: 'Isaac Newton',
    birth: 1643,
    death: 1727,
    nationality: 'English',
    fields: ['Physics', 'Mathematics', 'Astronomy'],
    achievements: [
      'Laws of Motion',
      'Universal Gravitation',
      'Calculus',
      'Optics'
    ],
    biography: 'English mathematician, physicist, and astronomer who formulated the laws of motion and universal gravitation.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Isaac_Newton'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    birth: 1867,
    death: 1934,
    nationality: 'Polish/French',
    fields: ['Physics', 'Chemistry'],
    achievements: [
      'Discovery of Polonium and Radium',
      'First woman to win Nobel Prize',
      'Only person to win Nobel in two sciences',
      'Pioneer in radioactivity research'
    ],
    biography: 'Polish-French physicist and chemist who conducted pioneering research on radioactivity.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Marie_Curie'
  },
  {
    id: 'darwin',
    name: 'Charles Darwin',
    birth: 1809,
    death: 1882,
    nationality: 'English',
    fields: ['Biology', 'Natural Science'],
    achievements: [
      'Theory of Evolution',
      'Natural Selection',
      'On the Origin of Species',
      'The Descent of Man'
    ],
    biography: 'English naturalist who proposed the theory of evolution through natural selection.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Charles_Darwin'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    birth: 1856,
    death: 1943,
    nationality: 'Serbian/American',
    fields: ['Electrical Engineering', 'Physics'],
    achievements: [
      'AC electrical system',
      'Induction motor',
      'Tesla coil',
      'Wireless technology'
    ],
    biography: 'Serbian-American inventor and electrical engineer who designed the modern alternating current electricity supply system.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Nikola_Tesla'
  },
  {
    id: 'galileo',
    name: 'Galileo Galilei',
    birth: 1564,
    death: 1642,
    nationality: 'Italian',
    fields: ['Astronomy', 'Physics', 'Mathematics'],
    achievements: [
      'Improved telescope',
      'Discovered Jupiter\'s moons',
      'Supported heliocentrism',
      'Laws of motion'
    ],
    biography: 'Italian astronomer, physicist and engineer who has been called the "father of observational astronomy".',
    wikiUrl: 'https://en.wikipedia.org/wiki/Galileo_Galilei'
  }
];

export const connections: Connection[] = [
  {
    source: 'einstein',
    target: 'newton',
    type: ConnectionType.INSPIRED_BY,
    description: 'Einstein built upon Newton\'s mechanics'
  },
  {
    source: 'einstein',
    target: 'curie',
    type: ConnectionType.CONTEMPORARY,
    description: 'Contemporary scientists who knew each other'
  },
  {
    source: 'tesla',
    target: 'einstein',
    type: ConnectionType.CONTEMPORARY,
    description: 'Lived during the same era'
  },
  {
    source: 'newton',
    target: 'galileo',
    type: ConnectionType.INSPIRED_BY,
    description: 'Newton was influenced by Galileo\'s work'
  },
  {
    source: 'darwin',
    target: 'curie',
    type: ConnectionType.INFLUENCED,
    description: 'Darwin\'s scientific method influenced later scientists'
  }
];