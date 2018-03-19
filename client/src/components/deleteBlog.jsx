import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogComponent from './blog';
import Blog from '../containers/blog';
import Delete from '../containers/delete';
// import DeleteBlogList from '../components/deleteBlogList';

function DeleteBlog(props) {
    console.log(props)
      return(
        <button  onClick={this.handleDelete.bind(this, props.config.id)}> Delete this blog</button> 
    )  
    }

export default DeleteBlog;