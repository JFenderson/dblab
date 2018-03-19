import React from 'react';
import AllBlogs from '../containers/main'
import BlogComponent from './blog';
import * as blogService from '../services/blogs';
// import Delete from '../containers/delete';


// blogList passes config to blogComponent

function BlogList(props){

    const list = props.config.map((blog)=>{
        let truncatedContent = blog.content.substring(0, 250).trim() + '...';

        const blogTruncated = Object.assign({}, blog, { content: truncatedContent })
        return(
            <div>
                <BlogComponent key={blog.id} config={blog}  />
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