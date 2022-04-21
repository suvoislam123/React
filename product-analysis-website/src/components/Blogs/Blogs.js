import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='w-3/5 mx-auto mt-9'>
            {
                blogs.map(blog=><Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;