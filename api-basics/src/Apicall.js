import React, { Component } from 'react';
import axios from 'axios';


// https://www.reddit.com/r/space.json
class Apicall extends Component {
  //copoment lifecyle
  componentWillMount(){
    this.getReddit();
  }

  // defind getReddit
  // res.data will return an object 
  getReddit(){
    // axios is to use to make a request
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
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

// looping the map
// post.id and post.title is from the name of the Json file
// details can be seeing by using json paring editor

  render(){
    return(
      <div>
       <h1>{`/r/${this.state.subr}`}</h1>
       <ul>
         {this.state.posts.map(post =>
           <li key = {post.id}>{post.title} </li>

         )}
       </ul>
      </div>
    );
  }
}

export default Apicall;
