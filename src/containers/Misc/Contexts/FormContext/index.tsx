import React, { useState, useCallback, useEffect } from 'react';

export type FormContextProviderProps = {
  children: React.ReactNode;
  initialValues?: FormContextRenderProps['values'];
  onChange?: (values: FormValues) => void;
};

export type FormContextRenderProps = {
  values: FormValues;
  setValue: (key: string, value: any) => void;
};

type FormValues = (
  Record<string, any>
);

const FormContext = React.createContext<FormContextRenderProps>({
  values: {},
  setValue: () => null,
});

const FormContextProvider: React.SFC<FormContextProviderProps> = ({
  children,
  initialValues = {},
  onChange = () => null,
}) => {
  const [values, setValue] = useState(initialValues);

  useEffect(
    () => {
      onChange(values);
    },
    [values]
  );

  return (
    <FormContext.Provider
      value={{
        values,
        setValue: useCallback(
          (key, value) => setValue({
            ...values,
            [key]: value,
          }),
          [values]
        ),
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export {
  FormContext,
  FormContextProvider,
};

