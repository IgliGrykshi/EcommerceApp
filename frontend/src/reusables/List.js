import React from 'react';
import ListItem from './ListItem';
// import '../App.css';

const List = ({ items }) => (
  <ol className="noBullets">
    {items.map( (item) => <ListItem key={item.id} item={item} />)}
  </ol>
);

export default List;
