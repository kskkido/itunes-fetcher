import { partial } from 'ramda';
import useForm from './useForm';

type UseFieldPayload<V> = {
  value: V;
  setValue: (value: V) => void;
};

const useField = <V = any>(name: string): UseFieldPayload<V> => {
  const { values, setValue } = useForm();

  return {
    value: values[name],
    setValue: partial(setValue, [name]),
  };
};

export default useField;
