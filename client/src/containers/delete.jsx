import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import BlogComponent from '../components/blog';
import * as blogService from '../services/blogs';
import DeleteBlogList from '../components/deleteBlogList';


class Delete extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogs
        }

        this.deleteBlog = this.deleteBlog.bind(this);
    }

    
    componentDidMount(){
        // blogService.destroy(`${id}`)
        // .then(console.log('delete'));


        blogService.destroy(`http://localhost:3000/api/blogs/${this.props.match.params.id}`, 
        {title: this.state.blog.title,
            content: this.state.blog.content
    })
        .then((response)=> console.log(response))
        .catch(err => {
        console.log('caught it!',err);
        })

        // document.getElementById('homeHyperlink').className = "active";
        // document.getElementById('addHyperLink').className = "";

        this.deleteBlog();

    }

    getBlogs(){
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

    deleteBlog(id){
        this.setState(prevState => ({
            data: prevState.data.filter(el => el != id )
        }));
     }

    // deleteBlog(id){
    //     const newState = this.state;
    //     const index = newState.blogs.findIndex(a => a.id === id);
    //     if(index === -1) return;
    //     newState.blogs.splice(index,1);
    //     this.setState( newState );
    // }

    


    render() {
        console.log('active')
        return(
            <div>
                <DeleteBlog delete= {this.deleteBlog} configDel={this.state.blogs}/>
            </div>
        )
}


}

export default Delete;



/* 
import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogList from '../components/blogList';
import styles from '../styles/allBlogs.scss';

class AllBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }
    
    // componentDidMount() {
    //     fetch('http://localhost:3000/api/blogs')
    //     .then((response)=> response.json())
    //     .then((blogs) => {
    //         this.setState({
    //             blogs
    //         });
    //     })
    //     .catch(err => {
    //     console.log('caught it!',err);
    //     })
       
    //     this.deleteBlog()
    // }

    componentDidMount(){
        document.getElementById('homeHyperlink').className = "active";
        document.getElementById('addHyperLink').className = "";

        this.deleteBlog();
        this.getBlogs();

    }

    getBlogs(){
        fetch('http://localhost:3000/api/blogs')
        .then((response)=> response.json())
        .then((blogs) => {
            this.setState({
                blogs
            });
        })
        .catch(err => {
        console.log('caught it!',err);
        })
    }

    deleteBlog(id){
        fetch('http://localhost:3000/api/blogs/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.blog)
        })
        .then((res) => {
            this.setState({
                res
            })
        .catch(function(err) {
            console.log(err)
        })
        let blogDel = [...this.state.blog];
        if(confirm('are you sure?')){

        }
        blogDel.splice(index,1);
        this.setState({
            blogs
        })
    },

    render() {
        return( 
            <div>
                <BlogList className={styles.blogs} config={ this.state.blogs } />
            </div>
        );
    }

}

export default AllBlogs;
*/