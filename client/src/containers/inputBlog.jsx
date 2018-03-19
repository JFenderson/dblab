import React, {Component, Fragment } from 'react';
import { Navigation } from 'react-router';
import { withRouter} from 'react-router-dom';
import * as blogService from '../services/blogs';


class InputBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content:''
        }
        this.onClick = this.onClick.bind(this);
        this.goToRoute = this.goToRoute.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        blogService.insert({title: this.state.blog.title,
                            content: this.state.blog.content})
        .then((data) => {
            console.log(data)
        })
    }
    //WHEN CLICK WILL ADD THE BLOG AND ROUTE TO '/BLOGS'
    goToRoute(event) {
        this.props.history.push("/blogs");
      }

    handleTitleChange(title){
        const blog = Object.assign({}, this.state.blog, { title });
        this.setState({
            blog
        })
    }

    handleContentChange(content){
        const blog = Object.assign({}, this.state.blog, { content });
        this.setState({
            blog
        })
    }

    onClick(event){
        this.goToRoute();
        this.handleSubmit();
    }

    render() {
        return (
            <Fragment>
                <div className="container register-form">
                        <input 
                        type='text'
                        placeholder='Title' 
                        className="form-control" 
                        onChange={(e) => {
                            this.handleTitleChange(e.target.value)
                        }} 
                        />
                        <textarea 
                        className="form-control" 
                        placeholder='Whats on your mind?' 
                        cols='30' row='10'
                        onChange={(e) => {
                            this.handleContentChange(e.target.value)
                        }} ></textarea>
                        <button className="blogBtn" onClick={this.onClick}>Submit</button>
                </div>
            </Fragment>
        );
    }
}


export default InputBlog;
