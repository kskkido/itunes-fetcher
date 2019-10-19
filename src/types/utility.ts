export type DeepPartial<O> = {
  [K in keyof O]?: DeepPartial<O[K]>;
};
