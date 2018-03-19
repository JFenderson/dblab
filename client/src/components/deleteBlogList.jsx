import BlogComponent from './blog';
import DeleteBlog from '../components/deleteBlog';


// blogList passes config to blogComponent

function DeleteBlogList(props){
    const spliceBlog = props.configDel.map(id=>{
        console.log('also actiuve')
        return(
          <DeleteBlog  key={id.id} delete={id} /> 
      )  
      })

    return(
        <div>
            { spliceBlog }
        </div>
    )
}

export default DeleteBlogList;