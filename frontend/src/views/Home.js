import React from 'react';
import axios from 'axios';
import List from '../reusables/List';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      pageLoaded: false,
      page: 1,
      sort: "none",
      sortPlaceholder: "none",
      sortHasChanged: false,
    }
  }

  componentWillMount() {
    let pointer = this;
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !pointer.state.loading && pointer.state.data.length < 500) {
          // you're at the bottom of the page
          console.log("pointer.state.data.length", pointer.state.data.length)
          pointer.setState({loading: true, page: pointer.state.page + 1}, () => {
            pointer.getItems(pointer.state.page, pointer.state.sort);
          });
      }
    };
    this.getItems(this.state.page, this.state.sort);
    
  }

  getItems = (page, sortBy) => {
    console.log("limit: ", page, "sort:", sortBy);
    let pointer = this;
    let url = sortBy == "none" ? `/api/products?_page=${page}&_limit=20` : `/api/products?_page=${page}&_limit=20&_sort=${sortBy}`;
    console.log("url: ", url);
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log("kjsadkjad", response.data, response);
      let currentData = pointer.state.data;
      currentData.push(...response.data)
      pointer.setState({data: currentData, loading: false, pageLoaded: true, sortHasChanged: false})
    })
    .catch(function (error) {
      // handle error
      console.log("error: ", error);
    })
    .then(function () {
      // always executed
    });
  }

  handleChange = (event) => {
    this.setState({sortPlaceholder: event.target.value});
  }

  handleClick = () => {
    let pointer = this;
    this.setState({sort: this.state.sortPlaceholder, loading: true, data: [], page: 1}, () => {
      pointer.getItems(pointer.state.page, pointer.state.sort)
    })
  }

  render() {
    return (
      this.state.pageLoaded ?
      <div className="alignCenter">
        <div className="input-group mb10">
          <select className="custom-select"  value={this.state.sortPlaceholder} onChange={(event) => this.handleChange(event)}>
            <option selected value="none">Sort by...</option>
            <option value="price">Price</option>
            <option value="size">Size</option>
            <option value="id">ID</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-success" type="button" onClick={() => this.handleClick()} >Sort</button>
          </div>
        </div>
        <List items={this.state.data} />
        {this.state.data.length < 500 ? this.state.loading ? 
          <div className="spinner-grow mb10" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        :
        ""
        :
        null
        }
      </div>
      :
      <div className="alignCenter">
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

