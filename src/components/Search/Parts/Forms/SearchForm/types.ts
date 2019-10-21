import * as textFieldTypes from 'components/Shared/Fields/TextField/types';

export enum FieldNames {
  search = 'search',
}

export type FieldValues = {
  [FieldNames.search]: textFieldTypes.FieldValue;
};
