import React, {Component, Fragment } from 'react';
import { Navigation } from 'react-router';
import { withRouter} from 'react-router-dom';
import * as blogService from '../services/blogs';
import Update from '../components/updateBlog';
import BlogComponent from '../components/blog';


class UpdateBlog extends Component {
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

    componentDidMount(){
        blogService.update(`${this.props.match.params.id}`,{
            title: this.state.blog.title,
            content: this.state.blog.content
        })
        .then((data) => {
            console.log(data)
        })
        console.log(props)
    }

    handleSubmit(event) {
        console.log(props.match.params.id)
        blogService.update(`${this.props.match.params.id}`,{
            title: this.state.blog.title,
            content: this.state.blog.content
        })
        .then((data) => {
            console.log(data)
        })
    }
    //WHEN CLICK WILL UPDATE THE BLOG AND ROUTE TO '/BLOGS'
    goToRoute(event) {
        this.props.history.push("/blogs");
      }

    handleTitleChange(title){
        this.setState({
            blog
        })
    }

    handleContentChange(content){
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
            <div>
                <Update update = {this.state.blog} />
            </div>
        );
    }
}


export default UpdateBlog;
