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

export enum ConnectionType {
  INFLUENCED = 'influenced',
  COLLABORATED = 'collaborated',
  STUDIED_UNDER = 'studied_under',
  CONTEMPORARY = 'contemporary',
  INSPIRED_BY = 'inspired_by',
}

export interface GraphNode extends Intellectual {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink extends Connection {
  source: GraphNode | string;
  target: GraphNode | string;
}