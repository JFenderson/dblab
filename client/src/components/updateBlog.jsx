import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogComponent from './blog';
// import Blog from '../containers/blog';
import * as blogService from '../services/blogs';
import UpdateBlog from '../containers/update';



function Update(props) {
    function handleSubmit(){
        blogService.update(`${props.updateId.id}`,{
            title: props.updateId.title,
            content: props.updateId.content
        })
        .then((data) => {
            console.log(data)
        })
    }

    function handleTitleChange(title){
        this.setState({
            title
        })
    }

    function handleContentChange(content){
        this.setState({
            content
        })
    }

    
    // function handleChange(e){
    //     blogService.update(`${props.updateId.id}`,{
    //         title: req.body.title,
    //         content: req.body.content
    //     })
    //     .then((res)=> console.log(res))
    // }

        return(
            <div>
                <h1>this is the update page</h1>
                <div className="container register-form">
                <input 
                type='text'
                placeholder='Title' 
                className="form-control" 
                // onChange={ this.handleTitleChange } 
                />
                <textarea 
                className="form-control" 
                placeholder='Whats on your mind?' 
                cols='30' row='10'
                // onChange={this.handleContentChange } 
                >
                </textarea>
            <button className="blogBtn" 
            // onClick={this.handleSubmit}
            >Submit</button>
    </div>
            </div>
        );
    }

    
        
export default Update;
