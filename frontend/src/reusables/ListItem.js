import React from 'react';

const formatDate = (date) => {
  date = new Date(date); // save date as a Date type of data
  let now = new Date(Date.now()); // get current time
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let oneHour = 60*60*1000; // minutes*seconds*milliseconds
  let oneMinute = 60*1000; // seconds*milliseconds
  let oneSecond = 1000; // 
   // getTime-Gets the time in milliseconds since January 1, 1970
   // subtract current time from given date and divide by number of milliseconds in one day
   // round up the result to get the exact number of days that have passed
   // if result = 0 repeat the process to find number of hours/minutes that have passed
   // show 'now' if the product has been added less than 1 minute ago
  let diffDays = Math.round((now.getTime() - date.getTime())/oneDay);
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
      <div className="card-body">
        <h5 className="card-title" style={{fontSize: item.size}}>{item.face}</h5>
        <p className="card-text">${item.price/100}</p>
        <p className="card-text">{formatDate(item.date)}</p>
      </div>
    </div>
  </li>
);

export default ListItem;
