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
      limit: 0,
      sort: "none",
      sortPlaceholder: "none",
      sortHasChanged: false,
    }
  }

  componentWillMount() {

    let pointer = this;
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !pointer.state.loading) {
          // you're at the bottom of the page
          pointer.setState({loading: true, limit: pointer.state.limit + 20}, () => {
            pointer.getItems(pointer.state.limit, pointer.state.sort);
          });
      }
    };
    this.getItems(this.state.limit, this.state.sort);
    
  }

  getItems = (limit, sortBy) => {
    console.log("limit: ", limit, "sort:", sortBy);
    let pointer = this;
    // pointer.state.sortHasChanged ? pointer.setState({data: [], limit: 0}) : sortBy = sortBy;
    let url = sortBy == "none" ? `/api/products?_page=${limit}&_limit=20` : `/api/products?_page=${limit}&_limit=20&_sort=${sortBy}`;
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
    // pointer.state.sortHasChanged ? pointer.setState({data: [], limit: 0}) : sortBy = sortBy;
    this.setState({sort: this.state.sortPlaceholder, loading: true, data: [], limit: 0}, () => {
      pointer.getItems(pointer.state.limit, pointer.state.sort)
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
        {this.state.loading ? 
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        :
        ""
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

