import React, { Component } from 'react';
import axios from 'axios';


// https://www.reddit.com/r/space.json
class Apicall extends Component {
  //copoment lifecyle
  componentWillMount(){
    this.getReddit();
  }

  // defind getReddit
  getReddit(){
    // axios is to use to make a request
    axios.get('https://www.reddit.com/r/${this.state.subr}.json')
    .then(res => {
      //catch
      // map, so we can iterative it
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });

  }

  // constructor
  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr: 'space'
    };

    this.getReddit = this.getReddit.bind(this);
  }

  render(){
    return(
      <div>
        I am from Api calls.
      </div>
    );
  }
}

export default Apicall;
