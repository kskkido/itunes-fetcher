import { useContext } from 'react';
import { FormContext, FormContextRenderProps, FormValues } from 'containers/Misc/Contexts/FormContext';

type UseFormPayload<V extends FormValues = FormValues> = (
  FormContextRenderProps<V>
);

const useForm = <V extends FormValues = FormValues>(): UseFormPayload<V> => (
  useContext(FormContext)
);

export default useForm;
