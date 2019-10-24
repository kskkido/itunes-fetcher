export type GetParams = {
  term: string;
  entity: Entity;
  country?: Country;
};

export type GetPayload<V = any> = {
  resultCount: number;
  results: V[]; // depends on params so define as any;
};

export type Country = (
  'US'
);

export type Entity = (
  'album' |
  'song'
);
