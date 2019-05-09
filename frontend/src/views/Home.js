import React from 'react';
import axios from 'axios';
import List from '../reusables/List';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{price: 150, date: 123123, face: "$@#(&$"}],
      loading: false,

    }
  }

  componentWillMount() {

    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.loading) {
          // you're at the bottom of the page
          console.log("otr laleeeee");
      }
    };

    let pointer = this;
    axios.get('/api/products?_page=10&_limit=15')
    .then(function (response) {
      // handle success
      console.log("kjsadkjad", response.data);
      pointer.setState({data: response.data, pageLoaded: true})
    })
    .catch(function (error) {
      // handle error
      console.log("error: ", error);
    })
    .then(function () {
      // always executed
    });
    
  }

  render() {
    return (
      this.state.pageLoaded ? 
      <div>
        <List items={this.state.data} />
      </div>
      :
      <div>
        Testing testing
      </div>
    );
  }
}

