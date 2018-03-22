import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogList from '../components/blogList';
import styles from '../styles/allBlogs.scss';
import * as blogService from '../services/blogs';

class AllBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
      
    }
    
    componentDidMount() {
        blogService.all()
        .then((blogs) => {
            this.setState({
                blogs
            });
        })
        .catch(err => {
        console.log('caught it!',err);
        })

    }

    render() {
        return( 
            <div>
                <BlogList className={styles.blogs} config={ this.state.blogs } />
            </div>
        );
    }

}

export default AllBlogs;