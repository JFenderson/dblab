import React from 'react';
import AllBlogs from '../containers/main'
import BlogComponent from './blog';
import * as blogService from '../services/blogs';
// import Delete from '../containers/delete';


// blogList passes config to blogComponent

function BlogList(props){
    const list = props.config.map((blog,index)=>{
        return(
            <div>
                <BlogComponent key={index} config={blog} />
            </div>
            
        );
    })

    return(
        <div>
            { list }
        </div>
    )
}

export default BlogList;