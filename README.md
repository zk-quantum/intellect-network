# Intellect Network

An interactive visualization of connections between great intellectuals throughout history.

## Features

- **Interactive Network Graph**: Visualize relationships between historical intellectuals using D3.js
- **Detailed Information Cards**: Click on any intellectual to see their biography, achievements, and more
- **Responsive Design**: Works on desktop and mobile devices
- **Zoom and Pan**: Navigate the network graph with mouse or touch controls
- **Color-Coded Fields**: Different scientific fields are represented by different colors

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd intellect-network
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
intellect-network/
├── src/
│   ├── components/
│   │   ├── NetworkGraph.tsx    # D3.js network visualization
│   │   └── IntellectualCard.tsx # Information card component
│   ├── data/
│   │   └── intellectuals.ts    # Sample data
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── styles/
│   ├── App.tsx                # Main application component
│   ├── App.css                # Application styles
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Adding New Intellectuals

To add new intellectuals to the network, edit the `src/data/intellectuals.ts` file:

```typescript
export const intellectuals: Intellectual[] = [
  {
    id: 'unique-id',
    name: 'Full Name',
    birth: 1900,
    death: 2000, // optional
    nationality: 'Country',
    fields: ['Field1', 'Field2'],
    achievements: ['Achievement 1', 'Achievement 2'],
    biography: 'Short biography...',
    wikiUrl: 'https://en.wikipedia.org/wiki/...' // optional
  }
];
```

## Connection Types

The following connection types are supported:
- `INFLUENCED`: One intellectual influenced another
- `COLLABORATED`: They worked together
- `STUDIED_UNDER`: Student-teacher relationship
- `CONTEMPORARY`: Lived during the same period
- `INSPIRED_BY`: One was inspired by another's work

## Technologies Used

- **React**: UI framework
- **TypeScript**: Type safety
- **D3.js**: Network visualization
- **Vite**: Build tool and dev server

## Future Enhancements

- Add more intellectuals from different fields (artists, writers, philosophers)
- Implement data loading from external sources
- Add search and filter functionality
- Include time period visualization
- Add more detailed relationship information
- Implement data persistence

## License

This project is open source and available under the MIT License.
