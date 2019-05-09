import React from 'react';
import ListItem from './ListItem';

const List = ({ items }) => (
  <ul>
    {items.map( (item) => <ListItem key={item.id} item={item} />)}
  </ul>
);

export default List;
