import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogComponent from '../components/blog';
import styles from '../styles/allBlogs.scss';
import * as blogService from '../services/blogs';


class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        }
        this.deleteBlog = this.deleteBlog.bind(this);
    }
    
    componentDidMount() {
        blogService.one(`${this.props.match.params.id}`)
        .then((res)=> this.setState({
            blog:res
        }))
        .catch(err => {
        console.log('caught it!',err);
        })
        // fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
        // .then((response)=> response.json())
        // .then(obj => {
        //     this.setState({
        //         blog: obj
        //     });
        // })
        // .catch(err => {
        // console.log('caught it!',err);
        // })
        this.deleteBlog
    }

    deleteBlog(){
        blogService.destroy(`${this.props.match.params.id}`)
        .then((res)=> console.log('can delete'))
        .catch(err => {
            console.log('caught the delete!',err);
        })
    }

    render() {
            return(
                <div>
                    <BlogComponent config={this.state.blog} />
                </div>
            )
    }

}

export default Blog;
