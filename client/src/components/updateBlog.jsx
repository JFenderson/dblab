import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogComponent from './blog';
import * as blogService from '../services/blogs';
import UpdateBlog from '../containers/update';
import { Button } from 'react-bootstrap';



function UpdateBlogChange(props) {
   return(
        <div>
            <h1>this is the update page</h1>
            <div className="container register-form">
                <input 
                type='text'
                placeholder='Title' 
                className="form-control" 
                onChange={ props.onTitleChange } 
                />
                <textarea 
                className="form-control" 
                placeholder='Whats on your mind?' 
                cols='30' row='10'
                onChange={props.onContentChange } 
                >
                </textarea>
                <button className="blogBtn" 
                onClick={props.onUpdateSubmit}
                >Submit</button>
                <button bsStyle="primary"><Link to={'/blogs'}>Cancel</Link></button>
            </div>
        </div>
        );
    }

    
        
export default UpdateBlogChange;
