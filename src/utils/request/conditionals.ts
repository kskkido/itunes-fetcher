export const  isSuccessStatus = ({ status }: Response) => (
  200 <= status && status < 300
);

export const  isEmptyStatus = ({ status }: Response) => (
  status === 204 || status === 205
);
