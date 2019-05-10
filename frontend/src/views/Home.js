import React from 'react';
import axios from 'axios';
import List from '../reusables/List';
import Loader from '../reusables/Loader';
import Select from '../reusables/Select';

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
    // Fetch new items when page reaches bottom
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !pointer.state.loading && pointer.state.data.length < 500) {
          // you're at the bottom of the page
          pointer.setState({loading: true, page: pointer.state.page + 1}, () => {
            pointer.getItems(pointer.state.page, pointer.state.sort);
          });
      }
    };
    // Fetch first batch of products
    this.getItems(this.state.page, this.state.sort);
    
  }

  getItems = (page, sortBy) => {
    let pointer = this;
    // Set url based on fetch requirements from user
    let url = sortBy == "none" ? `/api/products?_page=${page}&_limit=20` : `/api/products?_page=${page}&_limit=20&_sort=${sortBy}`;
    axios.get(url)
    .then((response) => {
      // handle success
      console.log("kjsadkjad", response.data, response);
      let currentData = pointer.state.data;
      currentData.push(...response.data)
      pointer.setState({data: currentData, loading: false, pageLoaded: true, sortHasChanged: false})
    })
    .catch((error) => {
      // handle error
      console.log("error: ", error);
    })
  }

  handleChange = (event) => {
    // Set Select placeholder value
    this.setState({sortPlaceholder: event.target.value});
  }

  handleClick = () => {
    let pointer = this;
    // Fetch items based on the users sort choice
    this.setState({sort: this.state.sortPlaceholder, loading: true, data: [], page: 1}, () => {
      pointer.getItems(pointer.state.page, pointer.state.sort)
    })
  }

  render() {
    return (
      // Add loader if first batch of products hasnt been fetched yet
      this.state.pageLoaded ?
      <div className="alignCenter">
        <Select 
          value={this.state.sortPlaceholder}
          handleChange={(event) => this.handleChange(event)}
          handleClick={() =>this.handleClick()}
        />
        <List items={this.state.data} />
        {this.state.data.length < 500 ? this.state.loading ? 
        // Add loader when fetching new products by scroll
          <Loader />
        :
        ""
        :
        null
        }
      </div>
      :
      <div className="alignCenter">
        <Loader />
      </div>
    );
  }
}

