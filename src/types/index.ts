export interface Intellectual {
  id: string;
  name: string;
  birth: number;
  death?: number;
  nationality: string;
  fields: string[];
  achievements: string[];
  biography: string;
  imageUrl?: string;
  wikiUrl?: string;
}

export interface Connection {
  source: string; // ID of source intellectual
  target: string; // ID of target intellectual
  type: ConnectionType;
  description?: string;
}

export const ConnectionType = {
  INFLUENCED: 'influenced',
  COLLABORATED: 'collaborated',
  STUDIED_UNDER: 'studied_under',
  CONTEMPORARY: 'contemporary',
  INSPIRED_BY: 'inspired_by',
} as const;

export type ConnectionType = typeof ConnectionType[keyof typeof ConnectionType];

export interface GraphNode extends Intellectual {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink extends Omit<Connection, 'source' | 'target'> {
  source: GraphNode | string;
  target: GraphNode | string;
}