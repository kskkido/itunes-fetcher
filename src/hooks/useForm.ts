import { useContext } from 'react';
import { FormContext, FormContextRenderProps } from 'containers/Misc/Contexts/FormContext';

type UseFormPayload = (
  FormContextRenderProps
);

const useForm = (): UseFormPayload => (
  useContext(FormContext)
);

export default useForm;
