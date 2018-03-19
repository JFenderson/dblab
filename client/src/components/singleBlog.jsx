import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogComponent from './blog';
// import Blog from '../containers/blog';
import * as blogService from '../services/blogs';

function SingleBlog(props) {
        return(
        <div>
            <div key={props.match.params.id}>
                <h1>{props.match.params.id}</h1>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Link to={`/blogs`}>Back</Link>
            </div>
        </div>
        );
    }

    
        
export default SingleBlog;
