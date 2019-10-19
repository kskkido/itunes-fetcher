export const join = (...paths: string[]) => normalize(paths.join(''));

export const normalize = (path: string) => path.replace('//', '/');
