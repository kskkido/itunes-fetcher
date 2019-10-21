import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

type SearchProps = {
  size: number;
};

const Search: React.SFC<SearchProps> = ({
  size,
}) => (
  <Icon
    name="search"
    size={size}
  />
);

export default Search;
