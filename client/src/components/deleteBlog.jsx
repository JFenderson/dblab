import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogComponent from './blog';
import Blog from '../containers/blog';

import * as blogService from '../services/blogs';
// import DeleteBlogList from '../components/deleteBlogList';



function DeleteBlog(props) {
    function deleteHandler(e){
    blogService.destroy(`${props.currentId}`)
    .then((res)=> console.log('can delete'))
    .catch(err => {
        console.log(err);
    })
}
    
      return(
        <button  onClick={ deleteHandler }> Delete this blog </button> 
    )  
    }

 

export default DeleteBlog;