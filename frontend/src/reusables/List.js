import React from 'react';
import ListItem from './ListItem';
// import '../App.css';

const adUrl = () => {
  return "/ads/?r=" + Math.floor(Math.random()*1000);
}

const List = ({ items }) => (
  // Create list of products and show an ad every 20 products.
  // Show 'end of catalogue' when there are no more products to fetch
  <ol className="noBullets">
    {items.map( (item, index) => {
      return <div>
        <ListItem key={item.id} item={item} />
        {(index+1) % 20 == 0 ? <img className="ad" src={adUrl()}/> : ""}
        {index == 499 ? <div className="alignCenter mb10">~ end of catalogue ~</div> : ""}
      </div>
    })}
  </ol>
);

export default List;
