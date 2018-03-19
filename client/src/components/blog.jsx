import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Blog, { deleteBlog } from '../containers/blog';
import SingleBlog from './singleBlog';
// import DeleteBlogList from '../components/deleteBlogList';
import * as blogService from '../services/blogs';
// import DeleteBlog from './deleteBlog';

//this component will pass the props up to blogList, which passes to the main page of blog

const blogStyle = {
    border: '2px solid #66FCF1',
    borderRadius: '50px',
    fontSize: '2em',
    textAlign: 'center',
    backgroundColor: '#1F2833',
    color: '#C5C6C7',
    margin: '10px',

}

const titleStyle = {
    color: '#66FCF1'
}

const linkStyle = {
    color: '#45A29E',
    border: '2px solid #45A29E',

}

function BlogComponent(props) {
        return(
            <div style={ blogStyle } key={props.config.id}>
                <h1 style={titleStyle}>{props.config.title}</h1>
                <p>{props.config.content}</p>
                <Link style={linkStyle} to={`/blogs/${props.config.id}`}>Read Me</Link>
                <Link to={`/blogs`}>Back</Link>
                <button onClick={this.props.deleteBlog.bind(this)}>Delete Blog</button>
            </div>
        ) ;
}

export default BlogComponent;