import React, {Component, Fragment } from 'react';
import { Navigation } from 'react-router';
import { withRouter} from 'react-router-dom';
import * as blogService from '../services/blogs';
import UpdateBlogChange from '../components/updateBlog';
import BlogComponent from '../components/blog';


class UpdateBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content:''
        };
        
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.goToRoute = this.goToRoute.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleSubmit(event) {
        blogService.update(`${this.props.match.params.id}`,{
            title: this.state.title,
            content: this.state.content
        })
        .then((data) => {
            console.log(data)
        })
    }
    //WHEN CLICK WILL UPDATE THE BLOG AND ROUTE TO '/BLOGS'
    goToRoute(event) {
        this.props.history.push("/blogs");
      }

    handleContentChange(e){
        this.setState({
            content: e.target.value
        });
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        });
    }

    onClick(event){
        this.goToRoute();
        this.handleSubmit();
    }



    render() {
        return (
            <div>
                <UpdateBlogChange 
                    onTitleChange={this.handleTitleChange} 
                    onContentChange={this.handleContentChange} 
                    onUpdateSubmit={this.onClick} 
                />
        </div>
        );
    }
}


export default UpdateBlog;
