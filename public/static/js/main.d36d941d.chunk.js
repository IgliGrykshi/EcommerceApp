(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),c=(n(22),n(23),n(10)),l=n(11),u=n(14),d=n(12),s=n(15),g=n(13),m=n.n(g),h=function(e){var t=e.item;return o.a.createElement("li",null,"Date: ",function(e){e=new Date(e);var t=new Date(Date.now()),n=Math.round((t.getTime()-e.getTime())/864e5);return 0==n?0==(n=Math.round((t.getTime()-e.getTime())/36e5))?1==(n=Math.round((t.getTime()-e.getTime())/6e4))?n+" minute ago":0==n?"now":n+=" minutes ago":n+=1==n?" hour ago":" hours ago":n>6?e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear():n+=1==n?" day ago":" days ago"}(t.date)," ",o.a.createElement("br",null),"Price: ",t.price," ",o.a.createElement("br",null),"Face: ",t.face)},w=function(e){var t=e.items;return o.a.createElement("ul",null,t.map(function(e){return o.a.createElement(h,{key:e.id,item:e})}))},f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={data:[{price:150,date:123123,face:"$@#(&$"}],pageLoaded:!1},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){window.onscroll=function(e){console.log(window.innerHeight,"||",window.scrollY,"||",document.body.offsetHeight),window.innerHeight+window.scrollY==document.body.offsetHeight+100&&console.log("otr laleeeee")};var e=this;m.a.get("/api/products?_page=10&_limit=15").then(function(t){console.log("kjsadkjad",t.data),e.setState({data:t.data,pageLoaded:!0})}).catch(function(e){console.log("error: ",e)}).then(function(){})}},{key:"render",value:function(){return this.state.pageLoaded?o.a.createElement("div",null,o.a.createElement(w,{items:this.state.data})):o.a.createElement("div",null,"Testing testing")}}]),t}(o.a.Component);var p=function(){return o.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.d36d941d.chunk.js.map