import React from 'react';

const formatDate = (date) => {
  date = new Date(date);
  let now = new Date(Date.now());
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let oneHour = 60*60*1000; // minutes*seconds*milliseconds
  let oneMinute = 60*1000; // seconds*milliseconds
  let oneSecond = 1000; // milliseconds
  let diffDays = Math.round((now.getTime() - date.getTime())/oneDay); //Get the time (milliseconds since January 1, 1970)
  if(diffDays == 0) {
    diffDays = Math.round((now.getTime() - date.getTime())/oneHour);
    if(diffDays == 0){
      diffDays = Math.round((now.getTime() - date.getTime())/oneMinute);
      if(diffDays == 1) return diffDays = diffDays + " minute ago";
      return diffDays == 0 ? "now" : diffDays = diffDays + " minutes ago";
    }
    return diffDays == 1 ? diffDays = diffDays + " hour ago" : diffDays = diffDays + " hours ago";
  }
  else if(diffDays > 6){
    return diffDays = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  }
  else return diffDays == 1 ? diffDays = diffDays + " day ago": diffDays = diffDays + " days ago";
}

const ListItem = ({ item }) => (
  <li>
    <div className="card">
      <span className="otr"></span>
      <div className="card-body">
        <h5 className="card-title">{item.face}</h5>
        <p className="card-text">{item.price}</p>
        <p className="card-text">{formatDate(item.date)}</p>
        {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    {/* Date: {formatDate(item.date)} <br />
    Price: {item.price} <br />
    Face: {item.face} */}
  </li>
);

export default ListItem;
